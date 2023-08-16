import { Platform } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '../../hooks/useTheme';
import { LoginScreen } from './screens/LoginScreen';

type OnBoardingStackParamList = {
  Login: undefined;
};

export const OnBoardingNavigator = () => {
  const Stack = createNativeStackNavigator<OnBoardingStackParamList>();
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerLargeTitle: false,
        headerTransparent: Platform.select({ ios: true }),
        headerBlurEffect: 'systemUltraThinMaterial',
        headerStyle: {
          backgroundColor: colors.gray['300'],
        },
        headerTitle: 'screens',
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
