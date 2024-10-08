import {
  useBalance,
  useContractRead,
  useContractReads,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import TokenABI from "@/config/abi/bscUSDT.json";
import stakeContract from "@/config/abi/stakeContract.json";
import claimContract from "@/config/abi/claimContract.json";
import oldContract from "@/config/abi/oldContract.json";
import { ethers, BigNumber } from "ethers";

export function useAllowance(
  stakingaddress: `0x${string}`,
  address: `0x${string}` | undefined,
  contractaddress: `0x${string}`
) {
  const { data } = useContractRead({
    address: stakingaddress,
    abi: TokenABI,
    functionName: "allowance",
    args: [address, contractaddress],
    watch: true,
  });

  // console.log(stakingaddress);
  // console.log(address);
  // console.log(contractaddress);

  // console.log(Number(data));

  return Number(data) / 10 ** 18;
}

export function useStaked(
  address: `0x${string}` | undefined,
  contractaddress: `0x${string}`,
  poolId: number
) {
  const { data } = useContractRead({
    address: contractaddress,
    abi: claimContract,
    functionName: "claimedUsers",
    args: [address, poolId],
    watch: true,
  });

  return data;
}

export function useStakedAmount(
  address: `0x${string}` | undefined,
  contractaddress: `0x${string}`
) {
  const { data } = useContractRead({
    address: contractaddress,
    abi: stakeContract,
    functionName: "balanceOf",
    args: [address],
    watch: true,
  });

  return Number(data) / 10 ** 18;
}

export function useEarn(
  address: `0x${string}` | undefined,
  contractaddress: `0x${string}`
) {
  const { data } = useContractRead({
    address: contractaddress,
    abi: stakeContract,
    functionName: "earned",
    args: [address],
    watch: true,
  });
  return Number(data) / 10 ** 18;
}

export function useSupply(contractaddress: `0x${string}`) {
  const { data } = useContractRead({
    address: contractaddress,
    abi: stakeContract,
    functionName: "totalSupply",
    watch: true,
  });
  return Number(data) / 10 ** 18;
}

export function usePanelty(contractaddress: `0x${string}`) {
  const { data } = useContractRead({
    address: contractaddress,
    abi: stakeContract,
    functionName: "periodPenalty",
    watch: true,
  });

  return Number(data);
}

export function useTokenBalance(
  stakingaddress: `0x${string}`,
  address: `0x${string}` | undefined
) {
  const { data } = useBalance({
    address: address,
    token: stakingaddress,
    watch: true,
  });

  return Number(data?.value) / 10 ** 18;
}

type ClaimArgs = {
  amount: BigNumber;
  nonce: BigNumber;
  receiver: string;
  signature: any;
};

export function useContractConfig(
  contractaddress: `0x${string}`,
  arg?: ClaimArgs
) {
  const { config, error } = usePrepareContractWrite({
    address: contractaddress,
    abi: claimContract,
    functionName: "claimStakedAmount",
    args: Object.values(arg || {}),
  });
  return config;
}

export function useRewardRate(contractaddress: `0x${string}`) {
  const { data } = useContractRead({
    address: contractaddress,
    abi: stakeContract,
    functionName: "rewardPerToken",
    watch: true,
  });
  return Number(data) / 10 ** 18;
}

export function useContracts(contractaddress: `0x${string}`, arg?: ClaimArgs) {
  const config = useContractConfig(contractaddress, arg);
  const { data, isLoading, isSuccess, write, status } = useContractWrite({
    ...config,
  });
  console.log(data);

  return { data, isLoading, isSuccess, write, status };
}

export function useContractDirrect(
  contractaddress: `0x${string}`,
  amount: number
) {
  const { config } = usePrepareContractWrite({
    address: contractaddress,
    abi: oldContract,
    functionName: "withdraw",

    args: [Math.floor(Math.floor(amount) * 10 ** 18).toString()],
  });
  const { data, isLoading, isSuccess, write, status } =
    useContractWrite(config);
  console.log(data);
  return { data, isLoading, isSuccess, write, status };
}

export function useTransaction(hash: `0x${string}` | undefined) {
  const transaction = useWaitForTransaction({
    hash: hash,
    onSuccess(data) {
      // console.log("Success", data);
    },
  });
  return transaction;
}
