import { useMutation, useQuery } from '@tanstack/react-query';
import { appAxios, pickData } from './config';
import { User } from '../types';
import { useDispatch } from 'react-redux';
import { setUserDetail } from '../store/user';

export const useGetUser = () => {
  const dispatch = useDispatch();
  return useQuery({
    queryKey: ['users', 'me'],
    queryFn: () => appAxios.get<User>('users/me').then(pickData),
    onSuccess: data => {
      dispatch(setUserDetail(data));
    },
  });
};

export const useUpdateUser = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationKey: ['users', 'me'],
    mutationFn: (data: Partial<User>) => appAxios.put<User>('users/me', data).then(pickData),
    onSuccess: data => {
      dispatch(setUserDetail(data));
    },
  });
};
