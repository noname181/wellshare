import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Screen from '../../components/Screen';
//Images
import DeleteIcon from '../../images/svg/DeleteIcon';
import DownloadIcon from '../../images/svg/DownloadIcon';
import { useSelector } from 'react-redux'
import axios from '../../helpers/axiosInterceptor';


function ComplainView({ route, navigation }) {
    const [answer, setAnswer] = useState("");
    const [complaint, setComplaint] = useState({})

    const user = useSelector(state => state.auth.user)
    const { com_no } = route.params;

    useEffect(() => {

        const unsubscribe = navigation.addListener('focus', () => {
            // do something
            loadComplaint();
        });
        return () => {
            unsubscribe
        };
    }, []);

    const loadComplaint = () => {
        axios.post(`/complaint_detail.php`, { com_no })
            .then(res => {
                setComplaint(res.data.complaint)
            })
            .catch(err => {

            })

    }

    const submit = () => {
        axios.post(`/user_answer_complaint.php`, { com_no: complaint.com_no, content_no: complaint.content_no, answer, m_no: user?.m_no, role: 'manager', name: user?.m_name })
            .then(res => {
                Alert.alert('웰쉐어', "성공적인", [

                    {
                        text: '예',
                        onPress: () => {
                            setAnswer("")
                            loadComplaint();
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
                <View style={styles.nlCard}>
                    <View style={[styles.nlQuestion, styles.nlCardSpace, styles.nlRow]}>
                        <View>
                            <Text style={[styles.nlIcon, styles.nlIconQ]}>Q</Text>
                        </View>
                        <View style={{ flexGrow: 1 }}>
                            <View style={styles.nlRelative}>
                                <Text style={styles.nlTitle}>#{complaint.b_no} - {complaint?.com_text}</Text>
                            </View>
                            {/* <Text style={[styles.nlMarginTop10, styles.nlFileName]}>{complaint?.content}</Text> */}
                            <Text style={[styles.nlDate, styles.nlMarginTop10]}>{complaint?.com_regdate}</Text>
                        </View>
                    </View>
                    {complaint?.answers?.length > 0 ? complaint?.answers?.map((v, i) => <View key={i} style={[styles.nlAnswer, styles.nlCardSpace, styles.nlRow]}>
                        <View>
                            <Text style={styles.nlIcon}>A</Text>
                        </View>
                        <View style={{ flexGrow: 1 }}>
                            <View style={[styles.nlRow, styles.nlBetween]}>
                                <Text style={[styles.nlText,]}>{v.writter_name}: {v?.ca_content}</Text>
                                {/* <TouchableOpacity style={{ marginTop: 2 }}>
                                    <DeleteIcon width={13} height={16} />
                                </TouchableOpacity> */}

                            </View>

                            {/* <View style={[styles.nlFilePart, styles.nlRow, styles.nlBetween]}>
                                <Text style={styles.nlFileName} numberOfLines={1}>1. Screen_short_2021-11-06</Text>
                                <View style={styles.nlActions, styles.nlRow}>
                                    <TouchableOpacity>
                                        <DeleteIcon width={13} height={16} />
                                    </TouchableOpacity>
                                    <Text style={styles.nlLineVerticle}></Text>
                                    <TouchableOpacity style={{ paddingTop: 2 }}>
                                        <DownloadIcon width={13} height={13} />
                                    </TouchableOpacity>
                                </View>
                            </View> */}
                            <Text style={[styles.nlDate, { marginTop: 10 }]}>{v?.ca_regdate}</Text>
                        </View>
                    </View>) : null}
                </View>
                <View style={[styles.nlCard, styles.nlWritePart]}>
                    {/* <View style={styles.nlFormControl}>
                        <Picker
                            selectedValue={selectedValue}
                            style={styles.nlPicker}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="안내사항" value="java" />
                            <Picker.Item label="1입니다공지사항 " value="js" />
                        </Picker>
                    </View> */}
                    <View style={[styles.nlTextInput]}>
                        <TextInput multiline={true}
                            numberOfLines={8}
                            style={{ textAlignVertical: 'top' }}
                            placeholder={"답변하세요."}
                            value={answer}
                            onChangeText={(text) => setAnswer(text)}
                        >

                        </TextInput>
                    </View>


                    <TouchableOpacity onPress={submit}>
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
        paddingVertical: 5
    },
    nlMarginTop10: {
        marginTop: 10
    },
    nlWritePart: {
        padding: 20,
        backgroundColor: '#fff'
    }

});

export default ComplainView
