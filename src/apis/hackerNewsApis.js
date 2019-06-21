import { HACKER_NEWS_API_ENDPOINT } from './../constants';
import axios from 'axios';

// Get News data object of the passed id
export const getNews = id => {
  return axios
    .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
    .then(response => response.data);
};

// Get Top News IDs fron Hacker News
export const getTopNewsIDs = () => {
  return axios
    .get(`${HACKER_NEWS_API_ENDPOINT}/topstories.json?print=pretty`)
    .then(response => response.data);
};
