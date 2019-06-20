import { INITIAL_STORIES } from './actionTypes';
import { ADD_STORY } from './actionTypes';

export const setInitialStories = () => {
  return {
    type: INITIAL_STORIES
  };
};

export const addStory = payload => {
  return {
    type: ADD_STORY,
    payload
  };
};
