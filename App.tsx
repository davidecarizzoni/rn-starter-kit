import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/core/navigation/AppNavigator';
import Modal from './src/core/services/modal';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Provider } from 'react-redux';
import { store } from './src/store';

library.add(fas);
function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigator />
          <Modal />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
