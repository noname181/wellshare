import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Store from '../screens/Store';
import Detail from '../screens/Detail';
import Main from '../screens/Main';
import Header from '../components/Header';
import Hospital_42_1 from '../screens/Hospital_42_1';

const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={Main}
                options={{ header: props => <Header title="명단" isBack={false} {...props} /> }}
            />
            <Stack.Screen
                name="Store"
                component={Store}
                options={{ header: props => <Header title="Store" isBack={true} {...props} /> }}
            />
            <Stack.Screen
                name="Detail"
                component={Detail}
                options={{ header: props => <Header title="Detail" isBack={true} {...props} /> }}
            />

            <Stack.Screen
                name="Hospital_42_1"
                component={Hospital_42_1}
                options={{ header: props => <Header title="Hospital_42_1" isBack={true} {...props} /> }}
            />
        </Stack.Navigator>
    );
}


export default HomeStack
