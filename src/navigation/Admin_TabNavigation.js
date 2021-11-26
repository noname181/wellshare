import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Text, InteractionManager } from 'react-native';
import Header from '../components/Header';
import Screen from '../components/Screen';
//Screen
import Main from '../screens/Admin/Main';
import NoticeScreen from '../screens/Admin/Notice';
import ListViewScreen from '../screens/Admin/ListView';
import ProfileScreen from '../screens/Admin/Profile';
import ListScreen from '../screens/Admin/List'
import VehicleLocationViewScreen from '../screens/Admin/VehicleLocationView';
//Images
import List from '../images/svg/List';
import Notice from '../images/svg/Notice';
import Profile_Icon from '../images/svg/Profile';
import Deliveryman_list from '../images/svg/Deliveryman_list';
import Admin_map from '../images/svg/Admin_map'




const Tab = createBottomTabNavigator();

function TabNavigation({ route, navigation }) {


    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 60
                }
            }}
        >
            <Tab.Screen
                name="List"
                component={ListScreen}
                options={{
                    tabBarIcon: ({ focused }) => (<View style={styles.tab}>
                        <Deliveryman_list height={19} width={19} color={focused ? '#7c257a' : '#b2b2b2'} />
                        <Text style={[styles.text, { color: focused ? '#7c257a' : '#b2b2b2' }]}>명단</Text>
                    </View>),
                    header: props => <Header title="명단" isBack={false} {...props} />
                }}
            />
            <Tab.Screen
                name="ListView"
                component={ListViewScreen}
                options={{
                    tabBarIcon: ({ focused }) => (<View style={styles.tab}>
                        <List height={19} width={19} color={focused ? '#7c257a' : '#b2b2b2'} />
                        <Text style={[styles.text, { color: focused ? '#7c257a' : '#b2b2b2' }]}>명단</Text>
                    </View>),
                    header: props => <Header title="명단" isBack={false} {...props} />
                }}
            />
            <Tab.Screen
                name="VehicleLocationView"
                component={VehicleLocationViewScreen}
                options={{
                    tabBarIcon: ({ focused }) => (<View style={styles.tab}>
                        <Admin_map height={19} width={19} color={focused ? '#7c257a' : '#b2b2b2'} />
                        <Text style={[styles.text, { color: focused ? '#7c257a' : '#b2b2b2' }]}>차량위치</Text>
                    </View>),
                     header: props => <Header title="차량위치" isBack={false} {...props} />
                }}

            />
            <Tab.Screen
                name="Notice"
                component={NoticeScreen}
                options={{
                    // headerShown: false,
                    tabBarIcon: ({ focused }) => (<View style={styles.tab}>
                        <Notice height={19} width={19} color={focused ? '#7c257a' : '#b2b2b2'} />
                        <Text style={[styles.text, { color: focused ? '#7c257a' : '#b2b2b2' }]}>공지사항</Text>
                    </View>),
                    header: props => <Header title="공지사항" isBack={false} {...props} />
                }}

            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: true,
                    tabBarIcon: ({ focused }) => (<View style={styles.tab}>
                        <Profile_Icon height={19} width={25} color={focused ? '#7c257a' : '#b2b2b2'} />
                        <Text style={[styles.text, { color: focused ? '#7c257a' : '#b2b2b2' }]}>나의정보</Text>
                    </View>),
                    header: props => <Header title="나의정보" isBack={true} {...props} />
                    
                }}

            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        height: 16,

    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 3
    }
})


export default TabNavigation
