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
    WIDTH: 1000,
    HEIGHT: 100,
    NUM_DIAMONDS: 130,
    NUM_BOMBS:7,
    MINING_POINTS: 10,
    DIAMOND_VALUE : 5000,
    BOMB_VALUE: 666
  },
  BOT: {
    START_POINT: "123",
  },
  ASSETS_PATH: "./assets",
  CONTRACT_ADDRESSES: {
    GAME: "0x8cf8de5edbaf27f73eb5c3dc7355e33ef8dc1a18741b21888a25897bfc44ea",
    BOT : "0x7388513a335926a9fe23fc7acd37929ba30b084d554527ee078cf4ab7c9bb43",
    SPAWNED_BY: "0x008a1719e7ca19f3d91e8ef50a48fc456575f645497a1d55f30e3781f786afe4",
    SPAWNERS: [
      "0x0733a8e2bcced14dcc2608462bd96524fb64eef061689b6d976708efc2c8ddfd",
      "0x025073e0772b1e348a5da66ea67fb46f75ecdca1bd24dbbc98567cbf4a0e00b3",
      "0x0294f066a54e07616fd0d50c935c2b5aa616d33631fec94b34af8bd4f6296f68",
      "0x005d1d65ea82aa0107286e68537adf0371601789e26b1cd6e455a8e5be5c5665",
      "0x01d775883a0a6e5405a345f18d7639dcb54b212c362d5a99087f742fba668396",
      "0x04add50f5bcc31a8418b43b1ddc8d703986094baf998f8e9625e13dbcc3df18b",
      "0x03dbe3dd8c2f721bc24e87bcb739063a10ee738cef090bc752bc0d5a29f10b72",
      "0x07484e8e3af210b2ead47fa08c96f8d18b616169b350a8b75fe0dc4d2e01d493",
    ],
  },
  DEPLOYMENT_PER_SPAWNER: 250,
};


function generateRandomNumbers(width, height, count) {
  // Validate input
  const maxPossible = width * height;
  if (count > maxPossible) {
      throw new Error(`Cannot generate ${count} unique numbers within range of ${maxPossible}`);
  }

  // Create array of all possible numbers
  const allNumbers = Array.from({ length: maxPossible }, (_, i) => i);

  // Shuffle array using Fisher-Yates algorithm
  for (let i = allNumbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allNumbers[i], allNumbers[j]] = [allNumbers[j], allNumbers[i]];
  }

  // Get our random numbers
  const result = allNumbers.slice(0, count);

  // Extra validation to guarantee uniqueness
  const uniqueSet = new Set(result);
  if (uniqueSet.size !== count) {
      throw new Error('Internal error: Generated numbers are not unique');
  }

  // Validate range
  const inRange = result.every(num => num >= 0 && num < maxPossible);
  if (!inRange) {
      throw new Error('Internal error: Generated numbers outside valid range');
  }

  console.log("Bots will start from points : ", result);

  return result;
}

