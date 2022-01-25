import React, { createRef, useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, Alert, Linking, TextInput } from 'react-native';
import Screen from '../../components/Screen';
import ImagePicker, { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import ActionSheet from "react-native-actions-sheet";
//Images
import boxImage from '../../images/deliveryman/box.png';
import SMSIcon from '../../images/svg/SMSIcon';
import PhoneIcon from '../../images/svg/PhoneIcon';
import axios from '../../helpers/axiosInterceptor';

const actionSheetRefPhoto = createRef();
const actionSheetRefText = createRef();
const actionSheetRefSign = createRef();

const createFormData = (photo, body = {}) => {
    const data = new FormData();

    data.append('photo', {

        name: photo?.fileName,
        type: photo?.type,
        uri: Platform.OS === 'ios' ? photo?.uri.replace('file://', '') : photo?.uri,
    });

    Object.keys(body).forEach((key) => {
        data.append(key, body[key]);
    });
    console.log(data)
    return data;
};

function ListView({ navigation, route }) {
    const [photo, setPhoto] = useState(null);
    const [sign, setSign] = useState(null);
    const [booking, setBooking] = useState(null);
    const [completedText, setCompletedText] = useState("");
    const [isType, setIsType] = useState(false);
    const [isSign, setIsSign] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const { b_no, backFromSign } = route.params;

    useEffect(() => {
        loadBooking();
        return () => {

        };
    }, []);

    useEffect(() => {
        if (backFromSign && isSign) {
            actionSheetRefSign.current?.show();
            setIsSign(false);
        }
        return () => {

        };
    });

    useEffect(() => {
        if (photo) onSubmit();
        return () => {

        };
    }, [photo]);

    useEffect(() => {
        if (sign) onSubmitSign();
        return () => {

        };
    }, [sign]);

    const loadBooking = () => {
        axios.post(`/booking_detail.php`, { b_no })
            .then(res => {
                console.log(res.data);
                setBooking(res.data.booking)


            })
            .catch(err => {
                console.log(err);
            })

    }

    const openLibrary = (sign) => {
        launchImageLibrary({ noData: true, }, (response) => {
            console.log(response);
            if (!response.didCancel) {
                actionSheetRefPhoto.current?.hide();
                if (sign) {
                    setSign(response.assets[0]);
                }
                else setPhoto(response.assets[0]);

            }
        });
    }

    const openCamera = () => {
        launchCamera({ noData: true }, (response) => {
            console.log(response);
            if (!response.didCancel) {
                actionSheetRefPhoto.current?.hide();
                setPhoto(response.assets[0]);

            }
        });
    }
    const handleUploadSign = () => {
        axios.post(`/upload_sign.php`, createFormData(sign, { b_no }), {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })

            .then((res) => {
                console.log('response', res);
                setPhoto(null)
                Alert.alert("Modio", "Success", [

                    {
                        text: "Yes",
                        onPress: () => {
                            actionSheetRefSign.current?.hide();
                            setIsCompleted(true);
                        },
                        style: "yes",
                    },
                ])
                loadBooking();
            })
            .catch((error) => {
                console.log('error', error);
            });
    };

    const handleUploadPhoto = () => {
        axios.post(`/update_booking.php`, createFormData(photo, { b_no, text: completedText }), {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })

            .then((res) => {
                console.log('response', res);
                setPhoto(null)
                Alert.alert("Modio", "Success", [

                    {
                        text: "Yes",
                        onPress: () => {
                            setIsCompleted(true);
                        },
                        style: "yes",
                    },
                ])
                loadBooking();
            })
            .catch((error) => {
                console.log('error', error);
            });
    };

    const onSubmitSign = () => {
        Alert.alert(
            "Modio",
            "Upload Sign?",
            [
                {
                    text: "Cancel",
                    onPress: () => { },
                    style: "cancel",
                },
                {
                    text: "OK",
                    onPress: () => {
                        handleUploadSign();
                    },
                    style: "ok",
                },
            ]
        );
    }

    const onSubmit = () => {
        Alert.alert(
            "Modio",
            "Completed booking?",
            [
                {
                    text: "Cancel",
                    onPress: () => { },
                    style: "cancel",
                },
                {
                    text: "OK",
                    onPress: () => {
                        handleUploadPhoto();
                    },
                    style: "ok",
                },
            ]
        );
    }

    return (<View>
        <ScrollView style={booking != null && booking?.b_status != 'completed' ? styles.nlMarginBottom : null}>
            <Screen >
                <View style={[styles.nlCard, { backgroundColor: '#fff', padding: 20 }]}>
                    {/* Item Info */}
                    <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, styles.nlLineBottom]}>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorGrey}>수령인</Text>
                        </View>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorBlack}>{booking?.b_name}</Text>
                        </View>
                    </View>
                    {/* Item Info */}
                    <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, styles.nlLineBottom]}>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorGrey}>민원내역</Text>
                        </View>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlMarkBlue}>0</Text>
                        </View>
                    </View>
                    {/* Item Info */}
                    <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, styles.nlLineBottom]}>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorGrey}>패키지</Text>
                        </View>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorBlack}>{booking?.b_package}</Text>
                        </View>
                    </View>
                    {/* Item Info */}
                    <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, styles.nlLineBottom]}>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorGrey}>특이사항</Text>
                        </View>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorBlack}>{booking?.b_memo}</Text>
                        </View>
                    </View>
                    {/* Item Info */}
                    <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, styles.nlLineBottom]}>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorGrey}>수령인HP</Text>
                        </View>
                        <View style={[styles.nlAlignCenter, styles.nlRow]}>
                            <TouchableOpacity activeOpacity={1} onPress={() => Linking.openURL(`sms:${booking?.b_hp1}`)}>
                                <SMSIcon height={30} width={30} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={1} style={{ marginLeft: 10 }} onPress={() => Linking.openURL(`tel:${booking?.b_hp1}`)}>
                                <PhoneIcon height={30} width={30} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* Item Info */}
                    <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, styles.nlLineBottom]}>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorGrey}>수령인 주소.</Text>
                        </View>
                        <View style={[styles.nlRow, styles.nlAlignCenter, { maxWidth: '70%' }]}>
                            <Text style={styles.nlColorBlack}>{booking?.b_address}</Text>
                        </View>
                    </View>
                    {/* Item Info */}
                    <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween]}>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorGrey}>배송예정일</Text>
                        </View>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorBlack}>{booking?.b_date}</Text>
                        </View>
                    </View>

                </View>
                <View style={[styles.nlCard, { backgroundColor: '#fff', padding: 20 }]}>
                    {/* Item Info */}
                    <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, styles.nlLineBottom]}>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorGrey}>배송인</Text>
                        </View>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorBlack}>{booking?.b_name}</Text>
                        </View>
                    </View>
                    {/* Item Info */}
                    <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, styles.nlLineBottom]}>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorGrey}>배송인HP</Text>
                        </View>
                        <View style={[styles.nlRow]}>
                            <TouchableOpacity activeOpacity={1} onPress={() => Linking.openURL(`sms:${booking?.b_hp1}`)}>
                                <SMSIcon height={30} width={30} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={1} style={{ marginLeft: 10 }} onPress={() => Linking.openURL(`tel:${booking?.b_hp1}`)}>
                                <PhoneIcon height={30} width={30} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* Item Info */}
                    <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, styles.nlLineBottom]}>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorGrey}>배송상태</Text>
                        </View>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorBlack}>{booking?.b_status}</Text>
                        </View>
                    </View>
                    {/* Item Info */}
                    <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, (photo || booking?.image || sign || booking?.sign) && styles.nlLineBottom]}>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorGrey}>배송완료일</Text>
                        </View>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorBlack}>{booking?.b_completed_date}</Text>
                        </View>
                    </View>
                    {/* Item Info */}
                    {(photo || booking?.image) && <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, { alignItems: 'flex-start' }, , (sign || booking?.sign) && styles.nlLineBottom]}>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorGrey}>사진</Text>
                        </View>
                        <View >
                            <Image resizeMode="contain" style={{ height: 100, width: 100 }} source={photo ? { uri: photo?.uri } : { uri: booking?.image }}></Image>
                        </View>

                    </View>}
                    {(sign || booking?.sign) && <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, { alignItems: 'flex-start' }]}>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorGrey}>Signature</Text>
                        </View>
                        <View >
                            <Image resizeMode="contain" style={{ height: 100, width: 100 }} source={sign ? { uri: sign?.uri } : { uri: booking?.sign }}></Image>
                        </View>

                    </View>}



                </View>

            </Screen>
        </ScrollView>
        <View style={[styles.nlFixedAtBottom, styles.nlRow, { display: 'none' }, booking != null && booking?.b_status != 'completed' ? { display: 'flex' } : {}]}>
            <TouchableOpacity style={styles.nlButton} onPress={() => {
                setIsSign(true);
                actionSheetRefSign.current?.setModalVisible();
            }}>
                <Text style={[styles.nlColorWhite, styles.nlTextCenter]}>직접수령</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nlButton} onPress={() => {
                actionSheetRefPhoto.current?.setModalVisible();
                setIsType(false);
                setCompletedText("경비실")
            }}>
                <Text style={[styles.nlColorWhite, styles.nlTextCenter]}>경비실</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nlButton} onPress={() => {
                setIsType(true);
                actionSheetRefText.current?.setModalVisible();
            }}>
                <Text style={[styles.nlColorWhite, styles.nlTextCenter]}>기타</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nlButton} onPress={() => {
                actionSheetRefPhoto.current?.setModalVisible();
                setIsType(false);
                setCompletedText("문앞")
            }}>
                <Text style={[styles.nlColorWhite, styles.nlTextCenter]}>문앞</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.nlButton, styles.nlMax]} onPress={() => {
                actionSheetRefPhoto.current?.setModalVisible();
                setIsType(false);
                setCompletedText("요청장소")
            }}>
                <Text style={[styles.nlColorWhite, styles.nlTextCenter]}>요청장소</Text>
            </TouchableOpacity>

        </View>
        <ActionSheet ref={actionSheetRefPhoto} headerAlwaysVisible={true} gestureEnabled={true} containerStyle={styles.container_actionsheet} onClose={() => !isType && setCompletedText(null)}>
            <View style={styles.actionsheet}>
                <TouchableOpacity style={styles.actionsheet_row} onPress={() => openLibrary()}>
                    <Text style={styles.actionsheet_row_txt}>Choose from library</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionsheet_row} onPress={() => openCamera()}>
                    <Text style={styles.actionsheet_row_txt}>Open Camera</Text>
                </TouchableOpacity>
            </View>
        </ActionSheet>
        <ActionSheet ref={actionSheetRefSign} headerAlwaysVisible={true} gestureEnabled={true} containerStyle={styles.container_actionsheet} onClose={() => !isType && setCompletedText(null)}>
            <View style={styles.actionsheet}>
                <TouchableOpacity style={styles.actionsheet_row} onPress={() => {
                    actionSheetRefSign.current?.hide();
                    navigation.navigate('Signature', { b_no })
                }
                }>
                    <Text style={styles.actionsheet_row_txt}>Sign</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionsheet_row} onPress={() => openLibrary('sign')}>
                    <Text style={styles.actionsheet_row_txt}>Upload your sign</Text>
                </TouchableOpacity>
            </View>
        </ActionSheet>
        <ActionSheet keyboardShouldPersistTaps="always" ref={actionSheetRefText} headerAlwaysVisible={true} gestureEnabled={true} containerStyle={styles.container_actionsheet} >
            <View style={styles.actionsheet_text}>
                <TextInput
                    placeholder='Completed text'
                    multiline
                    onChangeText={(text) => setCompletedText(text)}
                    value={completedText}
                ></TextInput>
                <View>
                    <TouchableOpacity style={styles.actionsheet_next} onPress={() => {
                        if (!completedText) {
                            Alert.alert("Modio", "Please enter completed text", [

                                {
                                    text: "Yes",
                                    onPress: () => {

                                    },
                                    style: "yes",
                                },
                            ])
                            return;
                        }
                        actionSheetRefText.current?.setModalVisible(false);
                        actionSheetRefPhoto.current?.setModalVisible();
                    }}>
                        <Text style={styles.actionsheet_row_txt}>Next</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ActionSheet>

    </View>
    );

}

