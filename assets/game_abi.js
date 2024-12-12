const abi = [
  {
    type: "impl",
    name: "GameContract",
    interface_name: "gridy::game::interface::IGameContract",
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
    name: "gridy::game::interface::IGameContract",
    items: [
      {
        type: "function",
        name: "enable_contract",
        inputs: [],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "disable_contract",
        inputs: [],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "update_executor_contract",
        inputs: [
          {
            name: "executor",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "update_bomb_value",
        inputs: [{ name: "bomb_value", type: "core::integer::u128" }],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "deploy_bot",
        inputs: [
          {
            name: "player",
            type: "core::starknet::contract_address::ContractAddress",
          },
          { name: "location", type: "core::felt252" },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "mine",
        inputs: [
          {
            name: "bot",
            type: "core::starknet::contract_address::ContractAddress",
          },
          { name: "seed", type: "core::integer::u128" },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "is_contract_enabled",
        inputs: [],
        outputs: [{ type: "core::bool" }],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "check_if_already_mined",
        inputs: [{ name: "block_id", type: "core::felt252" }],
        outputs: [{ type: "core::bool" }],
        state_mutability: "view",
      },
    ],
  },
  {
    type: "impl",
    name: "UpgradeableImpl",
    interface_name: "openzeppelin_upgrades::interface::IUpgradeable",
  },
  {
    type: "interface",
    name: "openzeppelin_upgrades::interface::IUpgradeable",
    items: [
      {
        type: "function",
        name: "upgrade",
        inputs: [
          {
            name: "new_class_hash",
            type: "core::starknet::class_hash::ClassHash",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
    ],
  },
  {
    type: "impl",
    name: "OwnableMixinImpl",
    interface_name: "openzeppelin_access::ownable::interface::OwnableABI",
  },
  {
    type: "interface",
    name: "openzeppelin_access::ownable::interface::OwnableABI",
    items: [
      {
        type: "function",
        name: "owner",
        inputs: [],
        outputs: [
          { type: "core::starknet::contract_address::ContractAddress" },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "transfer_ownership",
        inputs: [
          {
            name: "new_owner",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "renounce_ownership",
        inputs: [],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "transferOwnership",
        inputs: [
          {
            name: "newOwner",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "renounceOwnership",
        inputs: [],
        outputs: [],
        state_mutability: "external",
      },
    ],
  },
  {
    type: "struct",
    name: "gridy::game::main::GameContract::BlockPoint",
    members: [
      { name: "id", type: "core::felt252" },
      { name: "points", type: "core::integer::u128" },
    ],
  },
  {
    type: "struct",
    name: "core::array::Span::<gridy::game::main::GameContract::BlockPoint>",
    members: [
      {
        name: "snapshot",
        type: "@core::array::Array::<gridy::game::main::GameContract::BlockPoint>",
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
        name: "bot_contract_class_hash",
        type: "core::starknet::class_hash::ClassHash",
      },
      { name: "bomb_value", type: "core::integer::u128" },
      { name: "mining_points", type: "core::integer::u128" },
      { name: "grid_width", type: "core::integer::u128" },
      { name: "grid_height", type: "core::integer::u128" },
      {
        name: "block_points",
        type: "core::array::Span::<gridy::game::main::GameContract::BlockPoint>",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferred",
    kind: "struct",
    members: [
      {
        name: "previous_owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "new_owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
    kind: "struct",
    members: [
      {
        name: "previous_owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "new_owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin_access::ownable::ownable::OwnableComponent::Event",
    kind: "enum",
    variants: [
      {
        name: "OwnershipTransferred",
        type: "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferred",
        kind: "nested",
      },
      {
        name: "OwnershipTransferStarted",
        type: "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
        kind: "nested",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin_upgrades::upgradeable::UpgradeableComponent::Upgraded",
    kind: "struct",
    members: [
      {
        name: "class_hash",
        type: "core::starknet::class_hash::ClassHash",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin_upgrades::upgradeable::UpgradeableComponent::Event",
    kind: "enum",
    variants: [
      {
        name: "Upgraded",
        type: "openzeppelin_upgrades::upgradeable::UpgradeableComponent::Upgraded",
        kind: "nested",
      },
    ],
  },
  {
    type: "event",
    name: "gridy::game::main::GameContract::DiamondFound",
    kind: "struct",
    members: [
      {
        name: "bot",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      { name: "points", type: "core::integer::u128", kind: "key" },
      { name: "location", type: "core::felt252", kind: "key" },
    ],
  },
  {
    type: "event",
    name: "gridy::game::main::GameContract::BombFound",
    kind: "struct",
    members: [
      {
        name: "bot",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      { name: "location", type: "core::felt252", kind: "key" },
    ],
  },
  {
    type: "event",
    name: "gridy::game::main::GameContract::TileMined",
    kind: "struct",
    members: [
      {
        name: "bot",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      { name: "points", type: "core::integer::u128", kind: "key" },
      { name: "location", type: "core::felt252", kind: "key" },
    ],
  },
  {
    type: "event",
    name: "gridy::game::main::GameContract::SpawnedBot",
    kind: "struct",
    members: [
      {
        name: "player",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      { name: "location", type: "core::felt252", kind: "key" },
      {
        name: "bot_address",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
    ],
  },
  {
    type: "event",
    name: "gridy::game::main::GameContract::Event",
    kind: "enum",
    variants: [
      {
        name: "OwnableEvent",
        type: "openzeppelin_access::ownable::ownable::OwnableComponent::Event",
        kind: "flat",
      },
      {
        name: "UpgradeableEvent",
        type: "openzeppelin_upgrades::upgradeable::UpgradeableComponent::Event",
        kind: "flat",
      },
      {
        name: "DiamondFound",
        type: "gridy::game::main::GameContract::DiamondFound",
        kind: "nested",
      },
      {
        name: "BombFound",
        type: "gridy::game::main::GameContract::BombFound",
        kind: "nested",
      },
      {
        name: "TileMined",
        type: "gridy::game::main::GameContract::TileMined",
        kind: "nested",
      },
      {
        name: "SpawnedBot",
        type: "gridy::game::main::GameContract::SpawnedBot",
        kind: "nested",
      },
    ],
  },
];

module.exports = abi;
