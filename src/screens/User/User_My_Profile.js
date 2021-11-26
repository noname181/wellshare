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


function User_My_Profile() {
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
                        <Text style={styles.text_profile}>조형래</Text>
                    </View>
                </View>
                <View style={styles.pf_box_information_second}>
                    <View style={styles.h_row}>
                        <Phone height={16} width={16} />
                        <Text style={styles.text_profile}>전화번호</Text>
                    </View>
                    <View>
                        <Text style={styles.text_profile}>010-234-5678</Text>
                    </View>
                </View>
            </View>
            <View style={styles.profile_main_logout}>
                <View style={styles.h_row_logout}>
                    <Logout height={16} width={16} />
                    <Text style={styles.text_profile}>로그아웃</Text>
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
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 12,
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
    }
});

export default User_My_Profile
