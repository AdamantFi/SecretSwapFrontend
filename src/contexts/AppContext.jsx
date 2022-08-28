import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { getStats } from "../utils/apr";

export async function getPriceData() {
  const statsData = await axios({
    method: 'get',
    url: `${REACT_APP_DATA_ENDPOINT}/sefi_comment.json`,
  });
  return statsData.data;
}

const roundSefiPrice = (price, decimals) => {
    return Math.round(price * 10**decimals) / 10**decimals
}

const AppContext = createContext()

export const AppProvider = ({children}) => {

    const [price, setPrice] = useState({
        sefi: "N/A",
        scrt: "N/A"
    })

    const [stat, setStat] = useState({
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
    })

    useEffect(() => {
        const asyncWrapper = async () => {
            const prices = await getPriceData();
            setPrice({sefi: roundSefiPrice(prices["SEFI/USDT"]["price"], 4),
                    scrt: roundSefiPrice(prices["SCRT/USD"]["price"], 3)})
            const stats = await getStats()
            setStat(stats)
        }
        asyncWrapper().then(() => { });
    }, [])

    return <AppContext.Provider value={{
        price,
        stat,
    }}>
        {children}
    </AppContext.Provider>
}

export default AppContext