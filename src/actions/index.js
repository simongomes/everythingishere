import { INITIAL_STORIES } from './actionTypes';
import { ADD_STORY } from './actionTypes';

export const setInitialStories = () => dispatch => {
  dispatch({
    type: INITIAL_STORIES
  });
};

export const addStory = payload => dispatch => {
  dispatch({
    type: ADD_STORY,
    payload
  });
};
