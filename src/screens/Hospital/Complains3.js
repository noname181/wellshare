import React, { useState, useEffect, useRef, useCallback } from 'react'
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
import Calendar from '../../images/svg/CalendarIcon';
import { Picker } from '@react-native-picker/picker';
import MonthPicker from 'react-native-month-year-picker';
import CheckBox from '@react-native-community/checkbox';

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
    const [selectedValue, setSelectedValue] = useState(1);
    const [toggleCheckBox, setToggleCheckBox] = useState(true)
    const [isRefresh, setIsRefresh] = useState(false);

    const user = useSelector(state => state.auth.user)

    const checkBoxRef = useRef(toggleCheckBox);
    const dateRef = useRef(date);
    const hpRef = useRef(hpSearch);
    const contentRef = useRef(contentSearct);
    const valueRef = useRef(selectedValue);

    const _setToggleCheckBox = newText => {
        checkBoxRef.current = newText;
    };
    const _setSelectedValue = newText => {
        valueRef.current = newText;
    };

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
        _setDate(date)
        _setSelectedValue(selectedValue)

        return () => {

        };

    }, [hpSearch, contentSearct, date, selectedValue]);

    useEffect(() => {

        const unsubscribe = navigation.addListener('focus', () => {
            // do something

            loadComplaints();
        });
        const unsubscribe2 = navigation.addListener('blur', (e) => {
            // do something
            setTimeout(() => {
                navigation.getState().routes.forEach((v, i) => {
                    if (v.name == "Complains3" && i == (navigation.getState().routes.length - 1)) {

                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Complains2' }],
                        });
                    }
                })

            }, 0);

        });
        return () => {
            unsubscribe
            unsubscribe2
        };
    }, []);

    useEffect(() => {
        _setToggleCheckBox(toggleCheckBox)
        loadComplaints()
        return () => {

        };

    }, [toggleCheckBox]);

    useEffect(() => {
        if (isRefresh) {
            loadComplaints2();
            setIsRefresh(false)
        }
        return () => {
        };
    }, [isRefresh]);

    const loadComplaints = () => {
        axios.post(`/user_load_complaint.php`, { h_no: user.h_no, role: 'hospital', type: 'all', date: fortmatDate(), hp: hpRef.current.replace('-', ''), content: contentRef.current, type: checkBoxRef.current ? 'all' : '', week: valueRef.current })
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
    const loadComplaints2 = () => {
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
        return dateRef.current.getFullYear() + "-" + ((dateRef.current.getMonth() + 1) < 10 ? "0" + (dateRef.current.getMonth() + 1) : (dateRef.current.getMonth() + 1));
    }
    const fortmatDate2 = () => {
        return date.getFullYear() + "-" + ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1));
    }

    const onSearch = () => {
        loadComplaints2();
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
                        <Text style={styles.row__info__child__text3}>{item.com_date}</Text>
                    </View>
                </View>
                <View style={styles.h_circle_blue}>
                    <Text style={styles.h_circle_number}>{item.answers}</Text>
                </View>
            </TouchableOpacity>
        </View>

    );

    const showPicker = useCallback((value) => setShow(value), []);

    const onValueChange = useCallback(
        (event, newDate) => {
            const selectedDate = newDate || date;

            showPicker(false);
            setDate(selectedDate);
        },
        [date, showPicker],
    );

    return (
        <Screen style={styles.body_42_1}>
            <View style={{ flex: 1 }}>
                <View style={[styles.h_width_select_half]}>

                    <View style={[styles.nlFormControl, { paddingLeft: 15, flexShrink: 1 }, toggleCheckBox ? { opacity: 0.5 } : { opacity: 1 }]}>
                        {toggleCheckBox ?
                            <View style={{ flexDirection: 'row' }} >
                                <Calendar width={16} height={16} />
                                <Text style={{ color: "#9b9b9b", paddingLeft: 10 }}>{fortmatDate2()}</Text>
                            </View> :
                            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => showPicker(true)}>
                                <Calendar width={16} height={16} />
                                <Text style={{ color: "#000", paddingLeft: 10 }}>{fortmatDate2()}</Text>
                            </TouchableOpacity>
                        }
                    </View>

                    <View style={[styles.nlFormControl, { flexShrink: 1 }, toggleCheckBox ? { opacity: 0.7 } : { opacity: 1 }]}>
                        <Picker
                            selectedValue={selectedValue}
                            style={styles.nlPicker}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            enabled={!toggleCheckBox}
                        >
                            <Picker.Item label="1???" value="1" />
                            <Picker.Item label="2???" value="2" />

                        </Picker>
                    </View>
                    <TouchableOpacity style={[styles.nlFormControl, { width: 75, marginRight: 0, paddingLeft: 5 }]} onPress={() => setToggleCheckBox(!toggleCheckBox)}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            tintColors={{ true: '#9b9b9b', false: '#9b9b9b' }}
                        />
                        <Text>??????</Text>
                    </TouchableOpacity>
                </View>
                {/* <TouchableOpacity activeOpacity={1} style={styles.box_calendar} onPress={showDatepicker}>
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
                )} */}
                <View style={styles.row__search}>
                    <View style={styles.width40}>
                        <TextInput value={hpSearch} style={styles.text_input} placeholder='????????????'
                            keyboardType='numeric'
                            onChangeText={(text) => setHpSearch(text)} />
                    </View>
                    <View style={styles.width40}>
                        <TextInput style={styles.text_input} value={contentSearct} placeholder='??????'
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
                    onRefresh={() => setIsRefresh(true)}
                    refreshing={false}
                    contentContainerStyle={{ flexGrow: 1 }}
                    ListEmptyComponent={complaints != null && <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                        <Empty height={100} width={100}></Empty>
                    </View>}
                />
                {show && (
                    <MonthPicker okButton="???" cancelButton="?????????"
                        onChange={onValueChange}
                        value={date}
                        locale="ko"
                    />
                )}
            </View>
        </Screen>
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
        paddingTop: 14,
        paddingBottom: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    width40: {
        width: '50%',
        marginRight: 10,
        flexShrink: 1
    },
    width20: {
        width: 75,
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
        color: "#000000"

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
        height: 46,
        width: '50%',
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: 10,
        shadowColor: '#222',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 4,
    },
    nlPicker: {
        width: '100%',
        height: '100%',
    },


});

export default Complains
