import React, { useState, useEffect } from 'react'
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



function Complains1({ navigation }) {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [searchValue1, setSearchValue1] = useState('');
    const [searchValue2, setSearchValue2] = useState('');
    const [complaints, setComplaints] = useState(null);

    const user = useSelector(state => state.auth.user)


    useEffect(() => {
        loadComplaints();
        return () => {

        };
    }, []);

    const loadComplaints = () => {
        axios.post(`/user_load_complaint.php`, { h_no: user.h_no, role: 'hospital' })
            .then(res => {
                console.log(res)
                setComplaints(res.data.complaints.filter(v => {
                    return v.com_confirm_yn == 'y';
                }))

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
        return date.getFullYear() + "/" + ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) + "/" + date.getDate();
    }

    const Item = ({ item, index }) => (
        <View style={styles.row__info}>
            <TouchableOpacity style={styles.row__info__child} onPress={() => navigation.navigate('ComplainView', {
                com_no: item.com_no,
                complaint: item
            })}>
                <View style={styles.row__info__child__text}>
                    <Text style={styles.row__info__child__text1}>{item.com_text}</Text>
                    <Text style={styles.row__info__child__text2}>|</Text>
                    <Text style={styles.row__info__child__text3}>{item.com_hp}</Text>
                </View>
                <View style={styles.h_circle_blue}>
                    <Text style={styles.h_circle_number}>0</Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <Screen style={styles.body_42_1}>
            <View>
                <TouchableOpacity activeOpacity={1} style={styles.box_calendar} onPress={showDatepicker}>
                    <CalendarIcon width={16} height={16} />
                    <Text style={styles.text_calendar}>{fortmatDate()}</Text>
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
                        <TextInput value={searchValue1} style={styles.text_input} placeholder='전화번호'
                            keyboardType='numeric'
                            onChangeText={(text) => setSearchValue1(text)} />
                    </View>
                    <View style={styles.width40}>
                        <TextInput style={styles.text_input} value={searchValue2} placeholder='정보'
                            keyboardType='numeric'
                            onChangeText={(text) => setSearchValue2(text)} />
                    </View>
                    <View style={styles.width20}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.button_search}>
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

                {/* <View style={styles.row__info}>
                    <View style={styles.row__info__child}>
                        <View style={styles.row__info__child__text}>
                            <Text style={styles.row__info__child__text1}>조형래</Text>
                            <Text style={styles.row__info__child__text2}>|</Text>
                            <Text style={styles.row__info__child__text3}>010-2009-7723</Text>
                        </View>
                        <View style={styles.h_circle_blue}>
                            <Text style={styles.h_circle_number}>4</Text>
                        </View>
                    </View>
                </View> */}
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
        display: 'flex',
        paddingBottom: 13,
        width: '100%'
    },

    row__info__child__text: {

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    row__info__child__text1: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15,

    },
    row__info__child__text2: {
        paddingLeft: 5,
        paddingRight: 5,
        color: '#e1e1e1',
        fontSize: 16,
    },
    row__info__child__text3: {
        fontSize: 15,
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
        paddingTop: 21,
        paddingBottom: 21,
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

export default Complains1
