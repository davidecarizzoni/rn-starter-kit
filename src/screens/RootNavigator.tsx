import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeNavigator } from './home/HomeNavigator';
import { ProfileNavigator } from './profile/ProfileNavigator';

const TabNavigator = createBottomTabNavigator<{
  HomeTab: undefined;
  ProfileTab: undefined;
}>();

export const RootNavigator = () => {
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
        }}
      />
      <TabNavigator.Screen
        name="ProfileTab"
        component={ProfileNavigator}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
    </TabNavigator.Navigator>
  );
};
