import axios from "axios";
import { APIs } from "../constants";
const apiURL = () => {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=d44ee9e5894d474a9573228aae0eb3e4`;
    return apiUrl;
};

const handleError = (errorObject) => {
    const data = errorObject.response
        ? errorObject.response.data
        : { data: { status: errorObject.response.status, message: errorObject.response.status } };
    throw new Error(data.message);
};
const handleSuccess = (response) => {
    return {
        articles: response.data
    };
};
const Client = {
    headlines: async () => {
        await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=d44ee9e5894d474a9573228aae0eb3e4')
            .then(handleSuccess).catch(handleError);
    },
}
export default Client;