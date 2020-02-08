import { combineReducers } from 'redux';
import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from './actions';

const initialState = {
  tasks: [],
};

function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return Object.assign({}, state, {
        tasks: [
          ...state.tasks,
          {
            name: action.name,
            completed: false,
          },
        ],
      });
    case TOGGLE_TASK:
      return Object.assign({}, state, {
        tasks: state.tasks.map((task, index) => {
          if (index === action.index) {
            Object.assign({}, task, {
              completed: !task.completed,
            });
          }
        }),
      });
    case DELETE_TASK:
      return Object.assign({}, state, {
        tasks: state.tasks.filter((task, index) => {
          return action.index !== index;
        }),
      });
    default:
      return state;
  }
}
