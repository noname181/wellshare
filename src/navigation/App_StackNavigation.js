import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import User_TabNavigation from '../navigation/User_TabNavigation'
import Hospital_TabNavigation from '../navigation/Hospital_TabNavigation'
import Admin_TabNavigation from '../navigation/Admin_TabNavigation'
import DeliveryMan_TabNavigation from '../navigation/DeliveryMan_TabNavigation'
import WellShare from '../screens/WellShare';
import Header from '../components/Header';

const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                ...TransitionPresets.BottomSheetAndroid
            }}
            initialRouteName="WellShare"
        >
            <Stack.Screen
                name="WellShare"
                component={WellShare}
                options={{

                    headerShown: false
                }}
            />
            <Stack.Screen
                name="User"
                component={User_TabNavigation}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Hospital"
                component={Hospital_TabNavigation}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Admin"
                component={Admin_TabNavigation}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Delivery_Man"
                component={DeliveryMan_TabNavigation}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}


export default HomeStack
