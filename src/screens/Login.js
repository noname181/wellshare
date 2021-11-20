import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert} from "react-native";

import Logo from '../images/logo.png';
export default function Login() {
    const onPress = () => Alert.alert('Hello');
    return (
        <View style={styles.nlWrapper}>
            <View style={styles.nlBg1}></View>
            <View style={styles.nlBg2}>
                <View style={styles.nlLogin}>
                    <View style={styles.nlLogo}>
                        <Image source={Logo}/>
                    </View>
                    <View style={styles.nlRelative}>
                        <TextInput style={styles.nlInput}  placeholder="전화번호"></TextInput>
                        <TouchableOpacity style={styles.nlButtonOTP} activeOpacity={0.8}>
                            <Text style={styles.nlColorWhite}>OTP 발송</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.nlRelative}>
                        <TextInput style={styles.nlInput}  placeholder="OTP"></TextInput>
                        <Text style={styles.nlCountNum}>00:56</Text>
                    </View>
                    
                    <TouchableOpacity style={styles.nlButtonLogin} activeOpacity={0.8}  onPress={onPress}>
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
    nlCountNum : {
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
