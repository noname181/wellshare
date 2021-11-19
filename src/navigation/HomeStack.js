import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Store from '../screens/Store';
import Detail from '../screens/Detail';
import Main from '../screens/Main';
import Header from '../components/Header';
import Hospital_42_1 from '../screens/Hospital_42_1';
import User_My_Profile from '../screens/User_My_Profile';

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
                name="User_My_Profile"
                component={User_My_Profile}
                options={{ header: props => <Header title="나의정보" isHome={false} {...props} /> }}
            />
        </Stack.Navigator>
    );
}


export default HomeStack
