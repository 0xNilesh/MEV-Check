const ethers = require("ethers");
import SUSHIXSWAP_ABI from "./abis/sushixswap.json";
import getFlashbotBlock from "./api";
import fs from "fs";

require("dotenv").config();

const sushixswapAddress = "0x011e52e4e40cf9498c79273329e8827b21e2e581";

const mevData = [
	{
		tx_hash:
			"0x6f406e36c8dbe6939f9f8f3e85b83b7b6a2c662daf2bd790beeea2e83675109f",
		tx_bundle_index: 8,
		tx_block_number: 15759563,
		tx_bundle_type: "mempool",
	},
	{
		tx_hash:
			"0xb86ebcd0a58f23df45e89602ab22c7ae06908ee83aa8edd20ee0a380e0945f7f",
		tx_bundle_index: 5,
		tx_block_number: 15733320,
		tx_bundle_type: "mempool",
	},
	{
		tx_hash:
			"0x6d316f73e601a55b9180ebadf12326fd21840f08bbcb94ac958a80db0ce85e2a",
		tx_bundle_index: 6,
		tx_block_number: 15720726,
		tx_bundle_type: "mempool",
	},
	{
		tx_hash:
			"0xcc83792034c96527ecea7d9d06245c4b2dd3749bc9ac22ea9ffc4cb88f4a24c0",
		tx_bundle_index: 7,
		tx_block_number: 15660284,
		tx_bundle_type: "mempool",
	},
	{
		tx_hash:
			"0xeb6d6082a6ff89fceae2d6eb3efbc57545e2139b04b9d0b63bc046dc686107cb",
		tx_bundle_index: 4,
		tx_block_number: 15691770,
		tx_bundle_type: "mempool",
	},
	{
		tx_hash:
			"0x5635a5c977a9f0892001a091dce567d331636becec936236b4430408830129a2",
		tx_bundle_index: 3,
		tx_block_number: 15709616,
		tx_bundle_type: "mempool",
	},
	{
		tx_hash:
			"0x8d109710c280b7dc32eda5cb73f451260756c2eec4c2366da24364e1b3e4cf33",
		tx_bundle_index: 3,
		tx_block_number: 15731561,
		tx_bundle_type: "mempool",
	},
	{
		tx_hash:
			"0x8de5702adf7b8f5cc05f4775a9a0eb416c9f1f77c0ebbe25fe957fc3dc14500a",
		tx_bundle_index: 11,
		tx_block_number: 15660322,
		tx_bundle_type: "mempool",
	},
	{
		tx_hash:
			"0x21b3c2cf4f5f2d69b9507fb2efc672f0c867b3318787ca3f110c00e7321a0877",
		tx_bundle_index: 10,
		tx_block_number: 15670088,
		tx_bundle_type: "mempool",
	},
	{
		tx_hash:
			"0xee8939358171ebca6a265fbd9127b35dd9716ed285901d0529d50744e2b9823e",
		tx_bundle_index: 6,
		tx_block_number: 15666593,
		tx_bundle_type: "mempool",
	},
	{
		tx_hash:
			"0x846df6a1e45e6d25096068ef95f499c8f1096c93cad955b28df46ae099031664",
		tx_bundle_index: 2,
		tx_block_number: 15683593,
		tx_bundle_type: "mempool",
	},
	{
		tx_hash:
			"0xfa8bd003fed813d0bc330cfe1e776141d743ac17f66320a513231d18242402f9",
		tx_bundle_index: 4,
		tx_block_number: 15723899,
		tx_bundle_type: "mempool",
	},
	{
		tx_hash:
			"0xe5936389826636ab786676a9165d1d2be7991336efb025d6c6d4531cb3854d53",
		tx_bundle_index: 7,
		tx_block_number: 15691123,
		tx_bundle_type: "mempool",
	},
	{
		tx_hash:
			"0x90da8b47eb8417e6fa00ce02d96dd8f70e9f329b07a0bfb3d43d2e5007fe79c5",
		tx_bundle_index: 17,
		tx_block_number: 15570361,
		tx_bundle_type: "mempool",
	},
	{
		tx_hash:
			"0x9ad6343fe472bfd9c6f0e71f412ce0c7d60bd17fb3f0bfb42c4c9939fdbab57d",
		tx_bundle_index: 16,
		tx_block_number: 15557166,
		tx_bundle_type: "mempool",
	},
	{
		tx_hash:
			"0x2c3d85befb1efc22d03caa785f4584bab84a62682e98a684e793aba57ca511e4",
		tx_bundle_index: 2,
		tx_block_number: 15623346,
		tx_bundle_type: "mempool",
	},
	{
		tx_hash:
			"0x7cb4739362d92d4a3c7e848b2cba86250c805a028489fa61c0af492e68d539e8",
		tx_bundle_index: 5,
		tx_block_number: 15597159,
		tx_bundle_type: "mempool",
	},
	{
		tx_hash:
			"0x81f1daedb452d861b1ab4edf23ad6afe66e019daec92f4e1df21b70a2f0b7b7a",
		tx_bundle_index: 1,
		tx_block_number: 15612170,
		tx_bundle_type: "mempool",
	},
	{
		tx_hash:
			"0x19f983d16d8ddc171f2b7d189ad91c52fd9f3073433254471d6015b120461860",
		tx_bundle_index: 14,
		tx_block_number: 15569328,
		tx_bundle_type: "mempool",
	},
	{
		tx_hash:
			"0xa70269824a3c9d3f116b69d6b024df70d8fb92f0dfbe49e46cdad43629d35b76",
		tx_bundle_index: 5,
		tx_block_number: 15617604,
		tx_bundle_type: "mempool",
	},
	{
		tx_hash:
			"0xdc86496467768c42e744bc9b9f817794834dba23874bfd51cd4ab52c65e2a2eb",
		tx_bundle_index: 6,
		tx_block_number: 15624517,
		tx_bundle_type: "mempool",
	},
	{
		tx_hash:
			"0xb69ddec7644343c23c3925aeedc83f3de4c7c947ae5b9210a60f7866cde0f3ac",
		tx_bundle_index: 7,
		tx_block_number: 15644720,
		tx_bundle_type: "mempool",
	},
	{
		tx_hash:
			"0xdcdd8b234753ea446d294ed3e9139587c90b0791a94f1fcd413104e539ef58c5",
		tx_bundle_index: 0,
		tx_block_number: 15421969,
		tx_bundle_type: "rogue",
	},
	{
		tx_hash:
			"0x346258bfaf41f07c0303d1eb130c06217fb68b979e5a8202fb68b25368489da4",
		tx_bundle_index: 0,
		tx_block_number: 15341906,
		tx_bundle_type: "flashbots",
	},
];

