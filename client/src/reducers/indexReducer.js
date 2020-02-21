import { combineReducers } from 'redux';
import tasksReducer from './taskReducer';
import logReducer from './logReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  tasksRoot: tasksReducer,
  logRoot: logReducer,
  errorRoot: errorReducer,
});
