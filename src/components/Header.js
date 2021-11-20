import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

function Header({ isBack, styleIcon, title }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {
                isBack ?
                    <TouchableOpacity style={[styles.direct, styleIcon]} onPress={() => navigation.goBack()}>

                        <Icon name='chevron-back' color={'#000'} size={24} />


                    </TouchableOpacity>
                    :
                    null
            }
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: getStatusBarHeight(),
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderBottomWidth: 0,
        borderBottomColor: '#e9e9e9',
        flexDirection: 'row',
        shadowColor: '#000',

    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    direct: {
        position: 'absolute',
        left: 10,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 10,
    },
});

export default Header;