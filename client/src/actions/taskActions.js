import axios from 'axios';
import {
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
  FETCH_TASKS,
} from '../actions/types';

export function getTasks(user) {
  return dispatch => {
    dispatch(fetchTasks());
    axios
      .get('/api/tasks', user)
      .then(res => dispatch({ type: GET_TASKS, payload: res.data }));
  };
}

export function addTask(task) {
  return dispatch => {
    axios
      .post('/api/tasks', task)
      .then(res => dispatch({ type: ADD_TASK, payload: res.data }));
  };
}

export function toggleTask(id) {
  return dispatch => {
    axios
      .put(`/api/tasks/${id}`)
      .then(res => dispatch({ type: TOGGLE_TASK, payload: id }));
  };
}

export function deleteTask(id) {
  return dispatch => {
    axios
      .delete(`/api/tasks/${id}`)
      .then(res => dispatch({ type: DELETE_TASK, payload: id }));
  };
}

export function fetchTasks() {
  return { type: FETCH_TASKS };
}
