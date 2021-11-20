import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Screen } from '../components';
import Calendar from '../images/user/calendarPNG.png';
import SelectIcon from '../images/user/selectPNG.png';


function User_List() {
    return (
        <Screen>
            <View style={styles.body_gray}>
                <View style={styles.box_calendar}>
                    <Image style={styles.icon_calendar} source={Calendar} />
                    <Text style={styles.text_calendar}>2021-05-01</Text>
                    <Image style={styles.icon_select} source={SelectIcon} />
                </View>
                <View style={styles.h_three_button}>
                    <TouchableOpacity style={ styles.h_button_active} activeOpacity={0.8}>
                        <Text style={styles.h_text_clr_white}>전체</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.h_button} activeOpacity={0.8}>
                        <Text style={styles.h_text_clr_black}>배송전</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.h_button} activeOpacity={0.8}>
                        <Text style={styles.h_text_clr_black}>완료</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.h_box_list}>
                    <View style={styles.h_box_list__first}>
                        <View style={styles.h_box_list__first_child1}>
                            <Text style={styles.h_bl_f_c1_text}>2021.05.08</Text>
                        </View>
                        <View  style={styles.h_box_list__first_child2}>
                            <Text style={styles.h_bl_f_c2_text1}>조형래 </Text>
                            <Text style={styles.h_bl_f_c2_text2}>(010-2009-7723)</Text>
                        </View>
                    </View>
                    <View style={styles.h_box_list__second}>
                        <View>
                            <Text style={styles.h_bl_s_text1}>1-1 완모</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.h_button_list_purple} activeOpacity={0.8}>
                                <Text style={styles.h_text_small_clr_purple}>완료</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.h_box_list}>
                    <View style={styles.h_box_list__first}>
                        <View style={styles.h_box_list__first_child1}>
                            <Text style={styles.h_bl_f_c1_text}>2021.05.08</Text>
                        </View>
                        <View  style={styles.h_box_list__first_child2}>
                            <Text style={styles.h_bl_f_c2_text1}>조형래 </Text>
                            <Text style={styles.h_bl_f_c2_text2}>(010-2009-7723)</Text>
                        </View>
                    </View>
                    <View style={styles.h_box_list__second}>
                        <View>
                            <Text style={styles.h_bl_s_text1}>1-1 완모</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.h_button_list_green} activeOpacity={0.8}>
                                <Text style={styles.h_text_small_clr_green}>완료</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                
            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({
    h_box_list:{
        backgroundColor: '#fff',
        borderWidth: 0,
        borderColor: '#e1e1e1',
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.1,
        elevation: 4,
        marginBottom:10,
    },
    h_box_list__first:{
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingTop:14,
        paddingLeft: 18,
        paddingRight:18,
    },
    h_box_list__second:{
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingTop:15,
        paddingBottom:21,
        paddingLeft: 18,
        paddingRight:18,
    },
    h_box_list__first_child2:{
        display:'flex',
        flexDirection:'row'
    },
    h_bl_f_c1_text:{
        color: '#a8a8a8',
        fontSize: 15,
    },
    h_bl_f_c2_text1:{
        fontSize: 16,
        color: 'black',
        marginRight: 10,
    },
    h_bl_f_c2_text2:{
        fontSize: 16,
        color: 'black',
    },
    h_bl_s_text1:{
        fontSize: 16,
        color: '#4a4a4a'
    },
    h_button:{
        backgroundColor: '#fff',
        height: 48,
        width: 122,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#e2e2e2',
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 3},
        shadowOpacity: 0.1,
        elevation: 3,
    },
    h_button_list_purple:{
        backgroundColor: '#fff',
        height: 25,
        width: 62,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#8968DC',
    },
    h_button_list_green:{
        backgroundColor: '#fff',
        height: 25,
        width: 62,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#39C2AA',
    },
    h_text_small_clr_purple:{
        color: '#8968DC',
        fontWeight:'bold',
    },
    h_text_small_clr_green:{
        color: '#39C2AA',
        fontWeight:'bold',
    },
    h_button_active:{
        backgroundColor: '#7c257a',
        height: 48,
        width: 123,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
    },
    h_text_clr_white:{
        color: '#fff',
        fontSize:15,
        fontWeight: 'bold'
    },
    h_text_clr_black:{
        color: '#404148',
        fontSize:15,
    },
    h_three_button:{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 15,
        marginBottom: 15,
        flexDirection: 'row'
    },
    icon_calendar:{
        position: 'absolute',
        marginLeft: 15,
        width:17,
        height:17,
        
    },
    icon_select:{
        position:'absolute',
        right:17,
        width : 14,
    },
    body_gray: {
        backgroundColor: 'f8f8f8',
    },
    box_calendar: {
        backgroundColor: '#fff',
        height: 49,
        borderWidth: 0,
        borderColor: '#e1e1e1',
        borderRadius: 6,
        display: 'flex',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.1,
        elevation: 4,
        position: 'relative'
    },
    text_calendar: {
        paddingLeft: 45,
        fontSize: 15
    },


});

export default User_List
