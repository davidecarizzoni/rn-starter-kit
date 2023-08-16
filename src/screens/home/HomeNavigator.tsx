import { Platform } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '../../hooks/useTheme';
import { HomeScreen } from './screens/HomeScreen';

type HomeStackParamList = {
  Home: undefined;
};

export const HomeNavigator = () => {
  const Stack = createNativeStackNavigator<HomeStackParamList>();
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
        headerTitle: 'Home',
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
