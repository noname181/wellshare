import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    ScrollView

} from 'react-native';
import Screen from '../../components/Screen';
import Avatar from '../../images/hospital/avatar.png';
import Name from '../../images/svg/ProfileName';
import Phone from '../../images/svg/ProfilePhone';
import Logout from '../../images/svg/ProfileLogout';
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

function Profile({ navigation }) {

    const dispatch = useDispatch();

    const LogOut = () => {
        dispatch(actions.authActions.logout());
        setTimeout(() => {
            navigation.navigate('Login');
        }, 0)
    }

    return (
        <Screen style={{ backgroundColor: '#f6f7f8' }}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ overflow: 'visible' }}>
                <View style={styles.profile_main_hero}>
                    <View style={styles.Avatar_icon}>
                        <Image style={styles.Avatar_icon_image} source={Avatar} />
                    </View>
                    <View style={styles.Hospital_name}>
                        <Text style={styles.Hospital_name_text}>강남보건소</Text>
                    </View>
                    <View style={styles.pf_box_information_first}>
                        <View style={styles.h_row}>
                            <Hospital_profileIcon1 height={16} width={16} />
                            <Text style={styles.text_profile}>사업자등록번호</Text>
                        </View>
                        <View >
                            <Text style={styles.text_profile_right}>62-62-4123221</Text>
                        </View>
                    </View>
                    <View style={styles.pf_box_information_second}>
                        <View style={styles.h_row}>
                            <Phone height={16} width={16} />
                            <Text style={styles.text_profile}>대표전화</Text>
                        </View>
                        <View>
                            <Text style={styles.text_profile_right}>010-4512-2522</Text>
                        </View>
                    </View>
                    <View style={styles.pf_box_information_second}>
                        <View style={styles.h_row}>
                            <Hospital_profileIcon3 height={16} width={16} />
                            <Text style={styles.text_profile}>팩스</Text>
                        </View>
                        <View>
                            <Text style={styles.text_profile_right}>02-1512-1235</Text>
                        </View>
                    </View>
                    <View style={styles.pf_box_information_second}>
                        <View style={styles.h_row}>
                            <Hospital_profileIcon4 height={16} width={16} />
                            <Text style={styles.text_profile}>이메일</Text>
                        </View>
                        <View>
                            <Text style={styles.text_profile_right}>kim.s@knhos.com</Text>
                        </View>
                    </View>
                    <View style={styles.pf_box_information_second}>
                        <View style={styles.h_row}>
                            <Hospital_profileIcon5 height={16} width={16} />
                            <Text style={styles.text_profile}>주소</Text>
                        </View>
                        <View style={{ width: 180 }}>
                            <Text style={styles.text_profile_right}>서울특별시 강남구 역삼동 203-2 2층</Text>
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
                            <Text style={styles.text_profile_right}>박명진</Text>
                        </View>
                    </View>
                    <View style={styles.pf_box_main_hr2_2}>
                        <View style={styles.h_row}>
                            <Hospital_profileIcon7 height={16} width={16} />
                            <Text style={styles.text_profile}>이메일</Text>
                        </View>
                        <View>
                            <Text style={styles.text_profile_right}>청구담당 이메일</Text>
                        </View>
                    </View>
                    <View style={styles.pf_box_main_hr2_2}>
                        <View style={styles.h_row}>
                            <Hospital_profileIcon8 height={20} width={20} />
                            <Text style={styles.text_profile}>핸드폰</Text>
                        </View>
                        <View>
                            <Text style={styles.text_profile_right}>010-2009-7723</Text>
                        </View>
                    </View>
                    <View style={styles.pf_box_main_hr2_2}>
                        <View style={styles.h_row}>
                            <Hospital_profileIcon9 height={16} width={16} />
                            <Text style={styles.text_profile}>일반전화</Text>
                        </View>
                        <View>
                            <Text style={styles.text_profile_right}>02-1234-1234</Text>
                        </View>
                    </View>
                    <View style={styles.pf_box_main_hr2_2}>
                        <View style={styles.h_row}>
                            <Hospital_profileIcon10 height={16} width={16} />
                            <Text style={styles.text_profile}>청구서 도착 주소</Text>
                        </View>
                        <View style={{ width: 180 }}>
                            <Text style={styles.text_profile_right}>서울특별시 강남구 역삼동 203-2 2층</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.profile_main_logout}>
                    <TouchableOpacity style={styles.h_row_logout} onPress={() => LogOut()}>
                        <Logout height={16} width={16} />
                        <Text style={styles.text_logout}>로그아웃</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
        paddingLeft: 16,
    },
    h_row: {
        flexDirection: 'row',

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
    }

});

export default Profile
