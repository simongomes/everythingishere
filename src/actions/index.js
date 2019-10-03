import { ADD_STORY, INITIAL_STORIES, UPDATE_STORIES } from "./actionTypes";
import { getAllStories, getStoriesByChannel } from "../apis/stories";

export const setInitialStories = () => dispatch => {
    return getAllStories(
        "hn,reddit,ph,slashdot,dn,github,medium,lifehacker"
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
