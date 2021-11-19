import React from 'react'
import {StyleSheet,SafeAreaView,  View, Text, TouchableOpacity, FlatList, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Screen } from '../components';

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
  
const Item = ({id, title, regdate, content}) => (
<TouchableOpacity style={styles.nlItem}>
    <View style={styles.nlHead}>
        <View style={styles.nlRow}>
            <Text style={styles.nlNo}>{id}.</Text>
            <Text style={styles.nlTitle}>{title}</Text>
        </View>
        
        <Text style={styles.nlDate}>{regdate}</Text>
        
        <Icon style={styles.nlArrow} name='chevron-down-outline' color={'#9b9b9b'} size={20} />
       
        
    </View>
    <View style={styles.nlContent}>
        <Text style={{color: '#000'}}>{content}</Text>
    </View>
</TouchableOpacity>
);

function Setting() {
    const renderItem = ({item}) => (
        <Item id={item.id} title={item.title} regdate={item.regdate} content={item.content}/>
    );
    return (
        <Screen >
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.nlList}
                inverted 
            />
        </Screen>
    );
}
const styles = StyleSheet.create({
    nlList: {
        flex: 1,
        margin: -5
    },
    nlItem: {
        margin: 5,
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
        color: '#000'
    },
    nlHead: {
        position: 'relative',
        padding: 15,
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        
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

export default Setting
