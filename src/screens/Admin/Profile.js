import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
} from 'react-native';
import Screen from '../../components/Screen';
import Avatar from '../../images/user/avatarPNG.png';
import Name from '../../images/svg/ProfileName';
import Phone from '../../images/svg/ProfilePhone';
import Logout from '../../images/svg/ProfileLogout';
import Address from '../../images/svg/Hospital_profileIcon5';



function Profile() {
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
                        <Text style={styles.text_profile_right}>관리자</Text>
                    </View>
                </View>
                <View style={styles.pf_box_information_second}>
                    <View style={styles.h_row}>
                        <Name height={16} width={16} />
                        <Text style={styles.text_profile}>아이디</Text>
                    </View>
                    <View>
                        <Text style={styles.text_profile_right}>aaaaaa</Text>
                    </View>
                </View>
                <View style={styles.pf_box_information_second}>
                    <View style={styles.h_row}>
                        <Phone height={16} width={16} />
                        <Text style={styles.text_profile}>대표전화</Text>
                    </View>
                    <View>
                        <Text style={styles.text_profile_right}>010-2009-7723</Text>
                    </View>
                </View>
                <View style={styles.pf_box_information_second}>
                    <View style={styles.h_row}>
                        <Address height={16} width={16} />
                        <Text style={styles.text_profile}>주소</Text>
                    </View>
                    <View>
                        <Text style={styles.text_profile_right}>개포로 20길 17, 2층</Text>
                    </View>
                </View>
            </View>
            <View style={styles.profile_main_logout}>
                <View style={styles.h_row_logout}>
                    <Logout height={16} width={16} />
                    <Text style={styles.text_logout}>로그아웃</Text>
                </View>
            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({
    h_row_logout: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 22,
        paddingBottom: 22,
        paddingLeft: 14,
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
    text_profile_right: {
        fontSize: 16,
        textAlign: 'right',
        lineHeight: 22,
        color: '#404040',
    },
    text_logout:{
        fontSize: 16,
        marginLeft: 10,
        color: '#404040',
    },
    profile_main_hero: {
        backgroundColor: '#fff',
        marginTop: 82,
        paddingTop: 10,
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
    },

    pf_box_information_first: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 83,
        paddingBottom: 13,
        marginLeft: 14,
        marginRight: 14,
    },
    pf_box_information_second: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 16,
        paddingBottom: 17,
        marginLeft: 14,
        marginRight: 14,
        borderTopColor: '#e1e1e1',
        borderTopWidth: 1,
    }
});

export default Profile
