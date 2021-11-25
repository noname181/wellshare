/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import App_StackNavigation from './src/navigation/App_StackNavigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { enableScreens, enableFreeze } from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen';
enableFreeze(true);
enableScreens(true);

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer>
        <App_StackNavigation></App_StackNavigation>
      </NavigationContainer>
    </Provider>
  );
};


export default App;
