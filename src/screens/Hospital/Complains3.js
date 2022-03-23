import React, { useState, useEffect, useRef } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    FlatList
} from 'react-native';
// import { Screen } from '../../components';
import CalendarIcon from '../../images/svg/CalendarIcon';
import SearchIcon from '../../images/svg/SearchIcon';
import Screen from '../../components/Screen';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from '../../helpers/axiosInterceptor';
import { useSelector } from 'react-redux'
import Empty from '../../images/svg/Empty';


function Complains({ navigation, route }) {
    const { b_name, b_hp1, b_hp2 } = route.params;
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [searchValue1, setSearchValue1] = useState('');
    const [searchValue2, setSearchValue2] = useState('');
    const [complaints, setComplaints] = useState(null);
    const [hpSearch, setHpSearch] = useState(b_hp1 ? b_hp1 : b_hp2 ? b_hp2 : '');
    const [contentSearct, setContentSearch] = useState(b_name ? b_name : '');

    const user = useSelector(state => state.auth.user)
    const dateRef = useRef(date);
    const hpRef = useRef(hpSearch);
    const contentRef = useRef(contentSearct);
    const _setDate = newText => {
        dateRef.current = newText;

    };
    const _setHpSearch = newText => {
        hpRef.current = newText;

    };
    const _setContentSearch = newText => {
        contentRef.current = newText;

    };

    useEffect(() => {
        _setHpSearch(hpSearch)
        _setContentSearch(contentSearct)
        return () => {

        };

    }, [hpSearch, contentSearct]);

    useEffect(() => {

        const unsubscribe = navigation.addListener('focus', () => {
            // do something

            loadComplaints();
        });
        const unsubscribe2 = navigation.addListener('blur', () => {
            // do something
            console.log(navigation.getState().index)
            console.log(navigation.getState().routes.length)
            navigation.getState().index == 0 && navigation.getState().routes.length == 1 &&
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Complains2' }],
                });
            navigation.getState().index == 1 && navigation.getState().routes.length == 2 &&
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Complains2' }],
                });
        });
        return () => {
            unsubscribe
            unsubscribe2
        };
    }, []);

    useEffect(() => {
        _setDate(date)
        loadComplaints()
        return () => {

        };

    }, [date]);

    const loadComplaints = () => {
        axios.post(`/user_load_complaint.php`, { h_no: user.h_no, role: 'hospital', date: fortmatDate(), hp: hpRef.current.replace('-', ''), content: contentRef.current })
            .then(res => {

                // setComplaints(res.data.complaints.filter(v => {
                //     return v.com_confirm_yn == 'y';
                // }))
                setComplaints(res.data.complaints)

            })
            .catch(err => {
                console.log(err);
            })
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const fortmatDate = () => {
        return dateRef.current.getFullYear() + "-" + ((dateRef.current.getMonth() + 1) < 10 ? "0" + (dateRef.current.getMonth() + 1) : (dateRef.current.getMonth() + 1)) + "-" + (dateRef.current.getDate() < 10 ? "0" + dateRef.current.getDate() : dateRef.current.getDate());
    }
    const fortmatDate2 = () => {
        return date.getFullYear() + "-" + ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) + "-" + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
    }

    const onSearch = () => {
        loadComplaints();
    }

    const Item = ({ item, index }) => (
        <View style={styles.row__info}>
            <TouchableOpacity style={styles.row__info__child} onPress={() => {
                navigation.navigate('ComplainView', {
                    com_no: item.com_no,
                })
            }}>
                <View style={styles.row__info__child__text}>
                    <View>
                        <Text style={styles.row__info__child__text1}>#{item.b_no} - {item.com_text}</Text>
                    </View>
                    <View>
                        <Text style={styles.row__info__child__text3}>{item.com_regdate}</Text>
                    </View>
                </View>
                <View style={styles.h_circle_blue}>
                    <Text style={styles.h_circle_number}>{item.answers}</Text>
                </View>
            </TouchableOpacity>
        </View>

    );

    return (
        <Screen style={styles.body_42_1}>
            <View style={{ flex: 1 }}>
                <TouchableOpacity activeOpacity={1} style={styles.box_calendar} onPress={showDatepicker}>
                    <CalendarIcon width={16} height={16} />
                    <Text style={styles.text_calendar}>{fortmatDate2()}</Text>
                    <Icon style={styles.icon_select} name={'chevron-down-outline'} color={'#9b9b9b'} size={20} />
                </TouchableOpacity>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        display="default"
                        onChange={onChange}
                    />
                )}
                <View style={styles.row__search}>
                    <View style={styles.width40}>
                        <TextInput value={hpSearch} style={styles.text_input} placeholder='전화번호'
                            keyboardType='numeric'
                            onChangeText={(text) => setHpSearch(text)} />
                    </View>
                    <View style={styles.width40}>
                        <TextInput style={styles.text_input} value={contentSearct} placeholder='정보'
                            keyboardType='default'
                            onChangeText={(text) => setContentSearch(text)} />
                    </View>
                    <View style={styles.width20}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.button_search} onPress={() => onSearch()}>
                            <SearchIcon width={23} height={23} />
                        </TouchableOpacity>
                    </View>
                </View>

                <FlatList
                    data={complaints}
                    renderItem={Item}
                    keyExtractor={(item, index) => String(index)}
                    style={styles.nlList}
                    showsVerticalScrollIndicator={false}
                    // onRefresh={() => setIsRefresh(true)}
                    // refreshing={false}
                    contentContainerStyle={{ flexGrow: 1 }}
                    ListEmptyComponent={complaints != null && <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                        <Empty height={100} width={100}></Empty>
                    </View>}
                />
            </View>
        </Screen >
    );
}

