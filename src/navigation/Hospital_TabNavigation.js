import React , { useState, useEffect } from 'react'
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








const Tab = createBottomTabNavigator();


function TabNavigation({ route, navigation }) {
    const [isReady, setIsReady] = useState(false);

    useEffect(() =>{
        InteractionManager.runAfterInteractions(() =>{
            setIsReady(true)
        })
        return () =>{

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
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (<View style={styles.tab}>
                        <Hospital_list height={19} width={19} color={focused ? '#7c257a' : '#b2b2b2'} />
                        <Text style={[styles.text, { color: focused ? '#7c257a' : '#b2b2b2' }]}>명단</Text>
                    </View>),

                }}

            />
            <Tab.Screen
                name="Complain1Screen"
                component={Complain1Screen}
                options={{
                    tabBarIcon: ({ focused }) => (<View style={styles.tab}>
                        <Hospital_complain height={19} width={19} color={focused ? '#7c257a' : '#b2b2b2'} />
                        <Text style={[styles.text, { color: focused ? '#7c257a' : '#b2b2b2' }]}>민원</Text>
                    </View>),
                    header: props => <Header title="민원" isBack={false} {...props} />

                }}

            />
            <Tab.Screen
                name="NoticeScreen"
                component={NoticeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (<View style={styles.tab}>
                        <Hospital_notice height={19} width={25} color={focused ? '#7c257a' : '#b2b2b2'} />
                        <Text style={[styles.text, { color: focused ? '#7c257a' : '#b2b2b2' }]}>공지사항</Text>
                    </View>),
                    header: props => <Header title="공지사항" isBack={false} {...props} />
                }}

            />
            <Tab.Screen
                name="Main4"
                component={Main}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (<View style={styles.tab}>
                        <Hospital_profile height={19} width={25} color={focused ? '#7c257a' : '#b2b2b2'} />
                        <Text style={[styles.text, { color: focused ? '#7c257a' : '#b2b2b2' }]}>나의정보</Text>
                    </View>),

                }}

            />

        </Tab.Navigator> : <><Header isBack={true} title="명단"></Header><Screen>

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