import React, { useState, useEffect, useCallback } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator, Image, FlatList, TextInput } from 'react-native';
import Screen from '../../components/Screen';
import { Picker } from '@react-native-picker/picker';
import { useSelector } from 'react-redux'
import axios from '../../helpers/axiosInterceptor';
import MonthPicker from 'react-native-month-year-picker';
import Calendar from '../../images/svg/CalendarIcon';
import Empty from '../../images/svg/Empty';

function List({ navigation }) {
    const [selectedValue, setSelectedValue] = useState(1);
    const [tabSlected, settabSlected] = useState(1);
    const [bookingsAll, setBookingsAll] = useState(null);
    const [bookingsDelivering, setBookingsDelivering] = useState(null);
    const [bookingsCompleted, setBookingsCompleted] = useState(null);
    const [loadMore, setLoadMore] = useState(false);
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [nameSearch, setNameSearch] = useState(null);
    const [phoneSearch, setPhoneSearch] = useState(null);
    const [isRefresh, setIsRefresh] = useState(false);

    const user = useSelector(state => state.auth.user)

    useEffect(() => {
        loadBookings();
        const unsubscribe = navigation.addListener('focus', () => {
            // do something
            loadBookings();
        });
        return () => {
            unsubscribe
        };
    }, []);

    useEffect(() => {
        if (isRefresh) {
            loadBookings();
            setIsRefresh(false)
        }
        return () => {
        };
    }, [isRefresh]);

    const loadBookings = () => {
        axios.post(`/user_load_bookings.php`, { m_no: user.m_no, role: 'admin', length: 0, type: 1, week: selectedValue, b_name: nameSearch, hp: phoneSearch, b_season: formatDate(date) })
            .then(res => {
                setBookingsAll(res.data.bookings)
                if (res.data.bookings.length == 0) {
                    setTimeout(() => setLoadMore(false), 300)
                }
            })
            .catch(err => {
                console.log(err);
            })
        axios.post(`/user_load_bookings.php`, { m_no: user.m_no, role: 'admin', length: 0, type: 2, week: selectedValue, b_name: nameSearch, hp: phoneSearch, b_season: formatDate(date) })
            .then(res => {
                setBookingsDelivering(res.data.bookings)
                if (res.data.bookings.length == 0) {
                    setTimeout(() => setLoadMore(false), 300)
                }
            })
            .catch(err => {
                console.log(err);
            })
        axios.post(`/user_load_bookings.php`, { m_no: user.m_no, role: 'admin', length: 0, type: 3, week: selectedValue, b_name: nameSearch, hp: phoneSearch, b_season: formatDate(date) })
            .then(res => {
                setBookingsCompleted(res.data.bookings)
                if (res.data.bookings.length == 0) {
                    setTimeout(() => setLoadMore(false), 300)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    const onLoadMore = () => {
        setLoadMore(true);
        let length = tabSlected == 1 ? bookingsAll.length : tabSlected == 2 ? bookingsDelivering.length : bookingsCompleted.length;
        axios.post(`/user_load_bookings.php`, { m_no: user.m_no, role: 'admin', length, type: tabSlected, week: selectedValue, b_name: nameSearch, hp: phoneSearch, b_season: formatDate(date) })
            .then(res => {
                if (tabSlected == 1) {
                    setBookingsAll(bookingsAll.concat(res.data.bookings))
                    if (res.data.bookings.length == 0) {
                        setTimeout(() => setLoadMore(false), 300)
                    }
                } else if (tabSlected == 2) {
                    setBookingsAll(bookingsDelivering.concat(res.data.bookings))
                    if (res.data.bookings.length == 0) {
                        setTimeout(() => setLoadMore(false), 300)
                    }
                } else if (tabSlected == 3) {
                    setBookingsAll(bookingsCompleted.concat(res.data.bookings))
                    if (res.data.bookings.length == 0) {
                        setTimeout(() => setLoadMore(false), 300)
                    }
                }

            })
            .catch(err => {
                console.log(err);
            })

    }

    const Item = ({ item }) => (
        <TouchableOpacity style={styles.h_box_list} onPress={() => navigation.navigate('ListView', {
            b_no: item.b_no,
        })}>
            <View style={styles.h_box_list__first}>
                <View>
                    <Text style={styles.h_bl_s_text1}>{item.b_date} <Text style={{ color: '#dddddd', fontSize: 13 }}> | </Text> 8:00</Text>
                </View>
                <View>
                    <TouchableOpacity style={item.b_status == 'completed' ? styles.h_button_list_purple : styles.h_button_list_green} activeOpacity={0.8}>
                        <Text style={item.b_status == 'completed' ? styles.h_text_small_clr_purple : styles.h_text_small_clr_green}>{item.b_status == 'completed' ? '완료' : '배송전'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.h_box_list__second}>
                <View style={styles.h_box_list__first_child1}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.h_f_c1_text}>{item.b_name}</Text>
                        <Text style={styles.h_f_c1_phone}>{item.b_hp1}</Text>
                    </View>
                    <View style={{ paddingTop: 5 }}>
                        <Text style={styles.h_bl_f_c1_text}>{item.b_address}</Text>
                    </View>
                </View>
                <View style={styles.h_box_list__first_child2}>
                    <Text style={styles.h_bl_f_c2_text1}>{item.b_package}</Text>
                </View>
            </View>
        </TouchableOpacity>

    );

    const onSearch = () => {
        axios.post(`/user_load_bookings.php`, { m_no: user.m_no, role: 'admin', length: 0, type: tabSlected, week: selectedValue, b_name: nameSearch, hp: phoneSearch, b_season: formatDate(date) })
            .then(res => {
                if (tabSlected == 1) {
                    setBookingsAll(res.data.bookings)
                    if (res.data.bookings.length == 0) {
                        setTimeout(() => setLoadMore(false), 300)
                    }
                } else if (tabSlected == 2) {
                    setBookingsDelivering(res.data.bookings)
                    if (res.data.bookings.length == 0) {
                        setTimeout(() => setLoadMore(false), 300)
                    }
                } else if (tabSlected == 3) {
                    setBookingsCompleted(res.data.bookings)
                    if (res.data.bookings.length == 0) {
                        setTimeout(() => setLoadMore(false), 300)
                    }
                }

            })
            .catch(err => {
                console.log(err);
            })
    }

    const showPicker = useCallback((value) => setShow(value), []);

    const onValueChange = useCallback(
        (event, newDate) => {
            const selectedDate = newDate || date;

            showPicker(false);
            setDate(selectedDate);
        },
        [date, showPicker],
    );

    const formatDate = () => {
        return date.getFullYear() + "-" + ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1));
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={[styles.nlFixedAtTop]}>
                <View style={[styles.h_width_select_half, { marginTop: 10 }, { marginBottom: 10 }]}>
                    <TouchableOpacity style={[styles.nlFormControl, { paddingLeft: 15 }]} onPress={() => showPicker(true)}>
                        <Calendar width={16} height={16} />
                        <Text style={{ color: "#000", paddingLeft: 10 }}>{formatDate()}</Text>
                    </TouchableOpacity>
                    <View style={styles.nlFormControl}>
                        <Picker
                            selectedValue={selectedValue}
                            style={styles.nlPicker}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                        </Picker>
                    </View>
                </View>
                <View style={[styles.h_width_select_half]}>
                    <View style={styles.nlFormControl}>
                        <TextInput
                            placeholder='수령인 이름'
                            style={{ paddingHorizontal: 15 }}
                            value={nameSearch} onChangeText={(text) => setNameSearch(text)}
                        >
                        </TextInput>
                    </View>
                    <View style={[styles.nlFormControl]}>
                        <TextInput
                            placeholder='수령인 전화번호'
                            keyboardType='numeric'
                            style={{ paddingHorizontal: 15 }}
                            value={phoneSearch} onChangeText={(text) => setPhoneSearch(text)}
                        >
                        </TextInput>
                    </View>
                </View>
                <TouchableOpacity style={[styles.nlFormControl, { width: '100%', marginTop: 10, justifyContent: 'center', backgroundColor: '#7c257a' }]} onPress={() => onSearch()}>
                    <Text style={{ color: "#fff" }}>Search</Text>
                </TouchableOpacity>

            </View>
            <Screen style={{ paddingTop: 160 }}>
                <View style={[styles.nlRow, styles.nlBetween, styles.nlListTabTop, { zIndex: 1 }]}>
                    <TouchableOpacity style={(tabSlected == 1) ? styles.nlTabTopSelected : styles.nlTabTop} onPress={() => settabSlected(1)}>
                        <Text style={(tabSlected == 1) ? styles.nlTabTopTextSelected : styles.nlTabTopText}>전체</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={(tabSlected == 2) ? styles.nlTabTopSelected : styles.nlTabTop} onPress={() => settabSlected(2)}>
                        <Text style={(tabSlected == 2) ? styles.nlTabTopTextSelected : styles.nlTabTopText}>배송전</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={(tabSlected == 3) ? styles.nlTabTopSelected : styles.nlTabTop} onPress={() => settabSlected(3)}>
                        <Text style={(tabSlected == 3) ? styles.nlTabTopTextSelected : styles.nlTabTopText}>배송완료</Text>
                    </TouchableOpacity>
                </View>
                {tabSlected == 1 && <FlatList
                    refreshing={false}
                    data={bookingsAll}
                    renderItem={Item}
                    keyExtractor={(item, index) => String(index)}
                    style={styles.nlList}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                    onEndReachedThreshold={0.1}
                    onEndReached={({ distanceFromEnd }) => {
                        console.log(distanceFromEnd);
                        (distanceFromEnd > 0 && !loadMore) && onLoadMore();
                    }}
                    onRefresh={() => setIsRefresh(true)}
                    ListFooterComponent={loadMore ? <View
                        style={{
                            paddingBottom: 15,

                        }}
                    >
                        <ActivityIndicator animating size="large" color="#7c257a" />
                    </View> : null}
                    contentContainerStyle={{ flexGrow: 1 }}
                    ListEmptyComponent={bookingsAll != null && <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                        <Empty height={100} width={100}></Empty>
                    </View>}
                />}
                {tabSlected == 2 && <FlatList
                    refreshing={false}
                    data={bookingsDelivering}
                    renderItem={Item}
                    keyExtractor={(item, index) => String(index)}
                    style={styles.nlList}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                    onEndReachedThreshold={0.1}
                    onEndReached={({ distanceFromEnd }) => {
                        console.log(distanceFromEnd);
                        (distanceFromEnd > 0 && !loadMore) && onLoadMore();
                    }}
                    onRefresh={() => setIsRefresh(true)}
                    ListFooterComponent={loadMore ? <View
                        style={{
                            paddingBottom: 15,

                        }}
                    >
                        <ActivityIndicator animating size="large" color="#7c257a" />
                    </View> : null}
                    contentContainerStyle={{ flexGrow: 1 }}
                    ListEmptyComponent={<View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                        <Empty height={100} width={100}></Empty>
                    </View>}
                />}
                {tabSlected == 3 && <FlatList
                    refreshing={false}
                    data={bookingsCompleted}
                    renderItem={Item}
                    keyExtractor={(item, index) => String(index)}
                    style={styles.nlList}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                    onEndReachedThreshold={0.1}
                    onEndReached={({ distanceFromEnd }) => {
                        console.log(distanceFromEnd);
                        (distanceFromEnd > 0 && !loadMore) && onLoadMore();
                    }}
                    onRefresh={() => setIsRefresh(true)}
                    ListFooterComponent={loadMore ? <View
                        style={{
                            paddingBottom: 15,

                        }}
                    >
                        <ActivityIndicator animating size="large" color="#7c257a" />
                    </View> : null}
                    contentContainerStyle={{ flexGrow: 1 }}
                    ListEmptyComponent={<View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                        <Empty height={100} width={100}></Empty>
                    </View>}
                />}
                {show && (
                    <MonthPicker
                        onChange={onValueChange}
                        value={date}

                        locale="ko"
                    />
                )}
                {/* <View style={styles.h_box_list}>
                    <View style={styles.h_box_list__first}>
                        <View>
                            <Text style={styles.h_bl_s_text1}>2022.01.06 <Text style={{ color: '#dddddd', fontSize: 13 }}> | </Text> 8:00</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.h_button_list_purple} activeOpacity={0.8}>
                                <Text style={styles.h_text_small_clr_purple}>완료</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.h_box_list__second}>
                        <View style={styles.h_box_list__first_child1}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.h_f_c1_text}>조형래</Text>
                                <Text style={styles.h_f_c1_phone}>010-2009-7723</Text>
                            </View>
                            <View style={{ paddingTop: 5 }}>
                                <Text style={styles.h_bl_f_c1_text}>개포로 20길 17, 2층</Text>
                            </View>
                        </View>
                        <View style={styles.h_box_list__first_child2}>
                            <Text style={styles.h_bl_f_c2_text1}>1-1완모 </Text>
                        </View>
                    </View>
                </View> */}
                {/* <View style={styles.h_box_list}>
                        <View style={styles.h_box_list__first}>
                            <View>
                                <Text style={styles.h_bl_s_text1}>2021.05.25 <Text style={{ color: '#dddddd', fontSize: 13 }}> | </Text> 8:00</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.h_button_list_green} activeOpacity={0.8}>
                                    <Text style={styles.h_text_small_clr_green}>배송전</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.h_box_list__second}>
                            <View style={styles.h_box_list__first_child1}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.h_f_c1_text}>조형래</Text>
                                    <Text style={styles.h_f_c1_phone}>010-2009-7723</Text>
                                </View>
                                <View style={{ paddingTop: 5 }}>
                                    <Text style={styles.h_bl_f_c1_text}>개포로 20길 17, 2층</Text>
                                </View>
                            </View>
                            <View style={styles.h_box_list__first_child2}>
                                <Text style={styles.h_bl_f_c2_text1}>1-1완모 </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.h_box_list}>
                        <View style={styles.h_box_list__first}>
                            <View>
                                <Text style={styles.h_bl_s_text1}>2021.05.25 <Text style={{ color: '#dddddd', fontSize: 13 }}> | </Text> 8:00</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.h_button_list_green} activeOpacity={0.8}>
                                    <Text style={styles.h_text_small_clr_green}>배송전</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.h_box_list__second}>
                            <View style={styles.h_box_list__first_child1}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.h_f_c1_text}>조형래</Text>
                                    <Text style={styles.h_f_c1_phone}>010-2009-7723</Text>
                                </View>
                                <View style={{ paddingTop: 5 }}>
                                    <Text style={styles.h_bl_f_c1_text}>개포로 20길 17, 2층</Text>
                                </View>
                            </View>
                            <View style={styles.h_box_list__first_child2}>
                                <Text style={styles.h_bl_f_c2_text1}>1-1완모 </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.h_box_list}>
                        <View style={styles.h_box_list__first}>
                            <View>
                                <Text style={styles.h_bl_s_text1}>2021.05.25 <Text style={{ color: '#dddddd', fontSize: 13 }}> | </Text> 8:00</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.h_button_list_green} activeOpacity={0.8}>
                                    <Text style={styles.h_text_small_clr_green}>배송전</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.h_box_list__second}>
                            <View style={styles.h_box_list__first_child1}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.h_f_c1_text}>조형래</Text>
                                    <Text style={styles.h_f_c1_phone}>010-2009-7723</Text>
                                </View>
                                <View style={{ paddingTop: 5 }}>
                                    <Text style={styles.h_bl_f_c1_text}>개포로 20길 17, 2층</Text>
                                </View>
                            </View>
                            <View style={styles.h_box_list__first_child2}>
                                <Text style={styles.h_bl_f_c2_text1}>1-1완모 </Text>
                            </View>
                        </View>
                    </View> */}

            </Screen>
        </View>
    );
}
const styles = StyleSheet.create({
    nlList: {
        flex: 1
    },
    h_f_c1_text: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
    },
    h_f_c1_phone: {
        color: 'black',
        fontSize: 15,
        paddingLeft: 10,
    },
    h_box_list: {
        backgroundColor: '#fff',
        borderWidth: 0,
        borderColor: '#e1e1e1',
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.1,
        elevation: 4,
        marginBottom: 10,

    },
    h_box_list__second: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 18,
        paddingRight: 18,
        paddingBottom: 16,
        paddingTop: 12,
    },
    h_box_list__first: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 12,
        marginLeft: 18,
        marginRight: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#eeeeee',
    },
    h_box_list__first_child2: {
        flexDirection: 'row'
    },
    h_box_list__first_child1: {
        flex: 1
    },
    h_bl_f_c1_text: {
        color: '#a4a4a4',
        fontSize: 15,
    },
    h_bl_f_c2_text1: {
        fontSize: 16,
        color: 'black',
    },
    h_bl_f_c2_text2: {
        fontSize: 16,
        color: 'black',
    },
    h_bl_s_text1: {
        fontSize: 15,
        color: '#4a4a4a'
    },

    h_button_list_purple: {
        backgroundColor: '#fff',
        height: 25,
        width: 62,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#8663DB',
    },
    h_button_list_green: {
        backgroundColor: '#fff',
        height: 25,
        width: 62,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#39C2AA',
    },
    h_text_small_clr_purple: {
        color: '#8968DC',
        fontWeight: 'bold',
    },
    h_text_small_clr_green: {
        color: '#39C2AA',
        fontWeight: 'bold',
    },
    h_button_active: {
        backgroundColor: '#7c257a',
        height: 46,
        width: '32%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
    },
    h_text_clr_white: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    h_text_clr_black: {
        color: '#404148',
        fontSize: 15,
    },
    nlRow: {
        flexDirection: 'row'
    },
    nlBetween: {
        justifyContent: 'space-between'
    },
    nlTabTop: {
        minWidth: '31.5%',
        height: 45,
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderRadius: 8,
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
        minWidth: '31.5%',
        height: 45,
        backgroundColor: '#7c257a',
        color: '#fff',
        justifyContent: 'center',
        borderRadius: 8,
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
    nlTabTopTextSelected: {
        textAlign: 'center',
        color: '#fff'
    },
    nlListTabTop: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    nlTabTopText: {
        textAlign: 'center'
    },
    nlFormControl: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#e1e1e1',
        borderRadius: 8,
        overflow: 'hidden',
        height: 40,
        width: '49%',
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row',
    },
    nlPicker: {
        width: '100%',
        height: '100%',
    },
    h_width_select_half: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    nlPicker: {
        width: '100%',
        height: '100%',
    },
    h_pt_15: {
        paddingTop: 15
    },
    nlFixedAtTop: {
        backgroundColor: '#fff',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomColor: '#e1e1e1',
        shadowColor: "#E5E6E7",
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowOpacity: 0.1,
        elevation: 3,

    },

});

export default List
