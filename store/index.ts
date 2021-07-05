import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { persistedReducer } from './app';

// Compose store from redux toolkit;
// Use persisted reducers, apply middlewares
// and enable devtools in development environment.
const store = configureStore({
  reducer: persistedReducer,
  middleware: [],
  devTools: process.env.NODE_ENV === 'development'
});
// Apply persist to store.
const persistor = persistStore(store);

export { store, persistor };
