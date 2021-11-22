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
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { enableScreens, enableFreeze } from 'react-native-screens';
enableFreeze(true);
enableScreens(true);

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <App_StackNavigation></App_StackNavigation>
      </NavigationContainer>
    </Provider>
  );
};


export default App;
