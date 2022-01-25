import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Pressable, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Screen from '../../components/Screen';
import axios from '../../helpers/axiosInterceptor';
import { useSelector } from 'react-redux'
import Empty from '../../images/svg/Empty';

const Item = ({ item, onPress, typeDisplay, nameIcon }) => (
    <Pressable style={styles.nlItem} onPress={onPress}>
        <View style={styles.nlHead}>
            <View style={styles.nlRow}>
                <Text style={styles.nlNo}>{item.n_no}.</Text>
                <Text style={styles.nlTitle}>{item.n_title}</Text>
            </View>
            <Text style={styles.nlDate}>{item.n_regdate}</Text>
            <Icon style={[styles.nlArrow]} name={nameIcon} color={'#9b9b9b'} size={20} />
        </View>
        <View style={styles.nlContent} display={typeDisplay}>
            <Text style={{ color: '#000' }}>{item.n_content}</Text>
        </View>
    </Pressable>
);


function Notice({ navigation }) {
    const [selectedId, setSelectedId] = useState(null);
    const [noticesHospital, setNoticesHospital] = useState(null);
    const [isRefresh, setIsRefresh] = useState(false);

    const user = useSelector(state => state.auth.user)

    useEffect(() => {
        loadNotices();
        return () => {

        };
    }, []);

    useEffect(() => {
        if (isRefresh) {
            loadNotices();
            setIsRefresh(false);
        }
        return () => {

        };
    }, [isRefresh]);

    const loadNotices = () => {
        axios.post(`/user_load_notices.php`, { h_no: user.h_no, role: 'hospital' })
            .then(res => {

                setNoticesHospital(res.data.notices)

            })
            .catch(err => {
                console.log(err);
            })
    }

    const renderItem = ({ item }) => {
        const itemActive = item.n_no === selectedId ? 'flex' : 'none';
        const arrow = item.n_no === selectedId ? 'chevron-up-outline' : 'chevron-down-outline';
        return (
            <Item item={item}
                onPress={() => setSelectedId(item.n_no)}
                nameIcon={arrow}
                typeDisplay={itemActive}
            />
        );
    }
    return (
        <Screen style={{ paddingVertical: 0, paddingHorizontal: 10 }}>
            <FlatList
                data={noticesHospital}
                renderItem={renderItem}
                keyExtractor={(item, index) => String(index)}
                style={styles.nlList}
                extraData={selectedId}
                showsVerticalScrollIndicator={false}
                onRefresh={() => setIsRefresh(true)}
                refreshing={false}
                contentContainerStyle={{ flexGrow: 1 }}
                ListEmptyComponent={noticesHospital != null && <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                    <Empty height={100} width={100}></Empty>
                </View>}
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
