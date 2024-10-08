import React, { use, useEffect } from "react";
import PoolCard from "./pool/PoolCard";
import { useAccount, useNetwork } from "wagmi";
import { usePools } from "@/state/hooks";
import { PoolConfig } from "@/config/constants/types";
import CountdownTimer from "./CountDownTimer";

const StakingCards = () => {
  const poolsFrom = usePools();
  const { chain } = useNetwork();
  const [pools, setPools] = React.useState<PoolConfig[]>(poolsFrom);

  useEffect(() => {
    if (chain?.id == 56) {
      const filteredPools = poolsFrom.filter(
        (pool: PoolConfig) => !pool.isAvax
      );
      setPools(filteredPools);
    } else if (chain?.id == 43114) {
      const filteredPools = poolsFrom.filter((pool: PoolConfig) => pool.isAvax);
      setPools(filteredPools);
    }
  }, [chain?.id, poolsFrom]);

  return (
    <div className="mx-auto flex justify-center text-center max-w-[840px]">
      <div className="w-full text-black dark:text-white m-3 ">
        <h1 className="text-3xl">Unstake your pool tokens</h1>
        <div className="grid-cols-5 hidden md:grid  items-center  mt-4">
          <div className="justify-normal">
            <span className="font-medium text-black justify-start dark:text-white flex-none ml-[20px]">
              Name
            </span>
          </div>

          <div className="flex flex-1 col-span-2 justify-center space-x-4 ml-5">
            <span className="px-4 py-2 text-black dark:text-white flex justify-center"></span>
            <span className="px-4 py-2 text-black dark:text-white flex justify-center"></span>
            <span className="px-4 py-2 text-black dark:text-white flex justify-center">
              Token Amount
            </span>
          </div>
        </div>

        <div className="items-center justify-center">
          {pools.map((pool) => (
            <PoolCard key={pool.poolId} pool={pool} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StakingCards;
