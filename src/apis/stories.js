import { API_ENDPOINT } from "./../constants";
import axios from "axios";

export const getAllStories = (channels, limit = false) => {
    // Check if any limit pased
    let queryString = limit ? `limit=${limit}` : "";
    return axios
        .get(`${API_ENDPOINT}/all/${channels}/${queryString}`)
        .then(response => {
            return response.data;
        });
};
