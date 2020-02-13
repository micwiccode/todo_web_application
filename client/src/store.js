import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import tasksReducer from './reducers/indexReducer';

const initialState = {};
const middleWare = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(tasksReducer, initialState, composeEnhancers(applyMiddleware(...middleWare)));

export default store;
