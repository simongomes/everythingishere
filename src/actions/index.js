import {
  ADD_STORY,
  INITIAL_STORIES,
  UPDATE_STORIES,
  UPDATE_CHANNEL
} from './actionTypes';
import { getAllStories, getStoriesByChannel } from '../apis/stories';

export const setInitialStories = () => dispatch => {
  return getAllStories(
    'hn,reddit,ph,slashdot,dn,github,medium,lifehacker'
  ).then(stories => {
    dispatch({ type: INITIAL_STORIES, stories });
  });
};

export const updateStories = channel => dispatch => {
  dispatch({ type: UPDATE_STORIES, stories: [] });
  return getStoriesByChannel(channel).then(stories => {
    dispatch({ type: UPDATE_STORIES, stories });
  });
};

export const addStory = story => dispatch => {
  dispatch({
    type: ADD_STORY,
    story
  });
};

export const updateChannel = channel => dispatch => {
  switch (channel) {
    case 'hn':
      channel = 'Hacker News';
      break;
    case 'reddit':
      channel = 'Reddit';
      break;
    case 'ph':
      channel = 'Product Hunt';
      break;
    case 'slashdot':
      channel = 'Slashdot';
      break;
    case 'dn':
      channel = 'Designer News';
      break;
    case 'github':
      channel = 'GitHub Treands';
      break;
    case 'medium':
      channel = 'Medium';
      break;
    case 'lifehacker':
      channel = 'Lifehacker';
      break;
    default:
      break;
  }
  dispatch({ type: UPDATE_CHANNEL, channel });
};
