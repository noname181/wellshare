/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import App_StackNavigation from './src/navigation/App_StackNavigation';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { enableScreens, enableFreeze } from 'react-native-screens';


import { ActivityIndicator } from "react-native";

enableFreeze(true);
enableScreens(true);

const App = () => {

  const [isLoadedPersist, setIsLoadedPersist] = useState(false);



  useEffect(() => {

    return () => {

    }
  }, [])

  const onBeforeLift = () => {
    setIsLoadedPersist(true)
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} onBeforeLift={() => onBeforeLift()}>
        {isLoadedPersist ? <NavigationContainer>
          <App_StackNavigation></App_StackNavigation>
        </NavigationContainer> : null}
      </PersistGate>
    </Provider>
  );
};


export default App;
