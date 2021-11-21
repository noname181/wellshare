/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import App_StackNavigation from './src/navigation/App_StackNavigation';
import { enableScreens, enableFreeze } from 'react-native-screens';
enableFreeze(true);
enableScreens(true);

const App = () => {

  return (
    <NavigationContainer>
      <App_StackNavigation></App_StackNavigation>
    </NavigationContainer>
  );
};


export default App;
