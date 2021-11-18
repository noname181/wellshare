import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Store from '../screens/Store';
import Detail from '../screens/Detail';
import Main from '../screens/Main';
import Hospital_42_1 from '../screens/Hospital_42_1';

const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Store" component={Store} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Hospital_42_1" component={Hospital_42_1} />
        </Stack.Navigator>
    );
}


export default HomeStack
