import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Header from '../components/Header';
import List from '../screens/DeliveryMan/List';
import ListView from '../screens/DeliveryMan/ListView';
import Signature from '../screens/DeliveryMan/Signature';
import VehicleNaviLocation from '../screens/DeliveryMan/VehicleNaviLocation'


const Stack = createStackNavigator();

function HomeStack() {
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
                name="Signature"
                component={Signature}
                options={{ header: props => <Header title="명단" isBack={true} {...props} /> }}
            />
            <Stack.Screen
                name="VehicleNaviLocation"
                component={VehicleNaviLocation}
                options={{ header: props => <Header title="명단" isBack={true} {...props} /> }}
            />
        </Stack.Navigator>
    );
}


export default HomeStack
