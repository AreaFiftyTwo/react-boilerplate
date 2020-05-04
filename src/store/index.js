import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './user';

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === `development`) {
  const loggerMiddleware = createLogger({ collapsed: true });
  middlewares.push(loggerMiddleware);
}

const reducer = combineReducers({ user });
const middleware = composeWithDevTools(
  applyMiddleware(...middlewares)
)
const store = createStore(reducer, middleware);

export default store;
export * from './user';
