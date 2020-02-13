import { combineReducers } from 'redux';
import tasksReducer from './taskReducer';

export default combineReducers({ tasksRoot: tasksReducer });
