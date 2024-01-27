import tokens from "./tokens";
import { PoolConfig, PoolCategory } from "./types";

const pools: PoolConfig[] = [
  {
    poolId: 1,
    name: "BHCMaxi",
    tokenName: "BHC",
    claimId: 0,
    token: tokens.fourtoken,
    locked: false,
    stakingToken: {
      56: "0x61B83eDF87Ea662C695439A807c386455c9E797C",
      1116: "0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e",
    },
    earningToken: {
      56: "0x61B83eDF87Ea662C695439A807c386455c9E797C",
      1116: "0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e",
    },
    contractAddress: {
      43114: "0x5Dd5F08052C44AdA503415b91997cE187046F6A5",
    },
    isDirrect: true,
    isLp: false,
    isAvax: true,
    poolCategory: PoolCategory["NO_LOCK"],
    harvest: true,
    sortOrder: 1,
    factor: 0.000009,
    factorCore: 0.000000015,
    isFinished: false,
    buyURL: {
      56: `https://pancakeswap.finance/swap?chain=bsc&outputCurrency=0x61B83eDF87Ea662C695439A807c386455c9E797C`,
      1116: `https://exchange.archerswap.finance/swap?outputCurrency=0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e`,
    },
  },
  {
    poolId: 2,
    name: "FeelingReady",
    tokenName: "BHC",
    claimId: 0,
    token: tokens.fourtoken,
    locked: true,
    stakingToken: {
      56: "0x61B83eDF87Ea662C695439A807c386455c9E797C",
      1116: "0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e",
    },
    earningToken: {
      56: "0x61B83eDF87Ea662C695439A807c386455c9E797C",
      1116: "0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e",
    },
    contractAddress: {
      56: "0x3cD0E13f03aA51e65F5b1D9602701f75d09c92a7",
    },
    isLp: false,
    isDirrect: true,
    poolCategory: PoolCategory["15D_LOCK"],
    harvest: true,
    sortOrder: 1,
    factor: 0.000013515,
    factorCore: 0.000000006,
    isFinished: false,
    buyURL: {
      56: `https://pancakeswap.finance/swap?chain=bsc&outputCurrency=0x61B83eDF87Ea662C695439A807c386455c9E797C`,
      1116: `https://exchange.archerswap.finance/swap?outputCurrency=0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e`,
    },
  },
  {
    poolId: 3,
    name: "FeelingDriven",
    tokenName: "HPS",
    claimId: 0,
    token: tokens.fourtoken,
    locked: true,
    stakingToken: {
      56: "0x61B83eDF87Ea662C695439A807c386455c9E797C",
      1116: "0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e",
    },
    earningToken: {
      56: "0x61B83eDF87Ea662C695439A807c386455c9E797C",
      1116: "0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e",
    },
    contractAddress: {
      56: "0xcb84eB80b33C79a7971C079DF87Dc6698aa1d5da",
    },
    isLp: false,
    isDirrect: true,
    poolCategory: PoolCategory["1Y_LOCK"],
    harvest: true,
    sortOrder: 1,
    factor: 0.000016,
    factorCore: 0.000000014,
    isFinished: false,
    buyURL: {
      56: `https://pancakeswap.finance/swap?chain=bsc&outputCurrency=0x61B83eDF87Ea662C695439A807c386455c9E797C`,
      1116: `https://exchange.archerswap.finance/swap?outputCurrency=0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e`,
    },
  },
  {
    poolId: 4,
    name: "FeelingSweet-1",
    tokenName: "BNB-BHC LP",
    token: tokens.fourtoken,
    locked: false,
    claimId: 0,
    stakingToken: {
      56: "0x9673f9fe264eD0af19ED18d1aC848F384f8fB5F9",
      1116: "0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e",
    },
    earningToken: {
      56: "0x61B83eDF87Ea662C695439A807c386455c9E797C",
      1116: "0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e",
    },
    contractAddress: {
      56: "0xC5c482a4Ed34b80B861B4e6Eb28664a46bd3eC8B",
    },
    isLp: false,
    isDirrect: true,
    poolCategory: PoolCategory.NO_LOCK,
    harvest: true,
    sortOrder: 1,
    factor: 0.000003,
    factorCore: 1,
    isFinished: false,
    buyURL: {
      56: `https://pancakeswap.finance/v2/add/0x61B83eDF87Ea662C695439A807c386455c9E797C/BNB`,
      1116: `https://exchange.archerswap.finance/swap?outputCurrency=0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e`,
    },
  },
  {
    poolId: 5,
    name: "FeelingStable",
    tokenName: "HPS",
    claimId: 0,
    token: tokens.fourtoken,
    locked: false,
    stakingToken: {
      56: "0x9673f9fe264eD0af19ED18d1aC848F384f8fB5F9",
      1116: "0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e",
    },
    earningToken: {
      56: "0x61B83eDF87Ea662C695439A807c386455c9E797C",
      1116: "0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e",
    },
    contractAddress: {
      56: "0xE40525c866Ab074e4103e5d26570Dc61f1729B6d",
    },
    isLp: false,
    isDirrect: true,
    poolCategory: PoolCategory.NO_LOCK,
    harvest: true,
    sortOrder: 1,
    factor: 0.000003,
    factorCore: 1,
    isFinished: false,
    buyURL: {
      56: `https://pancakeswap.finance/v2/add/0x61B83eDF87Ea662C695439A807c386455c9E797C/BNB`,
      1116: `https://exchange.archerswap.finance/swap?outputCurrency=0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e`,
    },
  },
  {
    poolId: 6,
    name: "FeelingSweet-2",
    tokenName: "BNB-BHC LP",
    claimId: 0,
    token: tokens.fourtoken,
    locked: false,
    stakingToken: {
      56: "0x9673f9fe264eD0af19ED18d1aC848F384f8fB5F9",
      1116: "0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e",
    },
    earningToken: {
      56: "0x61B83eDF87Ea662C695439A807c386455c9E797C",
      1116: "0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e",
    },
    contractAddress: {
      56: "0x5A3B3c32b3095c86a3b40444168B642061943Bcf",
    },
    isLp: false,
    isDirrect: true,
    poolCategory: PoolCategory.NO_LOCK,
    harvest: true,
    sortOrder: 1,
    factor: 0.000003,
    factorCore: 1,
    isFinished: false,
    buyURL: {
      56: `https://pancakeswap.finance/v2/add/0x61B83eDF87Ea662C695439A807c386455c9E797C/BNB`,
      1116: `https://exchange.archerswap.finance/swap?outputCurrency=0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e`,
    },
  },
  {
    poolId: 7,
    name: "FeelingExcited",
    tokenName: "HPSv2-BNB LP",
    claimId: 0,
    token: tokens.fourtoken,
    locked: false,
    stakingToken: {
      56: "0x9673f9fe264eD0af19ED18d1aC848F384f8fB5F9",
      1116: "0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e",
    },
    earningToken: {
      56: "0x61B83eDF87Ea662C695439A807c386455c9E797C",
      1116: "0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e",
    },
    contractAddress: {
      56: "0x8DB355C3461Dc371CA0CfcCfcaD758D7Ee8D95ec",
    },
    isLp: false,
    isDirrect: true,
    poolCategory: PoolCategory.NO_LOCK,
    harvest: true,
    sortOrder: 1,
    factor: 0.000003,
    factorCore: 1,
    isFinished: false,
    buyURL: {
      56: `https://pancakeswap.finance/v2/add/0x61B83eDF87Ea662C695439A807c386455c9E797C/BNB`,
      1116: `https://exchange.archerswap.finance/swap?outputCurrency=0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e`,
    },
  },
  {
    poolId: 8,
    name: "FeelingExcited_W_Lock",
    tokenName: "HPSv2-BNB LP",
    claimId: 0,
    token: tokens.fourtoken,
    locked: false,
    stakingToken: {
      56: "0x9673f9fe264eD0af19ED18d1aC848F384f8fB5F9",
      1116: "0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e",
    },
    earningToken: {
      56: "0x61B83eDF87Ea662C695439A807c386455c9E797C",
      1116: "0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e",
    },
    contractAddress: {
      56: "0x16325117Aa886489Fd080d780E7491539C1E985B",
    },
    isLp: false,
    isDirrect: true,
    poolCategory: PoolCategory.NO_LOCK,
    harvest: true,
    sortOrder: 1,
    factor: 0.000003,
    factorCore: 1,
    isFinished: false,
    buyURL: {
      56: `https://pancakeswap.finance/v2/add/0x61B83eDF87Ea662C695439A807c386455c9E797C/BNB`,
      1116: `https://exchange.archerswap.finance/swap?outputCurrency=0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e`,
    },
  },
  {
    poolId: 9,
    name: "BHC-1",
    tokenName: "BHC",
    claimId: 1,
    token: tokens.fourtoken,
    locked: false,
    stakingToken: {
      56: "0x9673f9fe264eD0af19ED18d1aC848F384f8fB5F9",
      1116: "0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e",
    },
    earningToken: {
      56: "0x61B83eDF87Ea662C695439A807c386455c9E797C",
      1116: "0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e",
    },
    contractAddress: {
      56: "0x873281AE6F43996dbe1C4EFC6eeb3d28FE50C91c",
    },
    isLp: false,
    isDirrect: false,
    isIdClaim: true,
    poolCategory: PoolCategory.NO_LOCK,
    harvest: true,
    sortOrder: 1,
    factor: 0.000003,
    factorCore: 1,
    isFinished: false,
    buyURL: {
      56: `https://pancakeswap.finance/v2/add/0x61B83eDF87Ea662C695439A807c386455c9E797C/BNB`,
      1116: `https://exchange.archerswap.finance/swap?outputCurrency=0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e`,
    },
  },
  {
    poolId: 10,
    name: "BHC-2",
    tokenName: "BHC",
    claimId: 2,
    isIdClaim: true,
    token: tokens.fourtoken,
    locked: false,
    stakingToken: {
      56: "0x9673f9fe264eD0af19ED18d1aC848F384f8fB5F9",
      1116: "0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e",
    },
    earningToken: {
      56: "0x61B83eDF87Ea662C695439A807c386455c9E797C",
      1116: "0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e",
    },
    contractAddress: {
      56: "0x873281AE6F43996dbe1C4EFC6eeb3d28FE50C91c",
    },
    isLp: false,
    isDirrect: false,
    poolCategory: PoolCategory.NO_LOCK,
    harvest: true,
    sortOrder: 1,
    factor: 0.000003,
    factorCore: 1,
    isFinished: false,
    buyURL: {
      56: `https://pancakeswap.finance/v2/add/0x61B83eDF87Ea662C695439A807c386455c9E797C/BNB`,
      1116: `https://exchange.archerswap.finance/swap?outputCurrency=0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e`,
    },
  },
  {
    poolId: 11,
    name: "Old HPS",
    tokenName: "HPS",
    claimId: 3,
    isIdClaim: true,
    token: tokens.fourtoken,
    locked: false,
    stakingToken: {
      56: "0x9673f9fe264eD0af19ED18d1aC848F384f8fB5F9",
      1116: "0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e",
    },
    earningToken: {
      56: "0x61B83eDF87Ea662C695439A807c386455c9E797C",
      1116: "0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e",
    },
    contractAddress: {
      56: "0x9fF763ACdD3d1976520E6785cFD1E50c90985Ac1",
    },
    isLp: false,
    isDirrect: false,
    poolCategory: PoolCategory.NO_LOCK,
    harvest: true,
    sortOrder: 1,
    factor: 0.000003,
    factorCore: 1,
    isFinished: false,
    buyURL: {
      56: `https://pancakeswap.finance/v2/add/0x61B83eDF87Ea662C695439A807c386455c9E797C/BNB`,
      1116: `https://exchange.archerswap.finance/swap?outputCurrency=0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e`,
    },
  },
  {
    poolId: 12,
    name: "HPSv2-1",
    tokenName: "HPS",
    claimId: 4,
    isIdClaim: true,
    token: tokens.fourtoken,
    locked: false,
    stakingToken: {
      56: "0x9673f9fe264eD0af19ED18d1aC848F384f8fB5F9",
      1116: "0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e",
    },
    earningToken: {
      56: "0x61B83eDF87Ea662C695439A807c386455c9E797C",
      1116: "0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e",
    },
    contractAddress: {
      56: "0xBf096d17EaCaBD7A77589A9080B57138999D3BE3",
    },
    isLp: false,
    isDirrect: false,
    poolCategory: PoolCategory.NO_LOCK,
    harvest: true,
    sortOrder: 1,
    factor: 0.000003,
    factorCore: 1,
    isFinished: false,
    buyURL: {
      56: `https://pancakeswap.finance/v2/add/0x61B83eDF87Ea662C695439A807c386455c9E797C/BNB`,
      1116: `https://exchange.archerswap.finance/swap?outputCurrency=0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e`,
    },
  },
  {
    poolId: 13,
    name: "HPSv2-2",
    tokenName: "HPS",
    claimId: 5,
    isIdClaim: true,
    token: tokens.fourtoken,
    locked: false,
    stakingToken: {
      56: "0x9673f9fe264eD0af19ED18d1aC848F384f8fB5F9",
      1116: "0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e",
    },
    earningToken: {
      56: "0x61B83eDF87Ea662C695439A807c386455c9E797C",
      1116: "0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e",
    },
    contractAddress: {
      56: "0xBf096d17EaCaBD7A77589A9080B57138999D3BE3",
    },
    isLp: false,
    isDirrect: false,
    poolCategory: PoolCategory.NO_LOCK,
    harvest: true,
    sortOrder: 1,
    factor: 0.000003,
    factorCore: 1,
    isFinished: false,
    buyURL: {
      56: `https://pancakeswap.finance/v2/add/0x61B83eDF87Ea662C695439A807c386455c9E797C/BNB`,
      1116: `https://exchange.archerswap.finance/swap?outputCurrency=0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e`,
    },
  },
  {
    poolId: 14,
    name: "FeelingAwesome",
    tokenName: "BHC",
    claimId: 5,
    isIdClaim: true,
    token: tokens.fourtoken,
    locked: false,
    stakingToken: {
      56: "0x9673f9fe264eD0af19ED18d1aC848F384f8fB5F9",
      1116: "0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e",
    },
    earningToken: {
      56: "0x61B83eDF87Ea662C695439A807c386455c9E797C",
      1116: "0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e",
    },
    contractAddress: {
      56: "0x5Ec9CB98CB4DB83a7941e99fAf15268F13E8dA2b",
    },
    isLp: false,
    isDirrect: true,
    poolCategory: PoolCategory.NO_LOCK,
    harvest: true,
    sortOrder: 1,
    factor: 0.000003,
    factorCore: 1,
    isFinished: false,
    buyURL: {
      56: `https://pancakeswap.finance/v2/add/0x61B83eDF87Ea662C695439A807c386455c9E797C/BNB`,
      1116: `https://exchange.archerswap.finance/swap?outputCurrency=0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e`,
    },
  },
];

export default pools;

// Path: src/config/constants/tokens.tsx
