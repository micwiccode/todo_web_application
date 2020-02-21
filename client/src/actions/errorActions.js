import { GET_ERROR, DELETE_ERROR } from '../actions/types';

export function getError(message, status, id) {
  return {
    type: GET_ERROR,
    payload: {
      message,
      status,
      id,
    },
  };
}

export function deleteError() {
  return {
    type: DELETE_ERROR,
  };
}
