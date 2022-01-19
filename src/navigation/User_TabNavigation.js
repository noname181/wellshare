import React, { useState, useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Setting from '../screens/User/Setting'
import Profile from '../screens/User/User_My_Profile'
import { View, StyleSheet, Text, InteractionManager, ActivityIndicator } from 'react-native'
import Header from '../components/Header'
import List from '../images/svg/List'
import Notice from '../images/svg/Notice'
import Profile_Icon from '../images/svg/Profile'
import Screen from '../components/Screen';
import User_ListStack from '../navigation/User_ListStack'

const Tab = createBottomTabNavigator();

function TabNavigation({ route, navigation }) {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {

        InteractionManager.runAfterInteractions(() => {
            setIsReady(true)
        })
        return () => {

        };
    }, []);
    return (
        isReady ? <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 60
                }
            }}
        >
            <Tab.Screen
                name="List_Stack"
                component={User_ListStack}
                options={{
                    headerShown: true,
                    tabBarIcon: ({ focused }) => (<View style={styles.tab}>
                        <List height={19} width={19} color={focused ? '#7c257a' : '#b2b2b2'} />
                        <Text style={[styles.text, { color: focused ? '#7c257a' : '#b2b2b2' }]}>명단</Text>
                    </View>),
                    header: props => <Header title="명단" isBack={false} {...props} />,
                    headerShown: false
                }}

            />
            <Tab.Screen
                name="Setting"
                component={Setting}
                options={{

                    tabBarIcon: ({ focused }) => (<View style={styles.tab}>
                        <Notice height={19} width={19} color={focused ? '#7c257a' : '#b2b2b2'} />
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
                        <Profile_Icon height={19} width={25} color={focused ? '#7c257a' : '#b2b2b2'} />
                        <Text style={[styles.text, { color: focused ? '#7c257a' : '#b2b2b2' }]}>나의정보</Text>
                    </View>),
                    header: props => <Header title="나의정보" isBack={false} {...props} />
                }}
            />
        </Tab.Navigator> : <><Header isBack={false} title="명단"></Header><Screen>

        </Screen></>
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
