import React from 'react'
import {
    Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import Screen from '../../components/Screen';

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
            <TouchableOpacity

                onPress={() => navigation.navigate('User_My_Profile')}
                style={styles.button}
            >
                <Text style={styles.text}>Go to User_My_Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity

                onPress={() => navigation.navigate('User_List')}
                style={styles.button}
            >
                <Text style={styles.text}>Go to User_List</Text>
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
export default Main