function generateGamePoints(width, height, diamondsCount, bombCount) {
  // Validate input
  if (width <= 0 || height <= 0) {
    throw new Error('Width and height must be positive numbers');
  }

  if (diamondsCount + bombCount > width * height) {
    throw new Error('Total number of points requested exceeds available spaces');
  }

  // Function to generate a random integer between min (inclusive) and max (inclusive)
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Function to convert point to string for easy comparison
  const pointToString = (point) => `${point[0]},${point[1]}`;

  // Set to keep track of used points
  const usedPoints = new Set();

  // Generate diamond locations
  const diamondLocations = [];
  while (diamondLocations.length < diamondsCount) {
    // Generate random x and y coordinates (0-based)
    const x = getRandomInt(0, width - 1);
    const y = getRandomInt(0, height - 1);
    const pointStr = pointToString([x, y]);

    // Only add point if it hasn't been used yet
    if (!usedPoints.has(pointStr)) {
      diamondLocations.push([x, y]);
      usedPoints.add(pointStr);
    }
  }

  // Generate bomb locations
  const bombLocations = [];
  while (bombLocations.length < bombCount) {
    const x = getRandomInt(0, width - 1);
    const y = getRandomInt(0, height - 1);
    const pointStr = pointToString([x, y]);

    // Only add point if it hasn't been used yet
    if (!usedPoints.has(pointStr)) {
      bombLocations.push([x, y]);
      usedPoints.add(pointStr);
    }
  }

  console.log("Diamond Locations: ", diamondLocations);
  console.log("Bomb Locations: ", bombLocations);

  return {
    diamond_locations: diamondLocations,
    bomb_locations: bombLocations
  };
}


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
    const result = generateGamePoints(CONFIG.GAME.WIDTH, CONFIG.GAME.HEIGHT, CONFIG.GAME.NUM_DIAMONDS, CONFIG.GAME.NUM_BOMBS);
    console.log("Lengths:  " , result.diamond_locations.length, result.bomb_locations.length);
    return {
      diamonds: result.diamond_locations.map(loc => ({
        id: this.coordinatesToBlockId(loc),
        points: CONFIG.GAME.DIAMOND_VALUE
      })),
      bombs: result.bomb_locations.map(loc => ({
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

  async getGameClassHash() {
    return hash.computeContractClassHash(
      this.contracts.game.sierra,
      this.contracts.game.casm
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
    const gameClassHash = await this.getGameClassHash();

    console.log("Bot Class Hash: ", botClassHash);
    console.log("Game Class Hash: ", gameClassHash);

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

  async deployBot(spawned_by, start_point) {
    const gameContract = new Contract(
      this.contracts.game.sierra.abi,
      CONFIG.CONTRACT_ADDRESSES.GAME,
      this.provider
    );

    const deployCall = gameContract.populate("deploy_bot", [
      spawned_by,
      cairo.felt(start_point)
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

  async deployBotHelper(spawned_by, start_point, gameContract) {
    // Instead of executing, just return the call data
    return gameContract.populate("deploy_bot", [
      spawned_by,
      cairo.felt(start_point)
    ]);
  }

  async deployMultipleBots() {
    const gameContract = new Contract(
      this.contracts.game.sierra.abi,
      CONFIG.CONTRACT_ADDRESSES.GAME,
      this.provider
    );

    // Generate random points for all bots
    const points = generateRandomNumbers(
      CONFIG.GAME.WIDTH,
      CONFIG.GAME.HEIGHT,
      (CONFIG.CONTRACT_ADDRESSES.SPAWNERS.length * CONFIG.DEPLOYMENT_PER_SPAWNER)
    );

    // Create array to hold all calls
    const calls = [];

    // Prepare all deployment calls
    for (let i = 0; i < CONFIG.CONTRACT_ADDRESSES.SPAWNERS.length; i++) {
      const deployer = CONFIG.CONTRACT_ADDRESSES.SPAWNERS[i];
      for (let j = 0; j < CONFIG.DEPLOYMENT_PER_SPAWNER; j++) {
        const deployCall = await this.deployBotHelper(deployer, points[i * CONFIG.DEPLOYMENT_PER_SPAWNER + j], gameContract);
        calls.push(deployCall);
      }
    }

    console.log(`\n🤖 Preparing to deploy ${calls.length} bots in a single transaction...`);

    try {
      // Estimate fee for all calls together
      const estimatedFee = await this.account.estimateInvokeFee(calls);

      // Execute all calls in a single transaction
      const { transaction_hash } = await this.account.execute(
        calls,
        undefined,
        {
          maxFee: estimatedFee.suggestedMaxFee
        }
      );

      console.log('✅ Multicall transaction submitted!');
      console.log('Transaction Hash:', transaction_hash);

      // Wait for transaction receipt
      const receipt = await this.account.waitForTransaction(transaction_hash);

      console.log('✅ All bots deployed successfully!');

      return {
        transaction_hash,
        receipt,
        deploymentPoints: points
      };
    } catch (error) {
      console.error('❌ Multicall deployment failed:', error);
      throw error;
    }
  }


  async callMine() {
    const gameContract = new Contract(
      this.contracts.game.sierra.abi,
      CONFIG.CONTRACT_ADDRESSES.GAME,
      this.provider
    );

    const deployCall = gameContract.populate("mine", [
      CONFIG.CONTRACT_ADDRESSES.BOT,
      cairo.felt(12)
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

  async callIsBotAlive() {
    const botContract = new Contract(
      this.contracts.bot.sierra.abi,
      CONFIG.CONTRACT_ADDRESSES.BOT,
      this.provider
    );

    const invokeCall = botContract.populate("get_owner", [
    ]);

    // const estimatedFee = await this.account.estimateInvokeFee(deployCall);

    const { transaction_hash } = await this.account.execute(
      invokeCall,
      undefined,
      // {
      //   maxFee: estimatedFee.suggestedMaxFee
      // }
    );

    const receipt = await this.account.waitForTransaction(transaction_hash);
    return { transaction_hash, receipt };
  }


  async disableGameContract() {
    const gameContract = new Contract(
      this.contracts.game.sierra.abi,
      CONFIG.CONTRACT_ADDRESSES.GAME,
      this.provider
    );

    const disableCall = gameContract.populate("disable_contract");
    const estimatedFee = await this.account.estimateInvokeFee(disableCall);

    const { transaction_hash } = await this.account.execute(
      disableCall,
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
    console.log('\n🚀 Starknet Deployment Menu\n');
    console.log('1. Deploy Game Contract');
    console.log('2. Enable Game Contract');
    console.log('3. Declare Bot Contract');
    console.log('4. Deploy Bot');
    console.log('5. Deploy Multiple Bots');
    console.log('6. Call Mine');
    console.log('7. Get Class Hash');
    console.log('8. Disable Game Contract');
    console.log("9. Check is bot alive")
    console.log('10. Exit');

    console.log('\nSelect an option (1-8):');
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
          await this.deployMultipleBots();
          break;
        case '6':
          await this.callMine();
          break;
        case '7':
          await this.getClassHash();
          break;
        case '8':
          await this.disableGame();
          break;
        case '9':
          await this.callIsBotAlive();
          break;
        case '10':
          console.log('\nExiting...');
          this.rl.close();
          process.exit(0);
        case '11':
            await this.ArrayFelt();
            break;

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

  async disableGame() {
    console.log('\n🔓 Disabling Game Contract...');
    const result = await this.deployer.disableGameContract();
    console.log('✅ Game Contract disabled successfully!');
    console.log('Transaction Hash:', result.transaction_hash);
  }

  async callIsBotAlive() {
    console.log('\n🔓 Calling Is Bot Alive...');
    const result = await this.deployer.callIsBotAlive();
    console.log('✅ Called Is Bot Alive!');
    console.log('Transaction Hash:', result);
  }

  async ArrayFelt() {
    let arrrr = [
      0x36, 0x0c, 0x23, 0x41, 0x5d, 0x45, 0x34, 0x8c,
      0x2f, 0x3f0, 0x16, 0x58, 0x78, 0x4c, 0x2e, 0xaa,
      0x1c, 0x0b, 0x62, 0x3f1, 0x5c, 0x39, 0x40, 0x3eb,
      0x3f, 0x2a, 0x4e, 0x53, 0x44c, 0x2b, 0x56, 0x19,
      0x47, 0x2c, 0x38, 0x11, 0x49, 0x52, 0x5f, 0x61,
      0x12, 0x55, 0x3ec, 0x5b, 0x10, 0x27, 0x13, 0x59,
      0x18, 0xbe, 0x4b, 0x1d, 0x3e, 0x3a, 0x3ef, 0x37,
      0x21, 0x33, 0x3e9, 0x3ed, 0x54, 0x60, 0x29, 0xa0,
      0x3ea, 0x4d, 0x5e, 0x35, 0x26, 0x4f, 0x57, 0x25,
      0x30, 0x0f, 0x15, 0x96, 0x3ee, 0x63, 0x3d, 0x82,
      0x48, 0x1a, 0x20, 0x44, 0x22, 0x6e, 0x51, 0x4a,
      0xb4, 0x31, 0x1f, 0x0d, 0x1b, 0x17, 0x42, 0x43,
      0x2d, 0x3b, 0x0e, 0x24
  ];
     arrrr.forEach((element) => {
      console.log(cairo.felt(element));
    });
  }

  async deployBot() {
    console.log('\n🤖 Deploying Bot...');
    const result = await this.deployer.deployBot(CONFIG.CONTRACT_ADDRESSES.SPAWNED_BY, CONFIG.BOT.START_POINT);
    console.log('✅ Bot deployed successfully!');
    console.log('Transaction Hash:', result.transaction_hash);
  }

  async deployMultipleBots() {
    console.log('\n🤖 Deploying Bot...');
    const result = await this.deployer.deployMultipleBots();
    console.log('✅ Bot deployed successfully!');
    console.log('Transaction Hash:', result.transaction_hash);

  }

  async callMine() {
    console.log('\n🤖 Calling Mine...');
    const result = await this.deployer.callMine();
    console.log('✅ Mined successfully!');
    console.log('Transaction Hash:', result.transaction_hash);

  }

  async getClassHash() {
    const botClassHash = await this.deployer.getBotClassHash();
    const gameClassHash = await this.deployer.getGameClassHash();

    console.log("Bot Class Hash: ", botClassHash);
    console.log("Game Class Hash: ", gameClassHash);
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
