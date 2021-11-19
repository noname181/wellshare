import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Setting from '../screens/Setting'
import Profile from '../screens/Profile'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image, View, StyleSheet, Text } from 'react-native'
import Header from '../components/Header'

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
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (<View style={styles.tab}>
                        <Image resizeMode="contain" source={require('../images/list.png')} style={[styles.icon, { tintColor: focused ? '#7c257a' : '#b2b2b2' }]}></Image>
                        <Text style={[styles.text, { color: focused ? '#7c257a' : '#b2b2b2' }]}>명단</Text>
                    </View>),
                    header: props => <Header title="명단" isBack={false} {...props} />
                }}

            />
            <Tab.Screen
                name="Setting"
                component={Setting}
                options={{

                    tabBarIcon: ({ focused }) => (<View style={styles.tab}>
                        <Image resizeMode="contain" source={require('../images/notice.png')} style={[styles.icon, { tintColor: focused ? '#7c257a' : '#b2b2b2' }]}></Image>
                        <Text style={[styles.text, { color: focused ? '#7c257a' : '#b2b2b2' }]}>공지사항</Text>
                    </View>),
                    header: props => <Header title="공지사항" isBack={false} {...props} />
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{

                    tabBarIcon: ({ focused }) => (<View style={styles.tab}>
                        <Image resizeMode="contain" source={require('../images/profile.png')} style={[styles.icon, { tintColor: focused ? '#7c257a' : '#b2b2b2' }]}></Image>
                        <Text style={[styles.text, { color: focused ? '#7c257a' : '#b2b2b2' }]}>나의정보</Text>
                    </View>),
                    header: props => <Header title="나의정보" isBack={false} {...props} />
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
        marginTop: 2
    }
})


export default TabNavigation
