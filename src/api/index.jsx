//api/index
import axios from 'axios';
import { getToken } from "../storage/auth";

const DEFAULT_HEADERS = {
    "Content-Type": "application/json",
};

const API = (method, url, data = null, appendToken = false) => {
    console.log("Chegou na api")

    const options = {
        method: method.toUpperCase(),
        headers: { ...DEFAULT_HEADERS }
    };
    console.log(data)


    if (data) {
        console.log("Body", data)
        options.data = data;
    }
    console.log("passou pelo data")

    if (appendToken) {
        options.headers["Authorization"] = `Bearer ${getToken()}`;
    }

    console.log("Axios", axios(url, options));
    return axios(url, options);
};

export default API;
