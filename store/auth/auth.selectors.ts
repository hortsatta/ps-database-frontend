import { createSelector } from 'reselect';

import { AppState } from '../app';
import { AuthState } from './auth.state';

const selectAuthState = (state: AppState) => state.auth;

const selectCurrentUser = createSelector(
  [selectAuthState],
  (state: AuthState) => state.currentUser
);

const selectIsUserLoggedIn = createSelector(
  [selectAuthState],
  (state: AuthState) => !!state.currentUser && !!Object.keys(state.currentUser).length
);

const selectLoading = createSelector(
  [selectAuthState],
  (state: AuthState) => state.loading
);

export {
  selectAuthState,
  selectCurrentUser,
  selectIsUserLoggedIn,
  selectLoading
};