const showBundles = async () => {
	mevData.map(async (txData) => {
		const fileStream = fs.createWriteStream(
			`FlashbotsBundlesTxData/${txData.tx_hash}.txt`
		);
		fileStream.write("[ \n");
		await getFlashbotBlock(txData.tx_block_number).then((response) => {
			response.blocks[0].transactions.map((tx) => {
				if (tx.bundle_index == txData.tx_bundle_index) {
					if (tx.transaction_hash == txData.tx_hash) {
						// console.log("Hello! I'm here ;)", txData.tx_hash);
						fileStream.write(
							`\t // Hello! I'm here ;) ${txData.tx_hash} \n`
						);
					}
					// console.log(
					// 	"{ blockNumber:",
					// 	tx.block_number,
					// 	", txHash:",
					// 	tx.transaction_hash,
					// 	", txIndex:",
					// 	tx.tx_index,
					// 	", bundleIndex:",
					// 	tx.bundle_index,
					// 	", bundleType:",
					// 	tx.bundle_type,
					// 	"}"
					// );
					fileStream.write(
						`\t{ blockNumber: ${tx.block_number}, txHash: ${tx.transaction_hash}, txIndex: ${tx.tx_index}, bundleIndex: ${tx.bundle_index}, bundleType: ${tx.bundle_type} }, \n`
					);
				}
			});
		});
		// console.log(" ");
		fileStream.write("]");
	});
};

const sushixswapCheck = async (provider) => {
	console.log(sushixswapAddress);

	const contract = new ethers.Contract(
		sushixswapAddress,
		SUSHIXSWAP_ABI,
		provider
	);
	let eventFilter = contract.filters.StargateSushiXSwapDst();
	let events = await contract.queryFilter(eventFilter);

	const txHashes = {};

	const perChunk = 50; // items per chunk - estimated rate limiting is 50 calls per minute, that's why divided whole array in chunks
	const eventsInChunks = events.reduce((resultArray, event, index) => {
		const chunkIndex = Math.floor(index / perChunk);

		if (!resultArray[chunkIndex]) {
			resultArray[chunkIndex] = []; // start a new chunk
		}

		resultArray[chunkIndex].push(event);
		txHashes[event.transactionHash] = 1;

		return resultArray;
	}, []);

	console.log(txHashes);

	const callAPI = async (eventsArr) => {
		eventsArr.map(async (event) => {
			await getFlashbotBlock(event.blockNumber).then((response) => {
				if (response.blocks.length > 0) {
					response.blocks[0].transactions.map((tx) => {
						if (txHashes[tx.transaction_hash] == 1) {
							console.log(
								"{ tx_hash:",
								tx.transaction_hash,
								", tx_bundle_index:",
								tx.bundle_index,
								", tx_block_number:",
								tx.block_number,
								", tx_bundle_type:",
								tx.bundle_type,
								" }"
							);
						}
					});
				}
			});
		});
	};

	(function debounceFunc(i) {
		setTimeout(function () {
			console.log("waiting for 100 sec coz of API rate limit");
			callAPI(eventsInChunks[i - 1]);
			if (--i) debounceFunc(i);
		}, 100000);
	})(eventsInChunks.length);
};

async function main() {
	const provider = new ethers.providers.WebSocketProvider(
		`wss://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_WEBSOCKET_KEY}`
	);
	// await sushixswapCheck(provider);
	await showBundles();
}
main();
