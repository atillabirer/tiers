
export const STAKING_CONTRACTS: string[] = [

  // dual farms - userInfo(poolId = 3, address) => amount > 0?
  "0xF3a5454496E26ac57da879bf3285Fa85DEBF0388",
];

export const XSTELLA_ADDRESS = "0x06A3b410b681c82417A906993aCeFb91bAB6A080";


export const minBalanceABI = [
  // balanceOf
  {
    constant: true,

    inputs: [{ name: "_owner", type: "address" }],

    name: "balanceOf",

    outputs: [{ name: "balance", type: "uint256" }],

    type: "function",
  },

];


