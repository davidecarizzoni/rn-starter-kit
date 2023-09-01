import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Row } from '../ui';

type Props = {
  loading: boolean;
};

export const ListFooterComponent = ({ loading }: Props) => {
  return (
    <Row h={100} style={{ backgroundColor: 'red' }} justifyContent={'center'} alignItems={'center'}>
      {loading && <ActivityIndicator />}
    </Row>
  );
};
