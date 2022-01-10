import React, { useState, useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, StyleSheet, Text, InteractionManager } from 'react-native'
import Header from '../components/Header'
import List from '../images/svg/List'
import Notice from '../images/svg/Notice'
import Profile_Icon from '../images/svg/Profile'
import Screen from '../components/Screen';
import Home from '../screens/Hospital/Home';
import Main from '../screens/Hospital/Main';
import NoticeScreen from '../screens/Hospital/Notice';
import Complain1Screen from '../screens/Hospital/Complains1';
import Hospital_list from '../images/svg/Hospital_list';
import Hospital_complain from '../images/svg/Hospital_complain';
import Hospital_notice from '../images/svg/Hospital_notice';
import Hospital_profile from '../images/svg/Hospital_profile';
import Hospital_list_page from '../screens/Hospital/List';
import Hospital_profile_page from '../screens/Hospital/Profile'








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
                name="Hospital_list_page"
                component={Hospital_list_page}
                options={{
                    headerShown: true,
                    tabBarIcon: ({ focused }) => (<View style={styles.tab}>
                        <Hospital_list height={15} width={18} color={focused ? '#7c257a' : '#d8d8d8'} />
                        <Text style={[styles.text, { color: focused ? '#7c257a' : '#d8d8d8' }]}>명단</Text>

                    </View>),
                    header: props => <Header title="명단" isBack={false} {...props} />
                }}

            />
            <Tab.Screen
                name="Complain1Screen"
                component={Complain1Screen}
                options={{
                    tabBarIcon: ({ focused }) => (<View style={styles.tab}>
                        <Hospital_complain height={18} width={17} color={focused ? '#7c257a' : '#d8d8d8'} />
                        <Text style={[styles.text, { color: focused ? '#7c257a' : '#d8d8d8' }]}>민원</Text>
                    </View>),
                    header: props => <Header title="민원" isBack={false} {...props} />

                }}

            />
            <Tab.Screen
                name="NoticeScreen"
                component={NoticeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (<View style={styles.tab}>
                        <Hospital_notice height={18} width={18} color={focused ? '#7c257a' : '#d8d8d8'} />
                        <Text style={[styles.text, { color: focused ? '#7c257a' : '#d8d8d8' }]}>공지사항</Text>
                    </View>),
                    header: props => <Header title="공지사항" isBack={false} {...props} />
                }}

            />
            <Tab.Screen
                name="Hospital_profile_page"
                component={Hospital_profile_page}
                options={{
                    headerShown: true,
                    tabBarIcon: ({ focused }) => (<View style={styles.tab}>
                        <Hospital_profile height={19} width={19} color={focused ? '#7c257a' : '#d8d8d8'} />
                        <Text style={[styles.text, { color: focused ? '#7c257a' : '#d8d8d8' }]}>나의정보</Text>
                    </View>),
                    header: props => <Header title="나의정보" isBack={true} {...props} />
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
