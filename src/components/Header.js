import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

function Header({ isHome, styleIcon, title }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {
                isHome ?
                    null
                    :
                    <View style={[styles.direct, styleIcon]}>
                        <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
                            <Icon name='chevron-back' color={'#000'} size={24} />
                        </TouchableOpacity>

                    </View>
            }
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderBottomWidth: 0,
        borderBottomColor: '#e9e9e9',
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
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
    },
});

export default Header;