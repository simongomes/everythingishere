import { API_ENDPOINT } from "./../constants";
import axios from "axios";

// Reaturns all stories (or stories of multiple channels passed in the method)
export const getAllStories = (channels, limit = false) => {
    // Check if any limit pased
    let queryString = limit ? `limit=${limit}` : "";
    return axios
        .get(`${API_ENDPOINT}/all/${channels}/${queryString}`)
        .then(response => {
            return response.data;
        });
};

// Returns stories of specific channel
export const getStoriesByChannel = (channel, limit = false) => {
    // Check if any limit pased
    let queryString = limit ? `limit=${limit}` : "";

    return axios
        .get(`${API_ENDPOINT}/${channel}/${queryString}`)
        .then(response => {
            return response.data;
        });
};
