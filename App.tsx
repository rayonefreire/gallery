import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from './src/context';
import { AppRoutes } from './src/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  return (
    <NavigationContainer>
      <Provider>
        <AppRoutes />
        <StatusBar style="auto" translucent />
      </Provider>
    </NavigationContainer>
  );
}
