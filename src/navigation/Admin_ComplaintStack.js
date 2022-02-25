import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Header from '../components/Header';
import Complains from '../screens/Admin/Complains';
import ComplainView from '../screens/Admin/ComplainView';

const Stack = createStackNavigator();

function Admin_ComplaintStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS
            }}
        >
            <Stack.Screen
                name="Complains"
                component={Complains}
                options={{ header: props => <Header title="명단" isBack={false} {...props} /> }}
            />
            <Stack.Screen
                name="ComplainView"
                component={ComplainView}
                options={{ header: props => <Header title="명단" isBack={true} {...props} /> }}
            />
        </Stack.Navigator>
    );
}


export default Admin_ComplaintStack
