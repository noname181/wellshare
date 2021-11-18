import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Store from '../screens/Store';
import Detail from '../screens/Detail';
import Main from '../screens/Main';

const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Store" component={Store} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    );
}


export default HomeStack
