import { ModuleConfig } from 'models';

// Temporary
const moduleConfig: ModuleConfig = {
  start: {
    path: '/',
    label: 'Start',
    tooltip: 'Start',
    isMenuHidden: false,
  },
  news: {
    path: '/news',
    label: 'News',
    tooltip: 'Gaming News',
    isMenuHidden: false,
  },
  reviews: {
    path: '/reviews',
    label: 'Reviews',
    tooltip: 'Game Reviews',
    isMenuHidden: false,
  },
  register: {
    className: 'menu-register',
    path: '/auth/register',
    label: 'Register For Free',
    tooltip: 'Register For Free',
    isMenuHidden: true,
  },
  login: {
    className: 'menu-login',
    path: '/auth/login',
    label: 'Login',
    tooltip: 'Login',
    isMenuHidden: true,
  }
};

export const getModuleConfig = async (): Promise<ModuleConfig> => (
  new Promise<ModuleConfig>(resolve => resolve(moduleConfig))
)