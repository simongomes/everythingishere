import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

const middlewares = [thunk];

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
  ],
  active_channel: 'hacker-news'
};

const store = createStore(
  rootReducer,
  initialState,
  storeEnhancers(applyMiddleware(...middlewares))
);

export default store;
