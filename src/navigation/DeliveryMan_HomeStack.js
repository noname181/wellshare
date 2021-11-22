import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Header from '../components/Header';
import Main from '../screens/DeliveryMan/Notice';
import ComplainsView  from '../screens/DeliveryMan/ComplainsView';
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
                name="Notice"
                component={Notice}
                options={{ header: props => <Header title="Notice" isBack={false} {...props} /> }}
            />
            <Stack.Screen
                name="ComplainsView"
                component={ComplainsView}
                options={{ header: props => <Header title="ComplainsView" isBack={false} {...props} /> }}
            />
        </Stack.Navigator>
    );
}


export default HomeStack
