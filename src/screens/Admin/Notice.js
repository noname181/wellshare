import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Pressable, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Screen from '../../components/Screen';
import axios from '../../helpers/axiosInterceptor';
import { useSelector } from 'react-redux'
import Empty from '../../images/svg/Empty';

const Item = ({ item, onPress, typeDisplay, nameIcon, length, index }) => (
    <Pressable style={styles.nlItem} onPress={onPress}>
        <View style={styles.nlHead}>
            <View style={styles.nlRow}>
                <Text style={styles.nlNo}>{length - index}.</Text>
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
    const [noticesAll, setNoticesAll] = useState(null);
    const [noticesHospital, setNoticesHospital] = useState(null);
    const [noticesDelivery, setNoticesDelivery] = useState(null);
    const [noticesReceiver, setNoticesReceiver] = useState(null);
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
        axios.post(`/user_load_notices.php`, { m_no: user.m_no, role: 'admin' })
            .then(res => {
                setNoticesAll(res.data.notices);
                setNoticesHospital(res.data.notices.filter(v => {
                    return v.n_hospital_yn == 'y';
                }))
                setNoticesDelivery(res.data.notices.filter(v => {
                    return v.n_driver_yn == 'y';
                }))
                setNoticesReceiver(res.data.notices.filter(v => {
                    return v.n_user_yn == 'y';
                }))
            })
            .catch(err => {
                console.log(err);
            })
    }

    const renderItem1 = ({ item, index }) => {
        const itemActive = item.n_no === selectedId ? 'flex' : 'none';
        const arrow = item.n_no === selectedId ? 'chevron-up-outline' : 'chevron-down-outline';
        return (
            <Item item={item}
                onPress={() => setSelectedId(item.n_no)}
                nameIcon={arrow}
                typeDisplay={itemActive}
                index={index}
                length={noticesAll.length}
            />
        );
    }
    const renderItem2 = ({ item, index }) => {
        const itemActive = item.n_no === selectedId ? 'flex' : 'none';
        const arrow = item.n_no === selectedId ? 'chevron-up-outline' : 'chevron-down-outline';
        return (
            <Item item={item}
                onPress={() => setSelectedId(item.n_no)}
                nameIcon={arrow}
                typeDisplay={itemActive}
                index={index}
                length={noticesDelivery.length}
            />
        );
    }
    const renderItem3 = ({ item, index }) => {
        const itemActive = item.n_no === selectedId ? 'flex' : 'none';
        const arrow = item.n_no === selectedId ? 'chevron-up-outline' : 'chevron-down-outline';
        return (
            <Item item={item}
                onPress={() => setSelectedId(item.n_no)}
                nameIcon={arrow}
                typeDisplay={itemActive}
                index={index}
                length={noticesReceiver.length}
            />
        );
    }
    const renderItem4 = ({ item, index }) => {
        const itemActive = item.n_no === selectedId ? 'flex' : 'none';
        const arrow = item.n_no === selectedId ? 'chevron-up-outline' : 'chevron-down-outline';
        return (
            <Item item={item}
                onPress={() => setSelectedId(item.n_no)}
                nameIcon={arrow}
                typeDisplay={itemActive}
                index={index}
                length={noticesHospital.length}
            />
        );
    }
    //click tab top event
    const [tabSlected, settabSlected] = useState(1);
    return (
        <Screen style={{ paddingVertical: 0, paddingHorizontal: 10 }}>
            <View style={[styles.nlRow, styles.nlBetween, styles.nlListTabTop]}>
                <TouchableOpacity activeOpacity={1} style={(tabSlected == 1) ? styles.nlTabTopSelected : styles.nlTabTop} onPress={() => settabSlected(1)}>
                    <Text style={(tabSlected == 1) ? styles.nlTabTopTextSelected : styles.nlTabTopText}>전체</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={(tabSlected == 2) ? styles.nlTabTopSelected : styles.nlTabTop} onPress={() => settabSlected(2)}>
                    <Text style={(tabSlected == 2) ? styles.nlTabTopTextSelected : styles.nlTabTopText}>기사님 </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={(tabSlected == 3) ? styles.nlTabTopSelected : styles.nlTabTop} onPress={() => settabSlected(3)}>
                    <Text style={(tabSlected == 3) ? styles.nlTabTopTextSelected : styles.nlTabTopText}>대상자</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={(tabSlected == 4) ? styles.nlTabTopSelected : styles.nlTabTop} onPress={() => settabSlected(4)}>
                    <Text style={(tabSlected == 4) ? styles.nlTabTopTextSelected : styles.nlTabTopText}>보건소</Text>
                </TouchableOpacity>
            </View>
            {tabSlected == 1 && <FlatList
                data={noticesAll}
                renderItem={renderItem1}
                keyExtractor={(item, index) => String(index)}
                style={styles.nlList}
                extraData={selectedId}
                showsVerticalScrollIndicator={false}
                onRefresh={() => setIsRefresh(true)}
                refreshing={false}
                contentContainerStyle={{ flexGrow: 1 }}
                ListEmptyComponent={noticesAll != null && <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                    <Empty height={100} width={100}></Empty>
                </View>}
            />}
            {tabSlected == 2 && <FlatList
                data={noticesDelivery}
                renderItem={renderItem2}
                keyExtractor={(item, index) => String(index)}
                style={styles.nlList}
                extraData={selectedId}
                showsVerticalScrollIndicator={false}
                onRefresh={() => setIsRefresh(true)}
                refreshing={false}
                contentContainerStyle={{ flexGrow: 1 }}
                ListEmptyComponent={noticesDelivery != null && <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                    <Empty height={100} width={100}></Empty>
                </View>}
            />}
            {tabSlected == 3 && <FlatList
                data={noticesReceiver}
                renderItem={renderItem3}
                keyExtractor={(item, index) => String(index)}
                style={styles.nlList}
                extraData={selectedId}
                showsVerticalScrollIndicator={false}
                onRefresh={() => setIsRefresh(true)}
                refreshing={false}
                contentContainerStyle={{ flexGrow: 1 }}
                ListEmptyComponent={noticesReceiver != null && <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                    <Empty height={100} width={100}></Empty>
                </View>}
            />}
            {tabSlected == 4 && <FlatList
                data={noticesHospital}
                renderItem={renderItem4}
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
            />}
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
    nlBetween: {
        justifyContent: 'space-between'
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
        whiteSpace: 'pre-wrap'
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
    },
    nlListTabTop: {
        paddingHorizontal: 5,
        paddingTop: 20,
        paddingBottom: 15,
    },
    nlTabTop: {
        minWidth: '23%',
        height: 40,
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderRadius: 5,
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
    nlTabTopSelected: {
        minWidth: '23%',
        height: 40,
        backgroundColor: '#7c257a',
        color: '#fff',
        justifyContent: 'center',
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#7c257a',
        shadowColor: "#222",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
    },
    nlTabTopText: {
        textAlign: 'center'
    },
    nlTabTopTextSelected: {
        textAlign: 'center',
        color: '#fff'
    }

});

export default Notice
