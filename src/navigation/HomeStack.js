import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Store from '../screens/Store';
import Detail from '../screens/Detail';
import Main from '../screens/Main';
import Header from '../components/Header';

const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={Main}
                options={{ header: props => <Header isHome={true} {...props} /> }}
            />
            <Stack.Screen
                name="Store"
                component={Store}
                options={{ header: props => <Header isHome={false} {...props} /> }}
            />
            <Stack.Screen
                name="Detail"
                component={Detail}
                options={{ header: props => <Header isHome={false} {...props} /> }}
            />
        </Stack.Navigator>
    );
}


export default HomeStack
