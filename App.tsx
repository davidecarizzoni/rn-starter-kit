import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/core/navigation/AppNavigator';
import Modal from './src/core/services/modal';

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigator />
        <Modal />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
