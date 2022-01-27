import React, { useState } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    ScrollView,
    Modal,
    Alert,
    Pressable,
    Dimensions
} from 'react-native';
import Screen from '../../components/Screen';
import Avatar from '../../images/hospital/avatar.png';
import Name from '../../images/svg/ProfileName';
import Phone from '../../images/svg/ProfilePhone';
import Logout from '../../images/svg/ProfileLogout';
import { CommonActions } from '@react-navigation/native';

import Hospital_profileIcon1 from '../../images/svg/Hospital_profileIcon1';
import Hospital_profileIcon3 from '../../images/svg/Hospital_profileIcon3';
import Hospital_profileIcon4 from '../../images/svg/Hospital_profileIcon4';
import Hospital_profileIcon5 from '../../images/svg/Hospital_profileIcon5';
import Hospital_profileIcon6 from '../../images/svg/Hospital_profileIcon6';
import Hospital_profileIcon7 from '../../images/svg/Hospital_profileIcon7';
import Hospital_profileIcon8 from '../../images/svg/Hospital_profileIcon8';
import Hospital_profileIcon9 from '../../images/svg/Hospital_profileIcon9';
import Hospital_profileIcon10 from '../../images/svg/Hospital_profileIcon10';
import Hospital_profileIcon11 from '../../images/svg/Hospital_profileIcon11';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/actions'
import axios from '../../helpers/axiosInterceptor';

const windowWidth = Dimensions.get('window').width;

