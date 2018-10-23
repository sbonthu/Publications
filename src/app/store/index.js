import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
const history = createBrowserHistory()
const loggerMiddleware = createLogger();


const store = createStore(
    connectRouter(history)(rootReducer), // new root reducer with router state
    compose(
      applyMiddleware(
        routerMiddleware(history),  // for dispatching history actions
        loggerMiddleware,
        thunk          // ... other middlewares ...
      ),
    ),
  )


export default store;