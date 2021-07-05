import { createAction } from '@reduxjs/toolkit';
import { ModuleConfig, NotificationMessage } from 'models';

export enum CoreActionType {
  SET_MODULE_TITLE = '[Core] Set Module Title',
  TOGGLE_DARK_MODE = '[Core] Toggle Dark Mode',
  // Module config
  SET_MODULE_CONFIG = '[Core] Set Module Config',
  // Messages for toast notification
  APPEND_NOTIFICATION_MESSAGES = '[Core] Append Notification Messages',
  CLEAR_NOTIFICATION_MESSAGES = '[Core] Clear Notification Messages'
}

const toggleDarkMode = createAction(
  CoreActionType.TOGGLE_DARK_MODE,
  (dark: boolean) => ({ payload: dark })
);

const setModuleTitle = createAction(
  CoreActionType.SET_MODULE_TITLE,
  (title: string) => ({ payload: title })
);

const setModuleConfig = createAction(
  CoreActionType.SET_MODULE_CONFIG,
  (moduleConfig: ModuleConfig) => ({ payload: moduleConfig })
);

const appendNotificationMessages = createAction(
  CoreActionType.APPEND_NOTIFICATION_MESSAGES,
  (notification: NotificationMessage) => ({ payload: notification })
);

const clearNotificationMessages = createAction(
  CoreActionType.CLEAR_NOTIFICATION_MESSAGES
);

export {
  toggleDarkMode,
  setModuleTitle,
  setModuleConfig,
  appendNotificationMessages,
  clearNotificationMessages
};
