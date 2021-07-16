import { createAction } from '@reduxjs/toolkit';
import { User } from 'models';

export enum AuthActionType {
  CHECK_LOGIN_SESSION_START = '[Auth] Check Login Session Start',
  CHECK_LOGIN_SESSION_SUCCESS = '[Auth] Check Login Session Success',
  CHECK_LOGIN_SESSION_FAILURE = '[Auth] Check Login Session Failure',
  LOGIN_START = '[Auth] Login Start',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
  LOGOUT_START = '[Auth] Logout Start',
  LOGOUT_SUCCESS = '[Auth] Logout Success',
  LOGOUT_FAILURE = '[Auth] Logout Failure'
}

const checkLoginSessionStart = createAction(AuthActionType.CHECK_LOGIN_SESSION_START);

const checkLoginSessionSuccess = createAction(
  AuthActionType.CHECK_LOGIN_SESSION_SUCCESS,
  (user: User) => ({ payload: user })
);

const checkLoginSessionFailure = createAction(AuthActionType.CHECK_LOGIN_SESSION_FAILURE);

const loginStart = createAction(AuthActionType.LOGIN_START);

const loginSuccess = createAction(
  AuthActionType.LOGIN_SUCCESS,
  (user: User) => ({ payload: user })
);

const loginFailure = createAction(AuthActionType.LOGIN_FAILURE);

const logoutStart = createAction(AuthActionType.LOGOUT_START);

const logoutSuccess = createAction(AuthActionType.LOGOUT_SUCCESS);

const logoutFailure = createAction(AuthActionType.LOGOUT_FAILURE);

export {
  checkLoginSessionStart,
  checkLoginSessionSuccess,
  checkLoginSessionFailure,
  loginStart,
  loginSuccess,
  loginFailure,
  logoutStart,
  logoutSuccess,
  logoutFailure
};
