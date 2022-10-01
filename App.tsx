import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import { Provider } from './src/context';

export default function App() {
  return (
    <NavigationContainer>
      <Provider>
        <Routes />
        <StatusBar style="auto" translucent />
      </Provider>
    </NavigationContainer>
  );
}
