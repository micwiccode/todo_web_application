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
  DELETE_ERROR,
} from '../actions/types';
import { getError } from './errorActions';

export function loadUser() {
  return (dispatch, getState) => {
    dispatch(loadingUser());
    axios
      .get('/api/user', tokenConfig(getState))
      .then(res => dispatch({ type: USER_LOADED, payload: res.data }))
      .catch(err => {
        dispatch(getError(err.response.data, err.response.status, null));
        dispatch(authFail());
      });
  };
}

export function logIn({ email, password }) {
  return dispatch => {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };
    const body = JSON.stringify({ email, password });
    axios
      .post('/api/login', body, config)
      .then(res => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      })
      .then(() => dispatch({ type: DELETE_ERROR }))
      .catch(err => {
        dispatch(
          getError(err.response.data.msg, err.response.status, LOGIN_FAIL)
        );
        dispatch(LogInFail());
      });
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
      .post('/api/register', body, config)
      .then(res => dispatch({ type: REGISTER_SUCCESS, payload: res.data }))
      .then(() => dispatch({ type: DELETE_ERROR }))
      .catch(err => {
        dispatch(
          getError(err.response.data.msg, err.response.status, REGISTER_FAIL)
        );
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

export function LogInFail() {
  return { type: LOGIN_FAIL };
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
