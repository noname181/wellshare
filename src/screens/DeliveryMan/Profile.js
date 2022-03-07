import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Switch, TouchableOpacity, Platform, Pressable, Modal, Alert, Dimensions } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Screen from '../../components/Screen';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/actions'
import axios from '../../helpers/axiosInterceptor';
import { CommonActions } from '@react-navigation/native';
import BackgroundGeolocation from '@mauron85/react-native-background-geolocation';

//Images
import DeliveryMyProfile1 from '../../images/svg/DeliveryMyProfile1';
import DeliveryMyProfile2 from '../../images/svg/DeliveryMyProfile2';
import DeliveryMyProfile3 from '../../images/svg/DeliveryMyProfile3';
import DeliveryMyProfile4 from '../../images/svg/DeliveryMyProfile4';
import DeliveryMyProfile5 from '../../images/svg/DeliveryMyProfile5';
import DeliveryMyProfile6 from '../../images/svg/DeliveryMyProfile6';


const windowWidth = Dimensions.get('window').width;

function My_Profile({ navigation }) {
    const user = useSelector(state => state.auth.user)
    let tempDateStart = new Date();
    tempDateStart.setHours(user?.d_working_start?.split(":")[0])
    tempDateStart.setMinutes(user?.d_working_start?.split(":")[1])
    let tempDateEnd = new Date();
    tempDateEnd.setHours(user?.d_working_end?.split(":")[0])
    tempDateEnd.setMinutes(user?.d_working_end?.split(":")[1])
    const [isEnabled, setIsEnabled] = useState(user?.d_is_active == 1 ? true : false);
    const [dateStart, setDateStart] = useState(tempDateStart);
    const [dateEnd, setDateEnd] = useState(tempDateEnd);
    const [mode, setMode] = useState('date');
    const [showStart, setShowStart] = useState(false);
    const [showEnd, setShowEnd] = useState(false);
    const [workingStart, setWorkingStart] = useState(user?.d_working_start);
    const [workingEnd, setWorkingEnd] = useState(user?.d_working_end);
    const [timeType, setTimeType] = useState('start');
    const [modalChangeModeVisible, setModalChangeModeVisible] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            BackgroundGeolocation.stop();
        };
    }, []);

    useEffect(() => {
        if (user?.d_no) checkWorkingTime();
        return () => {
        };
    }, [user?.d_working_start, user?.d_working_end, user?.d_is_active]);

    const checkWorkingTime = () => {
        axios.post(`/check_delivery_working_time.php`, { d_no: user.d_no })
            .then(res => {
                let data = res.data;
                if (data.is_working_time) {
                    BackgroundGeolocation.checkStatus(status => {
                        if (!status.isRunning) {
                            BackgroundGeolocation.start(); //triggers start on start event
                        }
                    });
                } else {
                    BackgroundGeolocation.checkStatus(status => {
                        if (status.isRunning) {
                            BackgroundGeolocation.stop(); //triggers start on start event
                        }
                    });
                }
            })
            .catch(err => {
                console.log(err);
            })

    }


    const toggleSwitch = (value) => {
        setIsEnabled(previousState => !previousState);
        axios.post(`/change_delivery_working_time.php`, {
            type: 'active',
            d_no: user?.d_no,
            active: value ? 1 : 0
        }).then(res => {
            dispatch(actions.authActions.update_auth({ d_is_active: value ? 1 : 0 }));
        }).catch(err => {
            console.log(err)
        })
    }

    const LogOut = () => {
        dispatch(actions.authActions.logout());
        setTimeout(() => {
            navigation.replace('Login');
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

    const changeMode = (mode) => {
        setModalChangeModeVisible(false)
        axios.post(`/change_mode.php`, {
            mode,
            hp: user?.d_hp
        }).then(res => {

            let data = res.data;
            if (data.msg == 'non_registered') {
                Alert.alert('웰쉐어', "You don't have an account in this mode! ")
                return;
            }

            dispatch(actions.authActions.logout());
            dispatch(actions.authActions.login({ user: data.user, role: data.role }))
            if (data.role == 'admin') {
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [
                            { name: 'Admin' }

                        ],
                    })
                );
            }
            else if (data.role == 'hospital') {
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [
                            { name: 'Hospital' }

                        ],
                    })
                );
            }

            else if (data.role == 'delivery') {
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [
                            { name: 'Delivery' }

                        ],
                    })
                );
            }
            else {
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [
                            { name: 'User' }

                        ],
                    })
                );
            }
        }).catch(err => {
            console.log(err)
        })
    }


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
                            <Text style={{ color: "#000" }}>{workingStart}</Text>
                        </TouchableOpacity>
                        <Text style={{ color: "#000" }}>  -  </Text>
                        <TouchableOpacity onPress={() => {
                            setTimeType('end');
                            showTimepicker('end');
                        }}>
                            <Text style={{ color: "#000" }}>{workingEnd}</Text>
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
                    <View style={[styles.nlRow, styles.nlAlignCenter, { paddingRight: 30, flexDirection: 'row' }]}>
                        <DeliveryMyProfile2 height={18} width={18} />
                        <Text style={[styles.nlColorGrey, styles.nlMarginLeft10]}>아이디</Text>
                    </View>
                    <View style={[styles.nlRow, styles.nlAlignCenter, { flex: 1, alignItems: 'flex-end' }]}>
                        <Text style={styles.nlColorBlack}>{user?.d_hp}</Text>
                    </View>
                </View>
                {/* Item Info */}
                <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, styles.nlLineBottom]}>
                    <View style={[styles.nlRow, styles.nlAlignCenter, { paddingRight: 30, flexDirection: 'row' }]}>
                        <DeliveryMyProfile3 height={18} width={18} />
                        <Text style={[styles.nlColorGrey, styles.nlMarginLeft10]}>기사명</Text>
                    </View>
                    <View style={[styles.nlRow, styles.nlAlignCenter, { flex: 1, alignItems: 'flex-end' }]}>
                        <Text style={styles.nlColorBlack}>{user?.d_name}</Text>
                    </View>
                </View>
                {/* Item Info */}
                <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, styles.nlLineBottom]}>
                    <View style={[styles.nlRow, styles.nlAlignCenter, { paddingRight: 30, flexDirection: 'row' }]}>
                        <DeliveryMyProfile5 height={18} width={18} />
                        <Text style={[styles.nlColorGrey, styles.nlMarginLeft10]}>이메일</Text>
                    </View>
                    <View style={[styles.nlRow, styles.nlAlignCenter, { flex: 1, alignItems: 'flex-end' }]}>
                        <Text style={styles.nlColorBlack}>{user?.d_email}</Text>
                    </View>
                </View>
                {/* Item Info */}
                <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween]}>
                    <View style={[styles.nlRow, styles.nlAlignCenter, { paddingRight: 30, flexDirection: 'row' }]}>
                        <DeliveryMyProfile4 height={18} width={18} />
                        <Text style={[styles.nlColorGrey, styles.nlMarginLeft10]}>주소</Text>
                    </View>
                    <View style={[styles.nlRow, styles.nlAlignCenter, { flex: 1, alignItems: 'flex-end' }]}>
                        <Text style={[styles.nlColorBlack, { textAlign: 'right' }]}>{user?.d_address ? (user?.d_address + (user?.d_address_detail ? ' - ' + user?.d_address_detail : '')) : ''}</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.nlCard, { backgroundColor: '#fff' }]}>
                {/* Item Info */}
                <TouchableOpacity style={[styles.nlItemInfo, styles.nlRow, styles.nlLineBottom]} onPress={() => setModalChangeModeVisible(true)}>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <DeliveryMyProfile6 height={18} width={18} />
                        <Text style={[styles.nlColorGrey, styles.nlMarginLeft10]}>모드변경</Text>
                    </View>
                </TouchableOpacity>
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
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalChangeModeVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalChangeModeVisible);
                }}
            >
                <Pressable style={styles.centeredView} onPress={() => setModalChangeModeVisible(false)}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            style={[styles.modal_button, { marginBottom: 10 }]}
                            onPress={() => changeMode('admin')}
                        >
                            <Text style={styles.textModalStyle}>관리자</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.modal_button, { marginBottom: 10 }]}
                            onPress={() => changeMode('hospital')}
                        >
                            <Text style={styles.textModalStyle}>보건소</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.modal_button]}
                            onPress={() => changeMode('receiver')}
                        >
                            <Text style={styles.textModalStyle}>수령인</Text>
                        </TouchableOpacity>
                    </View>
                </Pressable>
            </Modal>
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
        alignItems: 'center',

    },
    nlItemInfo: {
        paddingVertical: 15,
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 30,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modal_button: {
        backgroundColor: "#7c257a",
        borderRadius: 5,
        width: windowWidth * 0.75,
        paddingVertical: 15,
        alignItems: 'center'
    },
    textModalStyle: {
        color: "#fff"
    }
});

export default My_Profile
