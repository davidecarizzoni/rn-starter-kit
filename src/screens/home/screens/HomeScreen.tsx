import { Row, Text } from '../../../components';
import { FlatList, RefreshControl, SafeAreaView } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';
import { useInfiniteScroll } from '../../../hooks/useInfiniteScroll';
import { User } from '../../../types';
import { useState } from 'react';
import { TextField } from '../../../components/ui/TextField';

type Filters = {
  q?: string;
};

export const HomeScreen = () => {
  const { colors, spacing, shapes } = useTheme();
  const [filters, setFilters] = useState({
    q: '',
  });

  const { isRefetching, refetch, ...infiniteScrollProps } = useInfiniteScroll<User, Filters>({
    key: 'users',
    url: 'users',
    limit: 10,
    filters,
  });

  return (
    <SafeAreaView>
      <TextField label={'Search'} value={filters.q} onChangeText={text => setFilters({ ...filters, q: text })} />
      <FlatList
        {...infiniteScrollProps}
        refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}
        contentInsetAdjustmentBehavior={'automatic'}
        contentContainerStyle={{ flexGrow: 1, marginTop: spacing[4], marginHorizontal: spacing[2] }}
        renderItem={({ item }) => (
          <Row justifyContent={'center'} br={shapes.xl} alignItems={'center'} h={100} mb={10} style={{ backgroundColor: colors.primary }}>
            <Text>
              {item.name} {item.surname}
            </Text>
          </Row>
        )}
      />
    </SafeAreaView>
  );
};
