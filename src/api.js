import axios from "axios";

const BASE_URL = "https://blocks.flashbots.net/v1";

const ApiClient = () => {
	return axios.create({
		baseURL: BASE_URL,
		headers: {
			"Content-type": "application/json",
		},
	});
};

const getFlashbotBlock = async (blockNumber, ind) => {
	try {
		const response = await ApiClient()?.get(
			`/blocks?block_number=${blockNumber}`
		);
		return response?.data;
	} catch (error) {
		throw error;
	}
};

export default getFlashbotBlock;
