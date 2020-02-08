import { createStore } from 'redux';
import tasksReducer from './reducers';

const initialState = {
  tasks: [],
};

const store = createStore(tasksReducer);
