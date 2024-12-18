import { Account, json, RpcProvider, CallData, hash, cairo, Contract } from "starknet";
import fs from "fs";
import path from "path";
import readline from 'readline';

// Configuration constants
const CONFIG = {
  RPC: {
    NODE_URL: "http://localhost:9944"
  },
  DEPLOYER: {
    ADDRESS: "0x055be462e718c4166d656d11f89e341115b8bc82389c3762a10eade04fcb225d",
    PRIVATE_KEY: "0x077e56c6dc32d40a67f6f7e6625c8dc5e570abe49c0a24e9202e4ae906abcc07"
  },
  GAME: {
    WIDTH: 7000,
    HEIGHT: 5000,
    MINING_POINTS: 10,
    BOMB_VALUE: 666
  },
  ASSETS_PATH: "./assets",
  CONTRACT_ADDRESSES: {
    GAME: "0x51a65ebfda9b9264604218b16552cfa73492e354d4a0d1fd0822b83d60f3154",
    SPAWNED_BY: "0x04add50f5bcc31a8418b43b1ddc8d703986094baf998f8e9625e13dbcc3df18b"
  }
};

// 0x61f3c38bbd221854591c8daec2fef8d794e6bab5a5a0ff8cc7992a5c9aa30a5

// Contract loading utility
class ContractLoader {
  static loadContract(contractName) {
    const basePath = path.join(CONFIG.ASSETS_PATH, `gridy_${contractName}`);
    return {
      sierra: json.parse(fs.readFileSync(`${basePath}.contract_class.json`).toString("ascii")),
      casm: json.parse(fs.readFileSync(`${basePath}.compiled_contract_class.json`).toString("ascii"))
    };
  }
}

// Grid utilities
class GridUtils {
  static coordinatesToBlockId([x, y]) {
    return y * CONFIG.GAME.WIDTH + x;
  }

  static generateLocations() {
    const diamond_locations = [
      [1, 2], [3, 4], [5, 6], [7, 8], [9, 10]
    ];
    
    const bomb_locations = [
      [11, 12], [13, 14], [15, 16], [17, 18], [19, 20]
    ];

    return {
      diamonds: diamond_locations.map(loc => ({
        id: this.coordinatesToBlockId(loc),
        points: CONFIG.GAME.MINING_POINTS
      })),
      bombs: bomb_locations.map(loc => ({
        id: this.coordinatesToBlockId(loc),
        points: CONFIG.GAME.BOMB_VALUE
      }))
    };
  }
}

class StarknetDeployer {
  constructor() {
    this.provider = new RpcProvider({ nodeUrl: CONFIG.RPC.NODE_URL });
    this.account = new Account(
      this.provider,
      CONFIG.DEPLOYER.ADDRESS,
      CONFIG.DEPLOYER.PRIVATE_KEY
    );
    
    // Load contracts
    this.contracts = {
      game: ContractLoader.loadContract('GameContract'),
      bot: ContractLoader.loadContract('BotContract')
    };
  }

  async getBotClassHash() {
    return hash.computeContractClassHash(
      this.contracts.bot.sierra,
      this.contracts.bot.casm
    );
  }

  async declareContract(contract) {
    const declareResponse = await this.account.declare({
      contract: contract.sierra,
      casm: contract.casm,
    });
    console.log("Contract declared with classHash =", declareResponse.class_hash);
    return declareResponse;
  }

  async prepareGameConstructorCalldata() {
    const locations = GridUtils.generateLocations();
    const blockPoints = [...locations.diamonds, ...locations.bombs];
    const botClassHash = await this.getBotClassHash();
    console.log("Bot Class Hash: ", botClassHash);

    const callData = new CallData(this.contracts.game.sierra.abi);
    return callData.compile("constructor", {
      executor: CONFIG.DEPLOYER.ADDRESS,
      bot_contract_class_hash: botClassHash,
      bomb_value: CONFIG.GAME.BOMB_VALUE,
      mining_points: CONFIG.GAME.MINING_POINTS,
      grid_width: CONFIG.GAME.WIDTH,
      grid_height: CONFIG.GAME.HEIGHT,
      block_points: blockPoints,
    });
  }

