import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootSaga from '../sagas/sagas';
import newsReducer from './newsReducer';
import onlineStatusReducer from './onlineStatusReducer';

// now to create the saga middleware
const sagaMiddleware = createSagaMiddleware(rootSaga);

// combining the reducers
const reducer = combineReducers({
  newsReducer,
  onlineStatusReducer
});

// adding the middleware and the logger to see what the current and next state is in the console
const store = createStore(reducer,
  applyMiddleware(sagaMiddleware, logger)
);

// run the root saga
sagaMiddleware.run(rootSaga);

export default store;