import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Text, InteractionManager } from 'react-native';
import Header from '../components/Header';
import Screen from '../components/Screen';
//Screens
import NoticeScreen from '../screens/DeliveryMan/Notice';
import DeliveryMan_ComplainStack from '../navigation/DeliveryMan_ComplainStack';
import DeliveryMan_ListStack from '../navigation/DeliveryMan_ListStack';
import MyProfileScreen from '../screens/DeliveryMan/Profile';
import List_page from '../screens/DeliveryMan/List';
//Images
import List from '../images/svg/List';
import Notice from '../images/svg/Notice';
import Profile_Icon from '../images/svg/Profile';
import Deliveryman_list from '../images/svg/Deliveryman_list';
import Deliveryman_complain from '../images/svg/Deliveryman_complain';


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
            {/* <Tab.Screen
                name="Main"
                component={Main}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (<View style={styles.tab}>
                        <List height={19} width={19} color={focused ? '#7c257a' : '#b2b2b2'} />
                        <Text style={[styles.text, { color: focused ? '#7c257a' : '#b2b2b2' }]}>명단</Text>
                    </View>),

                }}

            /> */}
            {/* <Tab.Screen
                name="List"
                component={List_page}
                options={{
                    tabBarIcon: ({ focused }) => (<View style={styles.tab}>
                        <Deliveryman_list height={19} width={19} color={focused ? '#7c257a' : '#b2b2b2'} />
                        <Text style={[styles.text, { color: focused ? '#7c257a' : '#b2b2b2' }]}>명단</Text>
                    </View>),
                    header: props => <Header title="명단" isBack={true} {...props} />
                }}

            /> */}
            <Tab.Screen
                name="ListStack"
                component={DeliveryMan_ListStack}
                options={{
                    tabBarIcon: ({ focused }) => (<View style={styles.tab}>
                        <Deliveryman_list height={20} width={18} color={focused ? '#7c257a' : '#b2b2b2'} />
                        <Text style={[styles.text, { color: focused ? '#7c257a' : '#b2b2b2' }]}>명단</Text>
                    </View>),
                    // header: props => <Header title="명단" isBack={true} {...props} />
                    headerShown: false
                }}

            />
            <Tab.Screen
                name="ComplainStack"
                component={DeliveryMan_ComplainStack}
                options={{
                    tabBarIcon: ({ focused }) => (<View style={styles.tab}>
                        <Deliveryman_complain height={19} width={19} color={focused ? '#7c257a' : '#b2b2b2'} />
                        <Text style={[styles.text, { color: focused ? '#7c257a' : '#b2b2b2' }]}>민원</Text>
                    </View>),
                    // header: props => <Header title="민원" isBack={false} {...props} />
                    headerShown: false
                }}

            />
            {/* <Tab.Screen
                name="ComplainsViewScreen"
                component={ComplainsViewScreen}
                options={{
                    tabBarIcon: ({ focused }) => (<View style={styles.tab}>
                        <Notice height={19} width={19} color={focused ? '#7c257a' : '#b2b2b2'} />
                        <Text style={[styles.text, { color: focused ? '#7c257a' : '#b2b2b2' }]}>Complains</Text>
                    </View>),
                    header: props => <Header title="민원" isBack={false} {...props} />
                }}

            /> */}
            <Tab.Screen
                name="NoticeScreen"
                component={NoticeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (<View style={styles.tab}>
                        <Notice height={20} width={19} color={focused ? '#7c257a' : '#b2b2b2'} />
                        <Text style={[styles.text, { color: focused ? '#7c257a' : '#b2b2b2' }]}>공지사항</Text>
                    </View>),
                    header: props => <Header title="공지사항" isBack={false} {...props} />
                }}

            />
            <Tab.Screen
                name="MyProfile"
                component={MyProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (<View style={styles.tab}>
                        <Profile_Icon height={20} width={26} color={focused ? '#7c257a' : '#b2b2b2'} />
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
