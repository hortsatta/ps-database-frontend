import { createReducer, isAnyOf } from '@reduxjs/toolkit';

import {
  checkLoginSession,
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
    .addCase(loginSuccess, (state, action) => { console.log(action.payload)
      state.loading = false;
      state.currentUser = action.payload
    })
    .addCase(logoutSuccess, state => {
      state.loading = false;
      state.currentUser = undefined
    })
    .addMatcher(isAnyOf (checkLoginSession, loginStart, logoutStart), state => {
      state.loading = true;
    })
    .addMatcher(isAnyOf (loginFailure, logoutFailure), state => {
      state.loading = false;
    })
    .addDefaultCase(state => state)
));
