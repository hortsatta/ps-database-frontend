import { createReducer } from '@reduxjs/toolkit';

import {
  appendNotificationMessages,
  clearNotificationMessages,
  setModuleConfig, setModuleTitle,
  toggleDarkMode
} from './core.actions';
import { initialState } from './core.state';

export const coreReducer = createReducer(initialState, builder => (
  builder
    .addCase(toggleDarkMode, (state, action) => {
      state.darkMode = action.payload
    })
    .addCase(setModuleTitle, (state, action) => {
      state.moduleTitle = action.payload
    })
    .addCase(setModuleConfig, (state, action) => {
      state.moduleConfig = action.payload
    })
    .addCase(appendNotificationMessages, (state, action) => {
      if (state.notificationMessages.length >= 5) {
        state.notificationMessages.shift();
      }

      state.notificationMessages.push(action.payload);
    })
    .addCase(clearNotificationMessages, (state) => {
      state.notificationMessages = [];
    })
    .addDefaultCase(state => state)
));