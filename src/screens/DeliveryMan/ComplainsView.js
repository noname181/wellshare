import React, { useState } from 'react'
import { StyleSheet, View, Text, Pressable, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Screen from '../../components/Screen';

function Notice({ navigation }) {
    const [selectedId, setSelectedId] = useState(null);
    const renderItem = ({ item }) => {
        const itemActive = item.id === selectedId ? 'flex' : 'none';
        const arrow = item.id === selectedId ? 'chevron-up-outline' : 'chevron-down-outline';
        return (
            <Item item={item}
                onPress={() => setSelectedId(item.id)}
                nameIcon={arrow}
                typeDisplay={itemActive}
            />
        );
    }
    return (
        <Screen>
            <View style={styles.nlCard}>
                <View style={[styles.nlHead, styles.nlRow]}>
                    <View style={styles.nlRow}>
                        <Text style={[styles.nlIcon, styles.nlIconQ]}>Q</Text>
                    </View>
                    <View>
                        <Text style={styles.nlTitle}>공지사항 1입니다</Text>
                        <Text  numberOfLines={1}>1. Screen_short_2021-11-06</Text>
                       
                        <Text style={styles.nlDate}>2021.10.13</Text>
                    </View>
                </View>
            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({
    nlCard: {
        flex: 1
    },
    nlRow: {
        flexDirection: 'row'
    },
    nlHead: {
        padding: 20
    },
    nlIcon: {
        color: '#fff',
        backgroundColor: '#6d6d6d',
        width: 20,
        height: 20,
        borderRadius: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    nlIconQ: {
        backgroundColor: '#7c257a'
    },
    nlTitle: { 
        fontSize: 18,
        fontWeight: 'bold',
    },
    nlFileName: {
        fontSize: 14,
    },
    nlDate: {
        color: '#b1b1b1',
        fontSize: 13,
    }

});

export default Notice
