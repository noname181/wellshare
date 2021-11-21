import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Screen from '../../components/Screen';

function Main({ navigation }) {
    return (
        <Screen showHeader={false}>
            <Text>Delivery Man</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>

                <Text>Go back</Text>
            </TouchableOpacity>
        </Screen>
    );

}

const styles = StyleSheet.create({
    container: {}
});

export default Main;