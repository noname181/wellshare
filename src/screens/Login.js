import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert, Keyboard } from "react-native";
import axios from '../helpers/axiosInterceptor';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../redux/actions'
//Images
//import Logo from '../images/logo.png';
import LogoImage from '../images/svg/LogoImage';


export default function Login({ navigation }) {
    const [showOTP, setShowOTP] = useState(false);
    const [resendOTP, setResendOTP] = useState(false);
    const [OTP, setOTP] = useState("");
    const [countDown, setCountDown] = useState(10);
    const [time, setTime] = useState({ h: 0, m: 0, s: 0 });
    const [timer, setTimer] = useState(0);
    const [hp, setHp] = useState("");

    const dispatch = useDispatch()

    const onSubmit = () => {
        Keyboard.dismiss();
        if (OTP == "") {
            Alert.alert(
                "Modio",
                "Plese enter OTP",
                [
                    {
                        text: "Yes",
                        onPress: () => { },
                        style: "yes",
                    },
                ]
            );
            return;
        }
        axios.post(`/login.php`, { otp: OTP, hp })
            .then(res => {
                if (res.data.msg == 'wrong_otp') {
                    Alert.alert(
                        "Modio",
                        "Wrong OTP",
                        [
                            {
                                text: "Yes",
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
                    setCountDown(10);
                    setShowOTP(false);
                    setResendOTP(false);
                    dispatch(allActions.userActions.login({ user_hp: hp }))
                    navigation.navigate('User')
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
        }


        return () => {

        };
    }, [countDown]);

    const countDowns = () => {
        // Remove one second, set state so a re-render happens.
        setCountDown(seconds => seconds - 1);
    }

    const sendOTP = () => {
        Keyboard.dismiss();
        if (!hp) {
            Alert.alert(
                "Modio",
                "Plese enter your phone number",
                [
                    {
                        text: "Yes",
                        onPress: () => { },
                        style: "yes",
                    },
                ]
            );
            return;
        }
        if (resendOTP) setCountDown(10);
        setOTP("")
        setShowOTP(true);
        setResendOTP(false);
        axios.post(`/user_otp.php`, { hp })
            .then(res => {

                setTimer(setInterval(countDowns, 1000));
                Alert.alert(
                    "Modio",
                    "OTP: " + res.data.otp,
                    [
                        {
                            text: "Yes",
                            onPress: () => { },
                            style: "yes",
                        },
                    ]
                );
            })
            .catch(err => {
                console.log(err);
            })

    }

    return (
        <View style={styles.nlWrapper}>
            <View style={styles.nlBg1}></View>
            <View style={styles.nlBg2}>
                <View style={styles.nlLogin}>
                    <View style={styles.nlLogo}>
                        <LogoImage width={142} height={67} />
                    </View>
                    <View style={styles.nlRelative}>
                        <TextInput style={styles.nlInput} keyboardType='numeric' placeholder="전화번호" value={hp} onChangeText={(text) => setHp(text)}></TextInput>

                        <View style={[{ opacity: showOTP && !resendOTP ? 0.5 : 1 }]}>
                            <TouchableOpacity style={styles.nlButtonOTP} activeOpacity={0.8} onPress={() => { showOTP && !resendOTP ? {} : sendOTP() }}>

                                <Text style={styles.nlColorWhite}>{resendOTP ? 'Resend OTP' : 'OTP 발송'}</Text>

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
        </View >
    );
}
const styles = StyleSheet.create({
    nlInput: {
        paddingHorizontal: 15,
        fontSize: 15,
        borderStyle: 'solid',
        borderColor: '#f0f0f0',
        borderBottomWidth: 1,
        marginTop: 20
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
        width: 90,
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
