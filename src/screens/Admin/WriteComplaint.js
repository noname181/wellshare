import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, ScrollView, Alert } from 'react-native';
import Screen from '../../components/Screen';
import axios from '../../helpers/axiosInterceptor';
import { useSelector } from 'react-redux'


function WriteComplain({ route, navigation }) {
    const [complaint, setComplaint] = useState('');

    const user = useSelector(state => state.auth.user)
    const { b_no, h_no, d_no } = route.params;

    const submit = () => {
        axios.post(`/user_write_complaint.php`, { m_no: user.m_no, b_no, complaint, h_no, role: 'manager', name: user?.m_name, hp: user.m_hp })
            .then(res => {
                setComplaint('');
                navigation.navigate('ListView', {
                    is_writed: true,
                    b_no
                });
                Alert.alert('웰쉐어', "완료되었습니다.", [

                    {
                        text: '예',
                        onPress: () => {
                            navigation.navigate('ComplaintStack', {
                                is_writed: true,
                                b_no
                            });
                        },
                        style: "yes",
                    },
                ])
            })
            .catch(err => {

            })

    }


    return (
        <ScrollView>
            <Screen >
                <View style={[styles.nlCard, styles.nlWritePart]}>
                    <View style={styles.nlTextInput}>
                        <TextInput multiline={true}
                            numberOfLines={8}
                            style={{ textAlignVertical: 'top', color: "#000000" }}
                            value={complaint}
                            onChangeText={(text) => setComplaint(text)}
                            placeholder={'민원을 작성하세요.'}
                        >
                        </TextInput>
                    </View>

                    <TouchableOpacity onPress={() => submit()}>
                        <Text style={[styles.nlFont16, styles.nlBold, styles.nlButtonWhite]} >
                            저장
                        </Text>
                    </TouchableOpacity>
                </View>
            </Screen>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    nlCard: {
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
    },
    nlBetween: {
        justifyContent: 'space-between'
    },
    nlAlignCenter: {
        alignItems: 'center'
    },
    nlCardSpace: {
        padding: 20
    },
    nlQuestion: {
        backgroundColor: '#fff'
    },
    nlAnswer: {
        backgroundColor: '#f5f5f5'
    },
    nlIcon: {
        color: '#fff',
        backgroundColor: '#6d6d6d',
        width: 24,
        height: 24,
        borderRadius: 20,
        textAlign: 'center',
        paddingTop: 1,
        marginRight: 8
    },
    nlIconQ: {
        backgroundColor: '#7c257a'
    },
    nlTitle: {
        fontSize: 18,
        fontWeight: 'bold',

    },
    nlFilePart: {
        paddingVertical: 5,
        marginTop: 10,
        height: 40
    },
    nlFileName: {
        fontSize: 14,
        maxWidth: '70%'
    },
    nlDate: {
        color: '#b1b1b1',
        fontSize: 13,
    },
    nlRelative: {
        position: 'relative'
    },
    nlLineVerticle: {
        height: 12,
        width: 1,
        backgroundColor: '#b1b1b1',
        marginHorizontal: 14,
        marginTop: 3
    },
    nlActions: {
        minWidth: 56,
    },
    nlActionIcon: {
        height: 16
    },
    nlText: {
        fontSize: 14,
        maxWidth: '76%'
    },
    nlButtonWhite: {
        backgroundColor: '#fff',
        color: '#000',
        marginTop: 10,
        fontSize: 18,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#e1e1e1',
        borderRadius: 5,
        width: 140,
        textAlign: 'center',
        height: 50,
        lineHeight: 28
    },
    nlFont16: {
        fontSize: 16,
    },
    nlBold: {
        fontWeight: 'bold',
    },
    nlFormControl: {
        marginTop: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#e1e1e1',
        borderRadius: 5,
        overflow: 'hidden',
        justifyContent: 'center'
    },
    nlPicker: {
        width: '100%',
        height: 40,

    },
    nlTextInput: {
        marginTop: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#e1e1e1',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 0
    },
    nlMarginTop10: {
        marginTop: 10
    },
    nlWritePart: {
        padding: 20,
        backgroundColor: '#fff'
    }

});

export default WriteComplain
