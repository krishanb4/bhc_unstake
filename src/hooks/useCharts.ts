import { use, useEffect, useState } from "react";
import axios from "axios";
import useAxios from "./useAxios";

type ChartData = {
  tokenData: number;
  tokenBurnData: number;
  tokenBurnDataAuto: number;
  tokenBurnDataBSC: number;
  dataCategories: string[];
  autoburnData: number[];
  manualBurnData: number[];
  rewards: Rewards[];
  isLoading: boolean;
  isLoadingPrices: boolean;
  archerswapPrice: number;
  iceCreamswapPrice: number;
  pancakeswapPrice: number;
  archerswapLPPrice: number;
  iceCreamswapLPPrice: number;
  pancakeswapLPPrice: number;
  lp: LPData;
  price: any;
  archerswapTotalLP: number;
  pancakeSwapTotalLP: number;
};

type Rewards = {
  total_amount: number;
  cumulative_sum: number;
  date: string;
};

type LP = {
  date: string;
  total_weth_amount: number;
  cumulative_weth_sum: number;
  total_token_amount: number;
  cumulative_token_sum: number;
};

type LPData = {
  [key: string]: LP[];
};

export default function useCharts(): ChartData {
  const [tokenData, setTokenData] = useState(0);
  const [tokenBurnData, setTokenBurnData] = useState(0);
  const [tokenBurnDataAuto, setTokenBurnDataAuto] = useState(0);
  const [tokenBurnDataBSC, setTokenBurnDataBSC] = useState(0);
  const [dataCategories, setDataCategories] = useState<string[]>([]);
  const [autoburnData, setautoburnData] = useState([]);
  const [manualBurnData, setmanualBurnData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isLoadingPrices, setLoadingPrices] = useState(true);
  const [archerswapPrice, setArcherswapPrice] = useState(0);
  const [iceCreamswapPrice, setIceCreamswapPrice] = useState(0);
  const [pancakeswapPrice, setPancakeswapPrice] = useState(0);
  const [archerswapLPPrice, setArcherswapLPPrice] = useState(0);
  const [iceCreamswapLPPrice, setIceCreamswapLPPrice] = useState(0);
  const [pancakeswapLPPrice, setPancakeswapLPPrice] = useState(0);
  const [archerswapTotalLP, setArcherswapTotalLP] = useState(0);
  const [pancakeSwapTotalLP, setPancakeSwapTotalLP] = useState(0);
  const [rewards, setRewards] = useState([] as Rewards[]);
  const [lp, setLP] = useState({} as LPData);
  const [price, setPrice] = useState()

  useEffect(() => {
    axios
      .get("https://api.4ignorefud.com/prices")
      .then((response) => {
        if (response.status === 200) {
          setLoadingPrices(false);
        }
        setArcherswapPrice(response.data["prices"]["archerswapPrice"]);
        setIceCreamswapPrice(response.data["prices"]["icecreameswapPrice"]);
        setPancakeswapPrice(response.data["prices"]["pancakeswapPrice"]);
      })
      .catch((error) => {
        console.error(error); // handle error
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://api.4ignorefud.com/lp_prices")
      .then((response) => {
        if (response.status === 200) {
          setLoadingPrices(false);
        }
        setArcherswapLPPrice(response.data["lpPrices"]["archerswapLP"]["lpPrice"]);
        setArcherswapTotalLP(response.data["lpPrices"]["archerswapLP"]["totalLP"]);
        setIceCreamswapLPPrice(
          response.data["lpPrices"]["icecreameswapLP"]["lpPrice"]
        );
        setPancakeswapLPPrice(response.data["lpPrices"]["pancakeswapLP"]["lpPrice"]);
        setPancakeSwapTotalLP(response.data["lpPrices"]["pancakeswapLP"]["totalLP"]);
      })
      .catch((error) => {
        console.error(error); // handle error
      });
  }, []);
  useEffect(() => {
    function getTokenData() {
      axios
        .get("https://api.4ignorefud.com/burn")
        .then((response) => {
          if (response.status === 200) {
            setLoading(false);
          }
          setTokenData(response.data["burnData"]["currentSupply"]);
          setTokenBurnData(response.data["burnData"]["manualBurn"]);
          setTokenBurnDataAuto(response.data["burnData"]["autoBurn"]);
          setTokenBurnDataBSC(response.data["burnData"]["bscBurn"]);

          const autoBurns = response.data["burnData"]["autoBurns"];

          const manualBurns = response.data["burnData"]["manualBurns"];
          const categories = autoBurns.map((item: { date: string }) =>
            new Date(item.date).toLocaleDateString()
          );
          setDataCategories(categories);
          const autoBurndata = autoBurns.map(
            (item: { cumulative_sum: number }) => item.cumulative_sum.toFixed(0)
          );
          setautoburnData(autoBurndata);
          const autoBurnLength = autoBurndata.length;
          const manualBurnData = manualBurns.map(
            (item: { cumulative_sum: number }) => item.cumulative_sum.toFixed(0)
          );
          const manualBurnLength = manualBurnData.length;
          const dataShort = autoBurnLength - manualBurnLength;
          const lastManualBurnValue = manualBurnData.pop();
          for (let i = 0; i < dataShort; i++) {
            manualBurnData.push(lastManualBurnValue);
          }
          setmanualBurnData(manualBurnData);
        })
        .catch((error) => {
          console.error(error); // handle error
        });
    }
    getTokenData();
  }, []);

  useEffect(() => {
    axios
      .get("https://api.4ignorefud.com/rewards")
      .then((response) => {
        setRewards(
          response.data["rewards"].map((rewards: any) => {
            return rewards;
          })
        );
      })
      .catch((error) => {
        console.error(error); // handle error
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://api.4ignorefud.com/lp")
      .then((response) => {
        const data = response.data["lps"];

        setLP(data);
      })
      .catch((error) => {
        console.error(error); // handle error
      });
  }, []);
  const { response, loading } = useAxios("coins/ignore-fud/market_chart?vs_currency=usd&days=7");
  useEffect(() => {
    if (!loading) {
      setPrice(response?.prices);
    }
  }, [loading, response]);

  return {
    tokenData,
    tokenBurnData,
    tokenBurnDataAuto, tokenBurnDataBSC,
    dataCategories,
    autoburnData,
    manualBurnData,
    isLoading,
    isLoadingPrices,
    archerswapPrice,
    iceCreamswapPrice,
    pancakeswapPrice,
    archerswapLPPrice,
    iceCreamswapLPPrice,
    pancakeswapLPPrice,
    rewards,
    lp,
    price,
    archerswapTotalLP,
    pancakeSwapTotalLP,
  };
}