  async deployGameContract() {
    const gameCalldata = await this.prepareGameConstructorCalldata();
    const deployResponse = await this.account.declareAndDeploy({
      contract: this.contracts.game.sierra,
      casm: this.contracts.game.casm,
      constructorCalldata: gameCalldata,
    });
    console.log('Contract Address:', deployResponse.deploy.contract_address);
    return deployResponse;
  }

  async declareBotContract() {
    const deployResponse = await this.declareContract(this.contracts.bot);
    return deployResponse;
  }

  async deployBot() {
    const gameContract = new Contract(
      this.contracts.game.sierra.abi,
      CONFIG.CONTRACT_ADDRESSES.GAME,
      this.provider
    );

    const deployCall = gameContract.populate("deploy_bot", [
      CONFIG.CONTRACT_ADDRESSES.SPAWNED_BY,
      cairo.felt("457")
    ]);

    const estimatedFee = await this.account.estimateInvokeFee(deployCall);
    
    const { transaction_hash } = await this.account.execute(
      deployCall,
      undefined,
      {
        maxFee: estimatedFee.suggestedMaxFee
      }
    );

    const receipt = await this.account.waitForTransaction(transaction_hash);
    return { transaction_hash, receipt };
  }

  async enableGameContract() {
    const gameContract = new Contract(
      this.contracts.game.sierra.abi,
      CONFIG.CONTRACT_ADDRESSES.GAME,
      this.provider
    );

    const enableCall = gameContract.populate("enable_contract");
    const estimatedFee = await this.account.estimateInvokeFee(enableCall);
    
    const { transaction_hash } = await this.account.execute(
      enableCall,
      undefined,
      {
        maxFee: estimatedFee.suggestedMaxFee
      }
    );

    const receipt = await this.account.waitForTransaction(transaction_hash);
    return { transaction_hash, receipt };
  }
}


class DeploymentCLI {
  constructor() {
    this.deployer = new StarknetDeployer();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  async showMenu() {
    console.clear();
    console.log('\n🚀 Starknet Deployment Menu\n');
    console.log('1. Deploy Game Contract');
    console.log('2. Enable Game Contract');
    console.log('3. Declare Bot Contract');
    console.log('4. Deploy Bot');
    console.log('5. Exit');
    console.log('\nSelect an option (1-5):');
  }

  async handleUserInput(input) {
    try {
      switch (input) {
        case '1':
          await this.deployGame();
          break;
        case '2':
          await this.enableGame();
          break;
        case '3':
          await this.declareBot();
          break;
        case '4':
          await this.deployBot();
          break;
        case '5':
          console.log('\nExiting...');
          this.rl.close();
          process.exit(0);
        default:
          console.log('\n❌ Invalid option. Please try again.');
      }
    } catch (error) {
      console.error('\n❌ Operation failed:', error);
    }

    await this.continuePrompt();
  }

  async deployGame() {
    console.log('\n📦 Deploying Game Contract...');
    const result = await this.deployer.deployGameContract();
    console.log('✅ Game Contract deployed successfully!');
  }

  async declareBot() {
    console.log('\n📝 Declaring Bot Contract...');
    const result = await this.deployer.declareBotContract();
    console.log('✅ Bot Contract declared successfully!');
    console.log('Class Hash:', result.class_hash);
  }

  async enableGame() {
    console.log('\n🔓 Enabling Game Contract...');
    const result = await this.deployer.enableGameContract();
    console.log('✅ Game Contract enabled successfully!');
    console.log('Transaction Hash:', result.transaction_hash);
  }

  async deployBot() {
    console.log('\n🤖 Deploying Bot...');
    const result = await this.deployer.deployBot();
    console.log('✅ Bot deployed successfully!');
    console.log('Transaction Hash:', result.transaction_hash);
    console.log('Transaction Hash:', result.transaction_hash);

  }

  async continuePrompt() {
    return new Promise((resolve) => {
      this.rl.question('\nPress Enter to continue...', () => {
        this.start();
        resolve();
      });
    });
  }

  async start() {
    await this.showMenu();
    this.rl.question('', async (input) => {
      await this.handleUserInput(input);
    });
  }
}

// Replace the original main function with this:
async function main() {
  const cli = new DeploymentCLI();
  console.log('\nWelcome to Starknet Deployment CLI');
  console.log('=================================\n');
  await cli.start();
}

// Execute the CLI
main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});