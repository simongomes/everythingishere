import { ADD_STORY, INITIAL_STORIES } from "./actionTypes";
// import { getNews, getTopNewsIDs } from "../apis/hackerNewsApis";
import { getAllStories } from "../apis/stories";

export const setInitialStories = () => dispatch => {
    return getAllStories(
        "hn,reddit,ph,slashdot,dn,github,medium,lifehacker"
    ).then(stories => {
        dispatch({ type: INITIAL_STORIES, stories });
    });
};

export const addStory = story => dispatch => {
    dispatch({
        type: ADD_STORY,
        story
    });
};
