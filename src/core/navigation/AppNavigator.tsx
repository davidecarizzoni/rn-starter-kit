import { RootNavigator } from '../../screens/RootNavigator';
import { useStoreRehydrate } from '../../hooks/useStoreRehydratate';
import { View } from 'react-native';

export const AppNavigator = () => {
  const { isReady } = useStoreRehydrate();

  if (!isReady) {
    return <View />;
  }
  return <RootNavigator />;
};
