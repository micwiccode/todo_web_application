import axios from 'axios';
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_FAIL,
  USER_LOADED,
  USER_LOADING,
  GET_TASKS,
  FETCH_TASKS,
} from '../actions/types';
import { getError } from './errorActions';

export function loadUser() {
  return (dispatch, getState) => {
    dispatch(loadingUser());
    axios
      .get('/api/login/user', tokenConfig(getState))
      .then(res => dispatch({ type: USER_LOADED, payload: res.data }))
      .catch(err => {
        dispatch(getError(err.response.data, err.response.status, null));
        dispatch(authFail());
      });
  };
}

export function logIn() {
  return (dispatch, getState) => {
    axios
      .get('/api/login/user')
      .then(res => dispatch({ type: GET_TASKS, payload: res.data }));
  };
}

export function logOut() {
  return { type: LOGOUT_SUCCESS };
}

export function registerUser({ name, email, password, repeatPassword }) {
  return dispatch => {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };
    const body = JSON.stringify({ name, email, password, repeatPassword });
    axios
      .post('/api/users', body, config)
      .then(res => dispatch({ type: REGISTER_SUCCESS, payload: res.data }))
      .catch(err => {
        dispatch(getError(err.response.data.msg, err.response.status, REGISTER_FAIL));
        dispatch(registrationFail());
      });
  };
}
export function loadingUser() {
  return { type: USER_LOADING };
}

export function authFail() {
  return { type: AUTH_FAIL };
}

export function registrationFail() {
  return { type: REGISTER_FAIL };
}

export function tokenConfig(getState) {
  const { token } = getState().logRoot;
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  if (token) {
    config.headers['x-auth-token'] = token;
  }
  return config;
}