const styles = StyleSheet.create({
    h_circle_number: {
        color: '#fff',
        fontWeight: 'bold',
    },
    h_circle_blue: {
        width: 25,
        height: 25,
        backgroundColor: '#465CDB',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25 / 2,
    },
    row__info: {
        paddingBottom: 13,
        width: '100%'
    },

    row__info__child__text: {

        flexDirection: 'column',

    },
    row__info__child__text1: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15,

    },
    row__info__child__text3: {
        fontSize: 14,
        color: '#B9B9B9',
        paddingTop: 5,
    },
    button_search: {
        width: '100%',
        height: 46,
        backgroundColor: '#7c257a',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pt10: {
        paddingTop: 10,
    },
    row__search: {
        flexWrap: 'wrap',
        paddingTop: 14,
        paddingBottom: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    width40: {
        width: '39%',
        marginRight: 10,
    },
    width20: {
        width: '15%',
    },
    width100: {
        width: '100%',
    },
    body_42_1: {
        backgroundColor: '#f6f7f8',
    },
    row__info__child: {
        paddingLeft: 14,
        paddingRight: 14,
        backgroundColor: '#fff',
        paddingTop: 17,
        paddingBottom: 17,
        borderWidth: 1,
        borderColor: '#e1e1e1',
        borderRadius: 6,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: '#222',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
    },
    box_calendar: {
        backgroundColor: '#fff',
        height: 46,
        borderWidth: 0,
        borderColor: '#e1e1e1',
        borderRadius: 6,
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: '#222',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 4,
        position: 'relative',
        paddingHorizontal: 15
    },
    text_calendar: {
        paddingLeft: 10,
        fontSize: 15
    },
    icon_select: {
        position: 'absolute',
        right: 17,
    },
    Calendar_icon1: {
        width: 20,
        height: 20,
        position: 'absolute'
    },
    text_input: {
        backgroundColor: '#fff',
        paddingLeft: 14,
        height: 46,
        borderWidth: 0,
        borderColor: '#e1e1e1',
        borderRadius: 6,
        justifyContent: 'center',
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.1,
        elevation: 4,
        fontSize: 14,


    }

});

export default Complains
