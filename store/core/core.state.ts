import { ModuleConfig, NotificationMessage } from 'models';

type CoreState = {
  moduleTitle: string;
  darkMode: boolean;
  notificationMessages: NotificationMessage[];
  moduleConfig?: ModuleConfig;
}

const initialState: CoreState = {
  moduleTitle: '',
  darkMode: true,
  notificationMessages: []
};

export { initialState };
export type { CoreState };
