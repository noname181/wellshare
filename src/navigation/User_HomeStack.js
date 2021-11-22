import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Store from '../screens/User/Store';
import Detail from '../screens/User/Detail';
import Main from '../screens/User/Main';
import Header from '../components/Header';
import User_My_Profile from '../screens/User/User_My_Profile';
import User_List from '../screens/User/User_List';

const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS
            }}
        >
            <Stack.Screen
                name="Main"
                component={Main}
                options={{ header: props => <Header title="명단" isBack={true} {...props} /> }}
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
                options={{ header: props => <Header title="나의정보" isBack={true} {...props} /> }}
            />
            <Stack.Screen
                name="User_List"
                component={User_List}
                options={{ header: props => <Header title="명단" isBack={true} {...props} /> }}
            />
        </Stack.Navigator>
    );
}


export default HomeStack
