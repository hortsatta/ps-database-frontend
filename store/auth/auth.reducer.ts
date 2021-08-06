import { createReducer, isAnyOf } from '@reduxjs/toolkit';

import {
  checkLoginSessionStart,
  checkLoginSessionSuccess,
  checkLoginSessionFailure,
  loginFailure,
  loginStart,
  loginSuccess,
  logoutFailure,
  logoutStart, 
  logoutSuccess
} from './auth.actions';
import { initialState } from './auth.state';

export const authReducer = createReducer(initialState, builder => (
  builder
    .addCase(logoutSuccess, state => {
      state.loading = false;
      state.currentUser = undefined
    })
    .addMatcher(isAnyOf (checkLoginSessionSuccess, loginSuccess), (state, action) => {
      state.loading = false;
      state.currentUser = action.payload
    })
    .addMatcher(isAnyOf (checkLoginSessionStart, loginStart, logoutStart), state => {
      state.loading = true;
    })
    .addMatcher(isAnyOf (checkLoginSessionFailure, loginFailure, logoutFailure), state => {
      state.loading = false;
    })
    .addDefaultCase(state => state)
));
