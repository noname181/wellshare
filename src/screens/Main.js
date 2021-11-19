import React from 'react'
import {
    Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { Screen } from '../components';


function Main({ navigation }) {
    return (
        <Screen>

            <TouchableOpacity

                onPress={() => navigation.navigate('Store')}
                style={styles.button}
            >
                <Text style={styles.text}>Go to Store</Text>
            </TouchableOpacity>
            <TouchableOpacity

                onPress={() => navigation.navigate('Detail')}
                style={styles.button}
            >
                <Text style={styles.text}>Go to Detail</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity

                onPress={() => navigation.navigate('Hospital_42_1')}
                style={styles.button}
            >
                <Text style={styles.text}>Go to Hospital Page 42_1</Text>
            </TouchableOpacity> */}
            <TouchableOpacity

            onPress={() => navigation.navigate('User_My_Profile')}
            style={styles.button}
            >
            <Text style={styles.text}>Go to User_My_Profile</Text>
            </TouchableOpacity>
        </Screen>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#6287fa',
        marginBottom: 10,
        padding: 10,
        borderRadius: 10
    },
    text: {
        color: "#fff"
    }
})
export default Main
