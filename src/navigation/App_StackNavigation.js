import React, { useEffect } from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import User_TabNavigation from '../navigation/User_TabNavigation'
import Hospital_TabNavigation from '../navigation/Hospital_TabNavigation'
import Admin_TabNavigation from '../navigation/Admin_TabNavigation'
import DeliveryMan_TabNavigation from '../navigation/DeliveryMan_TabNavigation'
import WellShare from '../screens/WellShare';
import Login from '../screens/Login';



const Stack = createStackNavigator();

function HomeStack() {


    return (
        <Stack.Navigator
            screenOptions={{
                ...TransitionPresets.BottomSheetAndroid
            }}
            initialRouteName="Login"
        >
            <Stack.Screen
                name="WellShare"
                component={WellShare}
                options={{

                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
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
                name="Delivery"
                component={DeliveryMan_TabNavigation}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}


export default HomeStack
