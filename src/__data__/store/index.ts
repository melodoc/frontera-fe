import { configureStore } from '@reduxjs/toolkit';

import reducer from '../reducers';

const middlewareOptions: any = {
  thunk: true,
  immutableCheck: false,
  serializableCheck: false,
};

export const store = configureStore({
  reducer,
  devTools: {
    name: 'Frontera',
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      ...middlewareOptions,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
