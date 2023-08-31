import { User } from './user';

export type UserState = {
  token?: string;
  refreshToken?: string;
  detail?: User;
};

export type RootState = {
  user: UserState;
};
