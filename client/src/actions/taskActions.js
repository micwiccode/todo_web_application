import axios from 'axios';
import {
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
  FETCH_TASKS,
} from '../actions/types';
import { tokenConfig } from './logActions';
import { getError } from './errorActions';

export function getTasks(userId) {
  return dispatch => {
    dispatch(fetchTasks());
    axios
      .get(`/api/tasks/${userId}`)
      .then(res => dispatch({ type: GET_TASKS, payload: res.data }))
      .catch(error => getError(error.response.data, error.response.status));
  };
}

export function addTask(task) {
  return (dispatch, getState) => {
    axios
      .post('/api/tasks', task, tokenConfig(getState))
      .then(res => dispatch({ type: ADD_TASK, payload: res.data }))
      .catch(error => getError(error.response.data, error.response.status));
  };
}

export function toggleTask(id) {
  return (dispatch, getState) => {
    axios
      .put(`/api/tasks/${id}`, tokenConfig(getState))
      .then(res => dispatch({ type: TOGGLE_TASK, payload: id }))
      .catch(error => getError(error.response.data, error.response.status));
  };
}

export function deleteTask(id) {
  return (dispatch, getState) => {
    axios
      .delete(`/api/tasks/${id}`, tokenConfig(getState))
      .then(res => dispatch({ type: DELETE_TASK, payload: id }))
      .catch(error => getError(error.response.data, error.response.status));
  };
}

export function fetchTasks() {
  return { type: FETCH_TASKS };
}
