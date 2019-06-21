import { INITIAL_STORIES } from './../actions/actionTypes';
import { ADD_STORY } from './../actions/actionTypes';

function rootReducer(state, action) {
  switch (action.type) {
    case INITIAL_STORIES:
      return Object.assign({}, state, { stories: state.stories });
    case ADD_STORY:
      return Object.assign({}, state, {
        stories: state.stories.concat(action.payload)
      });
    default:
      return state;
  }
}

export default rootReducer;
