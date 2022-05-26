import React from 'react'

function GeneralFaq() {

  return (
      <div className="tabs">
        <div className="tab">
            <input type="checkbox" id='general-check1' className='faq-input'></input>
            <label className="tab-label first-tab" htmlFor='general-check1'>What is Secret Swap?</label>
            <div className="tab-content">
                Secret Swap is a protocol for creating liquidity and trading SNIP-20 tokens on Secret Network. Leveraging secret contracts, Secret Swap protects users against malicious front-running and privacy threats, provides access to cross-chain liquidity, and reduces fees relative to Ethereum.
            </div>
      </div>
      <div className="tab">
        <input type="checkbox" id='general-check2' className='faq-input'></input>
        <label className="tab-label" htmlFor='general-check2'>What is Front-running?</label>
        <div className="tab-content">
          Front-running is an arbitrage strategy to make profit at someone else’s expense based on an information advantage. Front-running issue is not limited to DeFi, however the scale of the problem is amplified given the public nature of blockchains. Miners and arbitrage bots can see an order on the mempool before the order makes its way into the ledger and insert their orders with higher gas fees to be processed first. This means that the miner or the arbitrage bot can profit at the expense of a regular user. Furthermore, this arbitrage opportunity increases the gas fees of the underlying network, hurting users even more. Front-running problem on Ethereum DeFi costs users ~$1bn per year and millions of dollars in lost gas fees.
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" id='general-check3' className='faq-input'></input>
        <label className="tab-label" htmlFor='general-check3'>How does Secret Swap achieve front-running resistance?</label>
        <div className="tab-content">
          SecretSwap is a protocol to swap secret contract based tokens (SNIP-20s) on Secret Network. Given the encrypted nature of SNIP-20s. Given the encrypted nature of secret contracts, inputs to a transaction/contract are encrypted while they are on the mempool and cannot be frontrun by any adversary. This ensure SecretSwap protects its users and their money from front-running attacks.
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" id='general-check4' className='faq-input'></input>
        <label className="tab-label" htmlFor='general-check4'>How do I use Secret Swap?</label>
        <div className="tab-content">
          First, you’ll need a Keplr wallet and some $SCRT. Once completed, head over to SecretSwap to start using the protocol to provide liquidity or swap tokens. Since SecretSwap is built on Secret Network, each transaction and interaction costs $SCRT (the native coin of the network). This is called the “gas fee” and it’s paid to network validators to keep the network running.
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" id='general-check5' className='faq-input'></input>
        <label className="tab-label" htmlFor='general-check5'>How does Secret Swap work?</label>
        <div className="tab-content">
          Secret Swap is an automated market maker (AMM) liquidity protocol. There is no orderbook, no centralized party, and no central facilitator of trade. Using Secret Contracts, the mempool of potential Secret Swap transactions are kept entirely encrypted - protecting users from front-running attacks and providing an increased level of privacy compared to traditional AMMs.<br /><br />

          Each pool within Secret Swap is defined by a secret contract that includes a few functions to enable swapping tokens, adding liquidity and more. At its core each pool uses the function x*y=k to maintain a curve along which trades can happen.<br /><br />

          The pools keep track of reserves (liquidity) and updates those reserves every single time someone trades. Because the reserves are automatically rebalanced, a Secret Swap pool can always be used to buy or sell a token without requiring a counterparty on the other side of your trade.<br /><br />

          Note: Given the requirement to publicly update pool reserves to determine the price, an observer can see a consolidated view of changes (swaps, provide / remove liquidity) in a given block. As a result, if there’s a single transaction with the pool in a given block, it is not possible to have privacy on that transaction. With more transactions per pool in a given block, SecretSwap provides additional privacy to users.<br /><br />

          For a more in depth description, check out how SecretSwap works in this blog post outlining the theory behind an AMM using secret contracts.
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" id='general-check6' className='faq-input'></input>
        <label className="tab-label" htmlFor='general-check6'>How are prices determined?</label>
        <div className="tab-content">
          Prices are determined by the amount of each secret token in a pool. The secret contract maintains a constant using the following function: x*y=k.<br /><br />

          In this case x = secret_token_0, y = secret_token_1, k = constant. For each trade, a certain amount of secret tokens are removed from the pool in exchange for adding an amount of the other secret token. To maintain k, the balances held by the secret contract are adjusted during the execution of the trade, therefore changing the price.
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" id='general-check7' className='faq-input'></input>
        <label className="tab-label" htmlFor='general-check7'>I saw a token was trading at X value, but when I traded on Secret Swap I got a much lower value?</label>
        <div className="tab-content">
          There are 2 fees involved with a SecretSwap transaction: SecretSwap fees and Secret Network fees. SecretSwap fees are 0.3% of each swap deducted across the pairs. The fees are put back in the liquidity pool providing income for LPs of that pair. The fees can be changed in the future with decentralized governance enabled by $SEFI.<br /><br />

          Secret Network requires $SCRT as gas to execute each transaction. Depending on the market price of $SCRT, transaction costs can increase or decrease.
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" id='general-check8' className='faq-input'></input>
        <label className="tab-label last-tab" htmlFor='general-check8'>Why does my transaction cost X?</label>
        <div className="tab-content">
          Secret Network requires $SCRT as gas to execute each transaction. Depending on the market price of $SCRT transaction costs can increase or decrease.
        </div>
      </div>
    </div>
  )
}

export default GeneralFaq