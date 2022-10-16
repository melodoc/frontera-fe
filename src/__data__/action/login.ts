import { createAsyncThunk } from '@reduxjs/toolkit';

import { APIRoute } from 'const';
import { User } from 'interfaces/interfaces';
import { api, store } from '__data__/store';

import { handleError } from '../../services/handle-error';
import { init, success, reset } from '../slice/login';

/* eslint-disable */
export const getLogin = createAsyncThunk<void, User>('data/getLogin', async ({ login, password }: User) => {
  store.dispatch(init());
  try {
    const { data } = await api.post<string>(APIRoute.Login, {
      login,
      password
    });
    store.dispatch(success(data));
  } catch (error) {
    handleError(error);
    store.dispatch(reset());
  }
});
/* eslint-disable */
