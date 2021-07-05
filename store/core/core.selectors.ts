import { createSelector } from 'reselect';
import { AppState } from 'store/app';
import { CoreState } from './core.state';

const selectCoreState = (state: AppState) => state.core;

const selectDarkMode = createSelector(
  [selectCoreState],
  (state: CoreState) => state.darkMode
);

const selectModuleTitle = createSelector(
  [selectCoreState],
  (state: CoreState) => state.moduleTitle
);

const selectModuleConfig = createSelector(
  [selectCoreState],
  (state: CoreState) => state.moduleConfig
);

const selectModuleConfigList = createSelector(
  [selectCoreState],
  (state: CoreState) => {
    const moduleConfig = state.moduleConfig || {};
    return Object.keys(moduleConfig).map(key => ({
      ...moduleConfig[key], name: key
    }));
  }
);

const selectNotificationMessages = createSelector(
  [selectCoreState],
  (state: CoreState) => state.notificationMessages
);

export {
  selectDarkMode,
  selectModuleTitle,
  selectModuleConfig,
  selectModuleConfigList,
  selectNotificationMessages
};
