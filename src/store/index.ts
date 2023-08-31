import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { compact } from 'lodash';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from 'redux-logger';
import { userReducers } from './user';

const reducers = combineReducers({
  user: userReducers,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: compact([thunk, logger]),
});

export const persistor = persistStore(store);

function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
export const awaitRehydrate = async (): Promise<boolean> => {
  const state = store.getState();
  const rehydrated = state?._persist?.rehydrated;
  console.debug('rehydrated', rehydrated);
  if (rehydrated) {
    return true;
  } else {
    await timeout(10);
    return awaitRehydrate();
  }
};
