import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_FAIL,
  USER_LOADED,
  USER_LOADING,
} from '../actions/types';

const initialState = {
  user: null,
  token: localStorage.getItem('token'),
  isAuth: false,
  isLoading: false,
};

const logReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuth: true,
        isLoading: false,
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOGOUT_SUCCESS:
    case AUTH_FAIL:
      localStorage.removeItem('token');
      return {
        user: null,
        token: null,
        isAuth: false,
        isLoading: false,
      };
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default logReducer;
