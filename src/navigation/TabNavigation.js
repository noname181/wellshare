import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Setting from '../screens/Setting'
import Profile from '../screens/Profile'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function TabNavigation({ route, navigation }) {


    return (
        <Tab.Navigator
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => <Ionicons name="home-outline" size={25} color={color}></Ionicons>
                }}

            />
            <Tab.Screen
                name="Setting"
                component={Setting}
                options={{
                    tabBarIcon: ({ size, color }) => <Ionicons name="settings-outline" size={25} color={color}></Ionicons>
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ size, color }) => <Ionicons name="person-outline" size={25} color={color}></Ionicons>
                }}
            />
        </Tab.Navigator>
    )
}


export default TabNavigation
