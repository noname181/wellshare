import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, Linking } from 'react-native';
import Screen from '../../components/Screen';
//Images
import boxImage from '../../images/deliveryman/box.png';
import SMSIcon from '../../images/svg/SMSIcon';
import PhoneIcon from '../../images/svg/PhoneIcon';
import axios from '../../helpers/axiosInterceptor';

function ListView({ navigation, route }) {
    const [booking, setBooking] = useState({});
    const { b_no } = route.params;

    useEffect(() => {
        axios.post(`/booking_detail.php`, { b_no })
            .then(res => {
                console.log(res);
                setBooking(res.data.booking)


            })
            .catch(err => {
                console.log(err);
            })

        return () => {

        };
    }, []);

    return (
        <ScrollView showsVerticalScrollIndicator={false}>

            <Screen >


                <View style={[styles.nlCard, { backgroundColor: '#fff', padding: 20 }]}>
                    {/* Item Info */}
                    <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, styles.nlLineBottom]}>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorGrey}>수령인</Text>
                        </View>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorBlack}>{booking.b_name}</Text>
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
                            <Text style={styles.nlColorBlack}>{booking.b_package}</Text>
                        </View>
                    </View>
                    {/* Item Info */}
                    <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, styles.nlLineBottom]}>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorGrey}>특이사항</Text>
                        </View>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorBlack}>{booking.b_memo}</Text>
                        </View>
                    </View>
                    {/* Item Info */}
                    <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, styles.nlLineBottom]}>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorGrey}>수령인HP</Text>
                        </View>
                        <View style={[styles.nlAlignCenter, styles.nlRow]}>
                            <TouchableOpacity activeOpacity={1} onPress={() => Linking.openURL(`sms:${booking.b_hp1}`)}>
                                <SMSIcon height={30} width={30} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={1} style={{ marginLeft: 10 }} onPress={() => Linking.openURL(`tel:${booking.b_hp1}`)}>
                                <PhoneIcon height={30} width={30} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, styles.nlLineBottom]}>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorGrey}>배송인HP</Text>
                        </View>
                        <View style={[styles.nlRow]}>
                            <TouchableOpacity activeOpacity={1} onPress={() => Linking.openURL(`sms:${booking.b_hp1}`)}>
                                <SMSIcon height={30} width={30} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={1} style={{ marginLeft: 10 }} onPress={() => Linking.openURL(`tel:${booking.b_hp1}`)}>
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
                            <Text style={styles.nlColorBlack}>{booking.b_address}</Text>
                        </View>
                    </View>
                    {/* Item Info */}
                    <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, styles.nlLineBottom]}>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorGrey}>배송상태</Text>
                        </View>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorBlack}>{booking.b_status}</Text>
                        </View>
                    </View>
                    {/* Item Info */}
                    <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, styles.nlLineBottom]}>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorGrey}>배송완료일</Text>
                        </View>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorBlack}>{booking.b_completed_date}</Text>
                        </View>
                    </View>
                    {/* Item Info */}
                    <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, { alignItems: 'flex-start' }]}>
                        <View style={[styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlColorGrey}>사진</Text>
                        </View>
                        <View >
                            <Image source={boxImage}></Image>
                        </View>
                    </View>

                </View>


            </Screen>
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
    }
})

export default ListView;