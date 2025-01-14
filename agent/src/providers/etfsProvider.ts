import { Provider, IAgentRuntime, Memory, State } from "@elizaos/core";
import axios from 'axios'; // Note: You'll need to ensure axios is installed
import { ScrapperResponse } from "../interfaces/scrapper";

const etfsProvider: Provider = {
  get: async (runtime: IAgentRuntime, message: Memory, state?: State) => {
    try {
      // Fetch current BTC price from CoinGecko API
      const { data }: { data: ScrapperResponse } = await axios.get('https://etfscrapper-349714367197.us-central1.run.app/api/coinglass');

    //   console.log(data)
      return  `
        Please use this data only when the user explicitly asks for it, and always specify if you are referring to BTC or USD prices. Here's the available information:

        **ETF Overview**
        ${data.etfOverview.map(
        (data) => `Ticker: ${data.ticker}, ETF Name: ${data.etfName}, Volume: ${data.Volume}, Market Cap: ${data.marketCap}`
        ).join('\n')}

        **Inflows Sections**
        When the user asks about prices, always provide both the price in **USD** and **BTC (₿)**. Clearly specify the currency being used.
        - If the user asks about the price **today or yesterday**, respond with the specific date and the price for that day, e.g., "Today is 15/02/24, and the price is..." or "Yesterday, 14/02/24, the price was...".

        **BTC Inflows Data**
        Each time you refer to the price, use BTC (₿).
        If the price is unavailable, respond with: "No reports."

        ${data.dataBTC.map(
        (inflow) => `Date: ${inflow.time}, Total: ${inflow.Total}, Breakdown:
            GBTC: ${inflow.GBTC}, IBIT: ${inflow.IBIT}, FBTC: ${inflow.FBTC}, ARKB: ${inflow.ARKB}, BITB: ${inflow.BITB},
            BTCO: ${inflow.BTCO}, HODL: ${inflow.HODL}, BRRR: ${inflow.BRRR}, EZBC: ${inflow.EZBC}, BCTW: ${inflow.BCTW}, BTC: ${inflow.BTC}`
        ).join('\n')}


        **USD Inflows Data**
        Each time you refer to the price, use USD ($).
        If the price is unavailable, respond with: "No reports."

        ${data.dataUSD.map(
        (inflow) => `Date: ${inflow.time}, Total: ${inflow.Total}, Breakdown:
            GBTC: ${inflow.GBTC}, IBIT: ${inflow.IBIT}, FBTC: ${inflow.FBTC}, ARKB: ${inflow.ARKB}, BITB: ${inflow.BITB},
            BTCO: ${inflow.BTCO}, HODL: ${inflow.HODL}, BRRR: ${inflow.BRRR}, EZBC: ${inflow.EZBC}, BCTW: ${inflow.BCTW}, BTC: ${inflow.BTC}`
        ).join('\n')}
    `;


    } catch (error) {
      console.error("etfs provider error:", error);
      return "Unable to fetch etfs at the moment";
    }
  }
};

export { etfsProvider };