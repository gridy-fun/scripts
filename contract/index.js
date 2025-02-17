const { configDotenv } = require("dotenv");
const { Provider, Account, json, CallData, hash } = require("starknet");
const gameAbi = require("./assets/game_abi");
const botAbi = require("./assets/bot_abi");
const fs = require("fs");

configDotenv();
const provider = new Provider({
  nodeUrl: process.env.RPC_URL,
});

const privateKey = process.env.ACCOUNT_PRIVATE_KEY;
const accountAddress = process.env.ACCOUNT_ADDRESS;

const account = new Account(provider, accountAddress, privateKey);

const WIDTH = 10000;
const HEIGHT = 10000;

function coordinatesToBlockId([x, y]) {
  return (y*BigInt(WIDTH) + x);
}

function coordinatesFromBlockId(blockId) {
  const x = blockId % BigInt(WIDTH);
  const y = blockId / BigInt(WIDTH);
  return [x, y];
}

function getTileMap() {
  console.log("Generating tilemap");
  for (let x = 0; x < WIDTH; x++) {
    for (let y = 0; y < HEIGHT; y++) {
      const maskedIdentity = coordinatesToBlockId([BigInt(x), BigInt(y)]);
      let logMessage = `Tile (${x}, ${y}) has ID ${maskedIdentity}\n`;
      fs.writeFileSync("tilemap.log", logMessage, { flag: "a" });
    }
  }
  console.log("Finished generating tilemap");
}

function generateTiles() {
  getTileMap();
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

const deployContract = async (class_hash, calldata) => {
  const deployResponse = await account.deploy({
    classHash: class_hash,
    calldata: calldata,
    salt: BigInt(0),
    unique: false,
  });

  console.log(
    "Contract deployed with address =",
    deployResponse.contract_address
  );

  return deployResponse.contract_address;
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
  const myCallData = new CallData(gameAbi);

  const bot_contract_class_hash = await getBotClassHash();

  const calldata = myCallData.compile("constructor", {
    executor: accountAddress,
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
  const myCallData = new CallData(botAbi);

  const calldata = myCallData.compile("constructor", {
    executor: accountAddress,
    spawned_by: accountAddress,
    game_contract: game_contract_address,
    initial_location: 0,
    grid_width: WIDTH,
    grid_height: HEIGHT,
  });

  console.log("Calldata", calldata);

  return calldata;
};

const main = async () => {
  // deploy game contract
  getTileMap();
};

main();
