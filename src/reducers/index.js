import {
    INITIAL_STORIES,
    ADD_STORY,
    UPDATE_STORIES
} from "./../actions/actionTypes";

function rootReducer(state, action) {
    switch (action.type) {
        case INITIAL_STORIES:
            return Object.assign({}, state, { stories: action.stories });
        case UPDATE_STORIES:
            return Object.assign({}, state, { stories: action.stories });
        case ADD_STORY:
            return Object.assign({}, state, {
                stories: state.stories.concat(action.story)
            });
        default:
            return state;
    }
}

export default rootReducer;
