import { Platform } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './login/LoginScreen';
import { useTheme } from '../../hooks/useTheme';

type OnBoardingStackParamList = {
  Login: undefined;
};

export const OnBoardingNavigator = () => {
  const Stack = createNativeStackNavigator<OnBoardingStackParamList>();
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName={'Login'}
      screenOptions={{
        headerLargeTitle: false,
        headerTransparent: Platform.select({ ios: true }),
        headerBlurEffect: 'systemUltraThinMaterial',
        headerStyle: {
          backgroundColor: colors.gray['300'],
        },
        headerTitle: 'login',
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
