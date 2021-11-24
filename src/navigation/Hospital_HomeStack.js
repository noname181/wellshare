import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Header from '../components/Header';
import Main from '../screens/Hospital/Main';
import Complains1 from '../screens/Hospital/Complains1';
import Notice from '../screens/Hospital/Notice';
import Complains2 from '../screens/Hospital/Complains2';
import List from '../screens/Hospital/List'


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
                name="Complains1"
                component={Complains1}
                options={{ header: props => <Header title="민원" isBack={true} {...props} /> }}
            />
            <Stack.Screen
                name="Complains2"
                component={Complains2}
                options={{ header: props => <Header title="민원" isBack={true} {...props} /> }}
            />
            <Stack.Screen
                name="Notice"
                component={Notice}
                options={{ header: props => <Header title="Notice" isBack={false} {...props} /> }}
            />
            <Stack.Screen
                name="List"
                component={List}
                options={{ header: props => <Header title="명단" isBack={false} {...props} /> }}
            />
        </Stack.Navigator>
    );
}

export default HomeStack
