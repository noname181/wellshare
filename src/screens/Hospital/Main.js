import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Screen from '../../components/Screen';

function Main({ navigation }) {
    return (
        <Screen showHeader={false}>
            <TouchableOpacity

            onPress={() => navigation.navigate('Complains1')}
            style={styles.button}
            >
            <Text style={styles.text}>Go to Complains1</Text>
            </TouchableOpacity>
            <TouchableOpacity

            onPress={() => navigation.navigate('Complains2')}
            style={styles.button}
            >
            <Text style={styles.text}>Go to Complains2</Text>
            </TouchableOpacity>
            <TouchableOpacity

            onPress={() => navigation.navigate('List')}
            style={styles.button}
            >
            <Text style={styles.text}>Go to List</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()}>

                <Text>Go back</Text>
            </TouchableOpacity>
        </Screen>
    );

}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#7c257a',
        marginBottom: 10,
        padding: 10,
        borderRadius: 10
    },
    text: {
        color: "#fff"
    }
})

export default Main;