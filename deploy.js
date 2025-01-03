import { Account, json, RpcProvider, CallData, hash, cairo, Contract } from "starknet";
import fs from "fs";
import path from "path";
import readline from 'readline';

// Configuration constants
const CONFIG = {
  RPC: {
    NODE_URL: "http://localhost:9944"
  },
  // MADARA DEVNET ACCOUNT #1 (EXECUTOR / OWNER)
  EXECUTOR: {
    ADDRESS: "0x055be462e718c4166d656d11f89e341115b8bc82389c3762a10eade04fcb225d",
    PRIVATE_KEY: "0x077e56c6dc32d40a67f6f7e6625c8dc5e570abe49c0a24e9202e4ae906abcc07"
  },
  // MADARA DEVNET ACCOUNT #2 (SEQUENCER)
  SEQUENCER: {
    ADDRESS: "0x008a1719e7ca19f3d91e8ef50a48fc456575f645497a1d55f30e3781f786afe4",
    PRIVATE_KEY: "0x0514977443078cf1e0c36bc88b89ada9a46061a5cf728f40274caea21d76f174"
  },
  GAME: {
    WIDTH: 10000,
    HEIGHT: 1000,
    NUM_DIAMONDS: 1300,
    NUM_BOMBS:70,
    MINING_POINTS: 10,
    DIAMOND_VALUE : 5000,
    BOMB_VALUE: 666
  },
  ASSETS_PATH: "./assets",
  CONTRACT_ADDRESSES: {
    GAME: "0x647ce284953bd650be96bf641bfe9bf55a3fed73f63ab7a2ff3c7c49719e7d",
    SPAWNERS: [
          "0x0733a8e2bcced14dcc2608462bd96524fb64eef061689b6d976708efc2c8ddfd",
          "0x025073e0772b1e348a5da66ea67fb46f75ecdca1bd24dbbc98567cbf4a0e00b3",
          "0x0294f066a54e07616fd0d50c935c2b5aa616d33631fec94b34af8bd4f6296f68",
          "0x005d1d65ea82aa0107286e68537adf0371601789e26b1cd6e455a8e5be5c5665",
          "0x01d775883a0a6e5405a345f18d7639dcb54b212c362d5a99087f742fba668396",
          "0x04add50f5bcc31a8418b43b1ddc8d703986094baf998f8e9625e13dbcc3df18b",
          "0x03dbe3dd8c2f721bc24e87bcb739063a10ee738cef090bc752bc0d5a29f10b72",
          "0x07484e8e3af210b2ead47fa08c96f8d18b616169b350a8b75fe0dc4d2e01d493",
          "0x02df6a8d0a5d306affa72a1aed59b0c21e2af92cc574a09234ffb3fca6da8eb6",
          "0x00dfd7b8e28ccb7ea06cdabf10beec9c7c814569e5c860fa357747d80d813565",
          "0x005241075f70d6fc8c592e6517858e78b315600599d6e80ed466555a3d17b73e",
          "0x05ae1a1ca5b9d0477be70ea2786d8e5e2ce8a304e270e1c07d85bcad63bd1268",
          "0x02ea00a839774c8e5a9ac35f5311c269cad2181e6df9a9ff27f408036bff060c",
          "0x05604f9bfc427e4c0e3a144c79b41cb1d0dfb61cf8fcfcc079562d4e58cd1a2b",
          "0x071503e1d4cda06dc34b0e4b20ddf4dc7c345cbc955e44d3681b78740cb6ceaf",
          "0x02a303b9711346448f9523bd9b4b382019b5a4d673e33fd059f29e778e33eca0",
          "0x043634f8d8ec7be6f28343b7cca8354543574e9c21ab03b11ffa7a113123afe7",
          "0x0404080926abc19be1d8f2eb9bb0fd8a9314f587b14531c7f313a4e9f145fdb7",
          "0x07689a8ee1b07e68df8f73d7fbf72206fefe7a5c52ea9efcf983dc90bddaa521",
          "0x018e12313d7a90d86cc9a38a7a8a5687f412e97876dac0e4508771b7f5282175",
          "0x04370d8c0fc4b917479bef66df1430e3beb35f7982c3d1531f817dbbd61c066c",
          "0x04c4f4ac74674e020ea126c24dde83ec8872607d62211504a3de6e8bbc0bca0b",
          "0x02a26d442831e8871bb0644fa5bfb88485d26390263ae70a9bfa89fed5c818ad",
          "0x05bddc9fd5d3052cc00fa761c8f242a711710aa279452152154b1367c40be68a",
          "0x055f6de7d121f998c25a4e2b62393d7f6e5fdf43c143ae864be0ef61952f1fff",
          "0x040d1edb9ea66eac91e4b35a61c0cc0d75f07e2d1b226ef3ba4e5d34fbf47d07",
          "0x06bb158c3b58928e74795b640cd43a2929a813c48201486683cbb9a4d1c7a5c1",
          "0x051969b468c7beb9a7c16c5ce28c86cf472e6817d6af0011cffb571e9e6c6364",
          "0x03bb3784232480dd2694fd79b350c068091b725046f213e63b85fa01c30e5778",
          "0x055439053a543c256401833e08069a1add8cc3f01453e790f6aad3550d94af52",
          "0x052e80ca0928e1b14dd1d4eeee9c7a829ea6a8e86cb7505f0795aeca4df56092",
          "0x05324846aee54d1c217b787db50443cc4c5e482d0a248573d79a87ed024affe8",
          "0x01b36a88995dc732f51bd733cd490d1c0fb17e40f4e524bf7b0736ef5e515971",
          "0x0754c315ffbdeb050916b940e0d37610b04b8876143abee89e0e5531ef7daf96",
          "0x0094ecc721365c0939308c339cb124c65294e071cdc422e282a5a379610dc37e",
          "0x003ccb520cc702029879eb03b2afd98ff3b4bab96b362f91e74a29c843ceda4d",
          "0x0185c0f0934270ff07097d1f6a4c2f1b6d0febaf40fd19c0557e8b6a85d3fa0f",
          "0x06d5f94acc1f3390aa699bcfd5bf3724f89ddb5015798a4cf337232e57194171",
          "0x02b8b01a16714d555b318f8aaf58c1c99f8aef72835253135df413bd0f534f99",
          "0x033ddc544fbce596d5b23e9db22ab72c7ca4c5bb72b3aa270b758f57d88d101b",
          "0x019f1c7be3c54f0c061c935afc6f57bb745c95451e4a2f2f2a703d2a46e30248",
          "0x04d4149326461755358b8be1fd31ac8755a04c9740867194289926c57fb41de4",
          "0x0667a7cf839b97a48d79e0e918e67df32bf8fedced629790110459b20d0861be",
          "0x07fe797d0d70530cdb37b193f6657e6f91326b7d42bb075e2a12311b069d2749",
          "0x010cf0face2b0863595f83d69f73b0c08901b6e308b92748d7391e3058fd5b0e",
          "0x03d5be566b9b4bab767968e6dac136d3dd8614dd3cd358ce7d96a2db9768d348",
          "0x07eba5133a7035b09cec3e83041a8834bf62f6f7726a607347418bc8c22cd7b2",
          "0x002b746b375d88bdeea930d685618e2105f0422a0745b363c6284a1d9129f587",
          "0x058e96f55a3f4c948b381057990f89704904611e0ed2b618224244ed4318a1fb",
          "0x05ed077f522748d28acb7165050e6c8a00176fc81e71e327f08803ada055456b",
          "0x01c990bc820f8313edd0fe598626dd33678b97d7657f8cc93396ac44baddf19e",
          "0x06199daa5c9d098dcd9574a995b9e5a784be8a1af55b431746ce5c2893d85ca0",
          "0x0271dec4f23d2e212a7efe11a65743096407a966043370e9c65f8a2524681204",
          "0x06f97ee98cd4af7c6155e59c982724d9ef8e58df8a4f6d65852aab04cd8cae27",
          "0x061c05308def41ce50077aa731a53dcebecd8a933f1578ff39a93565d8080688",
          "0x073cf5104ad3ba3a370442d5ce74c694ac46cb238ff9bdc5981a68775b6b9126",
          "0x07d7aef8afec7f1deec5ad0b04f8f1a92ca6855cc706a33178707b4a2aae53d1",
          "0x04fe855ad6cb903200511a3a2e269c11aec205a0de1034a618f3ecd2ffe0f10d",
          "0x00cc7bcca11243d9be667b4d37120d5bf45a66722f622948553069e4e6b9ab46",
          "0x0559fce8d981b4878db99259610df9d7f71b5f26d31982c9723b6177938adc87",
          "0x035f3785e31344ed789c4b7dd79c4702f03be5644b8642b8044b8133b1ab11ba",
          "0x0115a49b9094d3f23805fbe872f9aa54f7f47afe4e33803f790f5262be932151",
          "0x02c3529ad933a66fb6998f724c3783ce0a44e1242f687291941ed14cc986ef8b",
          "0x07861086639d62175f5d07e8e503218269e2508b27ccd55275629a3a87fa6744",
          "0x045c35309e2bdb3be85c7067109c8845c5a0b440a19c5176a1760387a42e9296",
          "0x070037b599e9ba5ed1c2b4ffa0484a364d303c785a435c2c214f39185f1036d7",
          "0x016ddff599c1939b404737a47eb51ded34f58057b3a74e100879356bffd61a65",
          "0x00ae55a4000304838dc19f3215c4f93e8085607714d0022b06e9d733e3b14d9e",
          "0x05a8c27277b1641bf1a58f8a7567374db23834b8356183a1394d74397f117c7e",
          "0x044c80b596043c0994e8e26f59462292f11260fb5676f6c11f6e3f8ed4690e79",
          "0x035d7f7d6d6684fd12223f004e9d23171bb83f7b172f54e02bea707bf0d351ad",
          "0x034684e26300d564990cc4ffefa5788ab1bf0516a02a951ab3956b2089deaecc",
          "0x0528aed33404d7e093fa430f92d4137ec5d83780f6fd1901011af3062d653574",
          "0x05a12c2a68bfa79bfb2bbf816db9ad377f3a125526445b8ccfe85f6bb019999c",
          "0x00de3455fd4488700169f7e89c3d6ecff6329468ddeee6a5fcd05270ad48c8bb",
          "0x0198406d1ddf78e1258bd4c140e0dcb6c06ff78235bb63140069d90127e05be5",
          "0x051ccf4bcc8870b5ee4918f68fa0dc96a22defe3e14326f0503ce34233e86d18",
          "0x018098fbff0746c544d0e75868c10821635f00f9c0d71e36fc5b27c63cf3f5cb",
          "0x00025358d60c555c88a15f98761dfe376c7e962c35338192930ff0d7abff99db",
          "0x0355ba343c5f45b57f35d028f3cfe988a9d40854525a2c7fd7c77b5b91d8c1d3",
          "0x05553742800914194268323cc1d8b48078e71e5338134784fbb1d1f2ac5e53db",
          "0x0015f551441f1aa22815352c89edbda24e613a439534173dee64fd6c7651f9d0",
          "0x0775de992d347cf0d09fe6a21f044d0741903e78e7f83c6f06b9678f83d0b731",
          "0x07a312aa9a07366d6871a8e97a0271a53fc237d67b3524bd62d3c335ae2770b8",
          "0x0016d994eab886c4c9f216ba49ee28cb4d9e17701b0c7e5724ad171e8e4295b5",
          "0x043a0f20cb842dd20cc3f81662c77df9b9b048a6cc7db2c601e692cc10bfe7cf",
          "0x061685a20e503a6ddad8d62e80f75a56b5066ce66518e20ff69bc8ec098e2891",
          "0x0496b02f19ed98ad1fbb2cde2767aac090df5b1d79141a2e6390e5688514b0b3",
          "0x02182c06b97b035091d5af9330b60018e3a6080bcd17eeb8eda6405d0674349f",
          "0x02f43febd6e81d722516b938a64db3837b646fb2d98c6c67e2838d9d2537c1d0",
          "0x062db79774433b993c8a3a7ed65605cfdb43dbecc8dbbcf14811272eafca5641",
          "0x0789ee3e09187f74c1b6e278dbdb8719d160a596716f89ff14676c296ef8c527",
          "0x067b9929b7d085dc4c2370d83ea926fe56e873191f8d22aca01a6085401fc422",
          "0x07aaacf01bd92e36135cd484f2cff59837c75f9f76bb449c41b7ab3f74bfd90b",
          "0x073cad1a79c07ae775b76b0a4ec5a270f35a1f21b0748f2f13c1d20d5f82a73c",
          "0x048935db97ae332b5a7547a0074d36148ea21555567b175e150b181d49813486",
          "0x040108c37642946e986fdbeafa629ed82808e664b732a9ed6f95b65f807f1da0",
          "0x07fe6895686fdfbd8203e26df69d7646e4dcb14dc4855208deae156d0e1e3791",
        ],

  },
  DEPLOYMENT_PER_SPAWNER: 100,
  MULTICALL_SIZE: 500,
};


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

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
      CONFIG.EXECUTOR.ADDRESS,
      CONFIG.EXECUTOR.PRIVATE_KEY
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
    const botClassHash = await this.getBotClassHash();
    const gameClassHash = await this.getGameClassHash();

    console.log("Bot Class Hash: ", botClassHash);
    console.log("Game Class Hash: ", gameClassHash);

    const callData = new CallData(this.contracts.game.sierra.abi);
    return callData.compile("constructor", {
      executor: CONFIG.EXECUTOR.ADDRESS,
      bot_contract_class_hash: botClassHash,
      bomb_value: CONFIG.GAME.BOMB_VALUE,
      mining_points: CONFIG.GAME.MINING_POINTS,
      grid_width: CONFIG.GAME.WIDTH,
      grid_height: CONFIG.GAME.HEIGHT,
      total_diamonds_and_bombs : (CONFIG.GAME.NUM_DIAMONDS + CONFIG.GAME.NUM_BOMBS),
      sequencer : CONFIG.SEQUENCER.ADDRESS,
    });
  }

  async updateBlockPoints() {
    const gameContract = new Contract(
      this.contracts.game.sierra.abi,
      CONFIG.CONTRACT_ADDRESSES.GAME,
      this.provider
    );

    const { diamonds, bombs } = GridUtils.generateLocations();

    // call contract's update_block_points in a multicall set of  500 only diamonds

    let num_diamond_calls = (diamonds.length / CONFIG.MULTICALL_SIZE) >> 0;

    if (diamonds.length % CONFIG.MULTICALL_SIZE > 0) {
      num_diamond_calls++;
    }

    for (let i = 0; i < num_diamond_calls; i++) {
      const diamondsChunk = diamonds.slice(i * CONFIG.MULTICALL_SIZE, (i + 1) * CONFIG.MULTICALL_SIZE);
      const diamondCalls = diamondsChunk.map(diamond => {
        return gameContract.populate("update_block_points", [
          diamond.id,
          diamond.points
        ]);
      });
      const estimatedFee = await this.account.estimateInvokeFee(diamondCalls);

      const { transaction_hash } = await this.account.execute(
        diamondCalls,
        undefined,
        {
          maxFee: estimatedFee.suggestedMaxFee
        }
      );

      const receipt = await this.account.waitForTransaction(transaction_hash);
      console.log("Diamonds slice ", i * CONFIG.MULTICALL_SIZE , "to ", (i + 1) * CONFIG.MULTICALL_SIZE, " updated! with transaction hash: ", receipt.transaction_hash);
    }

    // call contract's update_block_points in a multicall set of  500 only bombs
    let num_bomb_calls = (bombs.length / CONFIG.MULTICALL_SIZE) >> 0;
    if (bombs.length % CONFIG.MULTICALL_SIZE > 0) {
      num_bomb_calls++;
    }

    for (let i = 0; i < num_bomb_calls; i++) {
      const bombsChunk = bombs.slice(i * CONFIG.MULTICALL_SIZE, (i + 1) * CONFIG.MULTICALL_SIZE);
      const bombCalls = bombsChunk.map(bomb => {
        return gameContract.populate("update_block_points", [
          bomb.id,
          bomb.points
        ]);
      });
      const estimatedFee = await this.account.estimateInvokeFee(bombCalls);

      const { transaction_hash } = await this.account.execute(
        bombCalls,
        undefined,
        {
          maxFee: estimatedFee.suggestedMaxFee
        }
      );

      const receipt = await this.account.waitForTransaction(transaction_hash);
      console.log("Bomd slice ", i * CONFIG.MULTICALL_SIZE , "to ", (i + 1) * CONFIG.MULTICALL_SIZE, " updated! with transaction hash: ", receipt.transaction_hash);

    }
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
    let calls = [];

    // Prepare all deployment calls
    for (let i = 0; i < CONFIG.CONTRACT_ADDRESSES.SPAWNERS.length; i++) {
      const spawner = CONFIG.CONTRACT_ADDRESSES.SPAWNERS[i];
      for (let j = 0; j < CONFIG.DEPLOYMENT_PER_SPAWNER; j++) {
        const deployCall = await this.deployBotHelper(spawner, points[i * CONFIG.DEPLOYMENT_PER_SPAWNER + j], gameContract);
        calls.push(deployCall);
      }
    }

    console.log(`\n🤖 Preparing to deploy ${calls.length} bots in a using multicall...`);

    // Randomly sort the calls array
    calls = shuffle(calls);

    // break calls into chunks of multicall size and execute
    let num_calls = (calls.length / CONFIG.MULTICALL_SIZE) >> 0;
    if (calls.length % CONFIG.MULTICALL_SIZE > 0) {
      num_calls++;
    }

    for (let i = 0; i < num_calls; i++) {
      const callsChunk = calls.slice(i * CONFIG.MULTICALL_SIZE, (i + 1) * CONFIG.MULTICALL_SIZE);
      const estimatedFee = await this.account.estimateInvokeFee(callsChunk);
      const { transaction_hash } = await this.account.execute(
        callsChunk,
        undefined,
        {
          maxFee: estimatedFee.suggestedMaxFee
        }
      );
      const receipt = await this.account.waitForTransaction(transaction_hash);
      console.log("Bot deployment chunk ", i * CONFIG.MULTICALL_SIZE , "to ", (i + 1) * CONFIG.MULTICALL_SIZE, " submitted! with transaction hash: ", transaction_hash);
    }
    return;
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
    console.log('2. Add Block Points to Game Contract');
    console.log('3. Enable Game Contract');
    console.log('4. Declare Bot Contract');
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
          await this.updateBlockPoints();
          break;
        case '3':
          await this.enableGame();
          break;
        case '4':
          await this.declareBot();
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

  async updateBlockPoints() {
    console.log('\n📦 Adding Block Points...');
    const result = await this.deployer.updateBlockPoints();
    console.log('✅ Added Block Points successfully!');
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

  async deployMultipleBots() {
    console.log('\n🤖 Deploying Bot...');
    const result = await this.deployer.deployMultipleBots();
    console.log('✅ Bot deployed successfully!');
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
