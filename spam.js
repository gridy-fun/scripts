import * as starknet from "starknet";
const ERC20 = {
  "abi": [
    {
      "members": [
        {
          "name": "low",
          "offset": 0,
          "type": "felt"
        },
        {
          "name": "high",
          "offset": 1,
          "type": "felt"
        }
      ],
      "name": "Uint256",
      "size": 2,
      "type": "struct"
    },
    {
      "data": [
        {
          "name": "from_",
          "type": "felt"
        },
        {
          "name": "to",
          "type": "felt"
        },
        {
          "name": "value",
          "type": "Uint256"
        }
      ],
      "keys": [],
      "name": "Transfer",
      "type": "event"
    },
    {
      "data": [
        {
          "name": "owner",
          "type": "felt"
        },
        {
          "name": "spender",
          "type": "felt"
        },
        {
          "name": "value",
          "type": "Uint256"
        }
      ],
      "keys": [],
      "name": "Approval",
      "type": "event"
    },
    {
      "inputs": [
        {
          "name": "name",
          "type": "felt"
        },
        {
          "name": "symbol",
          "type": "felt"
        },
        {
          "name": "decimals",
          "type": "felt"
        },
        {
          "name": "initial_supply",
          "type": "Uint256"
        },
        {
          "name": "recipient",
          "type": "felt"
        }
      ],
      "name": "constructor",
      "outputs": [],
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "name",
          "type": "felt"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "symbol",
          "type": "felt"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "totalSupply",
          "type": "Uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "decimals",
          "type": "felt"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "account",
          "type": "felt"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "Uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "owner",
          "type": "felt"
        },
        {
          "name": "spender",
          "type": "felt"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "remaining",
          "type": "Uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "recipient",
          "type": "felt"
        },
        {
          "name": "amount",
          "type": "Uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "success",
          "type": "felt"
        }
      ],
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "sender",
          "type": "felt"
        },
        {
          "name": "recipient",
          "type": "felt"
        },
        {
          "name": "amount",
          "type": "Uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "success",
          "type": "felt"
        }
      ],
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "spender",
          "type": "felt"
        },
        {
          "name": "amount",
          "type": "Uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "success",
          "type": "felt"
        }
      ],
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "spender",
          "type": "felt"
        },
        {
          "name": "added_value",
          "type": "Uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "name": "success",
          "type": "felt"
        }
      ],
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "spender",
          "type": "felt"
        },
        {
          "name": "subtracted_value",
          "type": "Uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "name": "success",
          "type": "felt"
        }
      ],
      "type": "function"
    }
  ],
  "entry_points_by_type": {
    "CONSTRUCTOR": [
      {
        "offset": "0x410",
        "selector": "0x28ffe4ff0f226a9107253e17a904099aa4f63a02a5621de0576e5aa71bc5194"
      }
    ],
    "EXTERNAL": [
      {
        "offset": "0x521",
        "selector": "0x41b033f4a31df8067c24d1e9b550a2ce75fd4a29e1147af9752174f0e6cb20"
      },
      {
        "offset": "0x491",
        "selector": "0x4c4fb1ab068f6039d5780c68dd0fa2f8742cceb3426d19667778ca7f3518a9"
      },
      {
        "offset": "0x473",
        "selector": "0x80aa9fdbfaf9615e4afc7f5f722e265daca5ccc655360fa5ccacf9c267936d"
      },
      {
        "offset": "0x4fa",
        "selector": "0x83afd3f4caedc6eebf44246fe54e38c95e3179a5ec9ea81740eca5b482d12e"
      },
      {
        "offset": "0x56e",
        "selector": "0x16cc063b8338363cf388ce7fe1df408bf10f16cd51635d392e21d852fafb683"
      },
      {
        "offset": "0x594",
        "selector": "0x1aaf3e6107dd1349c81543ff4221a326814f77dadcc5810807b74f1a49ded4e"
      },
      {
        "offset": "0x4d5",
        "selector": "0x1e888a1026b19c8c0b57c72d63ed1737106aa10034105b980ba117bd0c29fe1"
      },
      {
        "offset": "0x454",
        "selector": "0x216b05c387bab9ac31918a3e61672f4618601f3c598a2f3f2710f37053e1ea4"
      },
      {
        "offset": "0x548",
        "selector": "0x219209e083275171774dab1df80982e9df2096516f06319c5c6d71ae0a8480c"
      },
      {
        "offset": "0x4b1",
        "selector": "0x2e4263afad30923c891518314c3c95dbe830a16874e8abc5777a9a20b54c76e"
      },
      {
        "offset": "0x436",
        "selector": "0x361458367e696363fbcc70777d07ebbd2394e89fd0adcaf147faccd1d294d60"
      }
    ],
    "L1_HANDLER": []
  },
  "program": {
    "attributes": [
      {
        "accessible_scopes": [
          "openzeppelin.security.safemath.library",
          "openzeppelin.security.safemath.library.SafeUint256",
          "openzeppelin.security.safemath.library.SafeUint256.add"
        ],
        "end_pc": 326,
        "flow_tracking_data": {
          "ap_tracking": {
            "group": 22,
            "offset": 35
          },
          "reference_ids": {}
        },
        "name": "error_message",
        "start_pc": 324,
        "value": "SafeUint256: addition overflow"
      },
      {
        "accessible_scopes": [
          "openzeppelin.security.safemath.library",
          "openzeppelin.security.safemath.library.SafeUint256",
          "openzeppelin.security.safemath.library.SafeUint256.sub_le"
        ],
        "end_pc": 349,
        "flow_tracking_data": {
          "ap_tracking": {
            "group": 23,
            "offset": 60
          },
          "reference_ids": {}
        },
        "name": "error_message",
        "start_pc": 347,
        "value": "SafeUint256: subtraction overflow"
      },
      {
        "accessible_scopes": [
          "openzeppelin.token.erc20.library",
          "openzeppelin.token.erc20.library.ERC20",
          "openzeppelin.token.erc20.library.ERC20.initializer"
        ],
        "end_pc": 665,
        "flow_tracking_data": {
          "ap_tracking": {
            "group": 44,
            "offset": 41
          },
          "reference_ids": {}
        },
        "name": "error_message",
        "start_pc": 660,
        "value": "ERC20: decimals exceed 2^8"
      },
      {
        "accessible_scopes": [
          "openzeppelin.token.erc20.library",
          "openzeppelin.token.erc20.library.ERC20",
          "openzeppelin.token.erc20.library.ERC20.approve"
        ],
        "end_pc": 752,
        "flow_tracking_data": {
          "ap_tracking": {
            "group": 56,
            "offset": 0
          },
          "reference_ids": {}
        },
        "name": "error_message",
        "start_pc": 747,
        "value": "ERC20: amount is not a valid Uint256"
      },
      {
        "accessible_scopes": [
          "openzeppelin.token.erc20.library",
          "openzeppelin.token.erc20.library.ERC20",
          "openzeppelin.token.erc20.library.ERC20.increase_allowance"
        ],
        "end_pc": 772,
        "flow_tracking_data": {
          "ap_tracking": {
            "group": 58,
            "offset": 0
          },
          "reference_ids": {}
        },
        "name": "error",
        "start_pc": 767,
        "value": "ERC20: added_value is not a valid Uint256"
      },
      {
        "accessible_scopes": [
          "openzeppelin.token.erc20.library",
          "openzeppelin.token.erc20.library.ERC20",
          "openzeppelin.token.erc20.library.ERC20.increase_allowance"
        ],
        "end_pc": 786,
        "flow_tracking_data": {
          "ap_tracking": {
            "group": 58,
            "offset": 88
          },
          "reference_ids": {}
        },
        "name": "error_message",
        "start_pc": 782,
        "value": "ERC20: allowance overflow"
      },
      {
        "accessible_scopes": [
          "openzeppelin.token.erc20.library",
          "openzeppelin.token.erc20.library.ERC20",
          "openzeppelin.token.erc20.library.ERC20.decrease_allowance"
        ],
        "end_pc": 805,
        "flow_tracking_data": {
          "ap_tracking": {
            "group": 60,
            "offset": 0
          },
          "reference_ids": {}
        },
        "name": "error_message",
        "start_pc": 800,
        "value": "ERC20: subtracted_value is not a valid Uint256"
      },
      {
        "accessible_scopes": [
          "openzeppelin.token.erc20.library",
          "openzeppelin.token.erc20.library.ERC20",
          "openzeppelin.token.erc20.library.ERC20.decrease_allowance"
        ],
        "end_pc": 819,
        "flow_tracking_data": {
          "ap_tracking": {
            "group": 60,
            "offset": 88
          },
          "reference_ids": {}
        },
        "name": "error_message",
        "start_pc": 815,
        "value": "ERC20: allowance below zero"
      },
      {
        "accessible_scopes": [
          "openzeppelin.token.erc20.library",
          "openzeppelin.token.erc20.library.ERC20",
          "openzeppelin.token.erc20.library.ERC20._mint"
        ],
        "end_pc": 836,
        "flow_tracking_data": {
          "ap_tracking": {
            "group": 62,
            "offset": 0
          },
          "reference_ids": {}
        },
        "name": "error_message",
        "start_pc": 831,
        "value": "ERC20: amount is not a valid Uint256"
      },
      {
        "accessible_scopes": [
          "openzeppelin.token.erc20.library",
          "openzeppelin.token.erc20.library.ERC20",
          "openzeppelin.token.erc20.library.ERC20._mint"
        ],
        "end_pc": 839,
        "flow_tracking_data": {
          "ap_tracking": {
            "group": 62,
            "offset": 6
          },
          "reference_ids": {}
        },
        "name": "error_message",
        "start_pc": 836,
        "value": "ERC20: cannot mint to the zero address"
      },
      {
        "accessible_scopes": [
          "openzeppelin.token.erc20.library",
          "openzeppelin.token.erc20.library.ERC20",
          "openzeppelin.token.erc20.library.ERC20._mint"
        ],
        "end_pc": 848,
        "flow_tracking_data": {
          "ap_tracking": {
            "group": 62,
            "offset": 40
          },
          "reference_ids": {}
        },
        "name": "error_message",
        "start_pc": 844,
        "value": "ERC20: mint overflow"
      },
      {
        "accessible_scopes": [
          "openzeppelin.token.erc20.library",
          "openzeppelin.token.erc20.library.ERC20",
          "openzeppelin.token.erc20.library.ERC20._transfer"
        ],
        "end_pc": 888,
        "flow_tracking_data": {
          "ap_tracking": {
            "group": 63,
            "offset": 0
          },
          "reference_ids": {}
        },
        "name": "error_message",
        "start_pc": 883,
        "value": "ERC20: amount is not a valid Uint256"
      },
      {
        "accessible_scopes": [
          "openzeppelin.token.erc20.library",
          "openzeppelin.token.erc20.library.ERC20",
          "openzeppelin.token.erc20.library.ERC20._transfer"
        ],
        "end_pc": 891,
        "flow_tracking_data": {
          "ap_tracking": {
            "group": 63,
            "offset": 6
          },
          "reference_ids": {}
        },
        "name": "error_message",
        "start_pc": 888,
        "value": "ERC20: cannot transfer from the zero address"
      },
      {
        "accessible_scopes": [
          "openzeppelin.token.erc20.library",
          "openzeppelin.token.erc20.library.ERC20",
          "openzeppelin.token.erc20.library.ERC20._transfer"
        ],
        "end_pc": 894,
        "flow_tracking_data": {
          "ap_tracking": {
            "group": 63,
            "offset": 9
          },
          "reference_ids": {}
        },
        "name": "error_message",
        "start_pc": 891,
        "value": "ERC20: cannot transfer to the zero address"
      },
      {
        "accessible_scopes": [
          "openzeppelin.token.erc20.library",
          "openzeppelin.token.erc20.library.ERC20",
          "openzeppelin.token.erc20.library.ERC20._transfer"
        ],
        "end_pc": 904,
        "flow_tracking_data": {
          "ap_tracking": {
            "group": 63,
            "offset": 81
          },
          "reference_ids": {}
        },
        "name": "error_message",
        "start_pc": 900,
        "value": "ERC20: transfer amount exceeds balance"
      },
      {
        "accessible_scopes": [
          "openzeppelin.token.erc20.library",
          "openzeppelin.token.erc20.library.ERC20",
          "openzeppelin.token.erc20.library.ERC20._approve"
        ],
        "end_pc": 944,
        "flow_tracking_data": {
          "ap_tracking": {
            "group": 64,
            "offset": 0
          },
          "reference_ids": {}
        },
        "name": "error_message",
        "start_pc": 939,
        "value": "ERC20: amount is not a valid Uint256"
      },
      {
        "accessible_scopes": [
          "openzeppelin.token.erc20.library",
          "openzeppelin.token.erc20.library.ERC20",
          "openzeppelin.token.erc20.library.ERC20._approve"
        ],
        "end_pc": 947,
        "flow_tracking_data": {
          "ap_tracking": {
            "group": 64,
            "offset": 6
          },
          "reference_ids": {}
        },
        "name": "error_message",
        "start_pc": 944,
        "value": "ERC20: cannot approve from the zero address"
      },
      {
        "accessible_scopes": [
          "openzeppelin.token.erc20.library",
          "openzeppelin.token.erc20.library.ERC20",
          "openzeppelin.token.erc20.library.ERC20._approve"
        ],
        "end_pc": 950,
        "flow_tracking_data": {
          "ap_tracking": {
            "group": 64,
            "offset": 9
          },
          "reference_ids": {}
        },
        "name": "error_message",
        "start_pc": 947,
        "value": "ERC20: cannot approve to the zero address"
      },
      {
        "accessible_scopes": [
          "openzeppelin.token.erc20.library",
          "openzeppelin.token.erc20.library.ERC20",
          "openzeppelin.token.erc20.library.ERC20._spend_allowance"
        ],
        "end_pc": 978,
        "flow_tracking_data": {
          "ap_tracking": {
            "group": 65,
            "offset": 4
          },
          "reference_ids": {}
        },
        "name": "error_message",
        "start_pc": 973,
        "value": "ERC20: amount is not a valid Uint256"
      },
      {
        "accessible_scopes": [
          "openzeppelin.token.erc20.library",
          "openzeppelin.token.erc20.library.ERC20",
          "openzeppelin.token.erc20.library.ERC20._spend_allowance"
        ],
        "end_pc": 1012,
        "flow_tracking_data": {
          "ap_tracking": {
            "group": 66,
            "offset": 0
          },
          "reference_ids": {}
        },
        "name": "error_message",
        "start_pc": 1005,
        "value": "ERC20: insufficient allowance"
      }
    ],
    "builtins": ["pedersen", "range_check"],
    "compiler_version": "0.11.2",
    "data": [
      "0x40780017fff7fff",
      "0x1",
      "0x208b7fff7fff7ffe",
      "0x400380007ffb7ffc",
      "0x400380017ffb7ffd",
      "0x482680017ffb8000",
      "0x3",
      "0x480280027ffb8000",
      "0x208b7fff7fff7ffe",
      "0x480680017fff8000",
      "0x47657443616c6c657241646472657373",
      "0x400280007ffd7fff",
      "0x482680017ffd8000",
      "0x2",
      "0x480280017ffd8000",
      "0x208b7fff7fff7ffe",
      "0x480680017fff8000",
      "0x53746f7261676552656164",
      "0x400280007ffc7fff",
      "0x400380017ffc7ffd",
      "0x482680017ffc8000",
      "0x3",
      "0x480280027ffc8000",
      "0x208b7fff7fff7ffe",
      "0x480680017fff8000",
      "0x53746f726167655772697465",
      "0x400280007ffb7fff",
      "0x400380017ffb7ffc",
      "0x400380027ffb7ffd",
      "0x482680017ffb8000",
      "0x3",
      "0x208b7fff7fff7ffe",
      "0x480680017fff8000",
      "0x456d69744576656e74",
      "0x400280007ff97fff",
      "0x400380017ff97ffa",
      "0x400380027ff97ffb",
      "0x400380037ff97ffc",
      "0x400380047ff97ffd",
      "0x482680017ff98000",
      "0x5",
      "0x208b7fff7fff7ffe",
      "0x20780017fff7ffd",
      "0x4",
      "0x400780017fff7ffd",
      "0x1",
      "0x208b7fff7fff7ffe",
      "0x400380007ffc7ffd",
      "0x482680017ffc8000",
      "0x1",
      "0x208b7fff7fff7ffe",
      "0x480a7ffb7fff8000",
      "0x48297ffc80007ffd",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffffb",
      "0x208b7fff7fff7ffe",
      "0x480680017fff8000",
      "0x3ffffffffffffffffffffffffffffff",
      "0x480280017ffc8000",
      "0x48307fff80007ffe",
      "0x400280027ffc7fff",
      "0x480280017ffc8000",
      "0x484480017fff8000",
      "0x100000000000000000000000000000000",
      "0x480280007ffc8000",
      "0x40317fff7ffe7ffd",
      "0x482680017ffc8000",
      "0x3",
      "0x208b7fff7fff7ffe",
      "0x480280007ffb8000",
      "0x480280017ffb8000",
      "0x484480017fff8000",
      "0x2aaaaaaaaaaaab05555555555555556",
      "0x48307fff7ffd8000",
      "0x480280027ffb8000",
      "0x480280037ffb8000",
      "0x484480017fff8000",
      "0x4000000000000088000000000000001",
      "0x48307fff7ffd8000",
      "0xa0680017fff8000",
      "0xe",
      "0x480680017fff8000",
      "0x800000000000011000000000000000000000000000000000000000000000000",
      "0x48287ffc80007fff",
      "0x40307ffc7ff87fff",
      "0x48297ffd80007ffc",
      "0x482680017ffd8000",
      "0x1",
      "0x48507fff7ffe8000",
      "0x40507ff97ff57fff",
      "0x482680017ffb8000",
      "0x4",
      "0x208b7fff7fff7ffe",
      "0xa0680017fff8000",
      "0xc",
      "0x480680017fff8000",
      "0x800000000000011000000000000000000000000000000000000000000000000",
      "0x48287ffd80007fff",
      "0x48327fff7ffc8000",
      "0x40307ffa7ff67fff",
      "0x48527ffe7ffc8000",
      "0x40507ff97ff57fff",
      "0x482680017ffb8000",
      "0x4",
      "0x208b7fff7fff7ffe",
      "0x40317ffd7ff97ffd",
      "0x48297ffc80007ffd",
      "0x48527fff7ffc8000",
      "0x40507ffb7ff77fff",
      "0x40780017fff7fff",
      "0x2",
      "0x482680017ffb8000",
      "0x4",
      "0x208b7fff7fff7ffe",
      "0x40780017fff7fff",
      "0x1",
      "0x20680017fff7fff",
      "0x10",
      "0x480a7ffc7fff8000",
      "0x482680017ffd8000",
      "0x11000000000000000000000000000000000000000000000101",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffc0",
      "0x480680017fff8000",
      "0x800000000000011000000000000000000000000000000000000000000000000",
      "0x48127ffe7fff8000",
      "0x48287ffd80007ffe",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffba",
      "0x482680017ffd8000",
      "0x11000000000000000000000000000000000000000000000101",
      "0x208b7fff7fff7ffe",
      "0x40780017fff7fff",
      "0x1",
      "0x20680017fff7fff",
      "0xc",
      "0x40780017fff7fff",
      "0xa",
      "0x480680017fff8000",
      "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeff",
      "0x480a7ffc7fff8000",
      "0x48287ffd80007ffe",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffab",
      "0x10780017fff7fff",
      "0x8",
      "0x40780017fff7fff",
      "0xb",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffa3",
      "0x480a7ffd7fff8000",
      "0x208b7fff7fff7ffe",
      "0xa0680017fff8000",
      "0xa",
      "0x400380007ffc7ffd",
      "0x40780017fff7fff",
      "0x14",
      "0x482680017ffc8000",
      "0x1",
      "0x480680017fff8000",
      "0x1",
      "0x208b7fff7fff7ffe",
      "0xa0680017fff8000",
      "0xe",
      "0x484680017ffd8000",
      "0x800000000000011000000000000000000000000000000000000000000000000",
      "0x482480017fff8000",
      "0x800000000000011000000000000000000000000000000000000000000000000",
      "0x400280007ffc7fff",
      "0x40780017fff7fff",
      "0x11",
      "0x482680017ffc8000",
      "0x1",
      "0x480680017fff8000",
      "0x0",
      "0x208b7fff7fff7ffe",
      "0x480a7ffc7fff8000",
      "0x480680017fff8000",
      "0x100000000000000000000000000000000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff90",
      "0x480680017fff8000",
      "0x0",
      "0x208b7fff7fff7ffe",
      "0x480a7ffb7fff8000",
      "0x48297ffc80007ffd",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffde",
      "0x208b7fff7fff7ffe",
      "0x400380007ffb7ffc",
      "0x400380017ffb7ffd",
      "0x482680017ffb8000",
      "0x2",
      "0x208b7fff7fff7ffe",
      "0x40780017fff7fff",
      "0x4",
      "0x404b800280028002",
      "0x404b800380038003",
      "0x482a7ffc7ffa8000",
      "0x4846800180028000",
      "0x100000000000000000000000000000000",
      "0x40327fff80007ffe",
      "0x482a7ffd7ffb8000",
      "0x482880027fff8000",
      "0x4846800180038000",
      "0x100000000000000000000000000000000",
      "0x40327fff80017ffe",
      "0x480a7ff97fff8000",
      "0x480a80007fff8000",
      "0x480a80017fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffec",
      "0x480a80007fff8000",
      "0x480a80017fff8000",
      "0x480a80037fff8000",
      "0x208b7fff7fff7ffe",
      "0x48297ffd80007ffb",
      "0x20680017fff7fff",
      "0x9",
      "0x480a7ff97fff8000",
      "0x482680017ffa8000",
      "0x1",
      "0x480a7ffc7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffda",
      "0x208b7fff7fff7ffe",
      "0x480a7ff97fff8000",
      "0x482680017ffb8000",
      "0x1",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffd3",
      "0x208b7fff7fff7ffe",
      "0x480a7ff97fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x480a7ffa7fff8000",
      "0x480a7ffb7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffeb",
      "0x480680017fff8000",
      "0x1",
      "0x48127ffd7fff8000",
      "0x48307ffd80007ffe",
      "0x208b7fff7fff7ffe",
      "0x480680017fff8000",
      "0xffffffffffffffffffffffffffffffff",
      "0x480680017fff8000",
      "0xffffffffffffffffffffffffffffffff",
      "0x480a7ffb7fff8000",
      "0x48287ffc80007ffd",
      "0x48287ffd80007ffd",
      "0x208b7fff7fff7ffe",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffff6",
      "0x480680017fff8000",
      "0x1",
      "0x480680017fff8000",
      "0x0",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffbd",
      "0x48127ffc7fff8000",
      "0x48127ffc7fff8000",
      "0x48127ffc7fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ff97fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffef",
      "0x48127ffd7fff8000",
      "0x480a7ffa7fff8000",
      "0x480a7ffb7fff8000",
      "0x48127ffb7fff8000",
      "0x48127ffb7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffad",
      "0x48127ffc7fff8000",
      "0x48127ffc7fff8000",
      "0x48127ffc7fff8000",
      "0x208b7fff7fff7ffe",
      "0x48297ffd80007ffb",
      "0x20680017fff7fff",
      "0x4",
      "0x10780017fff7fff",
      "0x6",
      "0x480a7ff97fff8000",
      "0x480680017fff8000",
      "0x0",
      "0x208b7fff7fff7ffe",
      "0x48297ffc80007ffa",
      "0x20680017fff7fff",
      "0x4",
      "0x10780017fff7fff",
      "0x6",
      "0x480a7ff97fff8000",
      "0x480680017fff8000",
      "0x0",
      "0x208b7fff7fff7ffe",
      "0x480a7ff97fff8000",
      "0x480680017fff8000",
      "0x1",
      "0x208b7fff7fff7ffe",
      "0x480a7ff97fff8000",
      "0x480a7ffa7fff8000",
      "0x480a7ffb7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff89",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff85",
      "0x480a7ffa7fff8000",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff84",
      "0x400680017fff7fff",
      "0x0",
      "0x48127ffc7fff8000",
      "0x48127ffc7fff8000",
      "0x48127ffc7fff8000",
      "0x208b7fff7fff7ffe",
      "0x40780017fff7fff",
      "0x0",
      "0x480a7ff97fff8000",
      "0x480a7ffa7fff8000",
      "0x480a7ffb7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff72",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff6e",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x480a7ffa7fff8000",
      "0x480a7ffb7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff94",
      "0x400680017fff7fff",
      "0x1",
      "0x48127ffe7fff8000",
      "0x480a7ffa7fff8000",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffae",
      "0x208b7fff7fff7ffe",
      "0x40780017fff7fff",
      "0x2",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe9a",
      "0x40137fff7fff8000",
      "0x480680017fff8000",
      "0x99cd8bde557814842a3121e8ddfd433a539b8c9f14bf31ebf108d12e6196e9",
      "0x4002800080007fff",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe94",
      "0x40137fff7fff8001",
      "0x4003800080017ffa",
      "0x4003800180017ffb",
      "0x4003800280017ffc",
      "0x4003800380017ffd",
      "0x4826800180018000",
      "0x4",
      "0x480a7ff87fff8000",
      "0x480680017fff8000",
      "0x1",
      "0x480a80007fff8000",
      "0x4828800180007ffc",
      "0x480a80017fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffea5",
      "0x480a7ff97fff8000",
      "0x208b7fff7fff7ffe",
      "0x40780017fff7fff",
      "0x2",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe7f",
      "0x40137fff7fff8000",
      "0x480680017fff8000",
      "0x134692b230b9e1ffa39098904722134159652b09c5bc41d88d6698779d228ff",
      "0x4002800080007fff",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe79",
      "0x40137fff7fff8001",
      "0x4003800080017ffa",
      "0x4003800180017ffb",
      "0x4003800280017ffc",
      "0x4003800380017ffd",
      "0x4826800180018000",
      "0x4",
      "0x480a7ff87fff8000",
      "0x480680017fff8000",
      "0x1",
      "0x480a80007fff8000",
      "0x4828800180007ffc",
      "0x480a80017fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe8a",
      "0x480a7ff97fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x480680017fff8000",
      "0x341c1bdfd89f69748aa00b5742b03adbffd79b8e80cab5c50d91cd8c2a79be1",
      "0x208b7fff7fff7ffe",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffffa",
      "0x480a7ffb7fff8000",
      "0x48127ffe7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe6b",
      "0x48127ffe7fff8000",
      "0x48127ff57fff8000",
      "0x48127ff57fff8000",
      "0x48127ffc7fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffed",
      "0x480a7ffa7fff8000",
      "0x48127ffe7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe65",
      "0x48127ff67fff8000",
      "0x48127ff67fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x480680017fff8000",
      "0xb6ce5410fca59d078ee9b2a4371a9d684c530d697c64fbef0ae6d5e8f0ac72",
      "0x208b7fff7fff7ffe",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffffa",
      "0x480a7ffb7fff8000",
      "0x48127ffe7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe4d",
      "0x48127ffe7fff8000",
      "0x48127ff57fff8000",
      "0x48127ff57fff8000",
      "0x48127ffc7fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffed",
      "0x480a7ffa7fff8000",
      "0x48127ffe7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe47",
      "0x48127ff67fff8000",
      "0x48127ff67fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x480680017fff8000",
      "0x1f0d4aa99431d246bac9b8e48c33e888245b15e9678f64f9bdfc8823dc8f979",
      "0x208b7fff7fff7ffe",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffffa",
      "0x480a7ffb7fff8000",
      "0x48127ffe7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe2f",
      "0x48127ffe7fff8000",
      "0x48127ff57fff8000",
      "0x48127ff57fff8000",
      "0x48127ffc7fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffed",
      "0x480a7ffa7fff8000",
      "0x48127ffe7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe29",
      "0x48127ff67fff8000",
      "0x48127ff67fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x480680017fff8000",
      "0x110e2f729c9c2b988559994a3daccd838cf52faf88e18101373e67dd061455a",
      "0x208b7fff7fff7ffe",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffffa",
      "0x480a7ffb7fff8000",
      "0x48127ffe7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe11",
      "0x48127ffe7fff8000",
      "0x482480017ff78000",
      "0x1",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe0c",
      "0x48127ffe7fff8000",
      "0x48127fee7fff8000",
      "0x48127fee7fff8000",
      "0x48127ff57fff8000",
      "0x48127ffb7fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ffa7fff8000",
      "0x480a7ffb7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffe7",
      "0x480a7ff97fff8000",
      "0x48127ffe7fff8000",
      "0x480a7ffc7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe05",
      "0x482480017ff88000",
      "0x1",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe00",
      "0x48127ff07fff8000",
      "0x48127ff07fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ffb7fff8000",
      "0x480680017fff8000",
      "0x3a4e8ec16e258a799fe707996fd5d21d42b29adc1499a370edf7f809d8c458a",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffde2",
      "0x480a7ffc7fff8000",
      "0x48127ffe7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe4d",
      "0x48127fe17fff8000",
      "0x48127ffd7fff8000",
      "0x48127ffd7fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffff0",
      "0x480a7ffa7fff8000",
      "0x48127ffe7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffdde",
      "0x48127ffe7fff8000",
      "0x482480017ff78000",
      "0x1",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffdd9",
      "0x48127ffe7fff8000",
      "0x48127fee7fff8000",
      "0x48127fee7fff8000",
      "0x48127ff57fff8000",
      "0x48127ffb7fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ff97fff8000",
      "0x480a7ffa7fff8000",
      "0x480a7ffb7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffdc",
      "0x480a7ff87fff8000",
      "0x48127ffe7fff8000",
      "0x480a7ffc7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffdd1",
      "0x482480017ff88000",
      "0x1",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffdcc",
      "0x48127ff07fff8000",
      "0x48127ff07fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ffa7fff8000",
      "0x480680017fff8000",
      "0x3c87bf42ed4f01f11883bf54f43d91d2cbbd5fec26d1df9c74c57ae138800a4",
      "0x480a7ffc7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffdae",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffdab",
      "0x480a7ffb7fff8000",
      "0x48127ffe7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe16",
      "0x48127fe17fff8000",
      "0x48127ffd7fff8000",
      "0x48127ffd7fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ffa7fff8000",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffec",
      "0x480a7ff97fff8000",
      "0x48127ffe7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffda6",
      "0x48127ffe7fff8000",
      "0x482480017ff78000",
      "0x1",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffda1",
      "0x48127ffe7fff8000",
      "0x48127fee7fff8000",
      "0x48127fee7fff8000",
      "0x48127ff57fff8000",
      "0x48127ffb7fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ff87fff8000",
      "0x480a7ff97fff8000",
      "0x480a7ffa7fff8000",
      "0x480a7ffb7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffd7",
      "0x480a7ff77fff8000",
      "0x48127ffe7fff8000",
      "0x480a7ffc7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffd98",
      "0x482480017ff88000",
      "0x1",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffd93",
      "0x48127ff07fff8000",
      "0x48127ff07fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ff87fff8000",
      "0x480a7ff97fff8000",
      "0x480a7ffa7fff8000",
      "0x480a7ffb7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff1f",
      "0x480a7ffc7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff3a",
      "0x480a7ffd7fff8000",
      "0x480680017fff8000",
      "0xff",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffd9d",
      "0x48127ff47fff8000",
      "0x48127ff47fff8000",
      "0x48127ffd7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff4d",
      "0x208b7fff7fff7ffe",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffefe",
      "0x208b7fff7fff7ffe",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff16",
      "0x208b7fff7fff7ffe",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff4c",
      "0x208b7fff7fff7ffe",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff28",
      "0x208b7fff7fff7ffe",
      "0x480a7ffa7fff8000",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff71",
      "0x208b7fff7fff7ffe",
      "0x480a7ff97fff8000",
      "0x480a7ffa7fff8000",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffa0",
      "0x208b7fff7fff7ffe",
      "0x480a7ff87fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffd42",
      "0x48127ffe7fff8000",
      "0x480a7ff97fff8000",
      "0x480a7ffa7fff8000",
      "0x48127ffc7fff8000",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0xa2",
      "0x480680017fff8000",
      "0x1",
      "0x208b7fff7fff7ffe",
      "0x480a7ff77fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffd33",
      "0x48127ffe7fff8000",
      "0x480a7ff87fff8000",
      "0x480a7ff97fff8000",
      "0x480a7ffa7fff8000",
      "0x48127ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0xeb",
      "0x480a7ffa7fff8000",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x8d",
      "0x480680017fff8000",
      "0x1",
      "0x208b7fff7fff7ffe",
      "0x480a7ffa7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffdd3",
      "0x480a7ff87fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffd19",
      "0x48127ffe7fff8000",
      "0x480a7ff97fff8000",
      "0x48127ff77fff8000",
      "0x48127ffc7fff8000",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0xb1",
      "0x480680017fff8000",
      "0x1",
      "0x208b7fff7fff7ffe",
      "0x480a7ffa7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffdbf",
      "0x480a7ff87fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffd05",
      "0x48127ffe7fff8000",
      "0x480a7ff97fff8000",
      "0x48127ff77fff8000",
      "0x48127ffc7fff8000",
      "0x480a7ffb7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff58",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe26",
      "0x48127fd17fff8000",
      "0x48127fd17fff8000",
      "0x48127ffb7fff8000",
      "0x48127f867fff8000",
      "0x480a7ffb7fff8000",
      "0x48127ff97fff8000",
      "0x48127ff97fff8000",
      "0x1104800180018000",
      "0x92",
      "0x480680017fff8000",
      "0x1",
      "0x208b7fff7fff7ffe",
      "0x40780017fff7fff",
      "0x0",
      "0x480a7ffa7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffd9e",
      "0x480a7ff87fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffce4",
      "0x48127ffe7fff8000",
      "0x480a7ff97fff8000",
      "0x48127ff77fff8000",
      "0x48127ffc7fff8000",
      "0x480a7ffb7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff37",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe1a",
      "0x48127f707fff8000",
      "0x48127f707fff8000",
      "0x48127ffb7fff8000",
      "0x48127f257fff8000",
      "0x480a7ffb7fff8000",
      "0x48127ff97fff8000",
      "0x48127ff97fff8000",
      "0x1104800180018000",
      "0x71",
      "0x480680017fff8000",
      "0x1",
      "0x208b7fff7fff7ffe",
      "0x480a7ffa7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffd7f",
      "0x480a7ffb7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffce6",
      "0x480a7ff87fff8000",
      "0x480a7ff97fff8000",
      "0x48127ffa7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffeb1",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffde8",
      "0x48127fd17fff8000",
      "0x48127fd17fff8000",
      "0x48127ffb7fff8000",
      "0x48127ffb7fff8000",
      "0x48127ffb7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffeb9",
      "0x480a7ffb7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffed5",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffdda",
      "0x48127fd17fff8000",
      "0x48127fd17fff8000",
      "0x48127ffb7fff8000",
      "0x480a7ffb7fff8000",
      "0x48127ffa7fff8000",
      "0x48127ffa7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffedd",
      "0x48127ffd7fff8000",
      "0x48127ffe7fff8000",
      "0x480680017fff8000",
      "0x0",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffdf9",
      "0x48127ffe7fff8000",
      "0x48127fe17fff8000",
      "0x48127ffd7fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ff97fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffd4b",
      "0x480a7ffa7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffcb2",
      "0x480a7ffb7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffcaf",
      "0x480a7ff77fff8000",
      "0x480a7ff87fff8000",
      "0x48127ff77fff8000",
      "0x480a7ffa7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffeab",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffdc5",
      "0x48127f707fff8000",
      "0x48127f707fff8000",
      "0x48127ffb7fff8000",
      "0x480a7ffa7fff8000",
      "0x48127ffa7fff8000",
      "0x48127ffa7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffeb3",
      "0x480a7ffb7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe9c",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffda1",
      "0x48127fd17fff8000",
      "0x48127fd17fff8000",
      "0x48127ffb7fff8000",
      "0x480a7ffb7fff8000",
      "0x48127ffa7fff8000",
      "0x48127ffa7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffea4",
      "0x48127ffd7fff8000",
      "0x48127ffe7fff8000",
      "0x480a7ffa7fff8000",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffdc1",
      "0x48127ffe7fff8000",
      "0x48127fe17fff8000",
      "0x48127ffd7fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ff97fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffd13",
      "0x480a7ffa7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffc7a",
      "0x480a7ffb7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffc77",
      "0x480a7ff77fff8000",
      "0x480a7ff87fff8000",
      "0x48127ff77fff8000",
      "0x480a7ffa7fff8000",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffebc",
      "0x48127ffd7fff8000",
      "0x48127ffe7fff8000",
      "0x480a7ffa7fff8000",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffdbc",
      "0x48127ffe7fff8000",
      "0x48127fe17fff8000",
      "0x48127ffd7fff8000",
      "0x208b7fff7fff7ffe",
      "0x40780017fff7fff",
      "0x4",
      "0x480a7ff97fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffcf1",
      "0x480a7ff77fff8000",
      "0x480a7ff87fff8000",
      "0x48127ffd7fff8000",
      "0x480a7ffa7fff8000",
      "0x480a7ffb7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe8d",
      "0x40137ffe7fff8000",
      "0x40137fff7fff8001",
      "0x40137ffb7fff8002",
      "0x40137ffc7fff8003",
      "0x48127ffd7fff8000",
      "0x480680017fff8000",
      "0x0",
      "0x480680017fff8000",
      "0x0",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffd17",
      "0x48127ffd7fff8000",
      "0x480a80007fff8000",
      "0x480a80017fff8000",
      "0x48127ffb7fff8000",
      "0x48127ffb7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffd37",
      "0x20680017fff7fff",
      "0x13",
      "0x48127ffe7fff8000",
      "0x480a80007fff8000",
      "0x480a80017fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffd59",
      "0x480a80027fff8000",
      "0x480a80037fff8000",
      "0x48127ffb7fff8000",
      "0x480a7ffa7fff8000",
      "0x480a7ffb7fff8000",
      "0x48127ff97fff8000",
      "0x48127ff97fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffb1",
      "0x208b7fff7fff7ffe",
      "0x480a80027fff8000",
      "0x480a80037fff8000",
      "0x48127ffc7fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ff57fff8000",
      "0x480a7ff67fff8000",
      "0x480a7ff77fff8000",
      "0x480a7ff87fff8000",
      "0x480a7ff97fff8000",
      "0x480a7ffa7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe84",
      "0x480a7ffd7fff8000",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff33",
      "0x208b7fff7fff7ffe",
      "0x482680017ffd8000",
      "0x6",
      "0x402a7ffd7ffc7fff",
      "0x480280007ffb8000",
      "0x480280017ffb8000",
      "0x480280027ffb8000",
      "0x480280007ffd8000",
      "0x480280017ffd8000",
      "0x480280027ffd8000",
      "0x480280037ffd8000",
      "0x480280047ffd8000",
      "0x480280057ffd8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffe7",
      "0x40780017fff7fff",
      "0x1",
      "0x48127ffc7fff8000",
      "0x48127ffc7fff8000",
      "0x48127ffc7fff8000",
      "0x480680017fff8000",
      "0x0",
      "0x48127ffb7fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe77",
      "0x208b7fff7fff7ffe",
      "0x40780017fff7fff",
      "0x1",
      "0x4003800080007ffc",
      "0x4826800180008000",
      "0x1",
      "0x480a7ffd7fff8000",
      "0x4828800080007ffe",
      "0x480a80007fff8000",
      "0x208b7fff7fff7ffe",
      "0x402b7ffd7ffc7ffd",
      "0x480280007ffb8000",
      "0x480280017ffb8000",
      "0x480280027ffb8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffee",
      "0x48127ffe7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffff1",
      "0x48127ff47fff8000",
      "0x48127ff47fff8000",
      "0x48127ffb7fff8000",
      "0x48127ffb7fff8000",
      "0x48127ffb7fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe5f",
      "0x208b7fff7fff7ffe",
      "0x40780017fff7fff",
      "0x1",
      "0x4003800080007ffc",
      "0x4826800180008000",
      "0x1",
      "0x480a7ffd7fff8000",
      "0x4828800080007ffe",
      "0x480a80007fff8000",
      "0x208b7fff7fff7ffe",
      "0x402b7ffd7ffc7ffd",
      "0x480280007ffb8000",
      "0x480280017ffb8000",
      "0x480280027ffb8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffee",
      "0x48127ffe7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffff1",
      "0x48127ff47fff8000",
      "0x48127ff47fff8000",
      "0x48127ffb7fff8000",
      "0x48127ffb7fff8000",
      "0x48127ffb7fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe47",
      "0x208b7fff7fff7ffe",
      "0x40780017fff7fff",
      "0x1",
      "0x4003800080007ffb",
      "0x4003800180007ffc",
      "0x4826800180008000",
      "0x2",
      "0x480a7ffd7fff8000",
      "0x4828800080007ffe",
      "0x480a80007fff8000",
      "0x208b7fff7fff7ffe",
      "0x402b7ffd7ffc7ffd",
      "0x480280007ffb8000",
      "0x480280017ffb8000",
      "0x480280027ffb8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffed",
      "0x48127ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffff0",
      "0x48127ff37fff8000",
      "0x48127ff37fff8000",
      "0x48127ffb7fff8000",
      "0x48127ffb7fff8000",
      "0x48127ffb7fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe2e",
      "0x208b7fff7fff7ffe",
      "0x40780017fff7fff",
      "0x1",
      "0x4003800080007ffc",
      "0x4826800180008000",
      "0x1",
      "0x480a7ffd7fff8000",
      "0x4828800080007ffe",
      "0x480a80007fff8000",
      "0x208b7fff7fff7ffe",
      "0x402b7ffd7ffc7ffd",
      "0x480280007ffb8000",
      "0x480280017ffb8000",
      "0x480280027ffb8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffee",
      "0x48127ffe7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffff1",
      "0x48127ff47fff8000",
      "0x48127ff47fff8000",
      "0x48127ffb7fff8000",
      "0x48127ffb7fff8000",
      "0x48127ffb7fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ffa7fff8000",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe15",
      "0x208b7fff7fff7ffe",
      "0x40780017fff7fff",
      "0x1",
      "0x4003800080007ffb",
      "0x4003800180007ffc",
      "0x4826800180008000",
      "0x2",
      "0x480a7ffd7fff8000",
      "0x4828800080007ffe",
      "0x480a80007fff8000",
      "0x208b7fff7fff7ffe",
      "0x482680017ffd8000",
      "0x1",
      "0x402a7ffd7ffc7fff",
      "0x480280007ffb8000",
      "0x480280017ffb8000",
      "0x480280027ffb8000",
      "0x480280007ffd8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffe9",
      "0x48127ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffed",
      "0x48127ff37fff8000",
      "0x48127ff37fff8000",
      "0x48127ffb7fff8000",
      "0x48127ffb7fff8000",
      "0x48127ffb7fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ff97fff8000",
      "0x480a7ffa7fff8000",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffdf8",
      "0x208b7fff7fff7ffe",
      "0x40780017fff7fff",
      "0x1",
      "0x4003800080007ffb",
      "0x4003800180007ffc",
      "0x4826800180008000",
      "0x2",
      "0x480a7ffd7fff8000",
      "0x4828800080007ffe",
      "0x480a80007fff8000",
      "0x208b7fff7fff7ffe",
      "0x482680017ffd8000",
      "0x2",
      "0x402a7ffd7ffc7fff",
      "0x480280007ffb8000",
      "0x480280017ffb8000",
      "0x480280027ffb8000",
      "0x480280007ffd8000",
      "0x480280017ffd8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffe7",
      "0x48127ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffec",
      "0x48127ff37fff8000",
      "0x48127ff37fff8000",
      "0x48127ffb7fff8000",
      "0x48127ffb7fff8000",
      "0x48127ffb7fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ff87fff8000",
      "0x480a7ff97fff8000",
      "0x480a7ffa7fff8000",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffdda",
      "0x208b7fff7fff7ffe",
      "0x40780017fff7fff",
      "0x1",
      "0x4003800080007ffc",
      "0x4826800180008000",
      "0x1",
      "0x480a7ffd7fff8000",
      "0x4828800080007ffe",
      "0x480a80007fff8000",
      "0x208b7fff7fff7ffe",
      "0x482680017ffd8000",
      "0x3",
      "0x402a7ffd7ffc7fff",
      "0x480280007ffb8000",
      "0x480280017ffb8000",
      "0x480280027ffb8000",
      "0x480280007ffd8000",
      "0x480280017ffd8000",
      "0x480280027ffd8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffe6",
      "0x48127ffe7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffec",
      "0x48127ff47fff8000",
      "0x48127ff47fff8000",
      "0x48127ffb7fff8000",
      "0x48127ffb7fff8000",
      "0x48127ffb7fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ff77fff8000",
      "0x480a7ff87fff8000",
      "0x480a7ff97fff8000",
      "0x480a7ffa7fff8000",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffdc2",
      "0x208b7fff7fff7ffe",
      "0x40780017fff7fff",
      "0x1",
      "0x4003800080007ffc",
      "0x4826800180008000",
      "0x1",
      "0x480a7ffd7fff8000",
      "0x4828800080007ffe",
      "0x480a80007fff8000",
      "0x208b7fff7fff7ffe",
      "0x482680017ffd8000",
      "0x4",
      "0x402a7ffd7ffc7fff",
      "0x480280007ffb8000",
      "0x480280017ffb8000",
      "0x480280027ffb8000",
      "0x480280007ffd8000",
      "0x480280017ffd8000",
      "0x480280027ffd8000",
      "0x480280037ffd8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffe4",
      "0x48127ffe7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffeb",
      "0x48127ff47fff8000",
      "0x48127ff47fff8000",
      "0x48127ffb7fff8000",
      "0x48127ffb7fff8000",
      "0x48127ffb7fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ff87fff8000",
      "0x480a7ff97fff8000",
      "0x480a7ffa7fff8000",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffdb0",
      "0x208b7fff7fff7ffe",
      "0x40780017fff7fff",
      "0x1",
      "0x4003800080007ffc",
      "0x4826800180008000",
      "0x1",
      "0x480a7ffd7fff8000",
      "0x4828800080007ffe",
      "0x480a80007fff8000",
      "0x208b7fff7fff7ffe",
      "0x482680017ffd8000",
      "0x3",
      "0x402a7ffd7ffc7fff",
      "0x480280007ffb8000",
      "0x480280017ffb8000",
      "0x480280027ffb8000",
      "0x480280007ffd8000",
      "0x480280017ffd8000",
      "0x480280027ffd8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffe6",
      "0x48127ffe7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffec",
      "0x48127ff47fff8000",
      "0x48127ff47fff8000",
      "0x48127ffb7fff8000",
      "0x48127ffb7fff8000",
      "0x48127ffb7fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ff87fff8000",
      "0x480a7ff97fff8000",
      "0x480a7ffa7fff8000",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffd9e",
      "0x208b7fff7fff7ffe",
      "0x40780017fff7fff",
      "0x1",
      "0x4003800080007ffc",
      "0x4826800180008000",
      "0x1",
      "0x480a7ffd7fff8000",
      "0x4828800080007ffe",
      "0x480a80007fff8000",
      "0x208b7fff7fff7ffe",
      "0x482680017ffd8000",
      "0x3",
      "0x402a7ffd7ffc7fff",
      "0x480280007ffb8000",
      "0x480280017ffb8000",
      "0x480280027ffb8000",
      "0x480280007ffd8000",
      "0x480280017ffd8000",
      "0x480280027ffd8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffe6",
      "0x48127ffe7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffec",
      "0x48127ff47fff8000",
      "0x48127ff47fff8000",
      "0x48127ffb7fff8000",
      "0x48127ffb7fff8000",
      "0x48127ffb7fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ff87fff8000",
      "0x480a7ff97fff8000",
      "0x480a7ffa7fff8000",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffd97",
      "0x208b7fff7fff7ffe",
      "0x40780017fff7fff",
      "0x1",
      "0x4003800080007ffc",
      "0x4826800180008000",
      "0x1",
      "0x480a7ffd7fff8000",
      "0x4828800080007ffe",
      "0x480a80007fff8000",
      "0x208b7fff7fff7ffe",
      "0x482680017ffd8000",
      "0x3",
      "0x402a7ffd7ffc7fff",
      "0x480280007ffb8000",
      "0x480280017ffb8000",
      "0x480280027ffb8000",
      "0x480280007ffd8000",
      "0x480280017ffd8000",
      "0x480280027ffd8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffe6",
      "0x48127ffe7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffec",
      "0x48127ff47fff8000",
      "0x48127ff47fff8000",
      "0x48127ffb7fff8000",
      "0x48127ffb7fff8000",
      "0x48127ffb7fff8000",
      "0x208b7fff7fff7ffe"
    ],
    "debug_info": null,
    "hints": {
      "0": [
        {
          "accessible_scopes": [
            "starkware.cairo.common.alloc",
            "starkware.cairo.common.alloc.alloc"
          ],
          "code": "memory[ap] = segments.add()",
          "flow_tracking_data": {
            "ap_tracking": {
              "group": 0,
              "offset": 0
            },
            "reference_ids": {}
          }
        }
      ],
      "12": [
        {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.get_caller_address"
          ],
          "code": "syscall_handler.get_caller_address(segments=segments, syscall_ptr=ids.syscall_ptr)",
          "flow_tracking_data": {
            "ap_tracking": {
              "group": 2,
              "offset": 1
            },
            "reference_ids": {
              "starkware.starknet.common.syscalls.get_caller_address.syscall_ptr": 0
            }
          }
        }
      ],
      "20": [
        {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.storage_read"
          ],
          "code": "syscall_handler.storage_read(segments=segments, syscall_ptr=ids.syscall_ptr)",
          "flow_tracking_data": {
            "ap_tracking": {
              "group": 3,
              "offset": 1
            },
            "reference_ids": {
              "starkware.starknet.common.syscalls.storage_read.syscall_ptr": 1
            }
          }
        }
      ],
      "29": [
        {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.storage_write"
          ],
          "code": "syscall_handler.storage_write(segments=segments, syscall_ptr=ids.syscall_ptr)",
          "flow_tracking_data": {
            "ap_tracking": {
              "group": 4,
              "offset": 1
            },
            "reference_ids": {
              "starkware.starknet.common.syscalls.storage_write.syscall_ptr": 2
            }
          }
        }
      ],
      "39": [
        {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.emit_event"
          ],
          "code": "syscall_handler.emit_event(segments=segments, syscall_ptr=ids.syscall_ptr)",
          "flow_tracking_data": {
            "ap_tracking": {
              "group": 5,
              "offset": 1
            },
            "reference_ids": {
              "starkware.starknet.common.syscalls.emit_event.syscall_ptr": 3
            }
          }
        }
      ],
      "42": [
        {
          "accessible_scopes": [
            "starkware.cairo.common.math",
            "starkware.cairo.common.math.assert_not_zero"
          ],
          "code": "from starkware.cairo.common.math_utils import assert_integer\nassert_integer(ids.value)\nassert ids.value % PRIME != 0, f'assert_not_zero failed: {ids.value} = 0.'",
          "flow_tracking_data": {
            "ap_tracking": {
              "group": 6,
              "offset": 0
            },
            "reference_ids": {
              "starkware.cairo.common.math.assert_not_zero.value": 4
            }
          }
        }
      ],
      "47": [
        {
          "accessible_scopes": [
            "starkware.cairo.common.math",
            "starkware.cairo.common.math.assert_nn"
          ],
          "code": "from starkware.cairo.common.math_utils import assert_integer\nassert_integer(ids.a)\nassert 0 <= ids.a % PRIME < range_check_builtin.bound, f'a = {ids.a} is out of range.'",
          "flow_tracking_data": {
            "ap_tracking": {
              "group": 7,
              "offset": 0
            },
            "reference_ids": {
              "starkware.cairo.common.math.assert_nn.a": 5
            }
          }
        }
      ],
      "56": [
        {
          "accessible_scopes": [
            "starkware.cairo.common.math",
            "starkware.cairo.common.math.assert_250_bit"
          ],
          "code": "from starkware.cairo.common.math_utils import as_int\n\n# Correctness check.\nvalue = as_int(ids.value, PRIME) % PRIME\nassert value < ids.UPPER_BOUND, f'{value} is outside of the range [0, 2**250).'\n\n# Calculation for the assertion.\nids.high, ids.low = divmod(ids.value, ids.SHIFT)",
          "flow_tracking_data": {
            "ap_tracking": {
              "group": 9,
              "offset": 0
            },
            "reference_ids": {
              "starkware.cairo.common.math.assert_250_bit.high": 8,
              "starkware.cairo.common.math.assert_250_bit.low": 7,
              "starkware.cairo.common.math.assert_250_bit.value": 6
            }
          }
        }
      ],
      "69": [
        {
          "accessible_scopes": [
            "starkware.cairo.common.math",
            "starkware.cairo.common.math.assert_le_felt"
          ],
          "code": "import itertools\n\nfrom starkware.cairo.common.math_utils import assert_integer\nassert_integer(ids.a)\nassert_integer(ids.b)\na = ids.a % PRIME\nb = ids.b % PRIME\nassert a <= b, f'a = {a} is not less than or equal to b = {b}.'\n\n# Find an arc less than PRIME / 3, and another less than PRIME / 2.\nlengths_and_indices = [(a, 0), (b - a, 1), (PRIME - 1 - b, 2)]\nlengths_and_indices.sort()\nassert lengths_and_indices[0][0] <= PRIME // 3 and lengths_and_indices[1][0] <= PRIME // 2\nexcluded = lengths_and_indices[2][1]\n\nmemory[ids.range_check_ptr + 1], memory[ids.range_check_ptr + 0] = (\n    divmod(lengths_and_indices[0][0], ids.PRIME_OVER_3_HIGH))\nmemory[ids.range_check_ptr + 3], memory[ids.range_check_ptr + 2] = (\n    divmod(lengths_and_indices[1][0], ids.PRIME_OVER_2_HIGH))",
          "flow_tracking_data": {
            "ap_tracking": {
              "group": 10,
              "offset": 0
            },
            "reference_ids": {
              "starkware.cairo.common.math.assert_le_felt.a": 9,
              "starkware.cairo.common.math.assert_le_felt.b": 10,
              "starkware.cairo.common.math.assert_le_felt.range_check_ptr": 11
            }
          }
        }
      ],
      "79": [
        {
          "accessible_scopes": [
            "starkware.cairo.common.math",
            "starkware.cairo.common.math.assert_le_felt"
          ],
          "code": "memory[ap] = 1 if excluded != 0 else 0",
          "flow_tracking_data": {
            "ap_tracking": {
              "group": 10,
              "offset": 8
            },
            "reference_ids": {}
          }
        }
      ],
      "93": [
        {
          "accessible_scopes": [
            "starkware.cairo.common.math",
            "starkware.cairo.common.math.assert_le_felt"
          ],
          "code": "memory[ap] = 1 if excluded != 1 else 0",
          "flow_tracking_data": {
            "ap_tracking": {
              "group": 10,
              "offset": 9
            },
            "reference_ids": {}
          }
        }
      ],
      "105": [
        {
          "accessible_scopes": [
            "starkware.cairo.common.math",
            "starkware.cairo.common.math.assert_le_felt"
          ],
          "code": "assert excluded == 2",
          "flow_tracking_data": {
            "ap_tracking": {
              "group": 10,
              "offset": 10
            },
            "reference_ids": {}
          }
        }
      ],
      "116": [
        {
          "accessible_scopes": [
            "starkware.starknet.common.storage",
            "starkware.starknet.common.storage.normalize_address"
          ],
          "code": "# Verify the assumptions on the relationship between 2**250, ADDR_BOUND and PRIME.\nADDR_BOUND = ids.ADDR_BOUND % PRIME\nassert (2**250 < ADDR_BOUND <= 2**251) and (2 * 2**250 < PRIME) and (\n        ADDR_BOUND * 2 > PRIME), \\\n    'normalize_address() cannot be used with the current constants.'\nids.is_small = 1 if ids.addr < ADDR_BOUND else 0",
          "flow_tracking_data": {
            "ap_tracking": {
              "group": 11,
              "offset": 1
            },
            "reference_ids": {
              "starkware.starknet.common.storage.normalize_address.addr": 12,
              "starkware.starknet.common.storage.normalize_address.is_small": 13
            }
          }
        }
      ],
      "134": [
        {
          "accessible_scopes": [
            "starkware.starknet.common.storage",
            "starkware.starknet.common.storage.normalize_address"
          ],
          "code": "ids.is_250 = 1 if ids.addr < 2**250 else 0",
          "flow_tracking_data": {
            "ap_tracking": {
              "group": 11,
              "offset": 2
            },
            "reference_ids": {
              "starkware.starknet.common.storage.normalize_address.addr": 12,
              "starkware.starknet.common.storage.normalize_address.is_250": 14
            }
          }
        }
      ],
      "154": [
        {
          "accessible_scopes": [
            "starkware.cairo.common.math_cmp",
            "starkware.cairo.common.math_cmp.is_nn"
          ],
          "code": "memory[ap] = 0 if 0 <= (ids.a % PRIME) < range_check_builtin.bound else 1",
          "flow_tracking_data": {
            "ap_tracking": {
              "group": 12,
              "offset": 0
            },
            "reference_ids": {
              "starkware.cairo.common.math_cmp.is_nn.a": 15
            }
          }
        }
      ],
      "164": [
        {
          "accessible_scopes": [
            "starkware.cairo.common.math_cmp",
            "starkware.cairo.common.math_cmp.is_nn"
          ],
          "code": "memory[ap] = 0 if 0 <= ((-ids.a - 1) % PRIME) < range_check_builtin.bound else 1",
          "flow_tracking_data": {
            "ap_tracking": {
              "group": 12,
              "offset": 1
            },
            "reference_ids": {
              "starkware.cairo.common.math_cmp.is_nn.a": 15
            }
          }
        }
      ],
      "199": [
        {
          "accessible_scopes": [
            "starkware.cairo.common.uint256",
            "starkware.cairo.common.uint256.uint256_add"
          ],
          "code": "sum_low = ids.a.low + ids.b.low\nids.carry_low = 1 if sum_low >= ids.SHIFT else 0\nsum_high = ids.a.high + ids.b.high + ids.carry_low\nids.carry_high = 1 if sum_high >= ids.SHIFT else 0",
          "flow_tracking_data": {
            "ap_tracking": {
              "group": 15,
              "offset": 4
            },
            "reference_ids": {
              "starkware.cairo.common.uint256.uint256_add.a": 16,
              "starkware.cairo.common.uint256.uint256_add.b": 17,
              "starkware.cairo.common.uint256.uint256_add.carry_high": 19,
              "starkware.cairo.common.uint256.uint256_add.carry_low": 18
            }
          }
        }
      ],
      "1054": [
        {
          "accessible_scopes": [
            "openzeppelin.token.erc20.presets.ERC20",
            "openzeppelin.token.erc20.presets.ERC20",
            "__wrappers__",
            "__wrappers__.constructor"
          ],
          "code": "memory[ap] = segments.add()",
          "flow_tracking_data": {
            "ap_tracking": {
              "group": 68,
              "offset": 414
            },
            "reference_ids": {}
          }
        }
      ],
      "1069": [
        {
          "accessible_scopes": [
            "openzeppelin.token.erc20.presets.ERC20",
            "openzeppelin.token.erc20.presets.ERC20",
            "__wrappers__",
            "__wrappers__.name_encode_return"
          ],
          "code": "memory[ap] = segments.add()",
          "flow_tracking_data": {
            "ap_tracking": {
              "group": 70,
              "offset": 0
            },
            "reference_ids": {}
          }
        }
      ],
      "1099": [
        {
          "accessible_scopes": [
            "openzeppelin.token.erc20.presets.ERC20",
            "openzeppelin.token.erc20.presets.ERC20",
            "__wrappers__",
            "__wrappers__.symbol_encode_return"
          ],
          "code": "memory[ap] = segments.add()",
          "flow_tracking_data": {
            "ap_tracking": {
              "group": 73,
              "offset": 0
            },
            "reference_ids": {}
          }
        }
      ],
      "1129": [
        {
          "accessible_scopes": [
            "openzeppelin.token.erc20.presets.ERC20",
            "openzeppelin.token.erc20.presets.ERC20",
            "__wrappers__",
            "__wrappers__.totalSupply_encode_return"
          ],
          "code": "memory[ap] = segments.add()",
          "flow_tracking_data": {
            "ap_tracking": {
              "group": 76,
              "offset": 0
            },
            "reference_ids": {}
          }
        }
      ],
      "1160": [
        {
          "accessible_scopes": [
            "openzeppelin.token.erc20.presets.ERC20",
            "openzeppelin.token.erc20.presets.ERC20",
            "__wrappers__",
            "__wrappers__.decimals_encode_return"
          ],
          "code": "memory[ap] = segments.add()",
          "flow_tracking_data": {
            "ap_tracking": {
              "group": 79,
              "offset": 0
            },
            "reference_ids": {}
          }
        }
      ],
      "1191": [
        {
          "accessible_scopes": [
            "openzeppelin.token.erc20.presets.ERC20",
            "openzeppelin.token.erc20.presets.ERC20",
            "__wrappers__",
            "__wrappers__.balanceOf_encode_return"
          ],
          "code": "memory[ap] = segments.add()",
          "flow_tracking_data": {
            "ap_tracking": {
              "group": 82,
              "offset": 0
            },
            "reference_ids": {}
          }
        }
      ],
      "1227": [
        {
          "accessible_scopes": [
            "openzeppelin.token.erc20.presets.ERC20",
            "openzeppelin.token.erc20.presets.ERC20",
            "__wrappers__",
            "__wrappers__.allowance_encode_return"
          ],
          "code": "memory[ap] = segments.add()",
          "flow_tracking_data": {
            "ap_tracking": {
              "group": 85,
              "offset": 0
            },
            "reference_ids": {}
          }
        }
      ],
      "1265": [
        {
          "accessible_scopes": [
            "openzeppelin.token.erc20.presets.ERC20",
            "openzeppelin.token.erc20.presets.ERC20",
            "__wrappers__",
            "__wrappers__.transfer_encode_return"
          ],
          "code": "memory[ap] = segments.add()",
          "flow_tracking_data": {
            "ap_tracking": {
              "group": 89,
              "offset": 0
            },
            "reference_ids": {}
          }
        }
      ],
      "1304": [
        {
          "accessible_scopes": [
            "openzeppelin.token.erc20.presets.ERC20",
            "openzeppelin.token.erc20.presets.ERC20",
            "__wrappers__",
            "__wrappers__.transferFrom_encode_return"
          ],
          "code": "memory[ap] = segments.add()",
          "flow_tracking_data": {
            "ap_tracking": {
              "group": 94,
              "offset": 0
            },
            "reference_ids": {}
          }
        }
      ],
      "1343": [
        {
          "accessible_scopes": [
            "openzeppelin.token.erc20.presets.ERC20",
            "openzeppelin.token.erc20.presets.ERC20",
            "__wrappers__",
            "__wrappers__.approve_encode_return"
          ],
          "code": "memory[ap] = segments.add()",
          "flow_tracking_data": {
            "ap_tracking": {
              "group": 99,
              "offset": 0
            },
            "reference_ids": {}
          }
        }
      ],
      "1381": [
        {
          "accessible_scopes": [
            "openzeppelin.token.erc20.presets.ERC20",
            "openzeppelin.token.erc20.presets.ERC20",
            "__wrappers__",
            "__wrappers__.increaseAllowance_encode_return"
          ],
          "code": "memory[ap] = segments.add()",
          "flow_tracking_data": {
            "ap_tracking": {
              "group": 104,
              "offset": 0
            },
            "reference_ids": {}
          }
        }
      ],
      "1419": [
        {
          "accessible_scopes": [
            "openzeppelin.token.erc20.presets.ERC20",
            "openzeppelin.token.erc20.presets.ERC20",
            "__wrappers__",
            "__wrappers__.decreaseAllowance_encode_return"
          ],
          "code": "memory[ap] = segments.add()",
          "flow_tracking_data": {
            "ap_tracking": {
              "group": 109,
              "offset": 0
            },
            "reference_ids": {}
          }
        }
      ]
    },
    "identifiers": {
      "__main__.allowance": {
        "destination": "openzeppelin.token.erc20.presets.ERC20.allowance",
        "type": "alias"
      },
      "__main__.approve": {
        "destination": "openzeppelin.token.erc20.presets.ERC20.approve",
        "type": "alias"
      },
      "__main__.balanceOf": {
        "destination": "openzeppelin.token.erc20.presets.ERC20.balanceOf",
        "type": "alias"
      },
      "__main__.constructor": {
        "destination": "openzeppelin.token.erc20.presets.ERC20.constructor",
        "type": "alias"
      },
      "__main__.decimals": {
        "destination": "openzeppelin.token.erc20.presets.ERC20.decimals",
        "type": "alias"
      },
      "__main__.decreaseAllowance": {
        "destination": "openzeppelin.token.erc20.presets.ERC20.decreaseAllowance",
        "type": "alias"
      },
      "__main__.increaseAllowance": {
        "destination": "openzeppelin.token.erc20.presets.ERC20.increaseAllowance",
        "type": "alias"
      },
      "__main__.name": {
        "destination": "openzeppelin.token.erc20.presets.ERC20.name",
        "type": "alias"
      },
      "__main__.symbol": {
        "destination": "openzeppelin.token.erc20.presets.ERC20.symbol",
        "type": "alias"
      },
      "__main__.totalSupply": {
        "destination": "openzeppelin.token.erc20.presets.ERC20.totalSupply",
        "type": "alias"
      },
      "__main__.transfer": {
        "destination": "openzeppelin.token.erc20.presets.ERC20.transfer",
        "type": "alias"
      },
      "__main__.transferFrom": {
        "destination": "openzeppelin.token.erc20.presets.ERC20.transferFrom",
        "type": "alias"
      },
      "__wrappers__.allowance": {
        "decorators": ["view"],
        "pc": 1237,
        "type": "function"
      },
      "__wrappers__.allowance.Args": {
        "full_name": "__wrappers__.allowance.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.allowance.ImplicitArgs": {
        "full_name": "__wrappers__.allowance.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.allowance.Return": {
        "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, size: felt, retdata: felt*)",
        "type": "type_definition"
      },
      "__wrappers__.allowance.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "__wrappers__.allowance.__wrapped_func": {
        "destination": "openzeppelin.token.erc20.presets.ERC20.allowance",
        "type": "alias"
      },
      "__wrappers__.allowance_encode_return": {
        "decorators": [],
        "pc": 1227,
        "type": "function"
      },
      "__wrappers__.allowance_encode_return.Args": {
        "full_name": "__wrappers__.allowance_encode_return.Args",
        "members": {
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "ret_value": {
            "cairo_type": "(remaining: starkware.cairo.common.uint256.Uint256)",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "__wrappers__.allowance_encode_return.ImplicitArgs": {
        "full_name": "__wrappers__.allowance_encode_return.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.allowance_encode_return.Return": {
        "cairo_type": "(range_check_ptr: felt, data_len: felt, data: felt*)",
        "type": "type_definition"
      },
      "__wrappers__.allowance_encode_return.SIZEOF_LOCALS": {
        "type": "const",
        "value": 1
      },
      "__wrappers__.allowance_encode_return.memcpy": {
        "destination": "starkware.cairo.common.memcpy.memcpy",
        "type": "alias"
      },
      "__wrappers__.approve": {
        "decorators": ["external"],
        "pc": 1352,
        "type": "function"
      },
      "__wrappers__.approve.Args": {
        "full_name": "__wrappers__.approve.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.approve.ImplicitArgs": {
        "full_name": "__wrappers__.approve.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.approve.Return": {
        "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, size: felt, retdata: felt*)",
        "type": "type_definition"
      },
      "__wrappers__.approve.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "__wrappers__.approve.__wrapped_func": {
        "destination": "openzeppelin.token.erc20.presets.ERC20.approve",
        "type": "alias"
      },
      "__wrappers__.approve_encode_return": {
        "decorators": [],
        "pc": 1343,
        "type": "function"
      },
      "__wrappers__.approve_encode_return.Args": {
        "full_name": "__wrappers__.approve_encode_return.Args",
        "members": {
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 1
          },
          "ret_value": {
            "cairo_type": "(success: felt)",
            "offset": 0
          }
        },
        "size": 2,
        "type": "struct"
      },
      "__wrappers__.approve_encode_return.ImplicitArgs": {
        "full_name": "__wrappers__.approve_encode_return.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.approve_encode_return.Return": {
        "cairo_type": "(range_check_ptr: felt, data_len: felt, data: felt*)",
        "type": "type_definition"
      },
      "__wrappers__.approve_encode_return.SIZEOF_LOCALS": {
        "type": "const",
        "value": 1
      },
      "__wrappers__.approve_encode_return.memcpy": {
        "destination": "starkware.cairo.common.memcpy.memcpy",
        "type": "alias"
      },
      "__wrappers__.balanceOf": {
        "decorators": ["view"],
        "pc": 1201,
        "type": "function"
      },
      "__wrappers__.balanceOf.Args": {
        "full_name": "__wrappers__.balanceOf.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.balanceOf.ImplicitArgs": {
        "full_name": "__wrappers__.balanceOf.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.balanceOf.Return": {
        "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, size: felt, retdata: felt*)",
        "type": "type_definition"
      },
      "__wrappers__.balanceOf.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "__wrappers__.balanceOf.__wrapped_func": {
        "destination": "openzeppelin.token.erc20.presets.ERC20.balanceOf",
        "type": "alias"
      },
      "__wrappers__.balanceOf_encode_return": {
        "decorators": [],
        "pc": 1191,
        "type": "function"
      },
      "__wrappers__.balanceOf_encode_return.Args": {
        "full_name": "__wrappers__.balanceOf_encode_return.Args",
        "members": {
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "ret_value": {
            "cairo_type": "(balance: starkware.cairo.common.uint256.Uint256)",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "__wrappers__.balanceOf_encode_return.ImplicitArgs": {
        "full_name": "__wrappers__.balanceOf_encode_return.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.balanceOf_encode_return.Return": {
        "cairo_type": "(range_check_ptr: felt, data_len: felt, data: felt*)",
        "type": "type_definition"
      },
      "__wrappers__.balanceOf_encode_return.SIZEOF_LOCALS": {
        "type": "const",
        "value": 1
      },
      "__wrappers__.balanceOf_encode_return.memcpy": {
        "destination": "starkware.cairo.common.memcpy.memcpy",
        "type": "alias"
      },
      "__wrappers__.constructor": {
        "decorators": ["constructor"],
        "pc": 1040,
        "type": "function"
      },
      "__wrappers__.constructor.Args": {
        "full_name": "__wrappers__.constructor.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.constructor.ImplicitArgs": {
        "full_name": "__wrappers__.constructor.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.constructor.Return": {
        "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, size: felt, retdata: felt*)",
        "type": "type_definition"
      },
      "__wrappers__.constructor.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "__wrappers__.constructor.__wrapped_func": {
        "destination": "openzeppelin.token.erc20.presets.ERC20.constructor",
        "type": "alias"
      },
      "__wrappers__.constructor_encode_return.memcpy": {
        "destination": "starkware.cairo.common.memcpy.memcpy",
        "type": "alias"
      },
      "__wrappers__.decimals": {
        "decorators": ["view"],
        "pc": 1169,
        "type": "function"
      },
      "__wrappers__.decimals.Args": {
        "full_name": "__wrappers__.decimals.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.decimals.ImplicitArgs": {
        "full_name": "__wrappers__.decimals.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.decimals.Return": {
        "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, size: felt, retdata: felt*)",
        "type": "type_definition"
      },
      "__wrappers__.decimals.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "__wrappers__.decimals.__wrapped_func": {
        "destination": "openzeppelin.token.erc20.presets.ERC20.decimals",
        "type": "alias"
      },
      "__wrappers__.decimals_encode_return": {
        "decorators": [],
        "pc": 1160,
        "type": "function"
      },
      "__wrappers__.decimals_encode_return.Args": {
        "full_name": "__wrappers__.decimals_encode_return.Args",
        "members": {
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 1
          },
          "ret_value": {
            "cairo_type": "(decimals: felt)",
            "offset": 0
          }
        },
        "size": 2,
        "type": "struct"
      },
      "__wrappers__.decimals_encode_return.ImplicitArgs": {
        "full_name": "__wrappers__.decimals_encode_return.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.decimals_encode_return.Return": {
        "cairo_type": "(range_check_ptr: felt, data_len: felt, data: felt*)",
        "type": "type_definition"
      },
      "__wrappers__.decimals_encode_return.SIZEOF_LOCALS": {
        "type": "const",
        "value": 1
      },
      "__wrappers__.decimals_encode_return.memcpy": {
        "destination": "starkware.cairo.common.memcpy.memcpy",
        "type": "alias"
      },
      "__wrappers__.decreaseAllowance": {
        "decorators": ["external"],
        "pc": 1428,
        "type": "function"
      },
      "__wrappers__.decreaseAllowance.Args": {
        "full_name": "__wrappers__.decreaseAllowance.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.decreaseAllowance.ImplicitArgs": {
        "full_name": "__wrappers__.decreaseAllowance.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.decreaseAllowance.Return": {
        "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, size: felt, retdata: felt*)",
        "type": "type_definition"
      },
      "__wrappers__.decreaseAllowance.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "__wrappers__.decreaseAllowance.__wrapped_func": {
        "destination": "openzeppelin.token.erc20.presets.ERC20.decreaseAllowance",
        "type": "alias"
      },
      "__wrappers__.decreaseAllowance_encode_return": {
        "decorators": [],
        "pc": 1419,
        "type": "function"
      },
      "__wrappers__.decreaseAllowance_encode_return.Args": {
        "full_name": "__wrappers__.decreaseAllowance_encode_return.Args",
        "members": {
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 1
          },
          "ret_value": {
            "cairo_type": "(success: felt)",
            "offset": 0
          }
        },
        "size": 2,
        "type": "struct"
      },
      "__wrappers__.decreaseAllowance_encode_return.ImplicitArgs": {
        "full_name": "__wrappers__.decreaseAllowance_encode_return.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.decreaseAllowance_encode_return.Return": {
        "cairo_type": "(range_check_ptr: felt, data_len: felt, data: felt*)",
        "type": "type_definition"
      },
      "__wrappers__.decreaseAllowance_encode_return.SIZEOF_LOCALS": {
        "type": "const",
        "value": 1
      },
      "__wrappers__.decreaseAllowance_encode_return.memcpy": {
        "destination": "starkware.cairo.common.memcpy.memcpy",
        "type": "alias"
      },
      "__wrappers__.increaseAllowance": {
        "decorators": ["external"],
        "pc": 1390,
        "type": "function"
      },
      "__wrappers__.increaseAllowance.Args": {
        "full_name": "__wrappers__.increaseAllowance.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.increaseAllowance.ImplicitArgs": {
        "full_name": "__wrappers__.increaseAllowance.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.increaseAllowance.Return": {
        "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, size: felt, retdata: felt*)",
        "type": "type_definition"
      },
      "__wrappers__.increaseAllowance.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "__wrappers__.increaseAllowance.__wrapped_func": {
        "destination": "openzeppelin.token.erc20.presets.ERC20.increaseAllowance",
        "type": "alias"
      },
      "__wrappers__.increaseAllowance_encode_return": {
        "decorators": [],
        "pc": 1381,
        "type": "function"
      },
      "__wrappers__.increaseAllowance_encode_return.Args": {
        "full_name": "__wrappers__.increaseAllowance_encode_return.Args",
        "members": {
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 1
          },
          "ret_value": {
            "cairo_type": "(success: felt)",
            "offset": 0
          }
        },
        "size": 2,
        "type": "struct"
      },
      "__wrappers__.increaseAllowance_encode_return.ImplicitArgs": {
        "full_name": "__wrappers__.increaseAllowance_encode_return.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.increaseAllowance_encode_return.Return": {
        "cairo_type": "(range_check_ptr: felt, data_len: felt, data: felt*)",
        "type": "type_definition"
      },
      "__wrappers__.increaseAllowance_encode_return.SIZEOF_LOCALS": {
        "type": "const",
        "value": 1
      },
      "__wrappers__.increaseAllowance_encode_return.memcpy": {
        "destination": "starkware.cairo.common.memcpy.memcpy",
        "type": "alias"
      },
      "__wrappers__.name": {
        "decorators": ["view"],
        "pc": 1078,
        "type": "function"
      },
      "__wrappers__.name.Args": {
        "full_name": "__wrappers__.name.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.name.ImplicitArgs": {
        "full_name": "__wrappers__.name.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.name.Return": {
        "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, size: felt, retdata: felt*)",
        "type": "type_definition"
      },
      "__wrappers__.name.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "__wrappers__.name.__wrapped_func": {
        "destination": "openzeppelin.token.erc20.presets.ERC20.name",
        "type": "alias"
      },
      "__wrappers__.name_encode_return": {
        "decorators": [],
        "pc": 1069,
        "type": "function"
      },
      "__wrappers__.name_encode_return.Args": {
        "full_name": "__wrappers__.name_encode_return.Args",
        "members": {
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 1
          },
          "ret_value": {
            "cairo_type": "(name: felt)",
            "offset": 0
          }
        },
        "size": 2,
        "type": "struct"
      },
      "__wrappers__.name_encode_return.ImplicitArgs": {
        "full_name": "__wrappers__.name_encode_return.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.name_encode_return.Return": {
        "cairo_type": "(range_check_ptr: felt, data_len: felt, data: felt*)",
        "type": "type_definition"
      },
      "__wrappers__.name_encode_return.SIZEOF_LOCALS": {
        "type": "const",
        "value": 1
      },
      "__wrappers__.name_encode_return.memcpy": {
        "destination": "starkware.cairo.common.memcpy.memcpy",
        "type": "alias"
      },
      "__wrappers__.symbol": {
        "decorators": ["view"],
        "pc": 1108,
        "type": "function"
      },
      "__wrappers__.symbol.Args": {
        "full_name": "__wrappers__.symbol.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.symbol.ImplicitArgs": {
        "full_name": "__wrappers__.symbol.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.symbol.Return": {
        "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, size: felt, retdata: felt*)",
        "type": "type_definition"
      },
      "__wrappers__.symbol.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "__wrappers__.symbol.__wrapped_func": {
        "destination": "openzeppelin.token.erc20.presets.ERC20.symbol",
        "type": "alias"
      },
      "__wrappers__.symbol_encode_return": {
        "decorators": [],
        "pc": 1099,
        "type": "function"
      },
      "__wrappers__.symbol_encode_return.Args": {
        "full_name": "__wrappers__.symbol_encode_return.Args",
        "members": {
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 1
          },
          "ret_value": {
            "cairo_type": "(symbol: felt)",
            "offset": 0
          }
        },
        "size": 2,
        "type": "struct"
      },
      "__wrappers__.symbol_encode_return.ImplicitArgs": {
        "full_name": "__wrappers__.symbol_encode_return.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.symbol_encode_return.Return": {
        "cairo_type": "(range_check_ptr: felt, data_len: felt, data: felt*)",
        "type": "type_definition"
      },
      "__wrappers__.symbol_encode_return.SIZEOF_LOCALS": {
        "type": "const",
        "value": 1
      },
      "__wrappers__.symbol_encode_return.memcpy": {
        "destination": "starkware.cairo.common.memcpy.memcpy",
        "type": "alias"
      },
      "__wrappers__.totalSupply": {
        "decorators": ["view"],
        "pc": 1139,
        "type": "function"
      },
      "__wrappers__.totalSupply.Args": {
        "full_name": "__wrappers__.totalSupply.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.totalSupply.ImplicitArgs": {
        "full_name": "__wrappers__.totalSupply.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.totalSupply.Return": {
        "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, size: felt, retdata: felt*)",
        "type": "type_definition"
      },
      "__wrappers__.totalSupply.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "__wrappers__.totalSupply.__wrapped_func": {
        "destination": "openzeppelin.token.erc20.presets.ERC20.totalSupply",
        "type": "alias"
      },
      "__wrappers__.totalSupply_encode_return": {
        "decorators": [],
        "pc": 1129,
        "type": "function"
      },
      "__wrappers__.totalSupply_encode_return.Args": {
        "full_name": "__wrappers__.totalSupply_encode_return.Args",
        "members": {
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "ret_value": {
            "cairo_type": "(totalSupply: starkware.cairo.common.uint256.Uint256)",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "__wrappers__.totalSupply_encode_return.ImplicitArgs": {
        "full_name": "__wrappers__.totalSupply_encode_return.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.totalSupply_encode_return.Return": {
        "cairo_type": "(range_check_ptr: felt, data_len: felt, data: felt*)",
        "type": "type_definition"
      },
      "__wrappers__.totalSupply_encode_return.SIZEOF_LOCALS": {
        "type": "const",
        "value": 1
      },
      "__wrappers__.totalSupply_encode_return.memcpy": {
        "destination": "starkware.cairo.common.memcpy.memcpy",
        "type": "alias"
      },
      "__wrappers__.transfer": {
        "decorators": ["external"],
        "pc": 1274,
        "type": "function"
      },
      "__wrappers__.transfer.Args": {
        "full_name": "__wrappers__.transfer.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.transfer.ImplicitArgs": {
        "full_name": "__wrappers__.transfer.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.transfer.Return": {
        "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, size: felt, retdata: felt*)",
        "type": "type_definition"
      },
      "__wrappers__.transfer.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "__wrappers__.transfer.__wrapped_func": {
        "destination": "openzeppelin.token.erc20.presets.ERC20.transfer",
        "type": "alias"
      },
      "__wrappers__.transferFrom": {
        "decorators": ["external"],
        "pc": 1313,
        "type": "function"
      },
      "__wrappers__.transferFrom.Args": {
        "full_name": "__wrappers__.transferFrom.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.transferFrom.ImplicitArgs": {
        "full_name": "__wrappers__.transferFrom.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.transferFrom.Return": {
        "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, size: felt, retdata: felt*)",
        "type": "type_definition"
      },
      "__wrappers__.transferFrom.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "__wrappers__.transferFrom.__wrapped_func": {
        "destination": "openzeppelin.token.erc20.presets.ERC20.transferFrom",
        "type": "alias"
      },
      "__wrappers__.transferFrom_encode_return": {
        "decorators": [],
        "pc": 1304,
        "type": "function"
      },
      "__wrappers__.transferFrom_encode_return.Args": {
        "full_name": "__wrappers__.transferFrom_encode_return.Args",
        "members": {
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 1
          },
          "ret_value": {
            "cairo_type": "(success: felt)",
            "offset": 0
          }
        },
        "size": 2,
        "type": "struct"
      },
      "__wrappers__.transferFrom_encode_return.ImplicitArgs": {
        "full_name": "__wrappers__.transferFrom_encode_return.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.transferFrom_encode_return.Return": {
        "cairo_type": "(range_check_ptr: felt, data_len: felt, data: felt*)",
        "type": "type_definition"
      },
      "__wrappers__.transferFrom_encode_return.SIZEOF_LOCALS": {
        "type": "const",
        "value": 1
      },
      "__wrappers__.transferFrom_encode_return.memcpy": {
        "destination": "starkware.cairo.common.memcpy.memcpy",
        "type": "alias"
      },
      "__wrappers__.transfer_encode_return": {
        "decorators": [],
        "pc": 1265,
        "type": "function"
      },
      "__wrappers__.transfer_encode_return.Args": {
        "full_name": "__wrappers__.transfer_encode_return.Args",
        "members": {
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 1
          },
          "ret_value": {
            "cairo_type": "(success: felt)",
            "offset": 0
          }
        },
        "size": 2,
        "type": "struct"
      },
      "__wrappers__.transfer_encode_return.ImplicitArgs": {
        "full_name": "__wrappers__.transfer_encode_return.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.transfer_encode_return.Return": {
        "cairo_type": "(range_check_ptr: felt, data_len: felt, data: felt*)",
        "type": "type_definition"
      },
      "__wrappers__.transfer_encode_return.SIZEOF_LOCALS": {
        "type": "const",
        "value": 1
      },
      "__wrappers__.transfer_encode_return.memcpy": {
        "destination": "starkware.cairo.common.memcpy.memcpy",
        "type": "alias"
      },
      "openzeppelin.security.safemath.library.FALSE": {
        "destination": "starkware.cairo.common.bool.FALSE",
        "type": "alias"
      },
      "openzeppelin.security.safemath.library.HashBuiltin": {
        "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
        "type": "alias"
      },
      "openzeppelin.security.safemath.library.SafeUint256": {
        "type": "namespace"
      },
      "openzeppelin.security.safemath.library.SafeUint256.Args": {
        "full_name": "openzeppelin.security.safemath.library.SafeUint256.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.security.safemath.library.SafeUint256.ImplicitArgs": {
        "full_name": "openzeppelin.security.safemath.library.SafeUint256.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.security.safemath.library.SafeUint256.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "openzeppelin.security.safemath.library.SafeUint256.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.security.safemath.library.SafeUint256.add": {
        "decorators": [],
        "pc": 309,
        "type": "function"
      },
      "openzeppelin.security.safemath.library.SafeUint256.add.Args": {
        "full_name": "openzeppelin.security.safemath.library.SafeUint256.add.Args",
        "members": {
          "a": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 0
          },
          "b": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 2
          }
        },
        "size": 4,
        "type": "struct"
      },
      "openzeppelin.security.safemath.library.SafeUint256.add.ImplicitArgs": {
        "full_name": "openzeppelin.security.safemath.library.SafeUint256.add.ImplicitArgs",
        "members": {
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "openzeppelin.security.safemath.library.SafeUint256.add.Return": {
        "cairo_type": "(c: starkware.cairo.common.uint256.Uint256)",
        "type": "type_definition"
      },
      "openzeppelin.security.safemath.library.SafeUint256.add.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.security.safemath.library.SafeUint256.sub_le": {
        "decorators": [],
        "pc": 330,
        "type": "function"
      },
      "openzeppelin.security.safemath.library.SafeUint256.sub_le.Args": {
        "full_name": "openzeppelin.security.safemath.library.SafeUint256.sub_le.Args",
        "members": {
          "a": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 0
          },
          "b": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 2
          }
        },
        "size": 4,
        "type": "struct"
      },
      "openzeppelin.security.safemath.library.SafeUint256.sub_le.ImplicitArgs": {
        "full_name": "openzeppelin.security.safemath.library.SafeUint256.sub_le.ImplicitArgs",
        "members": {
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "openzeppelin.security.safemath.library.SafeUint256.sub_le.Return": {
        "cairo_type": "(c: starkware.cairo.common.uint256.Uint256)",
        "type": "type_definition"
      },
      "openzeppelin.security.safemath.library.SafeUint256.sub_le.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.security.safemath.library.TRUE": {
        "destination": "starkware.cairo.common.bool.TRUE",
        "type": "alias"
      },
      "openzeppelin.security.safemath.library.Uint256": {
        "destination": "starkware.cairo.common.uint256.Uint256",
        "type": "alias"
      },
      "openzeppelin.security.safemath.library.uint256_add": {
        "destination": "starkware.cairo.common.uint256.uint256_add",
        "type": "alias"
      },
      "openzeppelin.security.safemath.library.uint256_check": {
        "destination": "starkware.cairo.common.uint256.uint256_check",
        "type": "alias"
      },
      "openzeppelin.security.safemath.library.uint256_eq": {
        "destination": "starkware.cairo.common.uint256.uint256_eq",
        "type": "alias"
      },
      "openzeppelin.security.safemath.library.uint256_le": {
        "destination": "starkware.cairo.common.uint256.uint256_le",
        "type": "alias"
      },
      "openzeppelin.security.safemath.library.uint256_lt": {
        "destination": "starkware.cairo.common.uint256.uint256_lt",
        "type": "alias"
      },
      "openzeppelin.security.safemath.library.uint256_mul": {
        "destination": "starkware.cairo.common.uint256.uint256_mul",
        "type": "alias"
      },
      "openzeppelin.security.safemath.library.uint256_sub": {
        "destination": "starkware.cairo.common.uint256.uint256_sub",
        "type": "alias"
      },
      "openzeppelin.security.safemath.library.uint256_unsigned_div_rem": {
        "destination": "starkware.cairo.common.uint256.uint256_unsigned_div_rem",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.Approval": {
        "type": "namespace"
      },
      "openzeppelin.token.erc20.library.Approval.Args": {
        "full_name": "openzeppelin.token.erc20.library.Approval.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.Approval.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.Approval.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.Approval.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.Approval.SELECTOR": {
        "type": "const",
        "value": 544914742286571513055574265148471203182105283038408585630116262969508767999
      },
      "openzeppelin.token.erc20.library.Approval.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.Approval.alloc": {
        "destination": "starkware.cairo.common.alloc.alloc",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.Approval.emit": {
        "decorators": [],
        "pc": 384,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.Approval.emit.Args": {
        "full_name": "openzeppelin.token.erc20.library.Approval.emit.Args",
        "members": {
          "owner": {
            "cairo_type": "felt",
            "offset": 0
          },
          "spender": {
            "cairo_type": "felt",
            "offset": 1
          },
          "value": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 2
          }
        },
        "size": 4,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.Approval.emit.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.Approval.emit.ImplicitArgs",
        "members": {
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 1
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 2,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.Approval.emit.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.Approval.emit.SIZEOF_LOCALS": {
        "type": "const",
        "value": 2
      },
      "openzeppelin.token.erc20.library.Approval.emit_event": {
        "destination": "starkware.starknet.common.syscalls.emit_event",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.Approval.memcpy": {
        "destination": "starkware.cairo.common.memcpy.memcpy",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.ERC20": {
        "type": "namespace"
      },
      "openzeppelin.token.erc20.library.ERC20.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20._approve": {
        "decorators": [],
        "pc": 939,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20._approve.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20._approve.Args",
        "members": {
          "amount": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 2
          },
          "owner": {
            "cairo_type": "felt",
            "offset": 0
          },
          "spender": {
            "cairo_type": "felt",
            "offset": 1
          }
        },
        "size": 4,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20._approve.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20._approve.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20._approve.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20._approve.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20._mint": {
        "decorators": [],
        "pc": 831,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20._mint.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20._mint.Args",
        "members": {
          "amount": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 1
          },
          "recipient": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20._mint.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20._mint.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20._mint.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20._mint.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20._spend_allowance": {
        "decorators": [],
        "pc": 971,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20._spend_allowance.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20._spend_allowance.Args",
        "members": {
          "amount": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 2
          },
          "owner": {
            "cairo_type": "felt",
            "offset": 0
          },
          "spender": {
            "cairo_type": "felt",
            "offset": 1
          }
        },
        "size": 4,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20._spend_allowance.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20._spend_allowance.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20._spend_allowance.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20._spend_allowance.SIZEOF_LOCALS": {
        "type": "const",
        "value": 4
      },
      "openzeppelin.token.erc20.library.ERC20._transfer": {
        "decorators": [],
        "pc": 883,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20._transfer.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20._transfer.Args",
        "members": {
          "amount": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 2
          },
          "recipient": {
            "cairo_type": "felt",
            "offset": 1
          },
          "sender": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 4,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20._transfer.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20._transfer.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20._transfer.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20._transfer.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20.allowance": {
        "decorators": [],
        "pc": 703,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20.allowance.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20.allowance.Args",
        "members": {
          "owner": {
            "cairo_type": "felt",
            "offset": 0
          },
          "spender": {
            "cairo_type": "felt",
            "offset": 1
          }
        },
        "size": 2,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20.allowance.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20.allowance.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20.allowance.Return": {
        "cairo_type": "(remaining: starkware.cairo.common.uint256.Uint256)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20.allowance.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20.approve": {
        "decorators": [],
        "pc": 747,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20.approve.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20.approve.Args",
        "members": {
          "amount": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 1
          },
          "spender": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20.approve.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20.approve.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20.approve.Return": {
        "cairo_type": "(success: felt)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20.approve.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20.balance_of": {
        "decorators": [],
        "pc": 696,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20.balance_of.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20.balance_of.Args",
        "members": {
          "account": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20.balance_of.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20.balance_of.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20.balance_of.Return": {
        "cairo_type": "(balance: starkware.cairo.common.uint256.Uint256)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20.balance_of.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20.decimals": {
        "decorators": [],
        "pc": 690,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20.decimals.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20.decimals.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20.decimals.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20.decimals.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20.decimals.Return": {
        "cairo_type": "(decimals: felt)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20.decimals.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20.decrease_allowance": {
        "decorators": [],
        "pc": 798,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20.decrease_allowance.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20.decrease_allowance.Args",
        "members": {
          "spender": {
            "cairo_type": "felt",
            "offset": 0
          },
          "subtracted_value": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 1
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20.decrease_allowance.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20.decrease_allowance.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20.decrease_allowance.Return": {
        "cairo_type": "(success: felt)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20.decrease_allowance.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20.increase_allowance": {
        "decorators": [],
        "pc": 767,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20.increase_allowance.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20.increase_allowance.Args",
        "members": {
          "added_value": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 1
          },
          "spender": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20.increase_allowance.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20.increase_allowance.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20.increase_allowance.Return": {
        "cairo_type": "(success: felt)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20.increase_allowance.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20.initializer": {
        "decorators": [],
        "pc": 651,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20.initializer.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20.initializer.Args",
        "members": {
          "decimals": {
            "cairo_type": "felt",
            "offset": 2
          },
          "name": {
            "cairo_type": "felt",
            "offset": 0
          },
          "symbol": {
            "cairo_type": "felt",
            "offset": 1
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20.initializer.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20.initializer.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20.initializer.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20.initializer.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20.name": {
        "decorators": [],
        "pc": 672,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20.name.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20.name.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20.name.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20.name.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20.name.Return": {
        "cairo_type": "(name: felt)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20.name.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20.symbol": {
        "decorators": [],
        "pc": 678,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20.symbol.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20.symbol.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20.symbol.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20.symbol.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20.symbol.Return": {
        "cairo_type": "(symbol: felt)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20.symbol.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20.total_supply": {
        "decorators": [],
        "pc": 684,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20.total_supply.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20.total_supply.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20.total_supply.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20.total_supply.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20.total_supply.Return": {
        "cairo_type": "(total_supply: starkware.cairo.common.uint256.Uint256)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20.total_supply.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20.transfer": {
        "decorators": [],
        "pc": 711,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20.transfer.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20.transfer.Args",
        "members": {
          "amount": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 1
          },
          "recipient": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20.transfer.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20.transfer.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20.transfer.Return": {
        "cairo_type": "(success: felt)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20.transfer.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20.transfer_from": {
        "decorators": [],
        "pc": 726,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20.transfer_from.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20.transfer_from.Args",
        "members": {
          "amount": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 2
          },
          "recipient": {
            "cairo_type": "felt",
            "offset": 1
          },
          "sender": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 4,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20.transfer_from.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20.transfer_from.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20.transfer_from.Return": {
        "cairo_type": "(success: felt)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20.transfer_from.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20_allowances": {
        "type": "namespace"
      },
      "openzeppelin.token.erc20.library.ERC20_allowances.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_allowances.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_allowances.HashBuiltin": {
        "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.ERC20_allowances.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_allowances.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_allowances.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20_allowances.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20_allowances.addr": {
        "decorators": [],
        "pc": 594,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20_allowances.addr.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_allowances.addr.Args",
        "members": {
          "owner": {
            "cairo_type": "felt",
            "offset": 0
          },
          "spender": {
            "cairo_type": "felt",
            "offset": 1
          }
        },
        "size": 2,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_allowances.addr.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_allowances.addr.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 0
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 1
          }
        },
        "size": 2,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_allowances.addr.Return": {
        "cairo_type": "(res: felt)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20_allowances.addr.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20_allowances.hash2": {
        "destination": "starkware.cairo.common.hash.hash2",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.ERC20_allowances.normalize_address": {
        "destination": "starkware.starknet.common.storage.normalize_address",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.ERC20_allowances.read": {
        "decorators": [],
        "pc": 611,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20_allowances.read.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_allowances.read.Args",
        "members": {
          "owner": {
            "cairo_type": "felt",
            "offset": 0
          },
          "spender": {
            "cairo_type": "felt",
            "offset": 1
          }
        },
        "size": 2,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_allowances.read.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_allowances.read.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_allowances.read.Return": {
        "cairo_type": "(remaining: starkware.cairo.common.uint256.Uint256)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20_allowances.read.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20_allowances.storage_read": {
        "destination": "starkware.starknet.common.syscalls.storage_read",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.ERC20_allowances.storage_write": {
        "destination": "starkware.starknet.common.syscalls.storage_write",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.ERC20_allowances.write": {
        "decorators": [],
        "pc": 632,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20_allowances.write.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_allowances.write.Args",
        "members": {
          "owner": {
            "cairo_type": "felt",
            "offset": 0
          },
          "spender": {
            "cairo_type": "felt",
            "offset": 1
          },
          "value": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 2
          }
        },
        "size": 4,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_allowances.write.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_allowances.write.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_allowances.write.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20_allowances.write.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20_balances": {
        "type": "namespace"
      },
      "openzeppelin.token.erc20.library.ERC20_balances.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_balances.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_balances.HashBuiltin": {
        "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.ERC20_balances.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_balances.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_balances.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20_balances.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20_balances.addr": {
        "decorators": [],
        "pc": 542,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20_balances.addr.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_balances.addr.Args",
        "members": {
          "account": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_balances.addr.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_balances.addr.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 0
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 1
          }
        },
        "size": 2,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_balances.addr.Return": {
        "cairo_type": "(res: felt)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20_balances.addr.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20_balances.hash2": {
        "destination": "starkware.cairo.common.hash.hash2",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.ERC20_balances.normalize_address": {
        "destination": "starkware.starknet.common.storage.normalize_address",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.ERC20_balances.read": {
        "decorators": [],
        "pc": 556,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20_balances.read.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_balances.read.Args",
        "members": {
          "account": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_balances.read.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_balances.read.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_balances.read.Return": {
        "cairo_type": "(balance: starkware.cairo.common.uint256.Uint256)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20_balances.read.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20_balances.storage_read": {
        "destination": "starkware.starknet.common.syscalls.storage_read",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.ERC20_balances.storage_write": {
        "destination": "starkware.starknet.common.syscalls.storage_write",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.ERC20_balances.write": {
        "decorators": [],
        "pc": 576,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20_balances.write.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_balances.write.Args",
        "members": {
          "account": {
            "cairo_type": "felt",
            "offset": 0
          },
          "value": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 1
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_balances.write.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_balances.write.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_balances.write.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20_balances.write.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20_decimals": {
        "type": "namespace"
      },
      "openzeppelin.token.erc20.library.ERC20_decimals.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_decimals.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_decimals.HashBuiltin": {
        "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.ERC20_decimals.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_decimals.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_decimals.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20_decimals.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20_decimals.addr": {
        "decorators": [],
        "pc": 471,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20_decimals.addr.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_decimals.addr.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_decimals.addr.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_decimals.addr.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 0
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 1
          }
        },
        "size": 2,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_decimals.addr.Return": {
        "cairo_type": "(res: felt)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20_decimals.addr.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20_decimals.hash2": {
        "destination": "starkware.cairo.common.hash.hash2",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.ERC20_decimals.normalize_address": {
        "destination": "starkware.starknet.common.storage.normalize_address",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.ERC20_decimals.read": {
        "decorators": [],
        "pc": 476,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20_decimals.read.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_decimals.read.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_decimals.read.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_decimals.read.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_decimals.read.Return": {
        "cairo_type": "(decimals: felt)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20_decimals.read.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20_decimals.storage_read": {
        "destination": "starkware.starknet.common.syscalls.storage_read",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.ERC20_decimals.storage_write": {
        "destination": "starkware.starknet.common.syscalls.storage_write",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.ERC20_decimals.write": {
        "decorators": [],
        "pc": 489,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20_decimals.write.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_decimals.write.Args",
        "members": {
          "value": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_decimals.write.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_decimals.write.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_decimals.write.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20_decimals.write.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20_name": {
        "type": "namespace"
      },
      "openzeppelin.token.erc20.library.ERC20_name.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_name.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_name.HashBuiltin": {
        "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.ERC20_name.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_name.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_name.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20_name.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20_name.addr": {
        "decorators": [],
        "pc": 411,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20_name.addr.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_name.addr.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_name.addr.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_name.addr.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 0
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 1
          }
        },
        "size": 2,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_name.addr.Return": {
        "cairo_type": "(res: felt)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20_name.addr.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20_name.hash2": {
        "destination": "starkware.cairo.common.hash.hash2",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.ERC20_name.normalize_address": {
        "destination": "starkware.starknet.common.storage.normalize_address",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.ERC20_name.read": {
        "decorators": [],
        "pc": 416,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20_name.read.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_name.read.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_name.read.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_name.read.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_name.read.Return": {
        "cairo_type": "(name: felt)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20_name.read.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20_name.storage_read": {
        "destination": "starkware.starknet.common.syscalls.storage_read",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.ERC20_name.storage_write": {
        "destination": "starkware.starknet.common.syscalls.storage_write",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.ERC20_name.write": {
        "decorators": [],
        "pc": 429,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20_name.write.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_name.write.Args",
        "members": {
          "value": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_name.write.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_name.write.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_name.write.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20_name.write.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20_symbol": {
        "type": "namespace"
      },
      "openzeppelin.token.erc20.library.ERC20_symbol.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_symbol.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_symbol.HashBuiltin": {
        "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.ERC20_symbol.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_symbol.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_symbol.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20_symbol.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20_symbol.addr": {
        "decorators": [],
        "pc": 441,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20_symbol.addr.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_symbol.addr.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_symbol.addr.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_symbol.addr.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 0
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 1
          }
        },
        "size": 2,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_symbol.addr.Return": {
        "cairo_type": "(res: felt)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20_symbol.addr.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20_symbol.hash2": {
        "destination": "starkware.cairo.common.hash.hash2",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.ERC20_symbol.normalize_address": {
        "destination": "starkware.starknet.common.storage.normalize_address",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.ERC20_symbol.read": {
        "decorators": [],
        "pc": 446,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20_symbol.read.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_symbol.read.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_symbol.read.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_symbol.read.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_symbol.read.Return": {
        "cairo_type": "(symbol: felt)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20_symbol.read.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20_symbol.storage_read": {
        "destination": "starkware.starknet.common.syscalls.storage_read",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.ERC20_symbol.storage_write": {
        "destination": "starkware.starknet.common.syscalls.storage_write",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.ERC20_symbol.write": {
        "decorators": [],
        "pc": 459,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20_symbol.write.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_symbol.write.Args",
        "members": {
          "value": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_symbol.write.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_symbol.write.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_symbol.write.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20_symbol.write.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20_total_supply": {
        "type": "namespace"
      },
      "openzeppelin.token.erc20.library.ERC20_total_supply.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_total_supply.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_total_supply.HashBuiltin": {
        "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.ERC20_total_supply.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_total_supply.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_total_supply.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20_total_supply.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20_total_supply.addr": {
        "decorators": [],
        "pc": 501,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20_total_supply.addr.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_total_supply.addr.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_total_supply.addr.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_total_supply.addr.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 0
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 1
          }
        },
        "size": 2,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_total_supply.addr.Return": {
        "cairo_type": "(res: felt)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20_total_supply.addr.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20_total_supply.hash2": {
        "destination": "starkware.cairo.common.hash.hash2",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.ERC20_total_supply.normalize_address": {
        "destination": "starkware.starknet.common.storage.normalize_address",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.ERC20_total_supply.read": {
        "decorators": [],
        "pc": 506,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20_total_supply.read.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_total_supply.read.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_total_supply.read.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_total_supply.read.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_total_supply.read.Return": {
        "cairo_type": "(total_supply: starkware.cairo.common.uint256.Uint256)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20_total_supply.read.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.ERC20_total_supply.storage_read": {
        "destination": "starkware.starknet.common.syscalls.storage_read",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.ERC20_total_supply.storage_write": {
        "destination": "starkware.starknet.common.syscalls.storage_write",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.ERC20_total_supply.write": {
        "decorators": [],
        "pc": 525,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.ERC20_total_supply.write.Args": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_total_supply.write.Args",
        "members": {
          "value": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 0
          }
        },
        "size": 2,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_total_supply.write.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.ERC20_total_supply.write.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.ERC20_total_supply.write.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.ERC20_total_supply.write.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.FALSE": {
        "destination": "starkware.cairo.common.bool.FALSE",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.HashBuiltin": {
        "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.SafeUint256": {
        "destination": "openzeppelin.security.safemath.library.SafeUint256",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.TRUE": {
        "destination": "starkware.cairo.common.bool.TRUE",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.Transfer": {
        "type": "namespace"
      },
      "openzeppelin.token.erc20.library.Transfer.Args": {
        "full_name": "openzeppelin.token.erc20.library.Transfer.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.Transfer.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.Transfer.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.Transfer.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.Transfer.SELECTOR": {
        "type": "const",
        "value": 271746229759260285552388728919865295615886751538523744128730118297934206697
      },
      "openzeppelin.token.erc20.library.Transfer.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.library.Transfer.alloc": {
        "destination": "starkware.cairo.common.alloc.alloc",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.Transfer.emit": {
        "decorators": [],
        "pc": 357,
        "type": "function"
      },
      "openzeppelin.token.erc20.library.Transfer.emit.Args": {
        "full_name": "openzeppelin.token.erc20.library.Transfer.emit.Args",
        "members": {
          "from_": {
            "cairo_type": "felt",
            "offset": 0
          },
          "to": {
            "cairo_type": "felt",
            "offset": 1
          },
          "value": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 2
          }
        },
        "size": 4,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.Transfer.emit.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.library.Transfer.emit.ImplicitArgs",
        "members": {
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 1
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 2,
        "type": "struct"
      },
      "openzeppelin.token.erc20.library.Transfer.emit.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.library.Transfer.emit.SIZEOF_LOCALS": {
        "type": "const",
        "value": 2
      },
      "openzeppelin.token.erc20.library.Transfer.emit_event": {
        "destination": "starkware.starknet.common.syscalls.emit_event",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.Transfer.memcpy": {
        "destination": "starkware.cairo.common.memcpy.memcpy",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.UINT8_MAX": {
        "destination": "openzeppelin.utils.constants.library.UINT8_MAX",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.Uint256": {
        "destination": "starkware.cairo.common.uint256.Uint256",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.assert_le": {
        "destination": "starkware.cairo.common.math.assert_le",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.assert_not_zero": {
        "destination": "starkware.cairo.common.math.assert_not_zero",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.get_caller_address": {
        "destination": "starkware.starknet.common.syscalls.get_caller_address",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.uint256_check": {
        "destination": "starkware.cairo.common.uint256.uint256_check",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.uint256_eq": {
        "destination": "starkware.cairo.common.uint256.uint256_eq",
        "type": "alias"
      },
      "openzeppelin.token.erc20.library.uint256_not": {
        "destination": "starkware.cairo.common.uint256.uint256_not",
        "type": "alias"
      },
      "openzeppelin.token.erc20.presets.ERC20.ERC20": {
        "destination": "openzeppelin.token.erc20.library.ERC20",
        "type": "alias"
      },
      "openzeppelin.token.erc20.presets.ERC20.HashBuiltin": {
        "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
        "type": "alias"
      },
      "openzeppelin.token.erc20.presets.ERC20.Uint256": {
        "destination": "starkware.cairo.common.uint256.Uint256",
        "type": "alias"
      },
      "openzeppelin.token.erc20.presets.ERC20.allowance": {
        "decorators": ["view"],
        "pc": 1219,
        "type": "function"
      },
      "openzeppelin.token.erc20.presets.ERC20.allowance.Args": {
        "full_name": "openzeppelin.token.erc20.presets.ERC20.allowance.Args",
        "members": {
          "owner": {
            "cairo_type": "felt",
            "offset": 0
          },
          "spender": {
            "cairo_type": "felt",
            "offset": 1
          }
        },
        "size": 2,
        "type": "struct"
      },
      "openzeppelin.token.erc20.presets.ERC20.allowance.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.presets.ERC20.allowance.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.presets.ERC20.allowance.Return": {
        "cairo_type": "(remaining: starkware.cairo.common.uint256.Uint256)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.presets.ERC20.allowance.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.presets.ERC20.approve": {
        "decorators": ["external"],
        "pc": 1334,
        "type": "function"
      },
      "openzeppelin.token.erc20.presets.ERC20.approve.Args": {
        "full_name": "openzeppelin.token.erc20.presets.ERC20.approve.Args",
        "members": {
          "amount": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 1
          },
          "spender": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.presets.ERC20.approve.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.presets.ERC20.approve.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.presets.ERC20.approve.Return": {
        "cairo_type": "(success: felt)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.presets.ERC20.approve.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.presets.ERC20.balanceOf": {
        "decorators": ["view"],
        "pc": 1184,
        "type": "function"
      },
      "openzeppelin.token.erc20.presets.ERC20.balanceOf.Args": {
        "full_name": "openzeppelin.token.erc20.presets.ERC20.balanceOf.Args",
        "members": {
          "account": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "openzeppelin.token.erc20.presets.ERC20.balanceOf.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.presets.ERC20.balanceOf.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.presets.ERC20.balanceOf.Return": {
        "cairo_type": "(balance: starkware.cairo.common.uint256.Uint256)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.presets.ERC20.balanceOf.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.presets.ERC20.constructor": {
        "decorators": ["constructor"],
        "pc": 1026,
        "type": "function"
      },
      "openzeppelin.token.erc20.presets.ERC20.constructor.Args": {
        "full_name": "openzeppelin.token.erc20.presets.ERC20.constructor.Args",
        "members": {
          "decimals": {
            "cairo_type": "felt",
            "offset": 2
          },
          "initial_supply": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 3
          },
          "name": {
            "cairo_type": "felt",
            "offset": 0
          },
          "recipient": {
            "cairo_type": "felt",
            "offset": 5
          },
          "symbol": {
            "cairo_type": "felt",
            "offset": 1
          }
        },
        "size": 6,
        "type": "struct"
      },
      "openzeppelin.token.erc20.presets.ERC20.constructor.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.presets.ERC20.constructor.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.presets.ERC20.constructor.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.presets.ERC20.constructor.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.presets.ERC20.decimals": {
        "decorators": ["view"],
        "pc": 1154,
        "type": "function"
      },
      "openzeppelin.token.erc20.presets.ERC20.decimals.Args": {
        "full_name": "openzeppelin.token.erc20.presets.ERC20.decimals.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.presets.ERC20.decimals.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.presets.ERC20.decimals.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.presets.ERC20.decimals.Return": {
        "cairo_type": "(decimals: felt)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.presets.ERC20.decimals.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.presets.ERC20.decreaseAllowance": {
        "decorators": ["external"],
        "pc": 1410,
        "type": "function"
      },
      "openzeppelin.token.erc20.presets.ERC20.decreaseAllowance.Args": {
        "full_name": "openzeppelin.token.erc20.presets.ERC20.decreaseAllowance.Args",
        "members": {
          "spender": {
            "cairo_type": "felt",
            "offset": 0
          },
          "subtracted_value": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 1
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.presets.ERC20.decreaseAllowance.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.presets.ERC20.decreaseAllowance.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.presets.ERC20.decreaseAllowance.Return": {
        "cairo_type": "(success: felt)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.presets.ERC20.decreaseAllowance.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.presets.ERC20.increaseAllowance": {
        "decorators": ["external"],
        "pc": 1372,
        "type": "function"
      },
      "openzeppelin.token.erc20.presets.ERC20.increaseAllowance.Args": {
        "full_name": "openzeppelin.token.erc20.presets.ERC20.increaseAllowance.Args",
        "members": {
          "added_value": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 1
          },
          "spender": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.presets.ERC20.increaseAllowance.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.presets.ERC20.increaseAllowance.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.presets.ERC20.increaseAllowance.Return": {
        "cairo_type": "(success: felt)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.presets.ERC20.increaseAllowance.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.presets.ERC20.name": {
        "decorators": ["view"],
        "pc": 1063,
        "type": "function"
      },
      "openzeppelin.token.erc20.presets.ERC20.name.Args": {
        "full_name": "openzeppelin.token.erc20.presets.ERC20.name.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.presets.ERC20.name.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.presets.ERC20.name.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.presets.ERC20.name.Return": {
        "cairo_type": "(name: felt)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.presets.ERC20.name.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.presets.ERC20.symbol": {
        "decorators": ["view"],
        "pc": 1093,
        "type": "function"
      },
      "openzeppelin.token.erc20.presets.ERC20.symbol.Args": {
        "full_name": "openzeppelin.token.erc20.presets.ERC20.symbol.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.presets.ERC20.symbol.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.presets.ERC20.symbol.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.presets.ERC20.symbol.Return": {
        "cairo_type": "(symbol: felt)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.presets.ERC20.symbol.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.presets.ERC20.totalSupply": {
        "decorators": ["view"],
        "pc": 1123,
        "type": "function"
      },
      "openzeppelin.token.erc20.presets.ERC20.totalSupply.Args": {
        "full_name": "openzeppelin.token.erc20.presets.ERC20.totalSupply.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "openzeppelin.token.erc20.presets.ERC20.totalSupply.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.presets.ERC20.totalSupply.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.presets.ERC20.totalSupply.Return": {
        "cairo_type": "(totalSupply: starkware.cairo.common.uint256.Uint256)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.presets.ERC20.totalSupply.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.presets.ERC20.transfer": {
        "decorators": ["external"],
        "pc": 1256,
        "type": "function"
      },
      "openzeppelin.token.erc20.presets.ERC20.transfer.Args": {
        "full_name": "openzeppelin.token.erc20.presets.ERC20.transfer.Args",
        "members": {
          "amount": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 1
          },
          "recipient": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.presets.ERC20.transfer.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.presets.ERC20.transfer.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.presets.ERC20.transfer.Return": {
        "cairo_type": "(success: felt)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.presets.ERC20.transfer.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.token.erc20.presets.ERC20.transferFrom": {
        "decorators": ["external"],
        "pc": 1294,
        "type": "function"
      },
      "openzeppelin.token.erc20.presets.ERC20.transferFrom.Args": {
        "full_name": "openzeppelin.token.erc20.presets.ERC20.transferFrom.Args",
        "members": {
          "amount": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 2
          },
          "recipient": {
            "cairo_type": "felt",
            "offset": 1
          },
          "sender": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 4,
        "type": "struct"
      },
      "openzeppelin.token.erc20.presets.ERC20.transferFrom.ImplicitArgs": {
        "full_name": "openzeppelin.token.erc20.presets.ERC20.transferFrom.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 2
          },
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "openzeppelin.token.erc20.presets.ERC20.transferFrom.Return": {
        "cairo_type": "(success: felt)",
        "type": "type_definition"
      },
      "openzeppelin.token.erc20.presets.ERC20.transferFrom.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.utils.constants.library.DEFAULT_ADMIN_ROLE": {
        "type": "const",
        "value": 0
      },
      "openzeppelin.utils.constants.library.IACCESSCONTROL_ID": {
        "type": "const",
        "value": 2036718347
      },
      "openzeppelin.utils.constants.library.IACCOUNT_ID": {
        "type": "const",
        "value": 2792084853
      },
      "openzeppelin.utils.constants.library.IERC1155_ID": {
        "type": "const",
        "value": 3652614694
      },
      "openzeppelin.utils.constants.library.IERC1155_METADATA_ID": {
        "type": "const",
        "value": 243872796
      },
      "openzeppelin.utils.constants.library.IERC1155_RECEIVER_ID": {
        "type": "const",
        "value": 1310921440
      },
      "openzeppelin.utils.constants.library.IERC165_ID": {
        "type": "const",
        "value": 33540519
      },
      "openzeppelin.utils.constants.library.IERC721_ENUMERABLE_ID": {
        "type": "const",
        "value": 2014223715
      },
      "openzeppelin.utils.constants.library.IERC721_ID": {
        "type": "const",
        "value": 2158778573
      },
      "openzeppelin.utils.constants.library.IERC721_METADATA_ID": {
        "type": "const",
        "value": 1532892063
      },
      "openzeppelin.utils.constants.library.IERC721_RECEIVER_ID": {
        "type": "const",
        "value": 353073666
      },
      "openzeppelin.utils.constants.library.INVALID_ID": {
        "type": "const",
        "value": 4294967295
      },
      "openzeppelin.utils.constants.library.ON_ERC1155_BATCH_RECEIVED_SELECTOR": {
        "type": "const",
        "value": 3155786881
      },
      "openzeppelin.utils.constants.library.ON_ERC1155_RECEIVED_SELECTOR": {
        "type": "const",
        "value": 4063915617
      },
      "openzeppelin.utils.constants.library.TRANSACTION_VERSION": {
        "type": "const",
        "value": 1
      },
      "openzeppelin.utils.constants.library.UINT8_MAX": {
        "type": "const",
        "value": 255
      },
      "starkware.cairo.common.alloc.alloc": {
        "decorators": [],
        "pc": 0,
        "type": "function"
      },
      "starkware.cairo.common.alloc.alloc.Args": {
        "full_name": "starkware.cairo.common.alloc.alloc.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "starkware.cairo.common.alloc.alloc.ImplicitArgs": {
        "full_name": "starkware.cairo.common.alloc.alloc.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "starkware.cairo.common.alloc.alloc.Return": {
        "cairo_type": "(ptr: felt*)",
        "type": "type_definition"
      },
      "starkware.cairo.common.alloc.alloc.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "starkware.cairo.common.bitwise.ALL_ONES": {
        "type": "const",
        "value": -106710729501573572985208420194530329073740042555888586719234
      },
      "starkware.cairo.common.bitwise.BitwiseBuiltin": {
        "destination": "starkware.cairo.common.cairo_builtins.BitwiseBuiltin",
        "type": "alias"
      },
      "starkware.cairo.common.bool.FALSE": {
        "type": "const",
        "value": 0
      },
      "starkware.cairo.common.bool.TRUE": {
        "type": "const",
        "value": 1
      },
      "starkware.cairo.common.cairo_builtins.BitwiseBuiltin": {
        "full_name": "starkware.cairo.common.cairo_builtins.BitwiseBuiltin",
        "members": {
          "x": {
            "cairo_type": "felt",
            "offset": 0
          },
          "x_and_y": {
            "cairo_type": "felt",
            "offset": 2
          },
          "x_or_y": {
            "cairo_type": "felt",
            "offset": 4
          },
          "x_xor_y": {
            "cairo_type": "felt",
            "offset": 3
          },
          "y": {
            "cairo_type": "felt",
            "offset": 1
          }
        },
        "size": 5,
        "type": "struct"
      },
      "starkware.cairo.common.cairo_builtins.EcOpBuiltin": {
        "full_name": "starkware.cairo.common.cairo_builtins.EcOpBuiltin",
        "members": {
          "m": {
            "cairo_type": "felt",
            "offset": 4
          },
          "p": {
            "cairo_type": "starkware.cairo.common.ec_point.EcPoint",
            "offset": 0
          },
          "q": {
            "cairo_type": "starkware.cairo.common.ec_point.EcPoint",
            "offset": 2
          },
          "r": {
            "cairo_type": "starkware.cairo.common.ec_point.EcPoint",
            "offset": 5
          }
        },
        "size": 7,
        "type": "struct"
      },
      "starkware.cairo.common.cairo_builtins.EcPoint": {
        "destination": "starkware.cairo.common.ec_point.EcPoint",
        "type": "alias"
      },
      "starkware.cairo.common.cairo_builtins.HashBuiltin": {
        "full_name": "starkware.cairo.common.cairo_builtins.HashBuiltin",
        "members": {
          "result": {
            "cairo_type": "felt",
            "offset": 2
          },
          "x": {
            "cairo_type": "felt",
            "offset": 0
          },
          "y": {
            "cairo_type": "felt",
            "offset": 1
          }
        },
        "size": 3,
        "type": "struct"
      },
      "starkware.cairo.common.cairo_builtins.KeccakBuiltin": {
        "full_name": "starkware.cairo.common.cairo_builtins.KeccakBuiltin",
        "members": {
          "input": {
            "cairo_type": "starkware.cairo.common.keccak_state.KeccakBuiltinState",
            "offset": 0
          },
          "output": {
            "cairo_type": "starkware.cairo.common.keccak_state.KeccakBuiltinState",
            "offset": 8
          }
        },
        "size": 16,
        "type": "struct"
      },
      "starkware.cairo.common.cairo_builtins.KeccakBuiltinState": {
        "destination": "starkware.cairo.common.keccak_state.KeccakBuiltinState",
        "type": "alias"
      },
      "starkware.cairo.common.cairo_builtins.PoseidonBuiltin": {
        "full_name": "starkware.cairo.common.cairo_builtins.PoseidonBuiltin",
        "members": {
          "input": {
            "cairo_type": "starkware.cairo.common.poseidon_state.PoseidonBuiltinState",
            "offset": 0
          },
          "output": {
            "cairo_type": "starkware.cairo.common.poseidon_state.PoseidonBuiltinState",
            "offset": 3
          }
        },
        "size": 6,
        "type": "struct"
      },
      "starkware.cairo.common.cairo_builtins.PoseidonBuiltinState": {
        "destination": "starkware.cairo.common.poseidon_state.PoseidonBuiltinState",
        "type": "alias"
      },
      "starkware.cairo.common.cairo_builtins.SignatureBuiltin": {
        "full_name": "starkware.cairo.common.cairo_builtins.SignatureBuiltin",
        "members": {
          "message": {
            "cairo_type": "felt",
            "offset": 1
          },
          "pub_key": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.cairo.common.dict_access.DictAccess": {
        "full_name": "starkware.cairo.common.dict_access.DictAccess",
        "members": {
          "key": {
            "cairo_type": "felt",
            "offset": 0
          },
          "new_value": {
            "cairo_type": "felt",
            "offset": 2
          },
          "prev_value": {
            "cairo_type": "felt",
            "offset": 1
          }
        },
        "size": 3,
        "type": "struct"
      },
      "starkware.cairo.common.ec_point.EcPoint": {
        "full_name": "starkware.cairo.common.ec_point.EcPoint",
        "members": {
          "x": {
            "cairo_type": "felt",
            "offset": 0
          },
          "y": {
            "cairo_type": "felt",
            "offset": 1
          }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.cairo.common.hash.HashBuiltin": {
        "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
        "type": "alias"
      },
      "starkware.cairo.common.hash.hash2": {
        "decorators": [],
        "pc": 3,
        "type": "function"
      },
      "starkware.cairo.common.hash.hash2.Args": {
        "full_name": "starkware.cairo.common.hash.hash2.Args",
        "members": {
          "x": {
            "cairo_type": "felt",
            "offset": 0
          },
          "y": {
            "cairo_type": "felt",
            "offset": 1
          }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.cairo.common.hash.hash2.ImplicitArgs": {
        "full_name": "starkware.cairo.common.hash.hash2.ImplicitArgs",
        "members": {
          "hash_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.cairo.common.hash.hash2.Return": {
        "cairo_type": "(result: felt)",
        "type": "type_definition"
      },
      "starkware.cairo.common.hash.hash2.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "starkware.cairo.common.keccak_state.KeccakBuiltinState": {
        "full_name": "starkware.cairo.common.keccak_state.KeccakBuiltinState",
        "members": {
          "s0": {
            "cairo_type": "felt",
            "offset": 0
          },
          "s1": {
            "cairo_type": "felt",
            "offset": 1
          },
          "s2": {
            "cairo_type": "felt",
            "offset": 2
          },
          "s3": {
            "cairo_type": "felt",
            "offset": 3
          },
          "s4": {
            "cairo_type": "felt",
            "offset": 4
          },
          "s5": {
            "cairo_type": "felt",
            "offset": 5
          },
          "s6": {
            "cairo_type": "felt",
            "offset": 6
          },
          "s7": {
            "cairo_type": "felt",
            "offset": 7
          }
        },
        "size": 8,
        "type": "struct"
      },
      "starkware.cairo.common.math.FALSE": {
        "destination": "starkware.cairo.common.bool.FALSE",
        "type": "alias"
      },
      "starkware.cairo.common.math.TRUE": {
        "destination": "starkware.cairo.common.bool.TRUE",
        "type": "alias"
      },
      "starkware.cairo.common.math.assert_250_bit": {
        "decorators": ["known_ap_change"],
        "pc": 56,
        "type": "function"
      },
      "starkware.cairo.common.math.assert_250_bit.Args": {
        "full_name": "starkware.cairo.common.math.assert_250_bit.Args",
        "members": {
          "value": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.cairo.common.math.assert_250_bit.HIGH_BOUND": {
        "type": "const",
        "value": 5316911983139663491615228241121378304
      },
      "starkware.cairo.common.math.assert_250_bit.ImplicitArgs": {
        "full_name": "starkware.cairo.common.math.assert_250_bit.ImplicitArgs",
        "members": {
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.cairo.common.math.assert_250_bit.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "starkware.cairo.common.math.assert_250_bit.SHIFT": {
        "type": "const",
        "value": 340282366920938463463374607431768211456
      },
      "starkware.cairo.common.math.assert_250_bit.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "starkware.cairo.common.math.assert_250_bit.UPPER_BOUND": {
        "type": "const",
        "value": 1809251394333065553493296640760748560207343510400633813116524750123642650624
      },
      "starkware.cairo.common.math.assert_250_bit.high": {
        "cairo_type": "felt",
        "full_name": "starkware.cairo.common.math.assert_250_bit.high",
        "references": [
          {
            "ap_tracking_data": {
              "group": 9,
              "offset": 0
            },
            "pc": 56,
            "value": "[cast([fp + (-4)] + 1, felt*)]"
          }
        ],
        "type": "reference"
      },
      "starkware.cairo.common.math.assert_250_bit.low": {
        "cairo_type": "felt",
        "full_name": "starkware.cairo.common.math.assert_250_bit.low",
        "references": [
          {
            "ap_tracking_data": {
              "group": 9,
              "offset": 0
            },
            "pc": 56,
            "value": "[cast([fp + (-4)], felt*)]"
          }
        ],
        "type": "reference"
      },
      "starkware.cairo.common.math.assert_250_bit.value": {
        "cairo_type": "felt",
        "full_name": "starkware.cairo.common.math.assert_250_bit.value",
        "references": [
          {
            "ap_tracking_data": {
              "group": 9,
              "offset": 0
            },
            "pc": 56,
            "value": "[cast(fp + (-3), felt*)]"
          }
        ],
        "type": "reference"
      },
      "starkware.cairo.common.math.assert_le": {
        "decorators": [],
        "pc": 51,
        "type": "function"
      },
      "starkware.cairo.common.math.assert_le.Args": {
        "full_name": "starkware.cairo.common.math.assert_le.Args",
        "members": {
          "a": {
            "cairo_type": "felt",
            "offset": 0
          },
          "b": {
            "cairo_type": "felt",
            "offset": 1
          }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.cairo.common.math.assert_le.ImplicitArgs": {
        "full_name": "starkware.cairo.common.math.assert_le.ImplicitArgs",
        "members": {
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.cairo.common.math.assert_le.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "starkware.cairo.common.math.assert_le.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "starkware.cairo.common.math.assert_le_felt": {
        "decorators": ["known_ap_change"],
        "pc": 69,
        "type": "function"
      },
      "starkware.cairo.common.math.assert_le_felt.Args": {
        "full_name": "starkware.cairo.common.math.assert_le_felt.Args",
        "members": {
          "a": {
            "cairo_type": "felt",
            "offset": 0
          },
          "b": {
            "cairo_type": "felt",
            "offset": 1
          }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.cairo.common.math.assert_le_felt.ImplicitArgs": {
        "full_name": "starkware.cairo.common.math.assert_le_felt.ImplicitArgs",
        "members": {
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.cairo.common.math.assert_le_felt.PRIME_OVER_2_HIGH": {
        "type": "const",
        "value": 5316911983139663648412552867652567041
      },
      "starkware.cairo.common.math.assert_le_felt.PRIME_OVER_3_HIGH": {
        "type": "const",
        "value": 3544607988759775765608368578435044694
      },
      "starkware.cairo.common.math.assert_le_felt.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "starkware.cairo.common.math.assert_le_felt.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "starkware.cairo.common.math.assert_le_felt.a": {
        "cairo_type": "felt",
        "full_name": "starkware.cairo.common.math.assert_le_felt.a",
        "references": [
          {
            "ap_tracking_data": {
              "group": 10,
              "offset": 0
            },
            "pc": 69,
            "value": "[cast(fp + (-4), felt*)]"
          }
        ],
        "type": "reference"
      },
      "starkware.cairo.common.math.assert_le_felt.b": {
        "cairo_type": "felt",
        "full_name": "starkware.cairo.common.math.assert_le_felt.b",
        "references": [
          {
            "ap_tracking_data": {
              "group": 10,
              "offset": 0
            },
            "pc": 69,
            "value": "[cast(fp + (-3), felt*)]"
          }
        ],
        "type": "reference"
      },
      "starkware.cairo.common.math.assert_le_felt.range_check_ptr": {
        "cairo_type": "felt",
        "full_name": "starkware.cairo.common.math.assert_le_felt.range_check_ptr",
        "references": [
          {
            "ap_tracking_data": {
              "group": 10,
              "offset": 0
            },
            "pc": 69,
            "value": "[cast(fp + (-5), felt*)]"
          },
          {
            "ap_tracking_data": {
              "group": 10,
              "offset": 8
            },
            "pc": 79,
            "value": "cast([fp + (-5)] + 4, felt)"
          }
        ],
        "type": "reference"
      },
      "starkware.cairo.common.math.assert_le_felt.skip_exclude_a": {
        "pc": 93,
        "type": "label"
      },
      "starkware.cairo.common.math.assert_le_felt.skip_exclude_b_minus_a": {
        "pc": 105,
        "type": "label"
      },
      "starkware.cairo.common.math.assert_nn": {
        "decorators": [],
        "pc": 47,
        "type": "function"
      },
      "starkware.cairo.common.math.assert_nn.Args": {
        "full_name": "starkware.cairo.common.math.assert_nn.Args",
        "members": {
          "a": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.cairo.common.math.assert_nn.ImplicitArgs": {
        "full_name": "starkware.cairo.common.math.assert_nn.ImplicitArgs",
        "members": {
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.cairo.common.math.assert_nn.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "starkware.cairo.common.math.assert_nn.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "starkware.cairo.common.math.assert_nn.a": {
        "cairo_type": "felt",
        "full_name": "starkware.cairo.common.math.assert_nn.a",
        "references": [
          {
            "ap_tracking_data": {
              "group": 7,
              "offset": 0
            },
            "pc": 47,
            "value": "[cast(fp + (-3), felt*)]"
          }
        ],
        "type": "reference"
      },
      "starkware.cairo.common.math.assert_not_zero": {
        "decorators": [],
        "pc": 42,
        "type": "function"
      },
      "starkware.cairo.common.math.assert_not_zero.Args": {
        "full_name": "starkware.cairo.common.math.assert_not_zero.Args",
        "members": {
          "value": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.cairo.common.math.assert_not_zero.ImplicitArgs": {
        "full_name": "starkware.cairo.common.math.assert_not_zero.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "starkware.cairo.common.math.assert_not_zero.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "starkware.cairo.common.math.assert_not_zero.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "starkware.cairo.common.math.assert_not_zero.value": {
        "cairo_type": "felt",
        "full_name": "starkware.cairo.common.math.assert_not_zero.value",
        "references": [
          {
            "ap_tracking_data": {
              "group": 6,
              "offset": 0
            },
            "pc": 42,
            "value": "[cast(fp + (-3), felt*)]"
          }
        ],
        "type": "reference"
      },
      "starkware.cairo.common.math_cmp.RC_BOUND": {
        "type": "const",
        "value": 340282366920938463463374607431768211456
      },
      "starkware.cairo.common.math_cmp.assert_le_felt": {
        "destination": "starkware.cairo.common.math.assert_le_felt",
        "type": "alias"
      },
      "starkware.cairo.common.math_cmp.assert_lt_felt": {
        "destination": "starkware.cairo.common.math.assert_lt_felt",
        "type": "alias"
      },
      "starkware.cairo.common.math_cmp.is_le": {
        "decorators": ["known_ap_change"],
        "pc": 187,
        "type": "function"
      },
      "starkware.cairo.common.math_cmp.is_le.Args": {
        "full_name": "starkware.cairo.common.math_cmp.is_le.Args",
        "members": {
          "a": {
            "cairo_type": "felt",
            "offset": 0
          },
          "b": {
            "cairo_type": "felt",
            "offset": 1
          }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.cairo.common.math_cmp.is_le.ImplicitArgs": {
        "full_name": "starkware.cairo.common.math_cmp.is_le.ImplicitArgs",
        "members": {
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.cairo.common.math_cmp.is_le.Return": {
        "cairo_type": "felt",
        "type": "type_definition"
      },
      "starkware.cairo.common.math_cmp.is_le.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "starkware.cairo.common.math_cmp.is_nn": {
        "decorators": ["known_ap_change"],
        "pc": 154,
        "type": "function"
      },
      "starkware.cairo.common.math_cmp.is_nn.Args": {
        "full_name": "starkware.cairo.common.math_cmp.is_nn.Args",
        "members": {
          "a": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.cairo.common.math_cmp.is_nn.ImplicitArgs": {
        "full_name": "starkware.cairo.common.math_cmp.is_nn.ImplicitArgs",
        "members": {
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.cairo.common.math_cmp.is_nn.Return": {
        "cairo_type": "felt",
        "type": "type_definition"
      },
      "starkware.cairo.common.math_cmp.is_nn.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "starkware.cairo.common.math_cmp.is_nn.a": {
        "cairo_type": "felt",
        "full_name": "starkware.cairo.common.math_cmp.is_nn.a",
        "references": [
          {
            "ap_tracking_data": {
              "group": 12,
              "offset": 0
            },
            "pc": 154,
            "value": "[cast(fp + (-3), felt*)]"
          }
        ],
        "type": "reference"
      },
      "starkware.cairo.common.math_cmp.is_nn.need_felt_comparison": {
        "pc": 178,
        "type": "label"
      },
      "starkware.cairo.common.math_cmp.is_nn.out_of_range": {
        "pc": 164,
        "type": "label"
      },
      "starkware.cairo.common.poseidon_state.PoseidonBuiltinState": {
        "full_name": "starkware.cairo.common.poseidon_state.PoseidonBuiltinState",
        "members": {
          "s0": {
            "cairo_type": "felt",
            "offset": 0
          },
          "s1": {
            "cairo_type": "felt",
            "offset": 1
          },
          "s2": {
            "cairo_type": "felt",
            "offset": 2
          }
        },
        "size": 3,
        "type": "struct"
      },
      "starkware.cairo.common.pow.assert_le": {
        "destination": "starkware.cairo.common.math.assert_le",
        "type": "alias"
      },
      "starkware.cairo.common.pow.get_ap": {
        "destination": "starkware.cairo.common.registers.get_ap",
        "type": "alias"
      },
      "starkware.cairo.common.pow.get_fp_and_pc": {
        "destination": "starkware.cairo.common.registers.get_fp_and_pc",
        "type": "alias"
      },
      "starkware.cairo.common.registers.get_ap": {
        "destination": "starkware.cairo.lang.compiler.lib.registers.get_ap",
        "type": "alias"
      },
      "starkware.cairo.common.registers.get_fp_and_pc": {
        "destination": "starkware.cairo.lang.compiler.lib.registers.get_fp_and_pc",
        "type": "alias"
      },
      "starkware.cairo.common.uint256.ALL_ONES": {
        "type": "const",
        "value": 340282366920938463463374607431768211455
      },
      "starkware.cairo.common.uint256.BitwiseBuiltin": {
        "destination": "starkware.cairo.common.cairo_builtins.BitwiseBuiltin",
        "type": "alias"
      },
      "starkware.cairo.common.uint256.HALF_SHIFT": {
        "type": "const",
        "value": 18446744073709551616
      },
      "starkware.cairo.common.uint256.SHIFT": {
        "type": "const",
        "value": 340282366920938463463374607431768211456
      },
      "starkware.cairo.common.uint256.Uint256": {
        "full_name": "starkware.cairo.common.uint256.Uint256",
        "members": {
          "high": {
            "cairo_type": "felt",
            "offset": 1
          },
          "low": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.cairo.common.uint256.assert_in_range": {
        "destination": "starkware.cairo.common.math.assert_in_range",
        "type": "alias"
      },
      "starkware.cairo.common.uint256.assert_le": {
        "destination": "starkware.cairo.common.math.assert_le",
        "type": "alias"
      },
      "starkware.cairo.common.uint256.assert_nn_le": {
        "destination": "starkware.cairo.common.math.assert_nn_le",
        "type": "alias"
      },
      "starkware.cairo.common.uint256.assert_not_zero": {
        "destination": "starkware.cairo.common.math.assert_not_zero",
        "type": "alias"
      },
      "starkware.cairo.common.uint256.bitwise_and": {
        "destination": "starkware.cairo.common.bitwise.bitwise_and",
        "type": "alias"
      },
      "starkware.cairo.common.uint256.bitwise_or": {
        "destination": "starkware.cairo.common.bitwise.bitwise_or",
        "type": "alias"
      },
      "starkware.cairo.common.uint256.bitwise_xor": {
        "destination": "starkware.cairo.common.bitwise.bitwise_xor",
        "type": "alias"
      },
      "starkware.cairo.common.uint256.get_ap": {
        "destination": "starkware.cairo.common.registers.get_ap",
        "type": "alias"
      },
      "starkware.cairo.common.uint256.get_fp_and_pc": {
        "destination": "starkware.cairo.common.registers.get_fp_and_pc",
        "type": "alias"
      },
      "starkware.cairo.common.uint256.is_le": {
        "destination": "starkware.cairo.common.math_cmp.is_le",
        "type": "alias"
      },
      "starkware.cairo.common.uint256.pow": {
        "destination": "starkware.cairo.common.pow.pow",
        "type": "alias"
      },
      "starkware.cairo.common.uint256.uint256_add": {
        "decorators": [],
        "pc": 197,
        "type": "function"
      },
      "starkware.cairo.common.uint256.uint256_add.Args": {
        "full_name": "starkware.cairo.common.uint256.uint256_add.Args",
        "members": {
          "a": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 0
          },
          "b": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 2
          }
        },
        "size": 4,
        "type": "struct"
      },
      "starkware.cairo.common.uint256.uint256_add.ImplicitArgs": {
        "full_name": "starkware.cairo.common.uint256.uint256_add.ImplicitArgs",
        "members": {
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.cairo.common.uint256.uint256_add.Return": {
        "cairo_type": "(res: starkware.cairo.common.uint256.Uint256, carry: felt)",
        "type": "type_definition"
      },
      "starkware.cairo.common.uint256.uint256_add.SIZEOF_LOCALS": {
        "type": "const",
        "value": 4
      },
      "starkware.cairo.common.uint256.uint256_add.a": {
        "cairo_type": "starkware.cairo.common.uint256.Uint256",
        "full_name": "starkware.cairo.common.uint256.uint256_add.a",
        "references": [
          {
            "ap_tracking_data": {
              "group": 15,
              "offset": 0
            },
            "pc": 197,
            "value": "[cast(fp + (-6), starkware.cairo.common.uint256.Uint256*)]"
          }
        ],
        "type": "reference"
      },
      "starkware.cairo.common.uint256.uint256_add.b": {
        "cairo_type": "starkware.cairo.common.uint256.Uint256",
        "full_name": "starkware.cairo.common.uint256.uint256_add.b",
        "references": [
          {
            "ap_tracking_data": {
              "group": 15,
              "offset": 0
            },
            "pc": 197,
            "value": "[cast(fp + (-4), starkware.cairo.common.uint256.Uint256*)]"
          }
        ],
        "type": "reference"
      },
      "starkware.cairo.common.uint256.uint256_add.carry_high": {
        "cairo_type": "felt",
        "full_name": "starkware.cairo.common.uint256.uint256_add.carry_high",
        "references": [
          {
            "ap_tracking_data": {
              "group": 15,
              "offset": 4
            },
            "pc": 199,
            "value": "[cast(fp + 3, felt*)]"
          }
        ],
        "type": "reference"
      },
      "starkware.cairo.common.uint256.uint256_add.carry_low": {
        "cairo_type": "felt",
        "full_name": "starkware.cairo.common.uint256.uint256_add.carry_low",
        "references": [
          {
            "ap_tracking_data": {
              "group": 15,
              "offset": 4
            },
            "pc": 199,
            "value": "[cast(fp + 2, felt*)]"
          }
        ],
        "type": "reference"
      },
      "starkware.cairo.common.uint256.uint256_check": {
        "decorators": [],
        "pc": 192,
        "type": "function"
      },
      "starkware.cairo.common.uint256.uint256_check.Args": {
        "full_name": "starkware.cairo.common.uint256.uint256_check.Args",
        "members": {
          "a": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 0
          }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.cairo.common.uint256.uint256_check.ImplicitArgs": {
        "full_name": "starkware.cairo.common.uint256.uint256_check.ImplicitArgs",
        "members": {
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.cairo.common.uint256.uint256_check.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "starkware.cairo.common.uint256.uint256_check.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "starkware.cairo.common.uint256.uint256_eq": {
        "decorators": [],
        "pc": 287,
        "type": "function"
      },
      "starkware.cairo.common.uint256.uint256_eq.Args": {
        "full_name": "starkware.cairo.common.uint256.uint256_eq.Args",
        "members": {
          "a": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 0
          },
          "b": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 2
          }
        },
        "size": 4,
        "type": "struct"
      },
      "starkware.cairo.common.uint256.uint256_eq.ImplicitArgs": {
        "full_name": "starkware.cairo.common.uint256.uint256_eq.ImplicitArgs",
        "members": {
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.cairo.common.uint256.uint256_eq.Return": {
        "cairo_type": "(res: felt)",
        "type": "type_definition"
      },
      "starkware.cairo.common.uint256.uint256_eq.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "starkware.cairo.common.uint256.uint256_le": {
        "decorators": [],
        "pc": 236,
        "type": "function"
      },
      "starkware.cairo.common.uint256.uint256_le.Args": {
        "full_name": "starkware.cairo.common.uint256.uint256_le.Args",
        "members": {
          "a": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 0
          },
          "b": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 2
          }
        },
        "size": 4,
        "type": "struct"
      },
      "starkware.cairo.common.uint256.uint256_le.ImplicitArgs": {
        "full_name": "starkware.cairo.common.uint256.uint256_le.ImplicitArgs",
        "members": {
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.cairo.common.uint256.uint256_le.Return": {
        "cairo_type": "(res: felt)",
        "type": "type_definition"
      },
      "starkware.cairo.common.uint256.uint256_le.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "starkware.cairo.common.uint256.uint256_lt": {
        "decorators": [],
        "pc": 219,
        "type": "function"
      },
      "starkware.cairo.common.uint256.uint256_lt.Args": {
        "full_name": "starkware.cairo.common.uint256.uint256_lt.Args",
        "members": {
          "a": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 0
          },
          "b": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 2
          }
        },
        "size": 4,
        "type": "struct"
      },
      "starkware.cairo.common.uint256.uint256_lt.ImplicitArgs": {
        "full_name": "starkware.cairo.common.uint256.uint256_lt.ImplicitArgs",
        "members": {
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.cairo.common.uint256.uint256_lt.Return": {
        "cairo_type": "(res: felt)",
        "type": "type_definition"
      },
      "starkware.cairo.common.uint256.uint256_lt.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "starkware.cairo.common.uint256.uint256_neg": {
        "decorators": [],
        "pc": 256,
        "type": "function"
      },
      "starkware.cairo.common.uint256.uint256_neg.Args": {
        "full_name": "starkware.cairo.common.uint256.uint256_neg.Args",
        "members": {
          "a": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 0
          }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.cairo.common.uint256.uint256_neg.ImplicitArgs": {
        "full_name": "starkware.cairo.common.uint256.uint256_neg.ImplicitArgs",
        "members": {
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.cairo.common.uint256.uint256_neg.Return": {
        "cairo_type": "(res: starkware.cairo.common.uint256.Uint256)",
        "type": "type_definition"
      },
      "starkware.cairo.common.uint256.uint256_neg.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "starkware.cairo.common.uint256.uint256_not": {
        "decorators": [],
        "pc": 248,
        "type": "function"
      },
      "starkware.cairo.common.uint256.uint256_not.Args": {
        "full_name": "starkware.cairo.common.uint256.uint256_not.Args",
        "members": {
          "a": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 0
          }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.cairo.common.uint256.uint256_not.ImplicitArgs": {
        "full_name": "starkware.cairo.common.uint256.uint256_not.ImplicitArgs",
        "members": {
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.cairo.common.uint256.uint256_not.Return": {
        "cairo_type": "(res: starkware.cairo.common.uint256.Uint256)",
        "type": "type_definition"
      },
      "starkware.cairo.common.uint256.uint256_not.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "starkware.cairo.common.uint256.uint256_sub": {
        "decorators": [],
        "pc": 271,
        "type": "function"
      },
      "starkware.cairo.common.uint256.uint256_sub.Args": {
        "full_name": "starkware.cairo.common.uint256.uint256_sub.Args",
        "members": {
          "a": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 0
          },
          "b": {
            "cairo_type": "starkware.cairo.common.uint256.Uint256",
            "offset": 2
          }
        },
        "size": 4,
        "type": "struct"
      },
      "starkware.cairo.common.uint256.uint256_sub.ImplicitArgs": {
        "full_name": "starkware.cairo.common.uint256.uint256_sub.ImplicitArgs",
        "members": {
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.cairo.common.uint256.uint256_sub.Return": {
        "cairo_type": "(res: starkware.cairo.common.uint256.Uint256)",
        "type": "type_definition"
      },
      "starkware.cairo.common.uint256.uint256_sub.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "starkware.starknet.common.storage.ADDR_BOUND": {
        "type": "const",
        "value": -106710729501573572985208420194530329073740042555888586719489
      },
      "starkware.starknet.common.storage.MAX_STORAGE_ITEM_SIZE": {
        "type": "const",
        "value": 256
      },
      "starkware.starknet.common.storage.assert_250_bit": {
        "destination": "starkware.cairo.common.math.assert_250_bit",
        "type": "alias"
      },
      "starkware.starknet.common.storage.normalize_address": {
        "decorators": ["known_ap_change"],
        "pc": 114,
        "type": "function"
      },
      "starkware.starknet.common.storage.normalize_address.Args": {
        "full_name": "starkware.starknet.common.storage.normalize_address.Args",
        "members": {
          "addr": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.storage.normalize_address.ImplicitArgs": {
        "full_name": "starkware.starknet.common.storage.normalize_address.ImplicitArgs",
        "members": {
          "range_check_ptr": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.storage.normalize_address.Return": {
        "cairo_type": "(res: felt)",
        "type": "type_definition"
      },
      "starkware.starknet.common.storage.normalize_address.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "starkware.starknet.common.storage.normalize_address.addr": {
        "cairo_type": "felt",
        "full_name": "starkware.starknet.common.storage.normalize_address.addr",
        "references": [
          {
            "ap_tracking_data": {
              "group": 11,
              "offset": 0
            },
            "pc": 114,
            "value": "[cast(fp + (-3), felt*)]"
          }
        ],
        "type": "reference"
      },
      "starkware.starknet.common.storage.normalize_address.is_250": {
        "cairo_type": "felt",
        "full_name": "starkware.starknet.common.storage.normalize_address.is_250",
        "references": [
          {
            "ap_tracking_data": {
              "group": 11,
              "offset": 2
            },
            "pc": 134,
            "value": "[cast(ap + (-1), felt*)]"
          }
        ],
        "type": "reference"
      },
      "starkware.starknet.common.storage.normalize_address.is_small": {
        "cairo_type": "felt",
        "full_name": "starkware.starknet.common.storage.normalize_address.is_small",
        "references": [
          {
            "ap_tracking_data": {
              "group": 11,
              "offset": 1
            },
            "pc": 116,
            "value": "[cast(ap + (-1), felt*)]"
          }
        ],
        "type": "reference"
      },
      "starkware.starknet.common.syscalls.CALL_CONTRACT_SELECTOR": {
        "type": "const",
        "value": 20853273475220472486191784820
      },
      "starkware.starknet.common.syscalls.CallContract": {
        "full_name": "starkware.starknet.common.syscalls.CallContract",
        "members": {
          "request": {
            "cairo_type": "starkware.starknet.common.syscalls.CallContractRequest",
            "offset": 0
          },
          "response": {
            "cairo_type": "starkware.starknet.common.syscalls.CallContractResponse",
            "offset": 5
          }
        },
        "size": 7,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.CallContractRequest": {
        "full_name": "starkware.starknet.common.syscalls.CallContractRequest",
        "members": {
          "calldata": {
            "cairo_type": "felt*",
            "offset": 4
          },
          "calldata_size": {
            "cairo_type": "felt",
            "offset": 3
          },
          "contract_address": {
            "cairo_type": "felt",
            "offset": 1
          },
          "function_selector": {
            "cairo_type": "felt",
            "offset": 2
          },
          "selector": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 5,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.CallContractResponse": {
        "full_name": "starkware.starknet.common.syscalls.CallContractResponse",
        "members": {
          "retdata": {
            "cairo_type": "felt*",
            "offset": 1
          },
          "retdata_size": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.DELEGATE_CALL_SELECTOR": {
        "type": "const",
        "value": 21167594061783206823196716140
      },
      "starkware.starknet.common.syscalls.DELEGATE_L1_HANDLER_SELECTOR": {
        "type": "const",
        "value": 23274015802972845247556842986379118667122
      },
      "starkware.starknet.common.syscalls.DEPLOY_SELECTOR": {
        "type": "const",
        "value": 75202468540281
      },
      "starkware.starknet.common.syscalls.Deploy": {
        "full_name": "starkware.starknet.common.syscalls.Deploy",
        "members": {
          "request": {
            "cairo_type": "starkware.starknet.common.syscalls.DeployRequest",
            "offset": 0
          },
          "response": {
            "cairo_type": "starkware.starknet.common.syscalls.DeployResponse",
            "offset": 6
          }
        },
        "size": 9,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.DeployRequest": {
        "full_name": "starkware.starknet.common.syscalls.DeployRequest",
        "members": {
          "class_hash": {
            "cairo_type": "felt",
            "offset": 1
          },
          "constructor_calldata": {
            "cairo_type": "felt*",
            "offset": 4
          },
          "constructor_calldata_size": {
            "cairo_type": "felt",
            "offset": 3
          },
          "contract_address_salt": {
            "cairo_type": "felt",
            "offset": 2
          },
          "deploy_from_zero": {
            "cairo_type": "felt",
            "offset": 5
          },
          "selector": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 6,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.DeployResponse": {
        "full_name": "starkware.starknet.common.syscalls.DeployResponse",
        "members": {
          "constructor_retdata": {
            "cairo_type": "felt*",
            "offset": 2
          },
          "constructor_retdata_size": {
            "cairo_type": "felt",
            "offset": 1
          },
          "contract_address": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 3,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.DictAccess": {
        "destination": "starkware.cairo.common.dict_access.DictAccess",
        "type": "alias"
      },
      "starkware.starknet.common.syscalls.EMIT_EVENT_SELECTOR": {
        "type": "const",
        "value": 1280709301550335749748
      },
      "starkware.starknet.common.syscalls.EmitEvent": {
        "full_name": "starkware.starknet.common.syscalls.EmitEvent",
        "members": {
          "data": {
            "cairo_type": "felt*",
            "offset": 4
          },
          "data_len": {
            "cairo_type": "felt",
            "offset": 3
          },
          "keys": {
            "cairo_type": "felt*",
            "offset": 2
          },
          "keys_len": {
            "cairo_type": "felt",
            "offset": 1
          },
          "selector": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 5,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GET_BLOCK_NUMBER_SELECTOR": {
        "type": "const",
        "value": 1448089106835523001438702345020786
      },
      "starkware.starknet.common.syscalls.GET_BLOCK_TIMESTAMP_SELECTOR": {
        "type": "const",
        "value": 24294903732626645868215235778792757751152
      },
      "starkware.starknet.common.syscalls.GET_CALLER_ADDRESS_SELECTOR": {
        "type": "const",
        "value": 94901967781393078444254803017658102643
      },
      "starkware.starknet.common.syscalls.GET_CONTRACT_ADDRESS_SELECTOR": {
        "type": "const",
        "value": 6219495360805491471215297013070624192820083
      },
      "starkware.starknet.common.syscalls.GET_SEQUENCER_ADDRESS_SELECTOR": {
        "type": "const",
        "value": 1592190833581991703053805829594610833820054387
      },
      "starkware.starknet.common.syscalls.GET_TX_INFO_SELECTOR": {
        "type": "const",
        "value": 1317029390204112103023
      },
      "starkware.starknet.common.syscalls.GET_TX_SIGNATURE_SELECTOR": {
        "type": "const",
        "value": 1448089128652340074717162277007973
      },
      "starkware.starknet.common.syscalls.GetBlockNumber": {
        "full_name": "starkware.starknet.common.syscalls.GetBlockNumber",
        "members": {
          "request": {
            "cairo_type": "starkware.starknet.common.syscalls.GetBlockNumberRequest",
            "offset": 0
          },
          "response": {
            "cairo_type": "starkware.starknet.common.syscalls.GetBlockNumberResponse",
            "offset": 1
          }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetBlockNumberRequest": {
        "full_name": "starkware.starknet.common.syscalls.GetBlockNumberRequest",
        "members": {
          "selector": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetBlockNumberResponse": {
        "full_name": "starkware.starknet.common.syscalls.GetBlockNumberResponse",
        "members": {
          "block_number": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetBlockTimestamp": {
        "full_name": "starkware.starknet.common.syscalls.GetBlockTimestamp",
        "members": {
          "request": {
            "cairo_type": "starkware.starknet.common.syscalls.GetBlockTimestampRequest",
            "offset": 0
          },
          "response": {
            "cairo_type": "starkware.starknet.common.syscalls.GetBlockTimestampResponse",
            "offset": 1
          }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetBlockTimestampRequest": {
        "full_name": "starkware.starknet.common.syscalls.GetBlockTimestampRequest",
        "members": {
          "selector": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetBlockTimestampResponse": {
        "full_name": "starkware.starknet.common.syscalls.GetBlockTimestampResponse",
        "members": {
          "block_timestamp": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetCallerAddress": {
        "full_name": "starkware.starknet.common.syscalls.GetCallerAddress",
        "members": {
          "request": {
            "cairo_type": "starkware.starknet.common.syscalls.GetCallerAddressRequest",
            "offset": 0
          },
          "response": {
            "cairo_type": "starkware.starknet.common.syscalls.GetCallerAddressResponse",
            "offset": 1
          }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetCallerAddressRequest": {
        "full_name": "starkware.starknet.common.syscalls.GetCallerAddressRequest",
        "members": {
          "selector": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetCallerAddressResponse": {
        "full_name": "starkware.starknet.common.syscalls.GetCallerAddressResponse",
        "members": {
          "caller_address": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetContractAddress": {
        "full_name": "starkware.starknet.common.syscalls.GetContractAddress",
        "members": {
          "request": {
            "cairo_type": "starkware.starknet.common.syscalls.GetContractAddressRequest",
            "offset": 0
          },
          "response": {
            "cairo_type": "starkware.starknet.common.syscalls.GetContractAddressResponse",
            "offset": 1
          }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetContractAddressRequest": {
        "full_name": "starkware.starknet.common.syscalls.GetContractAddressRequest",
        "members": {
          "selector": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetContractAddressResponse": {
        "full_name": "starkware.starknet.common.syscalls.GetContractAddressResponse",
        "members": {
          "contract_address": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetSequencerAddress": {
        "full_name": "starkware.starknet.common.syscalls.GetSequencerAddress",
        "members": {
          "request": {
            "cairo_type": "starkware.starknet.common.syscalls.GetSequencerAddressRequest",
            "offset": 0
          },
          "response": {
            "cairo_type": "starkware.starknet.common.syscalls.GetSequencerAddressResponse",
            "offset": 1
          }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetSequencerAddressRequest": {
        "full_name": "starkware.starknet.common.syscalls.GetSequencerAddressRequest",
        "members": {
          "selector": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetSequencerAddressResponse": {
        "full_name": "starkware.starknet.common.syscalls.GetSequencerAddressResponse",
        "members": {
          "sequencer_address": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetTxInfo": {
        "full_name": "starkware.starknet.common.syscalls.GetTxInfo",
        "members": {
          "request": {
            "cairo_type": "starkware.starknet.common.syscalls.GetTxInfoRequest",
            "offset": 0
          },
          "response": {
            "cairo_type": "starkware.starknet.common.syscalls.GetTxInfoResponse",
            "offset": 1
          }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetTxInfoRequest": {
        "full_name": "starkware.starknet.common.syscalls.GetTxInfoRequest",
        "members": {
          "selector": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetTxInfoResponse": {
        "full_name": "starkware.starknet.common.syscalls.GetTxInfoResponse",
        "members": {
          "tx_info": {
            "cairo_type": "starkware.starknet.common.syscalls.TxInfo*",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetTxSignature": {
        "full_name": "starkware.starknet.common.syscalls.GetTxSignature",
        "members": {
          "request": {
            "cairo_type": "starkware.starknet.common.syscalls.GetTxSignatureRequest",
            "offset": 0
          },
          "response": {
            "cairo_type": "starkware.starknet.common.syscalls.GetTxSignatureResponse",
            "offset": 1
          }
        },
        "size": 3,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetTxSignatureRequest": {
        "full_name": "starkware.starknet.common.syscalls.GetTxSignatureRequest",
        "members": {
          "selector": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetTxSignatureResponse": {
        "full_name": "starkware.starknet.common.syscalls.GetTxSignatureResponse",
        "members": {
          "signature": {
            "cairo_type": "felt*",
            "offset": 1
          },
          "signature_len": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.LIBRARY_CALL_L1_HANDLER_SELECTOR": {
        "type": "const",
        "value": 436233452754198157705746250789557519228244616562
      },
      "starkware.starknet.common.syscalls.LIBRARY_CALL_SELECTOR": {
        "type": "const",
        "value": 92376026794327011772951660
      },
      "starkware.starknet.common.syscalls.LibraryCall": {
        "full_name": "starkware.starknet.common.syscalls.LibraryCall",
        "members": {
          "request": {
            "cairo_type": "starkware.starknet.common.syscalls.LibraryCallRequest",
            "offset": 0
          },
          "response": {
            "cairo_type": "starkware.starknet.common.syscalls.CallContractResponse",
            "offset": 5
          }
        },
        "size": 7,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.LibraryCallRequest": {
        "full_name": "starkware.starknet.common.syscalls.LibraryCallRequest",
        "members": {
          "calldata": {
            "cairo_type": "felt*",
            "offset": 4
          },
          "calldata_size": {
            "cairo_type": "felt",
            "offset": 3
          },
          "class_hash": {
            "cairo_type": "felt",
            "offset": 1
          },
          "function_selector": {
            "cairo_type": "felt",
            "offset": 2
          },
          "selector": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 5,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.REPLACE_CLASS_SELECTOR": {
        "type": "const",
        "value": 25500403217443378527601783667
      },
      "starkware.starknet.common.syscalls.ReplaceClass": {
        "full_name": "starkware.starknet.common.syscalls.ReplaceClass",
        "members": {
          "class_hash": {
            "cairo_type": "felt",
            "offset": 1
          },
          "selector": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.SEND_MESSAGE_TO_L1_SELECTOR": {
        "type": "const",
        "value": 433017908768303439907196859243777073
      },
      "starkware.starknet.common.syscalls.STORAGE_READ_SELECTOR": {
        "type": "const",
        "value": 100890693370601760042082660
      },
      "starkware.starknet.common.syscalls.STORAGE_WRITE_SELECTOR": {
        "type": "const",
        "value": 25828017502874050592466629733
      },
      "starkware.starknet.common.syscalls.SendMessageToL1SysCall": {
        "full_name": "starkware.starknet.common.syscalls.SendMessageToL1SysCall",
        "members": {
          "payload_ptr": {
            "cairo_type": "felt*",
            "offset": 3
          },
          "payload_size": {
            "cairo_type": "felt",
            "offset": 2
          },
          "selector": {
            "cairo_type": "felt",
            "offset": 0
          },
          "to_address": {
            "cairo_type": "felt",
            "offset": 1
          }
        },
        "size": 4,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.StorageRead": {
        "full_name": "starkware.starknet.common.syscalls.StorageRead",
        "members": {
          "request": {
            "cairo_type": "starkware.starknet.common.syscalls.StorageReadRequest",
            "offset": 0
          },
          "response": {
            "cairo_type": "starkware.starknet.common.syscalls.StorageReadResponse",
            "offset": 2
          }
        },
        "size": 3,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.StorageReadRequest": {
        "full_name": "starkware.starknet.common.syscalls.StorageReadRequest",
        "members": {
          "address": {
            "cairo_type": "felt",
            "offset": 1
          },
          "selector": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.StorageReadResponse": {
        "full_name": "starkware.starknet.common.syscalls.StorageReadResponse",
        "members": {
          "value": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.StorageWrite": {
        "full_name": "starkware.starknet.common.syscalls.StorageWrite",
        "members": {
          "address": {
            "cairo_type": "felt",
            "offset": 1
          },
          "selector": {
            "cairo_type": "felt",
            "offset": 0
          },
          "value": {
            "cairo_type": "felt",
            "offset": 2
          }
        },
        "size": 3,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.TxInfo": {
        "full_name": "starkware.starknet.common.syscalls.TxInfo",
        "members": {
          "account_contract_address": {
            "cairo_type": "felt",
            "offset": 1
          },
          "chain_id": {
            "cairo_type": "felt",
            "offset": 6
          },
          "max_fee": {
            "cairo_type": "felt",
            "offset": 2
          },
          "nonce": {
            "cairo_type": "felt",
            "offset": 7
          },
          "signature": {
            "cairo_type": "felt*",
            "offset": 4
          },
          "signature_len": {
            "cairo_type": "felt",
            "offset": 3
          },
          "transaction_hash": {
            "cairo_type": "felt",
            "offset": 5
          },
          "version": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 8,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.emit_event": {
        "decorators": [],
        "pc": 32,
        "type": "function"
      },
      "starkware.starknet.common.syscalls.emit_event.Args": {
        "full_name": "starkware.starknet.common.syscalls.emit_event.Args",
        "members": {
          "data": {
            "cairo_type": "felt*",
            "offset": 3
          },
          "data_len": {
            "cairo_type": "felt",
            "offset": 2
          },
          "keys": {
            "cairo_type": "felt*",
            "offset": 1
          },
          "keys_len": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 4,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.emit_event.ImplicitArgs": {
        "full_name": "starkware.starknet.common.syscalls.emit_event.ImplicitArgs",
        "members": {
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.emit_event.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "starkware.starknet.common.syscalls.emit_event.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "starkware.starknet.common.syscalls.emit_event.syscall_ptr": {
        "cairo_type": "felt*",
        "full_name": "starkware.starknet.common.syscalls.emit_event.syscall_ptr",
        "references": [
          {
            "ap_tracking_data": {
              "group": 5,
              "offset": 0
            },
            "pc": 32,
            "value": "[cast(fp + (-7), felt**)]"
          },
          {
            "ap_tracking_data": {
              "group": 5,
              "offset": 1
            },
            "pc": 39,
            "value": "cast([fp + (-7)] + 5, felt*)"
          }
        ],
        "type": "reference"
      },
      "starkware.starknet.common.syscalls.get_caller_address": {
        "decorators": [],
        "pc": 9,
        "type": "function"
      },
      "starkware.starknet.common.syscalls.get_caller_address.Args": {
        "full_name": "starkware.starknet.common.syscalls.get_caller_address.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.get_caller_address.ImplicitArgs": {
        "full_name": "starkware.starknet.common.syscalls.get_caller_address.ImplicitArgs",
        "members": {
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.get_caller_address.Return": {
        "cairo_type": "(caller_address: felt)",
        "type": "type_definition"
      },
      "starkware.starknet.common.syscalls.get_caller_address.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "starkware.starknet.common.syscalls.get_caller_address.syscall_ptr": {
        "cairo_type": "felt*",
        "full_name": "starkware.starknet.common.syscalls.get_caller_address.syscall_ptr",
        "references": [
          {
            "ap_tracking_data": {
              "group": 2,
              "offset": 0
            },
            "pc": 9,
            "value": "[cast(fp + (-3), felt**)]"
          },
          {
            "ap_tracking_data": {
              "group": 2,
              "offset": 1
            },
            "pc": 12,
            "value": "cast([fp + (-3)] + 2, felt*)"
          }
        ],
        "type": "reference"
      },
      "starkware.starknet.common.syscalls.storage_read": {
        "decorators": [],
        "pc": 16,
        "type": "function"
      },
      "starkware.starknet.common.syscalls.storage_read.Args": {
        "full_name": "starkware.starknet.common.syscalls.storage_read.Args",
        "members": {
          "address": {
            "cairo_type": "felt",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.storage_read.ImplicitArgs": {
        "full_name": "starkware.starknet.common.syscalls.storage_read.ImplicitArgs",
        "members": {
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.storage_read.Return": {
        "cairo_type": "(value: felt)",
        "type": "type_definition"
      },
      "starkware.starknet.common.syscalls.storage_read.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "starkware.starknet.common.syscalls.storage_read.syscall_ptr": {
        "cairo_type": "felt*",
        "full_name": "starkware.starknet.common.syscalls.storage_read.syscall_ptr",
        "references": [
          {
            "ap_tracking_data": {
              "group": 3,
              "offset": 0
            },
            "pc": 16,
            "value": "[cast(fp + (-4), felt**)]"
          },
          {
            "ap_tracking_data": {
              "group": 3,
              "offset": 1
            },
            "pc": 20,
            "value": "cast([fp + (-4)] + 3, felt*)"
          }
        ],
        "type": "reference"
      },
      "starkware.starknet.common.syscalls.storage_write": {
        "decorators": [],
        "pc": 24,
        "type": "function"
      },
      "starkware.starknet.common.syscalls.storage_write.Args": {
        "full_name": "starkware.starknet.common.syscalls.storage_write.Args",
        "members": {
          "address": {
            "cairo_type": "felt",
            "offset": 0
          },
          "value": {
            "cairo_type": "felt",
            "offset": 1
          }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.storage_write.ImplicitArgs": {
        "full_name": "starkware.starknet.common.syscalls.storage_write.ImplicitArgs",
        "members": {
          "syscall_ptr": {
            "cairo_type": "felt*",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.storage_write.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "starkware.starknet.common.syscalls.storage_write.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "starkware.starknet.common.syscalls.storage_write.syscall_ptr": {
        "cairo_type": "felt*",
        "full_name": "starkware.starknet.common.syscalls.storage_write.syscall_ptr",
        "references": [
          {
            "ap_tracking_data": {
              "group": 4,
              "offset": 0
            },
            "pc": 24,
            "value": "[cast(fp + (-5), felt**)]"
          },
          {
            "ap_tracking_data": {
              "group": 4,
              "offset": 1
            },
            "pc": 29,
            "value": "cast([fp + (-5)] + 3, felt*)"
          }
        ],
        "type": "reference"
      }
    },
    "main_scope": "__main__",
    "prime": "0x800000000000011000000000000000000000000000000000000000000000001",
    "reference_manager": {
      "references": [
        {
          "ap_tracking_data": {
            "group": 2,
            "offset": 0
          },
          "pc": 9,
          "value": "[cast(fp + (-3), felt**)]"
        },
        {
          "ap_tracking_data": {
            "group": 3,
            "offset": 0
          },
          "pc": 16,
          "value": "[cast(fp + (-4), felt**)]"
        },
        {
          "ap_tracking_data": {
            "group": 4,
            "offset": 0
          },
          "pc": 24,
          "value": "[cast(fp + (-5), felt**)]"
        },
        {
          "ap_tracking_data": {
            "group": 5,
            "offset": 0
          },
          "pc": 32,
          "value": "[cast(fp + (-7), felt**)]"
        },
        {
          "ap_tracking_data": {
            "group": 6,
            "offset": 0
          },
          "pc": 42,
          "value": "[cast(fp + (-3), felt*)]"
        },
        {
          "ap_tracking_data": {
            "group": 7,
            "offset": 0
          },
          "pc": 47,
          "value": "[cast(fp + (-3), felt*)]"
        },
        {
          "ap_tracking_data": {
            "group": 9,
            "offset": 0
          },
          "pc": 56,
          "value": "[cast(fp + (-3), felt*)]"
        },
        {
          "ap_tracking_data": {
            "group": 9,
            "offset": 0
          },
          "pc": 56,
          "value": "[cast([fp + (-4)], felt*)]"
        },
        {
          "ap_tracking_data": {
            "group": 9,
            "offset": 0
          },
          "pc": 56,
          "value": "[cast([fp + (-4)] + 1, felt*)]"
        },
        {
          "ap_tracking_data": {
            "group": 10,
            "offset": 0
          },
          "pc": 69,
          "value": "[cast(fp + (-4), felt*)]"
        },
        {
          "ap_tracking_data": {
            "group": 10,
            "offset": 0
          },
          "pc": 69,
          "value": "[cast(fp + (-3), felt*)]"
        },
        {
          "ap_tracking_data": {
            "group": 10,
            "offset": 0
          },
          "pc": 69,
          "value": "[cast(fp + (-5), felt*)]"
        },
        {
          "ap_tracking_data": {
            "group": 11,
            "offset": 0
          },
          "pc": 114,
          "value": "[cast(fp + (-3), felt*)]"
        },
        {
          "ap_tracking_data": {
            "group": 11,
            "offset": 1
          },
          "pc": 116,
          "value": "[cast(ap + (-1), felt*)]"
        },
        {
          "ap_tracking_data": {
            "group": 11,
            "offset": 2
          },
          "pc": 134,
          "value": "[cast(ap + (-1), felt*)]"
        },
        {
          "ap_tracking_data": {
            "group": 12,
            "offset": 0
          },
          "pc": 154,
          "value": "[cast(fp + (-3), felt*)]"
        },
        {
          "ap_tracking_data": {
            "group": 15,
            "offset": 0
          },
          "pc": 197,
          "value": "[cast(fp + (-6), starkware.cairo.common.uint256.Uint256*)]"
        },
        {
          "ap_tracking_data": {
            "group": 15,
            "offset": 0
          },
          "pc": 197,
          "value": "[cast(fp + (-4), starkware.cairo.common.uint256.Uint256*)]"
        },
        {
          "ap_tracking_data": {
            "group": 15,
            "offset": 4
          },
          "pc": 199,
          "value": "[cast(fp + 2, felt*)]"
        },
        {
          "ap_tracking_data": {
            "group": 15,
            "offset": 4
          },
          "pc": 199,
          "value": "[cast(fp + 3, felt*)]"
        }
      ]
    }
  }
};

const eth_address =
    '0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7';
const provider = new starknet.RpcProvider({
    nodeUrl: 'http://localhost:9946',
});
// const provider = new starknet.RpcProvider({
//     nodeUrl: 'http://localhost:9944',
// });
const account = new starknet.Account(
    provider,
    '0x47e98722a44b95f516bd4e1cd5a4a50b183a6595d4cb48fe51caee5e7f13879',
    '0xb3a95959eb7c025ca4b3196a6b69402cd0c02227e5c38cef796b2119a09fe7',
    '1'
);
// const account = new starknet.Account(
//     provider,
//     '0x055be462e718c4166d656d11f89e341115b8bc82389c3762a10eade04fcb225d',
//     '0x077e56c6dc32d40a67f6f7e6625c8dc5e570abe49c0a24e9202e4ae906abcc07',
//     '1'
// );

async function transfer(to) {
    const contract = new starknet.Contract(ERC20.abi, eth_address, provider);

    const TRANSACTION_COUNT = 5000;
    let hashes = [];
    let nonce = await provider.getNonceForAddress(account.address);
    nonce = Number(nonce);
    let promises = [];
    for (let i = 0; i < TRANSACTION_COUNT; i++) {
        let result = contract.populate('transfer', {
            recipient: to,
            amount: {
                low: 1,
                high: 0,
            },
        });

        console.log('this is the nonce - ', nonce);
        let hash = await account.execute(result, {
            nonce,
            maxFee: '1293261266510',
        });
        console.log(hash);
        hashes.push(hash);
        nonce += 1;
    }

    console.log('Txn hashes - ', hashes);
    await provider.waitForTransaction(hashes[0].transaction_hash);
    console.log(
        'Transaction receipt - ',
        await provider.waitForTransaction(hashes[0].transaction_hash)
    );

    // let promises2 = [];
    // for (let i = 0; i < TRANSACTION_COUNT; i++) {
    //     promises2.push(provider.waitForTransaction(hashes[i].transaction_hash));
    // }
    // let results = await Promise.all(promises2);
    // results.forEach((result) => {
    //     console.log('This is the transaction receipt - ', result);
    // });
}

transfer(process.argv[2]);
