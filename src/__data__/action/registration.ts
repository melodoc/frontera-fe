import { createAsyncThunk } from '@reduxjs/toolkit';

import { APIRoute } from 'const';
import { User } from 'interfaces/interfaces';
import { api, store } from '__data__/store';

import { handleError } from '../../services/handle-error';
import { init, success, reset } from '../slice/registration';

/* eslint-disable */
export const getAccountData = createAsyncThunk<void, User>('data/account', async ({ login, password, email }: User) => {
  store.dispatch(init());
  try {
    const { data } = await api.post<string>(APIRoute.Registration, {
      login,
      password,
      email
    });
    store.dispatch(success(data));
  } catch (error) {
    handleError(error);
    store.dispatch(reset());
  }
});
/* eslint-disable */
