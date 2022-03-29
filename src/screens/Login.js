import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert, Keyboard, ActivityIndicator, BackHandler } from "react-native";
import axios from '../helpers/axiosInterceptor';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../redux/actions'
//Images
//import Logo from '../images/logo.png';
import LogoImage from '../images/svg/LogoImage';
import Screen from '../components/Screen';
import SplashScreen from 'react-native-splash-screen';

export default function Login({ navigation }) {
    const [showOTP, setShowOTP] = useState(false);
    const [canSendOTP, setCanSendOTP] = useState(true);
    const [resendOTP, setResendOTP] = useState(false);
    const [OTP, setOTP] = useState("");
    const [countDown, setCountDown] = useState(180);
    const [time, setTime] = useState({ h: 0, m: 0, s: 0 });
    const [timer, setTimer] = useState(0);
    const [hp, setHp] = useState("");
    const [loadingOTP, setLoadingOTP] = useState(false);
    const [timeStart, setTimeStart] = useState(null);
    const dispatch = useDispatch()

    const role = useSelector(state => state.auth.role)
    const user = useSelector(state => state.auth.user)

    const timeStartRef = useRef(timeStart);
    const _setTimeStart = newText => {
        timeStartRef.current = newText;
    };

    useEffect(() => {
        _setTimeStart(timeStart)
        return () => {
        };
    }, [timeStart]);

    useEffect(() => {
        axios.interceptors.request.use(
            function (config) {
                if (user?.jwt) {
                    config.headers["Authorization"] = "Bearer " + user.jwt;

                }
                return config;

            },
            function (error) {

                return Promise.reject(error);
            }
        );
        axios.interceptors.response.use(
            function (response) {
                // Any status code range of 2xx
                if (response.data.msg == 'auth_fail') {
                    dispatch(actions.authActions.logout());
                    setTimeout(() => {
                        navigation.replace('Login');
                    }, 0)
                    return;
                } else
                    return response;
            },
            function (error) {
                console.log(error)
            }
        )
        return () => {

        };
    }, [user?.jwt]);

    useEffect(() => {



        // BackHandler.addEventListener('hardwareBackPress', function () {

        //     if (navigation.getState().routes.length == 1) {
        //         Alert.alert("웰쉐어", "어플을 종료할까요?", [
        //             {
        //                 text: '아니요',
        //                 onPress: () => {

        //                 }
        //             },
        //             {
        //                 text: '예',
        //                 onPress: () => {
        //                     BackHandler.exitApp();
        //                 }
        //             }
        //         ])
        //         return true;
        //     } else {
        //         navigation.goBack();
        //         return true;
        //     }

        // });
        if (role == 'admin') navigation.replace('Admin');
        else if (role == 'hospital') navigation.replace('Hospital');
        else if (role == 'delivery') navigation.replace('Delivery');
        else if (role == 'receiver') navigation.replace('User');

        setTimeout(() => {
            SplashScreen.hide();
        }, 500)


        return () => {
        };
    }, []);

    const onSubmit = () => {
        Keyboard.dismiss();
        if (hp == "") {
            Alert.alert(
                '웰쉐어',
                "Plese enter HP",
                [
                    {
                        text: "예",
                        onPress: () => { },
                        style: "yes",
                    },
                ]
            );
            return;
        }
        if (OTP == "") {
            Alert.alert(
                '웰쉐어',
                "Plese get and enter OTP",
                [
                    {
                        text: "예",
                        onPress: () => { },
                        style: "yes",
                    },
                ]
            );
            return;
        }
        if (countDown == 0) {
            Alert.alert(
                '웰쉐어',
                "OTP is expired",
                [
                    {
                        text: "예",
                        onPress: () => { },
                        style: "yes",
                    },
                ]
            );
            return;
        }
        axios.post(`/login.php`, { otp: OTP, hp: hp.replace('-', '') })
            .then(res => {
                let data = res.data;
                if (data.msg == 'wrong_otp') {
                    Alert.alert(
                        '웰쉐어',
                        "잘못된 인증번호입니다.",
                        [
                            {
                                text: "예",
                                onPress: () => { },
                                style: "yes",
                            },
                        ]
                    );
                }

                else {
                    clearInterval(timer);
                    setOTP("");
                    setHp("");
                    setCountDown(180);
                    setShowOTP(false);
                    setResendOTP(false);
                    setCanSendOTP(true);
                    dispatch(actions.authActions.login({ user: data.user, role: data.role }))
                    if (data.role == 'admin')
                        navigation.replace('Admin');
                    else if (data.role == 'hospital')
                        navigation.replace('Hospital');
                    else if (data.role == 'delivery')
                        navigation.replace('Delivery');
                    else
                        navigation.replace('User');
                }
            })
            .catch(err => {
                console.log(err);
            })
    };

    const secondsToTime = (secs) => {
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            h: hours,
            m: minutes,
            s: seconds
        };
        return obj;
    }



    useEffect(() => {
        let time = secondsToTime(countDown);
        setTime(time);
        if (countDown == 0) {
            clearInterval(timer);
            setResendOTP(true)
            setCanSendOTP(true);
        }


        return () => {

        };
    }, [countDown]);

    const countDowns = () => {
        // Remove one second, set state so a re-render happens.
        let seconds = Math.round((Date.now() - timeStartRef.current) / 1000);

        setCountDown(countDown => {
            if (180 - seconds > 0) {
                return 180 - seconds;
            } else
                return 0;
        });
    }

    const sendOTP = () => {
        Keyboard.dismiss();
        if (!hp) {
            Alert.alert(
                '웰쉐어',
                "Plese enter your phone number",
                [
                    {
                        text: "예",
                        onPress: () => { },
                        style: "yes",
                    },
                ]
            );
            return;
        }
        if (resendOTP) setCountDown(180);
        setLoadingOTP(true);
        setOTP("")

        axios.post(`/send_otp.php`, { hp: hp.replace('-', '') })
            .then(res => {
                setLoadingOTP(false);
                if (res.data.msg == 'nonmember') {
                    setCountDown(180);
                    setShowOTP(false);
                    setResendOTP(false);
                    setCanSendOTP(true);
                    Alert.alert(
                        '웰쉐어',
                        "대상자가 아니거나 전화번호를 잘못 입력하였습니다.",
                        [
                            {
                                text: "예",
                                onPress: () => { },
                                style: "yes",
                            },
                        ]
                    );
                } else {
                    setTimeStart(Date.now())
                    setTimer(setInterval(countDowns, 1000));
                    setShowOTP(true);
                    setCanSendOTP(false);
                    Alert.alert(
                        '웰쉐어',
                        "OTP: " + res.data.otp,
                        [
                            {
                                text: "예",
                                onPress: () => { },
                                style: "yes",
                            },
                        ]
                    );
                }

            })
            .catch(err => {
                console.log(err);
            })

    }

    return (
        <Screen style={{ padding: 0 }} keyboard={true}>
            <View style={styles.nlWrapper}>
                <View style={styles.nlBg1}></View>
                <View style={styles.nlBg2}>
                    <View style={styles.nlLogin}>
                        <View style={styles.nlLogo}>
                            <LogoImage width={142} height={67} />
                        </View>
                        <View style={styles.nlRelative}>
                            <TextInput style={styles.nlInput} keyboardType='numeric' placeholder="전화번호" value={hp} onChangeText={(text) => setHp(text)}></TextInput>

                            <View style={[{ opacity: canSendOTP ? 1 : 0.5 }]}>
                                <TouchableOpacity style={[styles.nlButtonOTP, { flexDirection: 'row' }]} activeOpacity={0.8} onPress={() => { !canSendOTP ? {} : sendOTP() }}>

                                    <Text style={styles.nlColorWhite}>{resendOTP ? '인증번호발송' : 'OTP 발송'}</Text>
                                    <ActivityIndicator size="small" color="#fff" style={{ marginLeft: 5, display: loadingOTP ? 'flex' : 'none' }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[styles.nlRelative, { opacity: showOTP ? 1 : 0 }]}>
                            <TextInput style={styles.nlInput} keyboardType='numeric' placeholder="OTP" value={OTP} onChangeText={(text) => setOTP(text)} ></TextInput>
                            <Text style={styles.nlCountNum}>{time.m < 10 ? '0' + time.m : time.m}:{time.s < 10 ? '0' + time.s : time.s}</Text>
                        </View>

                        <TouchableOpacity style={[styles.nlButtonLogin]} activeOpacity={0.8} onPress={() => onSubmit()}>
                            <Text style={[styles.nlColorWhite, styles.nlTextButton]}>로그인</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Screen>

    );
}
const styles = StyleSheet.create({
    nlInput: {
        paddingHorizontal: 15,
        fontSize: 15,
        borderStyle: 'solid',
        borderColor: '#f0f0f0',
        borderBottomWidth: 1,
        marginTop: 20,
        color: "#000000"
    },
    nlWrapper: {
        justifyContent: 'center',
        height: '100%',
        backgroundColor: '#7c257a',
        paddingHorizontal: 24
    },
    nlLogin: {
        backgroundColor: '#fff',
        // height: '80%',
        paddingVertical: 60,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: -60,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,

    },
    nlBg1: {
        height: '24%',
        backgroundColor: '#7c257a'
    },
    nlBg2: {
        height: '76%',
        backgroundColor: '#f2f2f2',
        marginHorizontal: -40,
        paddingHorizontal: 30,
        borderTopRightRadius: 44,
        borderTopLeftRadius: 44,
        minHeight: 540
    },
    nlButtonLogin: {
        backgroundColor: '#7c257a',
        height: 50,
        marginTop: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        fontSize: 30,
        fontWeight: 'bold'
    },
    nlButtonOTP: {
        backgroundColor: '#7c257a',
        height: 36,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        position: 'absolute',
        right: 0,
        bottom: 10
    },
    nlCountNum: {
        position: 'absolute',
        right: 0,
        bottom: 15,
        color: '#e40a0a',
        fontSize: 15,

    },
    nlColorWhite: {
        color: '#fff',
    },
    nlFont16: {
        fontSize: 16,
    },
    nlTextButton: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    nlLogo: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
    },
    nlRelative: {
        position: 'relative'
    }
});
