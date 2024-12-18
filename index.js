
import { Account, json, RpcProvider, CallData, hash, cairo , Contract} from "starknet";
import fs from "fs";

const provider = new RpcProvider({ nodeUrl: "http://localhost:9944" });

const DEPLOYER_ADDRESS =
  "0x055be462e718c4166d656d11f89e341115b8bc82389c3762a10eade04fcb225d";
const DEPLOYER_PRIV_KEY =
  "0x077e56c6dc32d40a67f6f7e6625c8dc5e570abe49c0a24e9202e4ae906abcc07";

const gameSierra = json.parse(
  fs.readFileSync("./assets/gridy_GameContract.contract_class.json").toString("ascii")
);
const gameCasm = json.parse(
  fs.readFileSync("./assets/gridy_GameContract.compiled_contract_class.json").toString("ascii")
);

const botsSierra = json.parse(
  fs.readFileSync("./assets/gridy_BotContract.contract_class.json").toString("ascii")
);
const botsCasm = json.parse(
  fs.readFileSync("./assets/gridy_BotContract.compiled_contract_class.json").toString("ascii")
);


const WIDTH = 7000;
const HEIGHT = 5000;

function coordinatesToBlockId(imageAssets) {
  const [x, y] = imageAssets;
  const res = y * WIDTH + x;
  return res;
}

function getTileMap() {
  const temp = [];

  for (let x = 0; x < WIDTH; x++) {
    for (let y = 0; y < HEIGHT; y++) {
      const maskedIdentity = coordinatesToBlockId([BigInt(x), BigInt(y)]);
      temp.push([x, y, Number(maskedIdentity)]);
    }
  }

  return temp;
}

function generateTiles() {
  const res = getTileMap();

  for (let i = 0; i < res.length; i++) {
    const [x, y, id] = res[i];
    console.log(`Tile (${x}, ${y}) has ID ${id}`);
  }
}

async function getBotClassHash() {
  // Declare Test contract in devnet
  const compiledTestSierra = json.parse(
    fs.readFileSync("./assets/gridy_BotContract.contract_class.json")
  );
  const compiledTestCasm = json.parse(
    fs.readFileSync("./assets/gridy_BotContract.compiled_contract_class.json")
  );

  return hash.computeContractClassHash(compiledTestSierra, compiledTestCasm);
}

async function getGameClassHash() {
  // Declare Test contract in devnet
  const compiledTestSierra = json.parse(
    fs.readFileSync("./assets/gridy_GameContract.contract_class.json")
  );
  const compiledTestCasm = json.parse(
    fs.readFileSync("./assets/gridy_GameContract.compiled_contract_class.json")
  );

  await declareContract(compiledTestCasm, compiledTestSierra);

  // return hash.computeContractClassHash(compiledTestSierra, compiledTestCasm);
}

const declareContract = async (compiledTestCasm, compiledTestSierra) => {
  const declareResponse = await account.declare({
    contract: compiledTestSierra,
    casm: compiledTestCasm,
  });

  console.log(
    "Test Contract declared with classHash =",
    declareResponse.class_hash
  );
};


const locationsToArgs = () => {
  // assign random
  const diamond_locations = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ];

  const bomb_locations = [
    [11, 12],
    [13, 14],
    [15, 16],
    [17, 18],
    [19, 20],
  ];

  // convert to block ids
  const diamondBlockIds = diamond_locations.map((location) => {
    return coordinatesToBlockId(location);
  });

  const bombBlockIds = bomb_locations.map((location) => {
    return coordinatesToBlockId(location);
  });

  // convert to object -> {id: blockId, points: 10}
  const diamondArgs = diamondBlockIds.map((blockId) => {
    return { id: blockId, points: 10 };
  });

  const bombArgs = bombBlockIds.map((blockId) => {
    return { id: blockId, points: 666 };
  });

  // append both args
  const res = diamondArgs.concat(bombArgs);

  return res;
};

