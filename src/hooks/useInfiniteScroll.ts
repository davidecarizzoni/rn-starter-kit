import { appAxios } from '../api/config';
import { useInfiniteQuery } from '@tanstack/react-query';
import { ListFooterComponent, RefreshControl } from '../components';
import { useMemo } from 'react';
import _ from 'lodash';

type Params<F> = {
  key: string;
  url: string;
  limit?: number;
  filters?: F;
};

export const useInfiniteScroll = <T = unknown, F = object>({ key, url, limit = 10, filters }: Params<F>) => {
  const queryKey = [key, ..._.values<string>(filters || {})].filter(Boolean);
  const getPaginatedList = async ({ pageParam = 1 }) => {
    const { data } = await appAxios.get<T[]>(url, { params: { page: pageParam, limit, ...filters } });
    return {
      data: data,
      nextPage: pageParam + 1,
    };
  };
  const { data, hasNextPage, fetchNextPage, isLoading, isRefetching, refetch } = useInfiniteQuery(queryKey, getPaginatedList, {
    getNextPageParam: ({ nextPage, data }) => {
      if (data.length < limit) return undefined;
      return nextPage;
    },
  });

  const loadNext = () => {
    hasNextPage && fetchNextPage();
  };

  const flattenData = useMemo(() => {
    return data?.pages.flatMap(page => page.data) || [];
  }, [data?.pages]);

  return {
    data: flattenData,
    onEndReached: loadNext,
    ListFooterComponent: ListFooterComponent({ loading: isLoading }),
    isRefetching,
    refetch,
  };
};
