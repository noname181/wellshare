import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Header from '../components/Header';
import List from '../screens/Admin/List';
import ListView from '../screens/Admin/ListView';
import WriteComplaint from '../screens/Admin/WriteComplaint';

const Stack = createStackNavigator();

function Admin_ListStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS
            }}
        >
            <Stack.Screen
                name="List"
                component={List}
                options={{ header: props => <Header title="명단" isBack={false} {...props} /> }}
            />
            <Stack.Screen
                name="ListView"
                component={ListView}
                options={{ header: props => <Header title="명단" isBack={true} {...props} /> }}
            />
            <Stack.Screen
                name="WriteComplaint"
                component={WriteComplaint}
                options={{ header: props => <Header title="명단" isBack={true} {...props} /> }}
            />
        </Stack.Navigator>
    );
}


export default Admin_ListStack
