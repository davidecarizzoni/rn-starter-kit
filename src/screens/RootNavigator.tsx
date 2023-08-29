import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeNavigator } from './home/HomeNavigator';
import { ProfileNavigator } from './profile/ProfileNavigator';
import { Icon } from '../components';
import { useTheme } from '../hooks/useTheme';

const TabNavigator = createBottomTabNavigator<{
  HomeTab: undefined;
  ProfileTab: undefined;
}>();

export const RootNavigator = () => {
  const { colors } = useTheme();
  const tabBarActiveTintColor = colors.primary;
  const tabBarInactiveTintColor = colors.gray['400'];

  return (
    <TabNavigator.Navigator
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <TabNavigator.Screen
        name="HomeTab"
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon icon={['fas', 'home']} color={color} />
          ),
          tabBarActiveTintColor,
          tabBarInactiveTintColor,
        }}
      />
      <TabNavigator.Screen
        name="ProfileTab"
        component={ProfileNavigator}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon icon={['fas', 'user']} color={color} />
          ),
          tabBarActiveTintColor,
          tabBarInactiveTintColor,
        }}
      />
    </TabNavigator.Navigator>
  );
};
