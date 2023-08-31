import { useMutation } from '@tanstack/react-query';
import base64 from 'base-64';
import { ssoAxios } from './config';
import { User } from 'src/types';
import { useDispatch } from 'react-redux';
import { setUserDetail, setUserToken } from '../store/user';

type LoginParams = {
  email: string;
  password: string;
};

type LoginResponse = {
  token: string;
  user: User;
};

export const useLogin = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: ({ email, password }: LoginParams) => {
      const auth = base64.encode(`${email.toLowerCase()}:${password}`);
      return ssoAxios.post<LoginResponse>('auth', undefined, {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      });
    },
    onSuccess: data => {
      dispatch(setUserDetail(data.data?.user));
      dispatch(setUserToken(data.data?.token));
    },
  });
};
