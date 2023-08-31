import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, UserState } from '../types';

const initialState: UserState = {
  token: undefined,
  refreshToken: undefined,
  detail: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserToken: (state: UserState, { payload }: PayloadAction<UserState['token']>) => {
      state.token = payload;
    },
    setUserRefreshToken: (state: UserState, { payload }: PayloadAction<UserState['refreshToken']>) => {
      state.refreshToken = payload;
    },
    setUserDetail: (state: UserState, { payload }: PayloadAction<UserState['detail']>) => {
      state.detail = payload;
    },
    clearUserState: () => initialState,
  },
});

export const { setUserToken, setUserRefreshToken, setUserDetail, clearUserState } = userSlice.actions;

export const selectUserToken = (state: RootState) => state.user.token;
export const selectUserRefreshToken = (state: RootState) => state.user.refreshToken;
export const selectUserDetail = (state: RootState) => state.user.detail;
export const selectIsLogged = (state: RootState) => !!state.user.token;

export const userReducers = userSlice.reducer;
