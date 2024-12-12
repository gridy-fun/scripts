const abi = [
  {
    type: "impl",
    name: "BotContract",
    interface_name: "gridy::bot::interface::IBotContract",
  },
  {
    type: "enum",
    name: "core::bool",
    variants: [
      { name: "False", type: "()" },
      { name: "True", type: "()" },
    ],
  },
  {
    type: "interface",
    name: "gridy::bot::interface::IBotContract",
    items: [
      {
        type: "function",
        name: "start_bot",
        inputs: [],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "kill_bot",
        inputs: [],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "update_owner",
        inputs: [
          {
            name: "new_executor",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "compute_point",
        inputs: [{ name: "seed", type: "core::integer::u128" }],
        outputs: [{ type: "core::felt252" }],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "is_bot_alive",
        inputs: [],
        outputs: [{ type: "core::bool" }],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_owner",
        inputs: [],
        outputs: [
          { type: "core::starknet::contract_address::ContractAddress" },
        ],
        state_mutability: "view",
      },
    ],
  },
  {
    type: "constructor",
    name: "constructor",
    inputs: [
      {
        name: "executor",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "spawned_by",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "game_contract",
        type: "core::starknet::contract_address::ContractAddress",
      },
      { name: "initial_location", type: "core::felt252" },
      { name: "grid_width", type: "core::integer::u128" },
      { name: "grid_height", type: "core::integer::u128" },
    ],
  },
  {
    type: "event",
    name: "gridy::bot::main::BotContract::Event",
    kind: "enum",
    variants: [],
  },
];

module.exports = abi;
