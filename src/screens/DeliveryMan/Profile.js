import React, { useState } from 'react';
import { View, StyleSheet, Text, Switch, TouchableOpacity, Platform, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Screen from '../../components/Screen';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/actions'
//Images
import DeliveryMyProfile1 from '../../images/svg/DeliveryMyProfile1';
import DeliveryMyProfile2 from '../../images/svg/DeliveryMyProfile2';
import DeliveryMyProfile3 from '../../images/svg/DeliveryMyProfile3';
import DeliveryMyProfile4 from '../../images/svg/DeliveryMyProfile4';
import DeliveryMyProfile5 from '../../images/svg/DeliveryMyProfile5';
import DeliveryMyProfile6 from '../../images/svg/DeliveryMyProfile6';
import axios from '../../helpers/axiosInterceptor';

function My_Profile({ navigation }) {
    const user = useSelector(state => state.auth.user)
    let tempDateStart = new Date();
    tempDateStart.setHours(user?.d_working_start.split(":")[0])
    tempDateStart.setMinutes(user?.d_working_start.split(":")[1])
    let tempDateEnd = new Date();
    tempDateEnd.setHours(user?.d_working_end.split(":")[0])
    tempDateEnd.setMinutes(user?.d_working_end.split(":")[1])
    console.log(tempDateEnd.getTime())
    const [isEnabled, setIsEnabled] = useState(user?.d_is_active == 1 ? true : false);
    const [dateStart, setDateStart] = useState(tempDateStart);
    const [dateEnd, setDateEnd] = useState(tempDateEnd);
    const [mode, setMode] = useState('date');
    const [showStart, setShowStart] = useState(false);
    const [showEnd, setShowEnd] = useState(false);
    const [workingStart, setWorkingStart] = useState(user?.d_working_start);
    const [workingEnd, setWorkingEnd] = useState(user?.d_working_end);
    const [timeType, setTimeType] = useState('start');
    const dispatch = useDispatch();


    const toggleSwitch = (value) => {
        setIsEnabled(previousState => !previousState);
        axios.post(`/change_delivery_working_time.php`, {
            type: 'active',
            d_no: user?.d_no,
            active: value ? 1 : 0
        }).then(res => {
            dispatch(actions.authActions.update_auth({ d_is_active: value ? 1 : 0 }));
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    const LogOut = () => {
        dispatch(actions.authActions.logout());
        setTimeout(() => {
            navigation.navigate('Login');
        }, 0)

    }

    const converTime = (date) => {
        return (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes());
    }

    const onChange = (event, selectedDate) => {
        setShowStart(false)
        setShowEnd(false)
        const currentDate = new Date(selectedDate || date);
        if (timeType == 'start') {
            setWorkingStart(converTime(currentDate))
            setDateStart(currentDate)

        }
        else if (timeType == 'end') {
            setWorkingEnd(converTime(currentDate))
            setDateEnd(currentDate)

        }
        axios.post(`/change_delivery_working_time.php`, {
            type: timeType,
            time: converTime(currentDate),
            d_no: user?.d_no
        }).then(res => {
            if (timeType == 'start')
                dispatch(actions.authActions.update_auth({ d_working_start: converTime(currentDate) }));
            else if (timeType == 'end')
                dispatch(actions.authActions.update_auth({ d_working_end: converTime(currentDate) }));
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    };

    const showMode = (currentMode, type) => {
        type == 'start' ? setShowStart(true) : setShowEnd(true);
        setMode(currentMode);
    };


    const showTimepicker = (type) => {
        showMode('time', type);
    };

    return (
        <Screen style={styles.nlContainer}>
            <View style={[styles.nlCard, { backgroundColor: '#fff' }]}>
                {/* Item Info */}
                <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween]}>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <DeliveryMyProfile1 height={18} width={18} />
                        <Text style={[styles.nlColorGrey, styles.nlMarginLeft10]}>업무시간 설정:  </Text>
                        <TouchableOpacity onPress={() => {
                            setTimeType('start');
                            showTimepicker('start');
                        }}>
                            <Text>{workingStart}</Text>
                        </TouchableOpacity>
                        <Text>  -  </Text>
                        <TouchableOpacity onPress={() => {
                            setTimeType('end');
                            showTimepicker('end');
                        }}>
                            <Text>{workingEnd}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <Switch
                            trackColor={{ false: "#767577", true: "#f2d4f1" }}
                            thumbColor={isEnabled ? "#7c257a" : "#fff"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={value => toggleSwitch(value)}
                            value={isEnabled}
                        />
                    </View>
                </View>
            </View>
            <View style={[styles.nlCard, { backgroundColor: '#fff' }]}>
                {/* Item Info */}
                <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, styles.nlLineBottom]}>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <DeliveryMyProfile2 height={18} width={18} />
                        <Text style={[styles.nlColorGrey, styles.nlMarginLeft10]}>아이디</Text>
                    </View>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <Text style={styles.nlColorBlack}>{user?.d_name}</Text>
                    </View>
                </View>
                {/* Item Info */}
                <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, styles.nlLineBottom]}>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <DeliveryMyProfile3 height={18} width={18} />
                        <Text style={[styles.nlColorGrey, styles.nlMarginLeft10]}>기사명</Text>
                    </View>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <Text style={styles.nlColorBlack}>박지우</Text>
                    </View>
                </View>
                {/* Item Info */}
                <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, styles.nlLineBottom]}>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <DeliveryMyProfile5 height={18} width={18} />
                        <Text style={[styles.nlColorGrey, styles.nlMarginLeft10]}>이메일</Text>
                    </View>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <Text style={styles.nlColorBlack}>{user?.d_email}</Text>
                    </View>
                </View>
                {/* Item Info */}
                <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween]}>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <DeliveryMyProfile4 height={18} width={18} />
                        <Text style={[styles.nlColorGrey, styles.nlMarginLeft10]}>주소</Text>
                    </View>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <Text style={styles.nlColorBlack}>{user?.d_address}</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.nlCard, { backgroundColor: '#fff' }]}>
                {/* Item Info */}
                <TouchableOpacity style={[styles.nlItemInfo, styles.nlRow]} onPress={() => LogOut()}>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <DeliveryMyProfile6 height={18} width={18} />
                        <Text style={[styles.nlColorGrey, styles.nlMarginLeft10]}>로그아웃</Text>
                    </View>
                </TouchableOpacity>

            </View>
            {showStart && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={dateStart}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    minuteInterval={5}
                />
            )}
            {showEnd && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={dateEnd}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    minuteInterval={5}
                />
            )}
        </Screen>
    );
}
const styles = StyleSheet.create({

    nlCard: {
        paddingHorizontal: 16,
        marginBottom: 14,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#e1e1e1',
        borderRadius: 10,
        overflow: 'hidden',
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
    nlRow: {
        flexDirection: 'row',
        flexWrap: 'nowrap'
    },
    nlBetween: {
        justifyContent: 'space-between'
    },
    nlAlignCenter: {
        alignItems: 'center'
    },
    nlItemInfo: {
        paddingVertical: 6,
        minHeight: 46

    },
    nlLineBottom: {
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
    },
    nlColorWhite: {
        color: "#fff"
    },
    nlColorGrey: {
        color: '#7d7d7d'
    },
    nlColorBlack: {
        color: '#000'
    },
    nlMarginRight10: {
        marginRight: 10
    },
    nlMarginLeft10: {
        marginLeft: 10
    }
});

export default My_Profile
