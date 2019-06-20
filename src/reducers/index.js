import { INITIAL_STORIES } from './../actions/actionTypes';
import { ADD_STORY } from './../actions/actionTypes';

const initialState = {
  stories: [
    {
      title:
        'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
      title:
        'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
      title:
        'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
      title:
        'Ant Design, a design language for background applications, is refined by Ant UED Team'
    }
  ]
};

function rootReducer(state = initialState, action) {
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
