import { RootNavigator } from '../../screens/RootNavigator';
import { useStoreRehydrate } from '../../hooks/useStoreRehydratate';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectIsLogged } from '../../store/user';
import { OnBoardingNavigator } from '../../screens/onBoarding/OnBoardingNavigator';

export const AppNavigator = () => {
  const isLogged = useSelector(selectIsLogged);
  const { isReady } = useStoreRehydrate();

  if (!isReady) {
    return <View />;
  }
  return isLogged ? <RootNavigator /> : <OnBoardingNavigator />;
};
