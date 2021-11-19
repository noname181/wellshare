/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './src/navigation/TabNavigation';
import Login from './src/screens/Login';

const App = () => {

  return (
    <NavigationContainer>
       <TabNavigation></TabNavigation>
     </NavigationContainer>
  );
};


export default App;
