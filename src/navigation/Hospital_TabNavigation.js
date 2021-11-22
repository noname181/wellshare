import React , { useState, useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, StyleSheet, Text, InteractionManager } from 'react-native'
import Header from '../components/Header'
import List from '../images/svg/List'
import Notice from '../images/svg/Notice'
import Profile_Icon from '../images/svg/Profile'
import Screen from '../components/Screen';
import Home from '../screens/Hospital/Home';
import Main from '../screens/Hospital/Main'








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
                        <List height={19} width={19} color={focused ? '#7c257a' : '#b2b2b2'} />
                        <Text style={[styles.text, { color: focused ? '#7c257a' : '#b2b2b2' }]}>명단</Text>
                    </View>),

                }}

            />
            <Tab.Screen
                name="Main2"
                component={Main}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (<View style={styles.tab}>
                        <Notice height={19} width={19} color={focused ? '#7c257a' : '#b2b2b2'} />
                        <Text style={[styles.text, { color: focused ? '#7c257a' : '#b2b2b2' }]}>명단</Text>
                    </View>),

                }}

            />
            <Tab.Screen
                name="Main3"
                component={Main}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (<View style={styles.tab}>
                        <Profile_Icon height={19} width={25} color={focused ? '#7c257a' : '#b2b2b2'} />
                        <Text style={[styles.text, { color: focused ? '#7c257a' : '#b2b2b2' }]}>명단</Text>
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
