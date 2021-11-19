import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
} from 'react-native';
import { Screen } from '../components';
import Avatar from '../images/user/avatarPNG.png';
import Name from '../images/user/namePNG.png';
import Phone from '../images/user/phonePNG.png';
import Logout from '../images/user/logoutPNG.png';


function User_My_Profile() {
    return (
        <Screen>
            <View style={styles.profile_main_hero}>
               <View style={styles.Avatar_icon}>
                 <Image style={styles.Avatar_icon_image} source={Avatar}  />
               </View>
                <View style={styles.pf_box_information_first}>
                    <View style={styles.h_row}>
                        <Image style={styles.Icon_profile} source={Name}  />
                        <Text style={styles.text_profile}>이름</Text>
                    </View>
                    <View >
                        <Text style={styles.text_profile}>조형래</Text>
                    </View>
                </View>
                <View style={styles.pf_box_information_second}>
                    <View style={styles.h_row}>
                        <Image style={styles.Icon_profile} source={Phone}  />
                        <Text style={styles.text_profile}>전화번호</Text>
                    </View>
                    <View>
                        <Text style={styles.text_profile}>010-234-5678</Text>
                    </View>
                </View>
            </View>
            <View style={styles.profile_main_logout}>
                <View style={styles.h_row_logout}>
                    <Image style={styles.Icon_profile} source={Logout}  />
                    <Text style={styles.text_profile}>로그아웃</Text>
                </View>
            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({
    h_row_logout:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:12,
    },
    h_row:{
        display: 'flex',
        flexDirection:'row',
        alignItems:'center',
    },
    text_profile:{
        fontSize: 15,
    },
    Icon_profile:{
        marginRight:10,
        width:17,
        height:17,
    },
    Avatar_icon_image:{
        position:'absolute',

    },
    Avatar_icon:{
        top: -50,
        display:'flex',
        alignItems:'center',
        position:'relative'

    },
    
    profile_main_hero: {
        backgroundColor: '#fff',
        marginTop: 80,
        marginBottom:12,
        paddingBottom: 26,
        display: 'flex',
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderRadius: 8,
        position: 'relative',
    },
    profile_main_logout: {
        backgroundColor: '#fff',
        display: 'flex',
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderRadius: 8,
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
