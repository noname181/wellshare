import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Header from '../components/Header';
import Main from '../screens/DeliveryMan/Notice';
import ComplainsView  from '../screens/DeliveryMan/ComplainsView';
import ListView from '../screens/DeliveryMan/ListView';
import MyProfile from '../screens/DeliveryMan/MyProfile';
import List_page from '../screens/DeliveryMan/List';
import Complains from '../screens/DeliveryMan/Complains'
const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS
            }}
        >
            <Stack.Screen
                name="Main"
                component={Main}
                options={{ header: props => <Header title="명단" isBack={true} {...props} /> }}
            />
            <Stack.Screen
                name="Notice"
                component={Notice}
                options={{ header: props => <Header title="Notice" isBack={false} {...props} /> }}
            />
            <Stack.Screen
                name="ComplainsView"
                component={ComplainsView}
                options={{ header: props => <Header title="ComplainsView" isBack={true} {...props} /> }}
            />
            <Stack.Screen
                name="ListView"
                component={ListView}
                options={{ header: props => <Header title="ListView" isBack={true} {...props} /> }}
            />
            <Stack.Screen
                name="MyProfile"
                component={MyProfile}
                options={{ header: props => <Header title="MyProfile" isBack={true} {...props} /> }}
            />
            <Stack.Screen
                name="List_page"
                component={List_page}
                options={{ header: props => <Header title="List_page" isBack={true} {...props} /> }}
            />
            <Stack.Screen
                name="Complains"
                component={Complains}
                options={{ header: props => <Header title="Complains" isBack={true} {...props} /> }}
            />
        </Stack.Navigator>
    );
}


export default HomeStack
