import { createAction } from '@reduxjs/toolkit';
import { User } from 'models';

export enum AuthActionType {
  LOGIN_START = '[Auth] Login Start',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
  LOGOUT_START = '[Auth] Logout Start',
  LOGOUT_SUCCESS = '[Auth] Logout Success',
  LOGOUT_FAILURE = '[Auth] Logout Failure',
  CHECK_LOGIN_SESSION = '[Auth] Check Login Session'
}

const checkLoginSession = createAction(AuthActionType.CHECK_LOGIN_SESSION);

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
  checkLoginSession,
  loginStart,
  loginSuccess,
  loginFailure,
  logoutStart,
  logoutSuccess,
  logoutFailure
};
