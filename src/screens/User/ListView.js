import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, Linking, Modal } from 'react-native';
import Screen from '../../components/Screen';
//Images
import boxImage from '../../images/deliveryman/box.png';
import SMSIcon from '../../images/svg/SMSIcon';
import PhoneIcon from '../../images/svg/PhoneIcon';
import axios from '../../helpers/axiosInterceptor';

function ListView({ navigation, route }) {
    const [booking, setBooking] = useState({});
    const [complaints, setComplaints] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [indexPhotoShow, setIndexPhotoShow] = useState(null);

    const { b_no } = route.params;

    useEffect(() => {
        axios.post(`/booking_detail.php`, { b_no })
            .then(res => {

                setBooking(res.data.booking)
                setComplaints(res.data.complaints)

            })
            .catch(err => {
                console.log(err);
            })

        return () => {

        };
    }, []);

    return (
        <ScrollView>

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
                    {/* {complaints?.length > 0 && <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, styles.nlLineBottom]}>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorGrey}>민원내역</Text>
                        </View>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlMarkBlue}>{complaints?.length}</Text>
                        </View>
                    </View>} */}
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
                            <Text style={styles.nlColorGrey}>수령인 주소</Text>
                        </View>
                        <View style={[styles.nlRow, styles.nlAlignCenter, { maxWidth: '70%' }]}>
                            <Text style={styles.nlColorBlack}>{booking?.b_address}</Text>
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
                    <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, (booking?.b_status == 'completed') && styles.nlLineBottom]}>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorGrey}>배송상태</Text>
                        </View>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorBlack}>{booking?.b_status == 'completed' ? '완료' : '배송중'}</Text>
                        </View>
                    </View>
                    {/* Item Info */}
                    {booking?.b_status == 'completed' && <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, (booking?.image || booking?.sign || booking?.images?.length > 0) && styles.nlLineBottom]}>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorGrey}>배송완료일</Text>
                        </View>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorBlack}>{booking?.b_completed_date}</Text>
                        </View>
                    </View>}
                    {/* Item Info */}
                    {/* {booking?.image && <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, { alignItems: 'flex-start' }]}>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorGrey}>사진</Text>
                        </View>
                        <View >
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                <Image resizeMode="contain" style={{ height: 200, width: 200 }} source={{ uri: booking?.image }}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>} */}
                    {booking?.images?.length > 0 && <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween]}>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorGrey}>사진</Text>
                        </View>
                        <View style={[styles.nlRow, styles.nlAlignCenter, { maxWidth: '90%', justifyContent: 'flex-end' }]}>

                            {booking?.b_status == 'completed' && booking?.images.map((v, i) => <TouchableOpacity key={i} onPress={() => {
                                setIndexPhotoShow(i);
                                setModalVisible(!modalVisible)
                            }}>

                                <Image key={i} resizeMode="cover" style={{ height: 90, width: 90, borderRadius: 13, marginLeft: 10, marginVertical: 10 }} source={{ uri: v }}></Image>
                            </TouchableOpacity>)}

                        </View>
                    </View>}
                    {booking?.sign && <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, { alignItems: 'flex-start' }]}>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorGrey}>Signature</Text>
                        </View>
                        <View >
                            <Image resizeMode="contain" style={{ height: 100, width: 100 }} source={{ uri: booking?.sign }}></Image>
                        </View>

                    </View>}

                </View>


            </Screen>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >

                <View style={styles.centeredView}>
                    <TouchableOpacity style={{ position: 'absolute', top: 0, right: 5, padding: 10 }} onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={{ fontSize: 26, color: "#fff" }}>X</Text>
                    </TouchableOpacity>

                    {indexPhotoShow != null ? <Image resizeMode="contain" style={{ height: '80%', width: '100%' }} source={{ uri: booking?.images[indexPhotoShow] }}></Image> : null}
                </View>

            </Modal>
        </ScrollView>
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
        width: '98%',
    },
    nlItemInfo: {
        paddingVertical: 6,
        minHeight: 46

    },

    nlButton: {
        backgroundColor: '#7c257a',
        marginBottom: 10,
        marginHorizontal: "1%",
        padding: 10,
        borderRadius: 10,
        minWidth: "48%",
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
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
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})

export default ListView;