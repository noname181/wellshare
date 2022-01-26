import React, { useState, useEffect, useCallback } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    ActivityIndicator
} from 'react-native';
import axios from '../../helpers/axiosInterceptor';
import { useSelector } from 'react-redux'
import DateTimePicker from '@react-native-community/datetimepicker';
import Screen from '../../components/Screen';
import Calendar from '../../images/svg/CalendarIcon';
import Icon from 'react-native-vector-icons/Ionicons';
import MonthPicker from 'react-native-month-year-picker';
import { Picker } from '@react-native-picker/picker';
import Empty from '../../images/svg/Empty';

function User_List({ navigation }) {
    const [tabSlected, settabSlected] = useState(1);

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [bookingsAll, setBookingsAll] = useState(null);
    const [bookingsDelivering, setBookingsDelivering] = useState([]);
    const [bookingsCompleted, setBookingsCompleted] = useState([]);
    const [loadMore, setLoadMore] = useState(false);
    const [selectedValue, setSelectedValue] = useState(1);
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
    }, [date, selectedValue]);

    useEffect(() => {
        if (isRefresh) {
            loadBookings();
            setIsRefresh(false)
        }
        return () => {
        };
    }, [isRefresh]);

    const loadBookings = () => {
        axios.post(`/user_load_bookings.php`, { hp: user.user_hp, role: 'receiver', length: 0, type: 1, week: selectedValue, b_season: formatDate(date) })
            .then(res => {
                setBookingsAll(res.data.bookings)
                setTimeout(() => setLoadMore(false), 300)
            })
            .catch(err => {
                console.log(err);
            })
        axios.post(`/user_load_bookings.php`, { hp: user.user_hp, role: 'receiver', length: 0, type: 2, week: selectedValue, b_season: formatDate(date) })
            .then(res => {
                setBookingsDelivering(res.data.bookings)
                setTimeout(() => setLoadMore(false), 300)
            })
            .catch(err => {
                console.log(err);
            })
        axios.post(`/user_load_bookings.php`, { hp: user.user_hp, role: 'receiver', length: 0, type: 3, week: selectedValue, b_season: formatDate(date) })
            .then(res => {
                setBookingsCompleted(res.data.bookings)
                setTimeout(() => setLoadMore(false), 300)
            })
            .catch(err => {
                console.log(err);
            })
    }

    const onChange = (event, selectedDate) => {
        console.log(selectedDate)
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };
    const formatDate = () => {
        return date.getFullYear() + "-" + ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1));
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

    const onLoadMore = () => {
        setLoadMore(true);
        let length = tabSlected == 1 ? bookingsAll.length : tabSlected == 2 ? bookingsDelivering.length : bookingsCompleted.length;
        axios.post(`/user_load_bookings.php`, { hp: user.user_hp, role: 'receiver', length, type: tabSlected, week: selectedValue, b_season: formatDate(date) })
            .then(res => {
                if (tabSlected == 1) {
                    setBookingsAll(bookingsAll.concat(res.data.bookings))
                    setTimeout(() => setLoadMore(false), 300)
                } else if (tabSlected == 2) {
                    setBookingsAll(bookingsDelivering.concat(res.data.bookings))
                    setTimeout(() => setLoadMore(false), 300)
                } else if (tabSlected == 3) {
                    setBookingsAll(bookingsCompleted.concat(res.data.bookings))
                    setTimeout(() => setLoadMore(false), 300)
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
                <View style={styles.h_box_list__first_child1}>
                    <Text style={styles.h_bl_f_c1_text}>{item.b_date}</Text>
                </View>
                <View style={styles.h_box_list__first_child2}>
                    <Text style={styles.h_bl_f_c2_text1}>{item.b_name} </Text>
                    <Text style={styles.h_bl_f_c2_text2}>({item.b_hp1})</Text>
                </View>
            </View>
            <View style={styles.h_box_list__second}>
                <View>
                    <Text style={styles.h_bl_s_text1}>{item.b_package}</Text>
                </View>
                <View>
                    <TouchableOpacity style={item.b_status == 'completed' ? styles.h_button_list_purple : styles.h_button_list_green} activeOpacity={0.8}>
                        <Text style={item.b_status == 'completed' ? styles.h_text_small_clr_purple : styles.h_text_small_clr_green}>{item.b_status == 'completed' ? '완료' : '배송전'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <Screen>
            <View style={styles.body_gray}>
                <View style={[styles.h_width_select_half]}>
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
                {show && (
                    <MonthPicker
                        onChange={onValueChange}
                        value={date}
                        locale="ko"
                    />
                )}
                <View style={[styles.h_three_button, { zIndex: 1 }]}>
                    <TouchableOpacity activeOpacity={1} style={(tabSlected == 1) ? styles.h_button_active : styles.h_button} onPress={() => settabSlected(1)}>
                        <Text style={(tabSlected == 1) ? styles.h_text_clr_white : styles.h_text_clr_black}>전체</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} style={(tabSlected == 2) ? styles.h_button_active : styles.h_button} onPress={() => settabSlected(2)}>
                        <Text style={(tabSlected == 2) ? styles.h_text_clr_white : styles.h_text_clr_black}>배송전</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} style={(tabSlected == 3) ? styles.h_button_active : styles.h_button} onPress={() => settabSlected(3)}>
                        <Text style={(tabSlected == 3) ? styles.h_text_clr_white : styles.h_text_clr_black}>완료</Text>
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
                {/* <View style={styles.h_box_list}>
                    <View style={styles.h_box_list__first}>
                        <View style={styles.h_box_list__first_child1}>
                            <Text style={styles.h_bl_f_c1_text}>2022-01-02</Text>
                        </View>
                        <View style={styles.h_box_list__first_child2}>
                            <Text style={styles.h_bl_f_c2_text1}>조형래 </Text>
                            <Text style={styles.h_bl_f_c2_text2}>(010-2009-7723)</Text>
                        </View>
                    </View>
                    <View style={styles.h_box_list__second}>
                        <View>
                            <Text style={styles.h_bl_s_text1}>1-1완모</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.h_button_list_purple} activeOpacity={0.8}>
                                <Text style={styles.h_text_small_clr_purple}>완료</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.h_box_list}>
                    <View style={styles.h_box_list__first}>
                        <View style={styles.h_box_list__first_child1}>
                            <Text style={styles.h_bl_f_c1_text}>2022-01-02</Text>
                        </View>
                        <View style={styles.h_box_list__first_child2}>
                            <Text style={styles.h_bl_f_c2_text1}>김상수 </Text>
                            <Text style={styles.h_bl_f_c2_text2}>(010-5242-4213)</Text>
                        </View>
                    </View>
                    <View style={styles.h_box_list__second}>
                        <View>
                            <Text style={styles.h_bl_s_text1}>1-1완모</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.h_button_list_green} activeOpacity={0.8}>
                                <Text style={styles.h_text_small_clr_green}>배송전</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View> */}

            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({
    nlList: {
        flex: 1
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
    h_box_list__first: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 14,
        paddingLeft: 18,
        paddingRight: 18,
    },
    h_box_list__second: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 21,
        paddingLeft: 18,
        paddingRight: 18,
    },
    h_box_list__first_child2: {
        flexDirection: 'row'
    },
    h_box_list__first_child1: {
        flex: 1
    },
    h_bl_f_c1_text: {
        color: '#a8a8a8',
        fontSize: 15,
    },
    h_bl_f_c2_text1: {
        fontSize: 16,
        color: 'black',
        marginRight: 10,
    },
    h_bl_f_c2_text2: {
        fontSize: 16,
        color: 'black',
    },
    h_bl_s_text1: {
        fontSize: 16,
        color: '#4a4a4a'
    },
    h_button: {
        backgroundColor: '#fff',
        height: 46,
        width: '32%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#e2e2e2',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.1,
        elevation: 3,
    },
    h_button_list_purple: {
        backgroundColor: '#fff',
        height: 25,
        width: 62,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#8968DC',
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

    },
    h_text_clr_black: {
        color: '#404148',
        fontSize: 15,
    },
    h_three_button: {
        justifyContent: 'space-between',
        marginTop: 15,
        marginBottom: 15,
        flexDirection: 'row'
    },
    icon_calendar: {
        position: 'absolute',
        marginLeft: 15,
        width: 17,
        height: 17,

    },
    icon_select: {
        position: 'absolute',
        right: 17,
    },
    body_gray: {
        backgroundColor: 'f8f8f8',
        flex: 1
    },
    box_calendar: {
        backgroundColor: '#fff',
        height: 46,
        borderWidth: 0,
        borderColor: '#e1e1e1',
        borderRadius: 6,
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.1,
        elevation: 4,
        position: 'relative',
        paddingHorizontal: 15
    },
    text_calendar: {
        paddingLeft: 10,
        fontSize: 15
    },

    h_width_select_half: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',

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
});

export default User_List
