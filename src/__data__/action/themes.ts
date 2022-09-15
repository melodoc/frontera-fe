import { createAsyncThunk } from '@reduxjs/toolkit';

import { themesRes } from 'api/themes/themes';
import { handleError } from 'services/handle-error';
import { store } from '__data__/store';

import { success, init } from '../slice/themes';

export const getThemes = createAsyncThunk('data/suggestions', async () => {
  store.dispatch(init());
  try {
    // const { data } = await api.get<Array<CourseTheme>>(APIRoute.Themes);
    // store.dispatch(success(data))
    store.dispatch(success(themesRes.themes));
  } catch (error) {
    handleError(error);
  }
});
