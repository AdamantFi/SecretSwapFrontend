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
  const fetcherConfigs = await axios({
        method: 'get',
        url: `${REACT_APP_DATA_ENDPOINT}/config_mainnet.json`,
      });

      
  return fetcherConfigs.data;
};

const calculateApr = (rewards) => {

  let apr = 0;

  if (rewards?.infinityPoolContract) {
    const numStaked = rewards?.infinityPoolContract.total_locked
    const sefiPrice = rewards?.infinityPoolContract.inc_token.price
    const alterPrice = rewards?.alterTokenContract.price

    try {
      apr = (365 * 103561.64) / (numStaked / 1000000)
      if (alterPrice) {
          apr += ((100000 * 2) * alterPrice) / ((numStaked / 1000000) * sefiPrice)
        }
    } catch (err) {
      console.log(err);
      apr = 0
    }
  }

  return apr
};

export const getResults = async () => {
  
  const rewards = await getRewardsInfo()

  return calculateApr(rewards)
}

export const getStats = async () => {
    const getApr = await getResults();
    const sefiApr = parseFloat(getApr);

    const time = new Date().getTime();

    const statsData = await axios({
        method: 'get',
        url: `${process.env.REACT_APP_STATS_ENDPOINT}/sefi.json?time=` + time
    });

    const fees = parseFloat(statsData.data.fees);
    const liquidity = parseFloat(statsData.data.liquidity);
    const pairs = parseFloat(statsData.data.pairs);
    const price = parseFloat(statsData.data.price);
    const users = parseFloat(statsData.data.users);
    const volume = parseFloat(statsData.data.volume);

    const stats = {
        sefiApr:"",
        dailyFees: "",
        liquidity: "",
        pairs: "",
        sefiPrice: "",
        users: "",
        dailyVolume: ""
    }

    stats.sefiApr = numeral(sefiApr).format(getPercentageFormat(sefiApr / 100)).toString()
        .toUpperCase();
    stats.dailyFees = numeral(fees).format(getCurrencyFormat(fees)).toString().toUpperCase();
    stats.liquidity = numeral(liquidity).format(getCurrencyFormat(liquidity)).toString()
        .toUpperCase();
    stats.pairs = numeral(pairs).format(getIntegerFormat(pairs)).toString().toUpperCase();
    stats.sefiPrice = numeral(price).format(getCurrencyFormat(price)).toString().toUpperCase();
    stats.users = numeral(users).format(getIntegerFormat(users)).toString().toUpperCase();
    stats.dailyVolume = numeral(volume).format(getCurrencyFormat(volume)).toString().toUpperCase();
    
    return stats;
}