function Profile({ navigation }) {
    const [modalChangeModeVisible, setModalChangeModeVisible] = useState(false);
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch();

    const LogOut = () => {
        dispatch(actions.authActions.logout());
        setTimeout(() => {
            navigation.replace('Login');
        }, 0)
    }

    const changeMode = (mode) => {
        setModalChangeModeVisible(false)
        axios.post(`/change_mode.php`, {
            mode,
            hp: user?.hm_hp
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
        <Screen style={{ backgroundColor: '#f6f7f8' }}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ overflow: 'visible' }}>
                <View style={styles.profile_main_hero}>
                    <View style={styles.Avatar_icon}>
                        <Image style={styles.Avatar_icon_image} source={Avatar} />
                    </View>
                    <View style={styles.Hospital_name}>
                        <Text style={styles.Hospital_name_text}>{user?.h_name}</Text>
                    </View>
                    <View style={styles.pf_box_information_first}>
                        <View style={styles.h_row}>
                            <Hospital_profileIcon1 height={16} width={16} />
                            <Text style={styles.text_profile}>사업자등록번호</Text>
                        </View>
                        <View >
                            <Text style={styles.text_profile_right}>{user?.h_biz}</Text>
                        </View>
                    </View>
                    <View style={styles.pf_box_information_second}>
                        <View style={styles.h_row}>
                            <Phone height={16} width={16} />
                            <Text style={styles.text_profile}>대표전화</Text>
                        </View>
                        <View>
                            <Text style={styles.text_profile_right}>{user?.h_tel}</Text>
                        </View>
                    </View>
                    <View style={styles.pf_box_information_second}>
                        <View style={styles.h_row}>
                            <Hospital_profileIcon3 height={16} width={16} />
                            <Text style={styles.text_profile}>팩스</Text>
                        </View>
                        <View>
                            <Text style={styles.text_profile_right}>{user?.h_fax}</Text>
                        </View>
                    </View>
                    <View style={styles.pf_box_information_second}>
                        <View style={styles.h_row}>
                            <Hospital_profileIcon4 height={16} width={16} />
                            <Text style={styles.text_profile}>이메일</Text>
                        </View>
                        <View>
                            <Text style={styles.text_profile_right}>{user?.h_email}</Text>
                        </View>
                    </View>
                    <View style={styles.pf_box_information_second}>
                        <View style={styles.h_row}>
                            <Hospital_profileIcon5 height={16} width={16} />
                            <Text style={styles.text_profile}>주소</Text>
                        </View>
                        <View style={{ width: 180 }}>
                            <Text style={styles.text_profile_right}>{user?.h_address + (user?.h_address_detail ? ' - ' + user?.h_address_detail : '')}</Text>
                        </View>
                    </View>

                </View>
                <View style={styles.profile_main_hero2}>
                    <View style={styles.pf_box_main_hr2_1}>
                        <View style={styles.h_row}>
                            <Hospital_profileIcon6 height={16} width={16} />
                            <Text style={styles.text_profile}>담당자명</Text>
                        </View>
                        <View>
                            <Text style={styles.text_profile_right}>{user?.hm_name}</Text>
                        </View>
                    </View>
                    <View style={styles.pf_box_main_hr2_2}>
                        <View style={styles.h_row}>
                            <Hospital_profileIcon7 height={16} width={16} />
                            <Text style={styles.text_profile}>이메일</Text>
                        </View>
                        <View>
                            <Text style={styles.text_profile_right}>{user?.hm_email}</Text>
                        </View>
                    </View>
                    <View style={styles.pf_box_main_hr2_2}>
                        <View style={styles.h_row}>
                            <Hospital_profileIcon8 height={20} width={20} />
                            <Text style={styles.text_profile}>핸드폰</Text>
                        </View>
                        <View>
                            <Text style={styles.text_profile_right}>{user?.hm_hp}</Text>
                        </View>
                    </View>
                    <View style={styles.pf_box_main_hr2_2}>
                        <View style={styles.h_row}>
                            <Hospital_profileIcon9 height={16} width={16} />
                            <Text style={styles.text_profile}>일반전화</Text>
                        </View>
                        <View>
                            <Text style={styles.text_profile_right}>{user?.hm_tel}</Text>
                        </View>
                    </View>
                    <View style={styles.pf_box_main_hr2_2}>
                        <View style={styles.h_row}>
                            <Hospital_profileIcon10 height={16} width={16} />
                            <Text style={styles.text_profile}>청구서 도착 주소</Text>
                        </View>
                        <View style={{ width: 180, flexWrap: 'nowrap', flex: 1 }}>
                            <Text style={styles.text_profile_right}>{user?.hm_address + (user?.hm_address_detail ? (' - ' + user?.hm_address_detail) : '')}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.profile_main_logout}>
                    <TouchableOpacity style={[styles.h_row_logout, styles.nlLineBottom]} onPress={() => setModalChangeModeVisible(true)}>
                        <Logout height={16} width={16} />
                        <Text style={styles.text_logout}>모드변경</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.h_row_logout} onPress={() => LogOut()}>
                        <Logout height={16} width={16} />
                        <Text style={styles.text_logout}>로그아웃</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
                            onPress={() => changeMode('delivery')}
                        >
                            <Text style={styles.textModalStyle}>배송인</Text>
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
    h_row_logout: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 18,
        paddingBottom: 18,
    },
    h_row: {
        flexDirection: 'row',
        paddingRight: 10
    },

    text_profile: {
        fontSize: 16,
        marginLeft: 10,

    },
    text_logout: {
        fontSize: 16,
        marginLeft: 10,
        color: '#404040',
    },
    text_profile_right: {
        fontSize: 15,
        textAlign: 'right',
        lineHeight: 22,
        color: '#404040',
    },
    Avatar_icon_image: {
        position: 'absolute',
        width: 125,
        height: 125,
        borderWidth: 1,
        resizeMode: 'contain',
        flex: 1,


    },
    Avatar_icon: {
        top: -60,
        display: 'flex',
        alignItems: 'center',
        position: 'relative'

    },
    Hospital_name: {
        position: 'absolute',
        alignItems: 'center',
        top: 75,
        width: '100%',
    },
    Hospital_name_text: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 23,
    },
    profile_main_hero: {
        backgroundColor: '#fff',
        marginTop: 69,
        paddingTop: 10,
        marginBottom: 12,
        justifyContent: 'center',
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderRadius: 8,
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.1,
        elevation: 3,

    },
    profile_main_hero2: {
        backgroundColor: '#fff',
        paddingTop: 22,
        justifyContent: 'center',
        marginBottom: 12,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderRadius: 8,
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.1,
        elevation: 3,

    },
    profile_main_logout: {
        backgroundColor: '#fff',
        display: 'flex',
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.1,
        elevation: 3,
        marginBottom: 50,
        paddingHorizontal: 14
    },

    pf_box_information_first: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 122,
        paddingTop: 19,
        paddingBottom: 15,
        borderTopColor: '#e1e1e1',
        borderTopWidth: 1,

        marginLeft: 16,
        marginRight: 16,
    },
    pf_box_information_second: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 16,
        marginRight: 16,
        borderTopColor: '#e1e1e1',
        borderTopWidth: 1,
    },
    pf_box_main_hr2_1: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 15,
        marginLeft: 16,
        marginRight: 16,
    },
    pf_box_main_hr2_2: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 16,
        marginBottom: 13,
        marginLeft: 16,
        marginRight: 16,
        borderTopColor: '#e1e1e1',
        borderTopWidth: 1,
    }, centeredView: {
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
    },
    nlLineBottom: {
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
    },

});

export default Profile