const gameInitialiseParams = async () => {
  const args = locationsToArgs();
  const myCallData = new CallData(gameSierra.abi);

  const bot_contract_class_hash = await getBotClassHash();

  const calldata = myCallData.compile("constructor", {
    executor: DEPLOYER_ADDRESS,
    bot_contract_class_hash: bot_contract_class_hash,
    bomb_value: 666,
    mining_points: 10,
    grid_width: WIDTH,
    grid_height: HEIGHT,
    block_points: args,
  });

  console.log("Calldata", calldata);

  return calldata;
};

const botInitialiseParams = async (game_contract_address) => {
  const myCallData = new CallData(botsSierra.abi);

  const calldata = myCallData.compile("constructor", {
    executor: DEPLOYER_ADDRESS,
    spawned_by: "0x07484e8e3af210b2ead47fa08c96f8d18b616169b350a8b75fe0dc4d2e01d493",
    game_contract: game_contract_address,
    initial_location: 0,
    grid_width: WIDTH,
    grid_height: HEIGHT,
  });

  console.log("Calldata", calldata);

  return calldata;
};


const main = async () => {
  const account = new Account(provider, DEPLOYER_ADDRESS, DEPLOYER_PRIV_KEY);

  const gameCalldata = await gameInitialiseParams();

  const deployResponse = await account.declareAndDeploy({
    contract: gameSierra,
    casm: gameCasm,
    constructorCalldata: gameCalldata,
  });
  console.log("Receipt: ", deployResponse);
  console.log("Contract Deployed : ", deployResponse.deploy.contract_address);
};

const declareBots = async () => {
  const account = new Account(provider, DEPLOYER_ADDRESS, DEPLOYER_PRIV_KEY);

  const gameAddress = '0x60ddf2d3f637783d5a8277529138c70a12a372391519ace2a47dae7de42afea';

  const botsCalldata = await botInitialiseParams('0x60ddf2d3f637783d5a8277529138c70a12a372391519ace2a47dae7de42afea');

  const deployResponse = await account.declare({
    contract: botsSierra,
    casm: botsCasm,
    constructorCalldata: botsCalldata,
  });
  console.log("Receipt: ", deployResponse);
};

// main();

const deployBots = async ()  => {
  // Connect the deployed Test contract in Testnet
  const account = new Account(provider, DEPLOYER_ADDRESS, DEPLOYER_PRIV_KEY);

  const gameAddress = '0x60ddf2d3f637783d5a8277529138c70a12a372391519ace2a47dae7de42afea';
  const gameContract = new Contract(gameSierra.abi, gameAddress, provider);

  // Prepare call
  const deployCall = gameContract.populate("deploy_bot", [
    "0x07484e8e3af210b2ead47fa08c96f8d18b616169b350a8b75fe0dc4d2e01d493",
    cairo.felt("0") // Convert location to felt252
  ]);

  // Estimate fee
  const estimatedFee = await account.estimateInvokeFee(deployCall);

  // Execute transaction
  const { transaction_hash } = await account.execute(
    deployCall,
    undefined,
    {
      maxFee: estimatedFee.suggestedMaxFee
    }
  );

  // Wait for transaction
  const receipt = await account.waitForTransaction(transaction_hash);

  console.log(transaction_hash,receipt);

  return {
    transactionHash: transaction_hash,
    receipt
  };
}

const enableContract = async ()  => {
  // Connect the deployed Test contract in Testnet
  const account = new Account(provider, DEPLOYER_ADDRESS, DEPLOYER_PRIV_KEY);

  const gameAddress = '0x60ddf2d3f637783d5a8277529138c70a12a372391519ace2a47dae7de42afea';
  const gameContract = new Contract(gameSierra.abi, gameAddress, provider);

  // Prepare call
  const enableCall = gameContract.populate("enable_contract");

  // Estimate fee
  const estimatedFee = await account.estimateInvokeFee(enableCall);

  // Execute transaction
  const { transaction_hash } = await account.execute(
    enableCall,
    undefined,
    {
      maxFee: estimatedFee.suggestedMaxFee
    }
  );

  // Wait for transaction
  const receipt = await account.waitForTransaction(transaction_hash);

  console.log(transaction_hash,receipt);
  
}



main();