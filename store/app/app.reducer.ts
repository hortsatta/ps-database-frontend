import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import { storage } from 'utils';
import { coreReducer } from '../core/core.reducer';

// Configure redux-persist to keep store data in localstorage,
// specify config if you want to blacklist specific property.
const appPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['core']
};

const corePersistConfig = {
  key: 'core',
  storage,
  whitelist: ['darkMode']
};

// Combine all reducers
const appReducer = combineReducers({
  core: persistReducer(corePersistConfig, coreReducer)
});

const persistedReducer = persistReducer(appPersistConfig, appReducer);

export { appReducer, persistedReducer };
