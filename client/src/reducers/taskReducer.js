import {
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
  FETCH_TASKS,
} from '../actions/types';

const initialState = {
  tasks: [],
  fetching: false,
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
        fetching: false
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => action.payload !== task._id)
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          action.payload
        ],
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task._id === action.payload ? { ...task, isDone: !task.isDone } : task
        ),
      };
    case FETCH_TASKS:
      return {
        ...state,
        fetching: true,
      };
    default:
      return state;
  }
};

export default tasksReducer;
