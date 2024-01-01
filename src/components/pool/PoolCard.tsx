import Image from "next/image";
import { use, useContext, useEffect, useMemo, useRef, useState } from "react";
import PoolCardDetails from "./PoolCardDetails";
import { Pool } from "../../state/types";

import useCharts from "@/hooks/useCharts";
import { toast } from "react-toastify";
import { approve, ApprovalResult } from "@/utils/callFunctions";
import { ethers, BigNumber } from "ethers";
import dynamic from "next/dynamic";
import {
  useAccount,
  useBalance,
  useConnect,
  useContractRead,
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
  useSigner,
  useSwitchNetwork,
  useWaitForTransaction,
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

import { getAddress } from "@/utils/addressHelpers";
import TokenABI from "@/config/abi/bscUSDT.json";
import stakeContract from "@/config/abi/stakeContract.json";
import Link from "next/link";
import CountdownTimer from "../CountDown";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const DepositModal = dynamic(() => import("./modals/DepositModal"), {
  ssr: false,
});
const WithdrawtModal = dynamic(() => import("./modals/WithdrawModal"), {
  ssr: false,
});

import numeral from "numeral";
import {
  useAllowance,
  useContractDirrect,
  useContracts,
  useEarn,
  usePanelty,
  useRewardRate,
  useStaked,
  useStakedAmount,
  useSupply,
  useTokenBalance,
  useTransaction,
} from "@/hooks/useCalls";
import NoLock from "./no_lock.json";
import NoLockBsc from "./no_lock_bsc.json";
import DayLock from "./day_lock.json";
import DayLockBsc from "./day_lock_bsc.json";
import YearLock from "./year_lock.json";
import YearLockBsc from "./year_lock_bsc.json";
import { pipeline } from "stream";

import poolOne from "./signatures/1.json";
import poolTwo from "./signatures/2.json";
import poolThree from "./signatures/3.json";
import poolFour from "./signatures/4.json";
import poolFive from "./signatures/5.json";
import poolSix from "./signatures/6.json";

export interface PoolsWithStakedValue extends Pool {
  liquidity?: BigNumber;
}

interface PoolCardProps {
  pool: PoolsWithStakedValue;
  userBalance?: number;
}

type ClaimArgs = {
  amount: BigNumber;
  nonce: BigNumber;
  poolId: number;
  receiver: string;
  signature: any;
};

const PoolCard: React.FC<React.PropsWithChildren<PoolCardProps>> = ({
  pool,
}) => {
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  const { chain } = useNetwork();
  const { chains, pendingChainId, switchNetwork } = useSwitchNetwork();
  const [expandCard, setExpandCard] = useState(false);

  const claimed = useStaked(
    address,
    getAddress(pool.contractAddress, chain?.id) as `0x${string}`,
    pool.claimId
  );

  const staked_amount = useStakedAmount(
    address,
    getAddress(pool.contractAddress, chain?.id) as `0x${string}`
  );

  const [eligible, setIsEligible] = useState(false);

  const [args, setArgs] = useState({} as ClaimArgs);
  const [eligibleAmount, setEligibleAmount] = useState(0);

  const [staked, setStaked] = useState(0);

  useEffect(() => {
    if (chain?.id === 56) {
      if (pool.isDirrect) {
        // get balance

        setStaked(staked_amount);
        setEligibleAmount(staked_amount);
        if (staked_amount > 0) {
          setIsEligible(true);
        }

        // call withdraw function
      } else if (pool.isIdClaim) {
        // get balance
        if (pool.claimId === 1) {
          const filtered = poolOne.filter(
            (element) => element.address == address
          );

          if (filtered.length > 0) {
            const element = filtered[0];
            setIsEligible(true);

            if (claimed) {
              setEligibleAmount(0);
            } else {
              setEligibleAmount(Number(element.amount) / 10 ** 18);
            }

            setArgs({
              amount: BigNumber.from(element.amount),
              nonce: BigNumber.from(element.nonce),
              poolId: 1,
              receiver: element.address,
              signature: element.signature,
            });
          } else {
            setIsEligible(false);
            setArgs({} as ClaimArgs);
          }
        } else if (pool.claimId === 2) {
          const filtered = poolTwo.filter(
            (element) => element.address == address
          );

          if (filtered.length > 0) {
            const element = filtered[0];
            setIsEligible(true);
            if (claimed) {
              setEligibleAmount(0);
            } else {
              setEligibleAmount(Number(element.amount) / 10 ** 18);
            }

            setArgs({
              amount: BigNumber.from(element.amount),
              nonce: BigNumber.from(element.nonce),
              poolId: 2,
              receiver: element.address,
              signature: element.signature,
            });
          } else {
            setIsEligible(false);
            setArgs({} as ClaimArgs);
          }
        } else if (pool.claimId === 3) {
          const filtered = poolThree.filter(
            (element) => element.address == address
          );

          if (filtered.length > 0) {
            const element = filtered[0];
            setIsEligible(true);
            if (claimed) {
              setEligibleAmount(0);
            } else {
              setEligibleAmount(Number(element.amount) / 10 ** 18);
            }

            setArgs({
              amount: BigNumber.from(element.amount),
              nonce: BigNumber.from(element.nonce),
              poolId: 3,
              receiver: element.address,
              signature: element.signature,
            });
          } else {
            setIsEligible(false);
            setArgs({} as ClaimArgs);
          }
        } else if (pool.claimId === 4) {
          const filtered = poolFour.filter(
            (element) => element.address == address
          );

          if (filtered.length > 0) {
            console.log("here");

            const element = filtered[0];
            setIsEligible(true);
            if (claimed) {
              setEligibleAmount(0);
            } else {
              setEligibleAmount(Number(element.amount) / 10 ** 18);
            }

            setArgs({
              amount: BigNumber.from(element.amount),
              nonce: BigNumber.from(element.nonce),
              poolId: 4,
              receiver: element.address,
              signature: element.signature,
            });
          } else {
            setIsEligible(false);
            setArgs({} as ClaimArgs);
          }
        } else if (pool.claimId === 5) {
          const filtered = poolFive.filter(
            (element) => element.address == address
          );

          if (filtered.length > 0) {
            const element = filtered[0];
            setIsEligible(true);
            if (claimed) {
              setEligibleAmount(0);
            } else {
              setEligibleAmount(Number(element.amount) / 10 ** 18);
            }

            setArgs({
              amount: BigNumber.from(element.amount),
              nonce: BigNumber.from(element.nonce),
              poolId: 5,
              receiver: element.address,
              signature: element.signature,
            });
          } else {
            setIsEligible(false);
            setArgs({} as ClaimArgs);
          }
        }
        // call withdraw function with ID
      }
    } else if (chain?.id === 43114) {
      if (pool.isDirrect) {
        // get balance

        setStaked(staked_amount);
        setEligibleAmount(staked_amount);
        if (staked_amount <= 0) {
          setIsEligible(true);
        }
      }
    }
  }, [chain?.id, pool, staked_amount, address, claimed]);

  let [someState, setSomeState] = useState(0);

  const contractEnd = useContractRead({
    address: getAddress(pool.contractAddress, chain?.id) as `0x${string}`,
    abi: stakeContract,
    functionName: "periodFinish",
  });
  const lessCodeThanCheckingPrevRow = useMemo(
    () => setSomeState(Number(contractEnd.data)),
    [contractEnd.data]
  );

  const countdown = CountdownTimer(someState);
  const [approving, setApproving] = useState(false);
  const { data: signer } = useSigner();

  async function approveTokens() {
    const amount = ethers.utils.parseUnits(
      "115792089237316195423570985008687907853269984665640564039457",
      18
    );
    const signer_from = signer;
    try {
      setApproving(true);
      const approvalResult: ApprovalResult = await approve(
        getAddress(pool.stakingToken, chain?.id),
        getAddress(pool.contractAddress, chain?.id),
        TokenABI,
        amount,
        signer_from
      );
      if (approvalResult.status == "mined") {
        setApproving(false);
        const address_to = address as `0x${string}`;
      }
      await toast.promise(Promise.resolve(), {
        pending: "Approving tokens...",
        success: "Tokens approved successfully 👌",
        error: "Failed to approve tokens",
      });
      setApproving(false);
    } catch (error) {
      const theme = document.documentElement.classList.contains("dark")
        ? "dark"
        : "default";
      if (theme === "default") {
        toast.error("Failed to approve tokens: " + error, {
          theme: "light",
        });
      } else {
        toast.error("Failed to approve tokens: " + error, {
          theme: "dark",
        });
      }
      console.error(`Failed to approve tokens: ${error}`);
      setApproving(false);
    }
  }
  const HanddleApprove = () => {
    if (approving) return;
    if (!isConnected) return;
    approveTokens().catch((error) => console.log(error));
  };

  const [enableButton, setEnableButton] = useState("Approve");

  useEffect(() => {
    if (isConnected) {
      setEnableButton("Approve");
    } else {
      setEnableButton("Connect Wallet");
    }
  }, [enableButton, isConnected]);

  const [claiming, setClaiming] = useState(false);

  const contractCall = useContracts(
    getAddress(pool.contractAddress, chain?.id) as `0x${string}`,
    args
  );

  const contractCallDirrect = useContractDirrect(
    getAddress(pool.contractAddress, chain?.id) as `0x${string}`
  );

  const transaction = useTransaction(contractCall.data?.hash);

  useEffect(() => {
    if (transaction?.status === "success") {
      setClaiming(false);
    }
  }, [transaction]);

  const HanddleClaim = () => {
    if (claiming) return;
    if (!isConnected) return;
    setClaiming(true);
    if (chain?.id === 56) {
      if (pool.isDirrect) {
        contractCallDirrect.write?.();
      } else if (pool.isIdClaim) {
        console.log(pool.contractAddress);

        contractCall.write?.();
      }
    } else if (chain?.id === 43114) {
      if (pool.isDirrect) {
        contractCall.write?.();
      }
    }
  };

  const [aprValue, setAprValue] = useState(0);
  const [buyUrl, setBuyUrl] = useState("");

  let claimButton;
  if (claiming) {
    claimButton = (
      <button className="opacity-25 bg-gradient-to-br from-green-400 to-yellow-300 text-black text-sm pt-0 pl-5 pr-5 rounded-[1rem]">
        <div className="flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="m-0 bg-transparent block antialiased"
            width="18px"
            height="18px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            style={{ shapeRendering: "auto" }}
          >
            <circle
              cx="50"
              cy="50"
              r="0"
              fill="none"
              stroke="#300313"
              strokeWidth="2"
            >
              <animate
                attributeName="r"
                repeatCount="indefinite"
                dur="1s"
                values="0;51"
                keyTimes="0;1"
                keySplines="0 0.2 0.8 1"
                calcMode="spline"
                begin="0s"
              ></animate>
              <animate
                attributeName="opacity"
                repeatCount="indefinite"
                dur="1s"
                values="1;0"
                keyTimes="0;1"
                keySplines="0.2 0 0.8 1"
                calcMode="spline"
                begin="0s"
              ></animate>
            </circle>
            <circle
              cx="50"
              cy="50"
              r="0"
              fill="none"
              stroke="#46dff0"
              strokeWidth="2"
            >
              <animate
                attributeName="r"
                repeatCount="indefinite"
                dur="1s"
                values="0;51"
                keyTimes="0;1"
                keySplines="0 0.2 0.8 1"
                calcMode="spline"
                begin="-0.5s"
              ></animate>
              <animate
                attributeName="opacity"
                repeatCount="indefinite"
                dur="1s"
                values="1;0"
                keyTimes="0;1"
                keySplines="0.2 0 0.8 1"
                calcMode="spline"
                begin="-0.5s"
              ></animate>
            </circle>
          </svg>
          <span className="block">Unstaking</span>
        </div>
      </button>
    );
  } else if (eligible && !claimed) {
    claimButton = (
      <button
        onClick={HanddleClaim}
        className="bg-gradient-to-br from-green-400 to-yellow-300 text-black text-sm pt-0 pl-5 pr-5 rounded-[1rem]"
      >
        Unstake
      </button>
    );
  } else {
    claimButton = (
      <button className="opacity-25 bg-gradient-to-br from-green-400 to-yellow-300 text-black text-sm pt-0 pl-5 pr-5 rounded-[1rem]">
        Unstake
      </button>
    );
  }

  return (
    <div
      key={pool.poolId}
      className={`p-2 mt-5 border bg-[#885026]  border-black rounded-[1.5rem] shadow dark:border-white`}
    >
      <div
        className={`grid grid-cols-4`}
        // onClick={() => setExpandCard(!expandCard)}
      >
        <div className="flex items-center col-span-1">
          <Image src="/images/bhc.png" alt="" width={30} height={30} />
          <div className="grid grid-cols-1 gap-1 text-left">
            <span className="font-medium text-white text-[15px] ml-[10px]">
              {pool.name}
            </span>
            {/* <span className=" text-gray-400 text-sm flex-none ml-[10px] ">
              {pool.poolCategory}
            </span> */}
          </div>
        </div>

        <PoolCardDetails tvl={eligibleAmount} name={pool.tokenName} />

        {chain?.id === 56 || chain?.id === 43114 ? (
          <div className="flex justify-center col-1">{claimButton}</div>
        ) : isConnected ? (
          <button
            onClick={() => switchNetwork?.(56)}
            className="bg-gradient-to-br from-red-400 to-red-300 text-white text-sm pt-0 pl-5 pr-5 rounded-[1rem]"
          >
            Wrong Network
          </button>
        ) : (
          <button
            onClick={() => connect()}
            className="bg-gradient-to-br from-red-400 to-red-300 text-white text-sm pt-0 pl-5 pr-5 rounded-[1rem]"
          >
            Connect Wallet
          </button>
        )}
      </div>
      {expandCard ? (
        ""
      ) : (
        <div>
          <div className="grid grid-cols-3 justify-center space-x-4"></div>
        </div>
      )}

      {expandCard ? <div className="border-b border-[#1e6365] my-4"></div> : ""}
      {expandCard ? (
        <div className="grid grid-cols-3 ">
          <div className="col-1">
            <div className="text-[#669ca0]">Your deposit</div>
            <div className="text-white md:text-[3rem] text-[2rem]">
              {/* {staked > 0 ? numeral(staked).format("0.00a").toUpperCase() : 0} */}
              <span className="text-sm grid">
                {/* ($
                {staked > 0 &&
                Number(numeral(staked * tokienPrice).format("0.000a")) > 0
                  ? numeral(staked * tokienPrice).format("0.000a")
                  : 0}
                ) */}
              </span>
            </div>
          </div>
          <div className="col-1">
            <div className="text-[#669ca0]">APR%</div>
            <div className="text-white md:text-[3rem] text-[2rem]">
              {numeral(Number(aprValue).toFixed(2))
                .format("0.0a")
                .toUpperCase()}
              %
            </div>
          </div>
          <div className="col-1">
            <div className="text-[#669ca0]">Earning</div>
            <div className="text-green-400 md:text-[3rem] text-[2rem] text-gradient-to-b">
              {/* {earned > 0
                ? numeral(Number(earned)).format("0.000a").toUpperCase()
                : 0} */}
            </div>
            <span className="text-sm text-white">4TOKEN</span>
          </div>
        </div>
      ) : (
        ""
      )}
      {expandCard ? (
        <div>
          <div className="grid-cols-3 hidden md:grid mt-[20px]">
            <div className="col-1">
              <div className="text-[#669ca0]">
                {/* {Number(allowanceFrom) > 0 ? (
                  <>
                    <DepositModal
                      contract={pool.contractAddress}
                      poolId={pool.poolId}
                      name={pool.name}
                      userBalance={userBalance}
                      endedpool={pool.isFinished}
                    />
                    {staked > 0 ? (
                      <WithdrawtModal
                        contract={pool.contractAddress}
                        poolId={pool.poolId}
                        name={pool.name}
                        userBalance={staked}
                        locked={pool.locked}
                        isGrater={isGreater}
                      />
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  <button
                    onClick={HanddleApprove}
                    className={`${approving ? "opacity-25" : ""} ${
                      isConnected ? "" : "opacity-25"
                    } bg-gradient-to-br w-[120px] from-green-400 ml-1 to-yellow-300 text-black text-sm  p-3 pl-5 pr-5 rounded-[1rem]`}
                  >
                    {approving ? (
                      <div className="flex items-center justify-center gap-2">
                        <span className="hidden md:block">Approve </span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="m-0 bg-transparent block antialiased"
                          width="18px"
                          height="18px"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="xMidYMid"
                          style={{ shapeRendering: "auto" }}
                        >
                          <circle
                            cx="50"
                            cy="50"
                            r="0"
                            fill="none"
                            stroke="#300313"
                            strokeWidth="2"
                          >
                            <animate
                              attributeName="r"
                              repeatCount="indefinite"
                              dur="1s"
                              values="0;51"
                              keyTimes="0;1"
                              keySplines="0 0.2 0.8 1"
                              calcMode="spline"
                              begin="0s"
                            ></animate>
                            <animate
                              attributeName="opacity"
                              repeatCount="indefinite"
                              dur="1s"
                              values="1;0"
                              keyTimes="0;1"
                              keySplines="0.2 0 0.8 1"
                              calcMode="spline"
                              begin="0s"
                            ></animate>
                          </circle>
                          <circle
                            cx="50"
                            cy="50"
                            r="0"
                            fill="none"
                            stroke="#46dff0"
                            strokeWidth="2"
                          >
                            <animate
                              attributeName="r"
                              repeatCount="indefinite"
                              dur="1s"
                              values="0;51"
                              keyTimes="0;1"
                              keySplines="0 0.2 0.8 1"
                              calcMode="spline"
                              begin="-0.5s"
                            ></animate>
                            <animate
                              attributeName="opacity"
                              repeatCount="indefinite"
                              dur="1s"
                              values="1;0"
                              keyTimes="0;1"
                              keySplines="0.2 0 0.8 1"
                              calcMode="spline"
                              begin="-0.5s"
                            ></animate>
                          </circle>
                        </svg>
                      </div>
                    ) : (
                      <span className="hidden md:block">{enableButton} </span>
                    )}
                  </button>
                )} */}
              </div>
            </div>
            <div className="col-1">
              <div className="text-[#669ca0] mt-[20px]">
                <Link
                  href={buyUrl}
                  target="_blank"
                  className="bg-gradient-to-br from-green-400 to-yellow-300 text-black text-sm pl-5 pr-5 rounded-[1rem]"
                >
                  {pool.isLp ? "Add" : "Buy"} {pool.name}
                </Link>
              </div>
            </div>
            <div className="col-1">
              <div className="text-[#669ca0] mt-[20px]">
                <Link
                  href={
                    chain?.blockExplorers?.default.url +
                    "/address/" +
                    getAddress(pool.contractAddress, chain?.id)
                  }
                  target="_blank"
                  className="bg-gradient-to-br from-green-400 to-yellow-300 text-black text-sm pl-5 pr-5 rounded-[1rem]"
                >
                  Contract Address
                </Link>
              </div>
            </div>
          </div>
          <div className="md:hidden mt-[20px] ">
            <div className="col-1">
              <div className="text-[#669ca0]">
                {/* {Number(allowanceFrom) > 0 ? (
                  <>
                    <DepositModal
                      contract={pool.contractAddress}
                      poolId={pool.poolId}
                      name={pool.name}
                      userBalance={userBalance}
                      endedpool={pool.isFinished}
                    />
                    {staked > 0 ? (
                      <WithdrawtModal
                        contract={pool.contractAddress}
                        poolId={pool.poolId}
                        name={pool.name}
                        userBalance={staked}
                        locked={pool.locked}
                        isGrater={isGreater}
                      />
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  <button
                    onClick={HanddleApprove}
                    className={`${approving ? "opacity-25" : ""} ${
                      isConnected ? "" : "opacity-25"
                    } bg-gradient-to-br w-[120px] from-green-400 ml-1 to-yellow-300 text-black text-sm  p-3 pl-5 pr-5 rounded-[1rem]`}
                  >
                    {approving ? (
                      <div className="flex items-center justify-center gap-2">
                        <span className="hidden md:block">Approve </span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="m-0 bg-transparent block antialiased"
                          width="18px"
                          height="18px"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="xMidYMid"
                          style={{ shapeRendering: "auto" }}
                        >
                          <circle
                            cx="50"
                            cy="50"
                            r="0"
                            fill="none"
                            stroke="#300313"
                            strokeWidth="2"
                          >
                            <animate
                              attributeName="r"
                              repeatCount="indefinite"
                              dur="1s"
                              values="0;51"
                              keyTimes="0;1"
                              keySplines="0 0.2 0.8 1"
                              calcMode="spline"
                              begin="0s"
                            ></animate>
                            <animate
                              attributeName="opacity"
                              repeatCount="indefinite"
                              dur="1s"
                              values="1;0"
                              keyTimes="0;1"
                              keySplines="0.2 0 0.8 1"
                              calcMode="spline"
                              begin="0s"
                            ></animate>
                          </circle>
                          <circle
                            cx="50"
                            cy="50"
                            r="0"
                            fill="none"
                            stroke="#46dff0"
                            strokeWidth="2"
                          >
                            <animate
                              attributeName="r"
                              repeatCount="indefinite"
                              dur="1s"
                              values="0;51"
                              keyTimes="0;1"
                              keySplines="0 0.2 0.8 1"
                              calcMode="spline"
                              begin="-0.5s"
                            ></animate>
                            <animate
                              attributeName="opacity"
                              repeatCount="indefinite"
                              dur="1s"
                              values="1;0"
                              keyTimes="0;1"
                              keySplines="0.2 0 0.8 1"
                              calcMode="spline"
                              begin="-0.5s"
                            ></animate>
                          </circle>
                        </svg>
                      </div>
                    ) : (
                      <span className="block md:hidden">{enableButton}</span>
                    )}
                  </button>
                )} */}
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="col-1">
                <div className="text-[#669ca0] mt-[20px]">
                  <Link
                    href={buyUrl}
                    target="_blank"
                    className="bg-gradient-to-br from-green-400 to-yellow-300 text-black text-sm pl-5 pr-5 rounded-[1rem]"
                  >
                    {pool.isLp ? "Add" : "Buy"} {pool.name}
                  </Link>
                </div>
              </div>
              <div className="col-1">
                <div className="text-[#669ca0] mt-[20px]">
                  <Link
                    href={
                      chain?.blockExplorers?.default.url +
                      "/address/" +
                      getAddress(pool.contractAddress, chain?.id)
                    }
                    target="_blank"
                    className="bg-gradient-to-br from-green-400 to-yellow-300 text-black text-sm pl-5 pr-5 rounded-[1rem]"
                  >
                    Contract Address
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PoolCard;
