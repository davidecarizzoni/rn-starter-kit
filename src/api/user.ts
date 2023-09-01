import { useMutation, useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { appAxios, pickData } from './config';
import { User } from '../types';
import { useDispatch } from 'react-redux';
import { setUserDetail } from '../store/user';
import axios from 'axios';

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

export const useGetUsers = () => {
  const queryKey = ['users'];
  const getUsers = async ({ pageParam = 1 }) => {
    const { data } = await appAxios.get<User[]>('users', { params: { page: pageParam, limit: 5 } });
    return {
      data: data,
      nextPage: pageParam + 1,
    };
  };
  return useInfiniteQuery(queryKey, getUsers, {
    getNextPageParam: ({ nextPage, data }) => {
      if (data.length < 5) return undefined;
      return nextPage;
    },
  });
};
