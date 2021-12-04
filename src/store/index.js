import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

const middlewares = [thunk];

const initialState = {
  stories: [],
  channel: "Everything",
};

let store = null;

process.env.NODE_ENV === "production"
  ? (store = createStore(
      rootReducer,
      initialState,
      storeEnhancers(applyMiddleware(...middlewares))
    ))
  : (store = createStore(
      rootReducer,
      initialState,
      storeEnhancers(applyMiddleware(...middlewares))
    ));

// process.env.NODE_ENV === "production"
//   ? (store = createStore(
//       rootReducer,
//       initialState,
//       storeEnhancers(applyMiddleware(...middlewares))
//     ))
//   : (store = createStore(
//       rootReducer,
//       initialState,
//       storeEnhancers(
//         applyMiddleware(...middlewares),
//         window.__REDUX_DEVTOOLS_EXTENSION__ &&
//           window.__REDUX_DEVTOOLS_EXTENSION__()
//       )
//     ));

export default store;
