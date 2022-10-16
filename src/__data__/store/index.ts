import { configureStore } from '@reduxjs/toolkit';

import { createAPI } from 'services/api';

import reducer from '../reducers';

const middlewareOptions: any = {
  thunk: true,
  immutableCheck: false,
  serializableCheck: false
};

export const api = createAPI();

export const store = configureStore({
  reducer,
  devTools: {
    name: 'Frontera'
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      ...middlewareOptions,
      thunk: {
        extraArgument: api
      }
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
