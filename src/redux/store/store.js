import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from '../slices/sidebarToggle';
import productsReducer from '../slices/products';
import productsFilterReducer from '../slices/productsSlices';
import darkModeReducer from '../slices/darkModeSlice';
import authReducer from '../slices/authSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // uses localStorage

// Persist config for auth only
const authPersistConfig = {
  key: 'auth',
  storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    products: productsReducer,
    productSlice: productsFilterReducer, 
    darkMode: darkModeReducer,
    auth: persistedAuthReducer, // 👈 this is now persisted
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
