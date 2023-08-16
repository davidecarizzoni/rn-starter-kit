import { Platform } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '../../hooks/useTheme';
import { ProfileScreen } from './screens/ProfileScreen';

type ProfileStackParamList = {
  Profile: undefined;
};

export const ProfileNavigator = () => {
  const Stack = createNativeStackNavigator<ProfileStackParamList>();
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
        headerTitle: 'Profile',
      }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
