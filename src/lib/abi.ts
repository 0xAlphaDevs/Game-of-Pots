export const GOP_CONTRACT_ABI = [
  {
    inputs: [
      { internalType: "address", name: "_usdeToken", type: "address" },
      { internalType: "address", name: "_vault", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "potId",
        type: "uint256",
      },
    ],
    name: "PotCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "potId",
        type: "uint256",
      },
      { indexed: true, internalType: "address", name: "user", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "DepositedToPot",
    type: "event",
  },
  {
    inputs: [
      { internalType: "uint256", name: "potSizeInUSDe", type: "uint256" },
      { internalType: "uint256", name: "totalShares", type: "uint256" },
    ],
    name: "createPot",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "potId", type: "uint256" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "depositToPot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "potId", type: "uint256" }],
    name: "activePots",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "potId", type: "uint256" },
          {
            internalType: "address[]",
            name: "participants",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "totalUSDeDeposits",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalsUSDeShares",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "POT_SIZE_IN_USDE",
            type: "uint256",
          },
          { internalType: "uint256", name: "TOTAL_SHARES", type: "uint256" },
          { internalType: "bool", name: "isStaked", type: "bool" },
          { internalType: "bool", name: "isDrawnWinner", type: "bool" },
          { internalType: "address", name: "winner", type: "address" },
        ],
        internalType: "struct GameOfPots.Pot[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
export const USDe_CONTRACT_ABI = [];
export const sUSDe_CONTRACT_ABI = [];
