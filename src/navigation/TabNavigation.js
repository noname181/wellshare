import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Setting from '../screens/Setting'
import Profile from '../screens/Profile'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image, View, StyleSheet, Text } from 'react-native'
import Header from '../components/Header'
import { SvgUri } from 'react-native-svg';
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
                        <SvgUri
                            height={16}
                            color={"#000"}
                            uri={focused ? "https://scsman23.cafe24.com/upload/svg_app/list-active.svg" : "https://scsman23.cafe24.com/upload/svg_app/list.svg"}
                        />
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
                        <SvgUri
                            height={16}
                            color={"#000"}
                            uri={focused ? "https://scsman23.cafe24.com/upload/svg_app/notice-active.svg" : "https://scsman23.cafe24.com/upload/svg_app/notice.svg"}
                        />

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
                        <SvgUri
                            height={16}
                            color={"#000"}
                            uri={focused ? "https://scsman23.cafe24.com/upload/svg_app/profile-active.svg" : "https://scsman23.cafe24.com/upload/svg_app/profile.svg"}
                        />
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
        marginTop: 3
    }
})


export default TabNavigation
