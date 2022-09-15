import { createAsyncThunk } from '@reduxjs/toolkit';

import { User } from 'interfaces/interfaces';
import { store } from '__data__/store';

import { handleError } from '../../services/handle-error';
import { init, success } from '../slice/login';

export const getLogin = createAsyncThunk<void, User>(
  'data/getLogin',
  async ({ login, password }: User) => {
    store.dispatch(init());
    try {
    //   const { data } = await api.post<string>(APIRoute.Login, {
    //     login,
    //     password,
    //   });
    //   store.dispatch(success(data));
      store.dispatch(success(''));
    } catch (error) {
      handleError(error);
    }
  }
);
