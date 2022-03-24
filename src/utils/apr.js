import * as agent from 'superagent';
import { BigNumber } from 'bignumber.js';
import axios from 'axios';
import numeral from 'numeral'

const getIntegerFormat = (number) => {
    let result;
    switch (number.toFixed(0).toString().length) {
        case 4:
        case 7:
        case 10:
        result = '(0.00a)';
        break;
        case 5:
        case 8:
        case 11:
        result = '(0.0a)';
        break;
        case 1:
        case 2:
        case 3:
        case 6:
        case 9:
        default:
        result = '(0a)';
    }
    return result;
}

const getCurrencyFormat = (number) => {
    let result;
    switch (number.toFixed(0).toString().length) {
        case 1:
        case 2:
        case 4:
        case 7:
        case 10:
        result = '($0.00a)';
        break;
        case 5:
        case 8:
        case 11:
        result = '($0.0a)';
        break;
        case 3:
        case 6:
        case 9:
        default:
        result = '($0a)';
    }
    return result;
}

const getPercentageFormat = (number) => {
    let result;
    switch (number.toFixed(0).toString().length) {
        default:
        result = '(0,000)%';
    }
    return result;
}

const getRewardsInfo = async (params) => {
  const dateTime = new Date().getTime();
  const url = 'https://api-bridge-mainnet.azurewebsites.net/rewards?time=' + dateTime;
  const res = await agent.get(url, params);
  const content = res.body.pools;
  return { ...res.body, content };
};

const divDecimals = (amount, decimals) => {
  if (decimals === 0) {
    return amount;
  }

  const decimalsMul = `10${new Array(decimals).join('0')}`;
  const amountStr = new BigNumber(amount).dividedBy(decimalsMul);

  return amountStr.toFixed();
};

const calculateApr = (token, price) => {
  // deadline - current time, 6 seconds per block
  const timeRemaining = (token.deadline - 128730) * 6.22 + 1632380505 - Math.round(Date.now() / 1000);
  const pending = divDecimals(token.remainingLockedRewards, token.rewardsDecimals) * price;
  const locked = token.totalLockedRewards;
  return (((pending * 100) / locked) * (3.154e7 / timeRemaining)).toFixed(0);
};

export const getResults = async () => {
  const rewards = await getRewardsInfo({ page: 0, size: 1000 })
  const filtered = rewards.content.filter(t => t.pool_address === "secret1knars62aly28xkqxe8xeqtf7ans8hqxgm6a05k" || t.inc_token.symbol === "LP-sSCRT-SEFI")
  const results = []
  filtered.forEach(token => {
      const salted = {
        totalLockedRewards: divDecimals(
          token.total_locked * token.inc_token.price,
          token.inc_token.decimals,
        ),
        rewardsDecimals: token.rewards_token.decimals,
        price: token.inc_token.price,
        rewardsPrice: token.rewards_token.price,
        remainingLockedRewards: token.pending_rewards,
        deadline: token.deadline,
      }
      const apr = calculateApr(salted, salted.rewardsPrice)
      if(token.deprecated_by) {
      } else {
        results.push({ symbol: token.inc_token.symbol, apr})
      }
  })

  return results
}

export const getStats = async () => {
    const getApr = await getResults();
    const lpSefisScrtApr = parseFloat(getApr[0].apr);
    const lpSefisScrtApy = Number((Math.pow(1 + lpSefisScrtApr.toFixed(0) / 100 / 365, 365) - 1) * 100);
    const sefiApr = parseFloat(getApr[1].apr);
    const sefiApy = Number((Math.pow(1 + sefiApr.toFixed(0) / 100 / 365, 365) - 1) * 100);
    const time = new Date().getTime();

    const statsData = await axios({
        method: 'get',
        url: 'https://storage.googleapis.com/astronaut/sefi.json?time=' + time
    });

    const fees = parseFloat(statsData.data.fees);
    const liquidity = parseFloat(statsData.data.liquidity);
    const pairs = parseFloat(statsData.data.pairs);
    const price = parseFloat(statsData.data.price);
    const users = parseFloat(statsData.data.users);
    const volume = parseFloat(statsData.data.volume);

    const stats = {
        sefiApr:"",
        sefiApy:"",
        lpSefisScrtApr: "",
        lpSefisScrtApy: "",
        dailyFees: "",
        liquidity: "",
        pairs: "",
        sefiPrice: "",
        users: "",
        dailyVolume: ""
    }

    stats.sefiApr = numeral(sefiApr / 100).format(getPercentageFormat(sefiApr / 100)).toString()
        .toUpperCase();
    stats.sefiApy = numeral(sefiApy / 100).format(getPercentageFormat(sefiApy / 100)).toString()
        .toUpperCase();
    stats.lpSefisScrtApr = numeral(lpSefisScrtApr / 100).format(getPercentageFormat(lpSefisScrtApr /
        100)).toString().toUpperCase();
    stats.lpSefisScrtApy = numeral(lpSefisScrtApy / 100).format(getPercentageFormat(lpSefisScrtApy /
        100)).toString().toUpperCase();
    stats.dailyFees = numeral(fees).format(getCurrencyFormat(fees)).toString().toUpperCase();
    stats.liquidity = numeral(liquidity).format(getCurrencyFormat(liquidity)).toString()
        .toUpperCase();
    stats.pairs = numeral(pairs).format(getIntegerFormat(pairs)).toString().toUpperCase();
    stats.sefiPrice = numeral(price).format(getCurrencyFormat(price)).toString().toUpperCase();
    stats.users = numeral(users).format(getIntegerFormat(users)).toString().toUpperCase();
    stats.dailyVolume = numeral(volume).format(getCurrencyFormat(volume)).toString().toUpperCase();
    
    return stats;
}