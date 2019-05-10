import { applyMiddleware,combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import login from './src/login/reducer';

const wait = 600;
var timerRunning = false;



const debouncePush = store => next => action => {
  if (action.type === 'PUSH_ROUTE') {
    if (!timerRunning) {
      timerRunning = true;
      setTimeout(() => {timerRunning = false},wait)
      return next(action)
    }
  } else {
    return next(action)
  }
}

const middleware = () => {
  return applyMiddleware(thunk, debouncePush)
   if (__DEV__) {
     return applyMiddleware(thunk,debouncePush,logger())
   } else {
     return applyMiddleware(thunk, debouncePush)
   }
}

export default createStore(
    combineReducers({
      login:login
    }),
  middleware(),
);
