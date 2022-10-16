/* eslint-disable @typescript-eslint/no-shadow */
import { createAsyncThunk } from '@reduxjs/toolkit';

import { trendingRes } from 'api/trending/trending';
import { handleError } from 'services/handle-error';
import { store } from '__data__/store';

import { success, init, reset } from '../slice/trending';

export const getCourses = createAsyncThunk('data/suggestions', async () => {
  store.dispatch(init());
  try {
    // const { data } = await api.get<Array<Card>>(APIRoute.Trends);
    // store.dispatch(success(data))
    store.dispatch(success(trendingRes.themes));
  } catch (error) {
    handleError(error);
    store.dispatch(reset());
  }
});
