import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Screen from '../../components/Screen';

function Complains({ navigation }) {
    return (
        <Screen showHeader={false}>
            <TouchableOpacity
                onPress={() => navigation.navigate('ComplainsView')}
                style={styles.button}
            >
                <Text style={styles.text}>Go to Complain View</Text>
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

export default Complains;