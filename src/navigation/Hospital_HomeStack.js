import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Header from '../components/Header';
import Main from '../screens/Hospital/Main';
import Hospital_42_1 from '../screens/Hospital/Hospital_42_1';
import Notice from '../screens/Hospital/Notice'


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
                name="Hospital_42_1"
                component={Hospital_42_1}
                options={{ header: props => <Header title="Hospital_42_1" isBack={true} {...props} /> }}
            />
            <Stack.Screen
                name="Notice"
                component={Notice}
                options={{ header: props => <Header title="Notice" isBack={true} {...props} /> }}
            />
        </Stack.Navigator>
    );
}

export default HomeStack
