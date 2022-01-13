import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import axios from 'axios';
//Images
//import Logo from '../images/logo.png';
import LogoImage from '../images/svg/LogoImage';


export default function Login() {
    const [showOTP, setShowOTP] = useState(false);
    const [countDown, setCountDown] = useState(60);
    const [time, setTime] = useState({ h: 0, m: 0, s: 0 });
    const [timer, setTimer] = useState(0);
    const [hp, setHp] = useState("");

    const onPress = () => Alert.alert('Hello');

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
        }


        return () => {

        };
    }, [countDown]);

    const countDowns = () => {
        // Remove one second, set state so a re-render happens.
        setCountDown(seconds => seconds - 1);
    }

    const startTimer = () => {
        axios.post(`http://scsman23.cafe24.com/api/login.php`, { hp: 1235 })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        // setTimer(setInterval(countDowns, 1000));
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
                        <TextInput style={styles.nlInput} placeholder="전화번호"></TextInput>
                        <TouchableOpacity style={styles.nlButtonOTP} activeOpacity={0.8} onPress={() => startTimer()}>
                            <Text style={styles.nlColorWhite}>OTP 발송</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.nlRelative}>
                        <TextInput style={styles.nlInput} placeholder="OTP"></TextInput>
                        <Text style={styles.nlCountNum}>{time.m < 10 ? '0' + time.m : time.m}:{time.s < 10 ? '0' + time.s : time.s}</Text>
                    </View>

                    <TouchableOpacity style={styles.nlButtonLogin} activeOpacity={0.8} onPress={onPress}>
                        <Text style={[styles.nlColorWhite, styles.nlTextButton]}>로그인</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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