const styles = StyleSheet.create({
    nlCard: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#e1e1e1',
        borderRadius: 10,
        overflow: 'hidden',
        padding: 12,
        marginBottom: 20,
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
        flexWrap: 'wrap'
    },
    nlBetween: {
        justifyContent: 'space-between'
    },
    nlAlignCenter: {
        alignItems: 'center',
        alignContent: 'center'
    },
    nlMax: {
        width: '96%',
    },
    nlItemInfo: {
        paddingVertical: 6,
        minHeight: 46

    },

    nlButton: {
        backgroundColor: '#7c257a',
        marginBottom: 10,
        marginHorizontal: "2%",
        padding: 10,
        borderRadius: 10,
        minWidth: "46%",
        textAlign: 'center'
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
    nlMarkBlue: {
        color: '#fff',
        backgroundColor: '#465CDB',
        padding: 3,
        minWidth: 50,
        borderRadius: 30,
        textAlign: 'center',
        fontSize: 15
    },
    nlLineBottom: {
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
    },
    nlTextCenter: {
        textAlign: 'center'
    },
    nlFixedAtBottom: {
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        paddingTop: 10
    },
    nlMarginBottom: {
        marginBottom: 160
    },
    actionsheet: {
        paddingBottom: 10,
    },
    container_actionsheet: {
        overflow: 'hidden',
        width: '96%',
        marginBottom: 10,
        padding: 10,
    },
    actionsheet_row: {
        paddingVertical: 10,
        width: '100%',
        alignItems: 'center'
    },
    actionsheet_row_txt: {
        fontSize: 18,
        color: "#000"
    },
    actionsheet_text: {
        paddingHorizontal: 10,
        width: '100%',

    },
    actionsheet_next: {
        paddingVertical: 10,
        width: 50,
        alignSelf: 'flex-end',
    },
})

export default ListView;