import React, { useState } from 'react'
import { StyleSheet, View, Text, Pressable, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Screen from '../../components/Screen';
const DATA = [
    {
        id: '1',
        regdate: '2021.10.13',
        title: '공지사항 1입니다.',
        content: '- 디자인을 함에 있어 시각적 연출이 필요한 빈공간을 위'
    },
    {
        id: '2',
        title: '공지사항 1입니다.',
        regdate: '2021.10.13',
        content: '- 디자인을 함에 있어 시각적 연출이 필요한 빈공간을 위'
    },
    {
        id: '3',
        title: '공지사항 1입니다.',
        regdate: '2021.10.13',
        content: '- 디자인을 함에 있어 시각적 연출이 필요한 빈공간을 위',
    },
    {
        id: '4',
        title: '공지사항 1입니다.',
        regdate: '2021.10.13',
        content: '- 디자인을 함에 있어 시각적 연출이 필요한 빈공간을 위',
    },
    {
        id: '5',
        title: '공지사항 1입니다.',
        regdate: '2021.10.13',
        content: '- 디자인을 함에 있어 시각적 연출이 필요한 빈공간을 위',
    },
    {
        id: '6',
        title: '공지사항 1입니다.',
        regdate: '2021.10.13',
        content: '- 디자인을 함에 있어 시각적 연출이 필요한 빈공간을 위',
    },
    {
        id: '7',
        title: '공지사항 1입니다.',
        regdate: '2021.10.13',
        content: '- 디자인을 함에 있어 시각적 연출이 필요한 빈공간을 위',
    },
];

const Item = ({ item, onPress, typeDisplay, nameIcon }) => (
    <Pressable style={styles.nlItem} onPress={onPress}>
        <View style={styles.nlHead}>
            <View style={styles.nlRow}>
                <Text style={styles.nlNo}>{item.id}.</Text>
                <Text style={styles.nlTitle}>{item.title}</Text>
            </View>
            <Text style={styles.nlDate}>{item.regdate}</Text>
            <Icon style={[styles.nlArrow]} name={nameIcon} color={'#9b9b9b'} size={20} />
        </View>
        <View style={styles.nlContent} display={typeDisplay}>
            <Text style={{ color: '#000' }}>{item.content}</Text>
        </View>
    </Pressable>
);

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
        <Screen style={{ paddingVertical: 0, paddingHorizontal: 10 }}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.nlList}
                extraData={selectedId}
                showsVerticalScrollIndicator={false}
            />
        </Screen>
    );
}
const styles = StyleSheet.create({
    nlList: {
        flex: 1
    },
    nlItem: {
        marginVertical: 7,
        marginHorizontal: 5,
        paddingVertical: 2,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#e1e1e1',
        shadowColor: "#222",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
    },
    nlTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
    },
    nlRow: {
        flexDirection: 'row'
    },
    nlDate: {
        fontSize: 14,
        paddingTop: 4

    },
    nlContent: {
        padding: 15,
        fontSize: 14,
        color: '#000',
        borderTopColor: '#e1e1e1',
        borderStyle: 'solid',
        borderTopWidth: 1,

    },
    nlHead: {
        position: 'relative',
        padding: 15,

    },
    nlArrow: {
        position: 'absolute',
        top: 20,
        right: 10
    },
    nlNo: {
        color: '#7c257a',
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 3
    }

});

export default Notice
