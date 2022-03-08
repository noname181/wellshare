import React, { useState } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Modal,
    Alert,
    Pressable,
    Dimensions
} from 'react-native';
import Screen from '../../components/Screen';
import Avatar from '../../images/user/avatarPNG.png';
import Name from '../../images/svg/ProfileName';
import Phone from '../../images/svg/ProfilePhone';
import Logout from '../../images/svg/ProfileLogout';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/actions'
import axios from '../../helpers/axiosInterceptor';
import { CommonActions } from '@react-navigation/native';


const windowWidth = Dimensions.get('window').width;

function User_My_Profile({ navigation }) {
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
            hp: user?.user_hp
        }).then(res => {

            let data = res.data;
            if (data.msg == 'non_registered') {
                Alert.alert('웰쉐어', "해당모드로 변경할수 없습니다. ",
                    [
                        {
                            text: "예",
                            onPress: () => { },
                            style: "yes",
                        },
                    ])
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
        <Screen>
            <View style={styles.profile_main_hero}>
                <View style={styles.Avatar_icon}>
                    <Image style={styles.Avatar_icon_image} source={Avatar} />
                </View>
                <View style={styles.pf_box_information_first}>
                    <View style={styles.h_row}>
                        <Name height={16} width={16} />
                        <Text style={styles.text_profile}>이름</Text>
                    </View>
                    <View >
                        <Text style={styles.text_profile}>{user?.user_name}</Text>
                    </View>
                </View>
                <View style={styles.pf_box_information_second}>
                    <View style={styles.h_row}>
                        <Phone height={16} width={16} />
                        <Text style={styles.text_profile}>전화번호</Text>
                    </View>
                    <View>
                        <Text style={styles.text_profile}>{user?.user_hp}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.profile_main_logout}>
                <TouchableOpacity style={[styles.h_row_logout, styles.nlLineBottom]} onPress={() => setModalChangeModeVisible(true)}>
                    <Logout height={16} width={16} />
                    <Text style={styles.text_profile}>모드변경</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.h_row_logout} onPress={() => LogOut()}>
                    <Logout height={16} width={16} />
                    <Text style={styles.text_profile}>로그아웃</Text>
                </TouchableOpacity>
            </View>
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
                            onPress={() => changeMode('hospital')}
                        >
                            <Text style={styles.textModalStyle}>보건소</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.modal_button]}
                            onPress={() => changeMode('delivery')}
                        >
                            <Text style={styles.textModalStyle}>배송인</Text>
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
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    text_profile: {
        fontSize: 16,
        marginLeft: 10
    },
    Avatar_icon_image: {
        position: 'absolute',
        width: 125,
        height: 125,

    },
    Avatar_icon: {
        top: -60,
        display: 'flex',
        alignItems: 'center',
        position: 'relative'

    },

    profile_main_hero: {
        backgroundColor: '#fff',
        marginTop: 72,
        paddingTop: 10,
        marginBottom: 12,
        paddingBottom: 26,
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
        paddingHorizontal: 14
    },

    pf_box_information_first: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 78,
        paddingBottom: 13,
        borderBottomColor: '#e1e1e1',
        borderBottomWidth: 1,
        marginLeft: 12,
        marginRight: 12,
    },
    pf_box_information_second: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 20,
        marginLeft: 12,
        marginRight: 12,
    },
    centeredView: {
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

export default User_My_Profile
