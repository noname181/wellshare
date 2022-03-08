import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Header from '../components/Header';
import Complains1 from '../screens/Hospital/Complains1';
import Complains2 from '../screens/Hospital/Complains2';
import ComplainView from '../screens/Hospital/ComplainView';

const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS
            }}
        >
            <Stack.Screen
                name="Complains2"
                component={Complains2}
                options={{ header: props => <Header title="민원" isBack={false} {...props} /> }}
            />
            <Stack.Screen
                name="ComplainView"
                component={ComplainView}
                options={{ header: props => <Header title="민원" isBack={true} {...props} /> }}
            />
        </Stack.Navigator>
    );
}


export default HomeStack
