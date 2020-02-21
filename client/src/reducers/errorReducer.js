import { GET_ERROR, DELETE_ERROR } from '../actions/types';

const initialState = {
  message: '',
  status: null,
  id: null,
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERROR:
      return {
        message: action.payload.message,
        status: action.payload.status,
        id: action.payload.id
      };
    case DELETE_ERROR:
      return {
        message: '',
        status: null,
        id: null
      };
    default:
      return state;
  }
};

export default errorReducer;
