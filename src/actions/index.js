import { ADD_STORY } from './actionTypes';
import { getNews, getTopNewsIDs } from '../apis/hackerNewsApis';

export const setInitialStories = () => dispatch => {
  return getTopNewsIDs().then(storyIDs => {
    storyIDs.slice(0, 9).map(id =>
      getNews(id).then(story => {
        dispatch({ type: ADD_STORY, story });
      })
    );
  });
};

export const addStory = story => dispatch => {
  dispatch({
    type: ADD_STORY,
    story
  });
};
