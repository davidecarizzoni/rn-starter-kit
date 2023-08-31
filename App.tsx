import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from './src/store';
import { AppNavigator } from './src/core/navigation/AppNavigator';
import Modal from './src/core/services/modal';

library.add(fas);
export const App = () => {
  const queryClient = new QueryClient();

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <NavigationContainer>
            <AppNavigator />
            <Modal />
          </NavigationContainer>
        </Provider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};
