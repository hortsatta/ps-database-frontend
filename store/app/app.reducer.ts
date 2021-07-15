import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import { storage } from 'utils';
import { authReducer } from '../auth/auth.reducer';
import { coreReducer } from '../core/core.reducer';

// Configure redux-persist to keep store data in localstorage,
// specify config if you want to blacklist specific property.
const appPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['core', 'auth']
};

const corePersistConfig = {
  key: 'core',
  storage,
  whitelist: ['darkMode']
};

// Combine all reducers
const appReducer = combineReducers({
  core: persistReducer(corePersistConfig, coreReducer),
  auth: authReducer
});

const persistedReducer = persistReducer(appPersistConfig, appReducer);

export { appReducer, persistedReducer };
