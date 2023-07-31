import { KeyboardAvoidingView } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '@screens/Welcome';
import Onboarding from '@screens/Onboarding';

export default function App () {

  const Stack = createNativeStackNavigator()

  return (
    // <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className='flex-1'
            keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
          >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name='Welcome' component={Welcome} />
              <Stack.Screen name='Onboarding' component={Onboarding} />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    // </Provider>
  );
}
