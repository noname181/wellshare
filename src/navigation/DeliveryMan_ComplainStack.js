import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Header from '../components/Header';
import Complains from '../screens/DeliveryMan/Complains';
import ComplainView from '../screens/DeliveryMan/ComplainView';

const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS
            }}
        >
            <Stack.Screen
                name="Complains"
                component={Complains}
                options={{ header: props => <Header title="민원" isBack={false} {...props} /> }}
            />
            <Stack.Screen
                name="ComplainView"
                component={ComplainView}
                options={{ header: props => <Header title="민원" isBack={true} {...props} /> }}
            />
        </Stack.Navigator>
    );
}


export default HomeStack
