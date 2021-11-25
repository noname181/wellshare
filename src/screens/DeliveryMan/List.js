import React,{useState} from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    Button,
    TouchableOpacity

} from 'react-native';
import Screen from '../../components/Screen';
import Calendar from '../../images/svg/CalendarIcon';
import Icon from 'react-native-vector-icons/Ionicons';

function List() {
    const [tabSlected, settabSlected] = useState(1);
    return (
        <Screen  style={{backgroundColor: '#f6f7f8'}}>
            <View style={styles.body_gray}>
                <View style={styles.box_calendar}>
                    <Calendar width={16} height={16} />
                    <Text style={styles.text_calendar}>2021-05-01</Text>
                    <Icon style={styles.icon_select} name={'chevron-down-outline'} color={'#9b9b9b'} size={20} />
                </View>
                <View style={styles.h_three_button}>
                    <TouchableOpacity  activeOpacity={1} style={(tabSlected== 1)?styles.h_button_active:styles.h_button} onPress={() => settabSlected(1)}>
                        <Text style={(tabSlected== 1)?styles.h_text_clr_white:styles.h_text_clr_black}>전체</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} style={(tabSlected== 2)?styles.h_button_active:styles.h_button} onPress={() => settabSlected(2)}>
                        <Text style={(tabSlected== 2)?styles.h_text_clr_white:styles.h_text_clr_black}>배송전</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} style={(tabSlected== 3)?styles.h_button_active:styles.h_button} onPress={() => settabSlected(3)}>
                        <Text style={(tabSlected== 3)?styles.h_text_clr_white:styles.h_text_clr_black}>완료</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.h_box_list}>
                    <View style={styles.h_box_list__first}>
                        <View>
                            <Text style={styles.h_bl_s_text1}>2021.05.25 <Text style={{color: '#dddddd',fontSize: 13}}> | </Text> 8:00</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.h_button_list_purple} activeOpacity={0.8}>
                                <Text style={styles.h_text_small_clr_purple}>완료</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.h_box_list__second}>
                        <View style={styles.h_box_list__first_child1}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.h_f_c1_text}>조형래</Text>
                                <Text style={styles.h_f_c1_phone}>010-2009-7723</Text>
                            </View>
                            <View style={{paddingTop: 5}}>
                                <Text style={styles.h_bl_f_c1_text}>개포로 20길 17, 2층</Text>
                            </View>
                        </View>
                        <View style={styles.h_box_list__first_child2}>
                            <Text style={styles.h_bl_f_c2_text1}>1-1완모 </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.h_box_list}>
                    <View style={styles.h_box_list__first}>
                        <View>
                            <Text style={styles.h_bl_s_text1}>2021.05.25 <Text style={{color: '#dddddd',fontSize: 13}}> | </Text> 8:00</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.h_button_list_green} activeOpacity={0.8}>
                                <Text style={styles.h_text_small_clr_green}>배송전</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.h_box_list__second}>
                        <View style={styles.h_box_list__first_child1}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.h_f_c1_text}>조형래</Text>
                                <Text style={styles.h_f_c1_phone}>010-2009-7723</Text>
                            </View>
                            <View style={{paddingTop: 5}}>
                                <Text style={styles.h_bl_f_c1_text}>개포로 20길 17, 2층</Text>
                            </View>
                        </View>
                        <View style={styles.h_box_list__first_child2}>
                            <Text style={styles.h_bl_f_c2_text1}>1-1완모 </Text>
                        </View>
                    </View>
                </View>


            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({
    h_f_c1_text:{
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
    },
    h_f_c1_phone:{
        color: 'black',
        fontSize: 15,
        paddingLeft:10,
    },
    h_box_list: {
        backgroundColor: '#fff',
        borderWidth: 0,
        borderColor: '#e1e1e1',
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.1,
        elevation: 4,
        marginBottom: 10,
        
    },
    h_box_list__second: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 18,
        paddingRight: 18,
        paddingBottom: 16,
        paddingTop: 12,
    },
    h_box_list__first: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 12,
        marginLeft: 18,
        marginRight: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#eeeeee',
    },
    h_box_list__first_child2: {
        display: 'flex',
        flexDirection: 'row'
    },
    h_bl_f_c1_text: {
        color: '#a4a4a4',
        fontSize: 15,
    },
    h_bl_f_c2_text1: {
        fontSize: 16,
        color: 'black',
    },
    h_bl_f_c2_text2: {
        fontSize: 16,
        color: 'black',
    },
    h_bl_s_text1: {
        fontSize: 15,
        color: '#4a4a4a'
    },
    h_button: {
        backgroundColor: '#fff',
        height: 46,
        width: '32%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#e2e2e2',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.1,
        elevation: 3,
    },
    h_button_list_purple: {
        backgroundColor: '#fff',
        height: 25,
        width: 62,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#8663DB',
    },
    h_button_list_green: {
        backgroundColor: '#fff',
        height: 25,
        width: 62,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#39C2AA',
    },
    h_text_small_clr_purple: {
        color: '#8968DC',
        fontWeight: 'bold',
    },
    h_text_small_clr_green: {
        color: '#39C2AA',
        fontWeight: 'bold',
    },
    h_button_active: {
        backgroundColor: '#7c257a',
        height: 46,
        width: '32%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
    },
    h_text_clr_white: {
        color: '#fff',
        fontSize: 15,
    },
    h_text_clr_black: {
        color: '#404148',
        fontSize: 15,
    },
    h_three_button: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 15,
        marginBottom: 15,
        flexDirection: 'row'
    },
    icon_calendar: {
        position: 'absolute',
        marginLeft: 15,
        width: 17,
        height: 17,

    },
    icon_select: {
        position: 'absolute',
        right: 17,
    },
    body_gray: {
        backgroundColor: 'f8f8f8',
    },
    box_calendar: {
        backgroundColor: '#fff',
        height: 46,
        borderWidth: 0,
        borderColor: '#e1e1e1',
        borderRadius: 6,
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.1,
        elevation: 4,
        position: 'relative',
        paddingHorizontal: 15
    },
    text_calendar: {
        paddingLeft: 10,
        fontSize: 15
    },


});

export default List
