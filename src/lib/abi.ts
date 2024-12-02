export const GOP_CONTRACT_ABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_usdeToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_vrf",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
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
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PotBridgedAndStaked",
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
    ],
    name: "PotFull",
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
      {
        indexed: false,
        internalType: "address",
        name: "winner",
        type: "address",
      },
    ],
    name: "WinnerRevealed",
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
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [],
    name: "activePots",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "potId",
            type: "uint256",
          },
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
            name: "earnings",
            type: "uint256",
          },
          {
            internalType: "enum GameOfPots.PotStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "maturityPeriodInDays",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maturityTimestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "vrfRoundId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "winner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "POT_SIZE_IN_USDE",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "TOTAL_SHARES",
            type: "uint256",
          },
        ],
        internalType: "struct GameOfPots.Pot[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "potId",
        type: "uint256",
      },
    ],
    name: "bridgeAndStakePot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "potSizeInUSDe",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalShares",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maturityTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maturityPeriodInDays",
        type: "uint256",
      },
    ],
    name: "createPot",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "potId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "depositToPot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "potId",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "_callbackGasLimit",
        type: "uint32",
      },
    ],
    name: "drawPot",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "randomness",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "fulfillRandomness",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "potId",
        type: "uint256",
      },
    ],
    name: "getPotDetails",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "potId",
            type: "uint256",
          },
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
            name: "earnings",
            type: "uint256",
          },
          {
            internalType: "enum GameOfPots.PotStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "maturityPeriodInDays",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maturityTimestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "vrfRoundId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "winner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "POT_SIZE_IN_USDE",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "TOTAL_SHARES",
            type: "uint256",
          },
        ],
        internalType: "struct GameOfPots.Pot",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "potId",
        type: "uint256",
      },
    ],
    name: "getProjectedtEarningsForPot",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "myPots",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "potId",
            type: "uint256",
          },
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
            name: "earnings",
            type: "uint256",
          },
          {
            internalType: "enum GameOfPots.PotStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "maturityPeriodInDays",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maturityTimestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "vrfRoundId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "winner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "POT_SIZE_IN_USDE",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "TOTAL_SHARES",
            type: "uint256",
          },
        ],
        internalType: "struct GameOfPots.Pot[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "potCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "pots",
    outputs: [
      {
        internalType: "uint256",
        name: "potId",
        type: "uint256",
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
        name: "earnings",
        type: "uint256",
      },
      {
        internalType: "enum GameOfPots.PotStatus",
        name: "status",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "maturityPeriodInDays",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maturityTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vrfRoundId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "winner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "POT_SIZE_IN_USDE",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "TOTAL_SHARES",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "usdeToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userPots",
    outputs: [
      {
        internalType: "uint256",
        name: "potId",
        type: "uint256",
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
        name: "earnings",
        type: "uint256",
      },
      {
        internalType: "enum GameOfPots.PotStatus",
        name: "status",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "maturityPeriodInDays",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maturityTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vrfRoundId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "winner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "POT_SIZE_IN_USDE",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "TOTAL_SHARES",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vrf",
    outputs: [
      {
        internalType: "contract IConduitVRFCoordinator",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "potId",
        type: "uint256",
      },
    ],
    name: "withdrawFromPot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
