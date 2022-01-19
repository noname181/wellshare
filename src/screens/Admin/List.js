import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
import Screen from '../../components/Screen';
import { Picker } from '@react-native-picker/picker';
import { useSelector } from 'react-redux'
import axios from '../../helpers/axiosInterceptor';




function List({ navigation }) {
    const [selectedValue, setSelectedValue] = useState("java");
    const [tabSlected, settabSlected] = useState(1);
    const [bookings, setBookings] = useState([]);

    const user = useSelector(state => state.auth.user)

    useEffect(() => {
        console.log(user)
        axios.post(`/user_load_bookings.php`, { m_no: user.m_no, role: 'admin' })
            .then(res => {
                setBookings(res.data.bookings)
            })
            .catch(err => {
                console.log(err);
            })

        return () => {

        };
    }, []);

    const Item = ({ item }) => (
        <TouchableOpacity style={styles.h_box_list} onPress={() => navigation.navigate('ListView', {
            b_no: item.b_no,
        })}>
            <View style={styles.h_box_list__first}>
                <View>
                    <Text style={styles.h_bl_s_text1}>{item.b_date} <Text style={{ color: '#dddddd', fontSize: 13 }}> | </Text> 8:00</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.h_button_list_purple} activeOpacity={0.8}>
                        <Text style={styles.h_text_small_clr_purple}>완료</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.h_box_list__second}>
                <View style={styles.h_box_list__first_child1}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.h_f_c1_text}>{item.b_name}</Text>
                        <Text style={styles.h_f_c1_phone}>{item.b_hp1}</Text>
                    </View>
                    <View style={{ paddingTop: 5 }}>
                        <Text style={styles.h_bl_f_c1_text}>{item.b_address}</Text>
                    </View>
                </View>
                <View style={styles.h_box_list__first_child2}>
                    <Text style={styles.h_bl_f_c2_text1}>{item.b_package}</Text>
                </View>
            </View>
        </TouchableOpacity>

    );


    return (
        <View style={{ flex: 1 }}>
            <View style={[styles.nlFixedAtTop]}>
                <View style={[styles.h_width_select_half, { marginTop: 10 }, { marginBottom: 10 }]}>
                    <View style={styles.nlFormControl}>
                        <Picker
                            selectedValue={selectedValue}
                            style={styles.nlPicker}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="2022-01" value="java" />
                            <Picker.Item label="2022-02" value="js" />
                        </Picker>
                    </View>
                    <View style={styles.nlFormControl}>
                        <Picker
                            selectedValue={selectedValue}
                            style={styles.nlPicker}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="1" value="java" />
                            <Picker.Item label="2" value="js" />
                        </Picker>
                    </View>
                </View>
                <View style={[styles.h_width_select_half]}>
                    <View style={styles.nlFormControl}>
                        <Picker
                            selectedValue={selectedValue}
                            style={styles.nlPicker}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="배송종류" value="java" />
                            <Picker.Item label="1입니다공지사항 " value="js" />
                        </Picker>
                    </View>
                    <View style={styles.nlFormControl}>
                        <Picker
                            selectedValue={selectedValue}
                            style={styles.nlPicker}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="타입" value="java" />
                            <Picker.Item label="1입니다공지사항 " value="js" />
                        </Picker>
                    </View>
                </View>

            </View>
            <Screen style={{ paddingTop: 115 }}>
                <View style={[styles.nlRow, styles.nlBetween, styles.nlListTabTop]}>
                    <TouchableOpacity activeOpacity={1} style={(tabSlected == 1) ? styles.nlTabTopSelected : styles.nlTabTop} onPress={() => settabSlected(1)}>
                        <Text style={(tabSlected == 1) ? styles.nlTabTopTextSelected : styles.nlTabTopText}>전체</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} style={(tabSlected == 2) ? styles.nlTabTopSelected : styles.nlTabTop} onPress={() => settabSlected(2)}>
                        <Text style={(tabSlected == 2) ? styles.nlTabTopTextSelected : styles.nlTabTopText}>대상자</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} style={(tabSlected == 3) ? styles.nlTabTopSelected : styles.nlTabTop} onPress={() => settabSlected(3)}>
                        <Text style={(tabSlected == 3) ? styles.nlTabTopTextSelected : styles.nlTabTopText}>기사</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={bookings}
                    renderItem={Item}
                    keyExtractor={item => item.b_no}
                    style={styles.nlList}
                    showsVerticalScrollIndicator={false}
                />
                {/* <View style={styles.h_box_list}>
                    <View style={styles.h_box_list__first}>
                        <View>
                            <Text style={styles.h_bl_s_text1}>2022.01.06 <Text style={{ color: '#dddddd', fontSize: 13 }}> | </Text> 8:00</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.h_button_list_purple} activeOpacity={0.8}>
                                <Text style={styles.h_text_small_clr_purple}>완료</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.h_box_list__second}>
                        <View style={styles.h_box_list__first_child1}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.h_f_c1_text}>조형래</Text>
                                <Text style={styles.h_f_c1_phone}>010-2009-7723</Text>
                            </View>
                            <View style={{ paddingTop: 5 }}>
                                <Text style={styles.h_bl_f_c1_text}>개포로 20길 17, 2층</Text>
                            </View>
                        </View>
                        <View style={styles.h_box_list__first_child2}>
                            <Text style={styles.h_bl_f_c2_text1}>1-1완모 </Text>
                        </View>
                    </View>
                </View> */}
                {/* <View style={styles.h_box_list}>
                        <View style={styles.h_box_list__first}>
                            <View>
                                <Text style={styles.h_bl_s_text1}>2021.05.25 <Text style={{ color: '#dddddd', fontSize: 13 }}> | </Text> 8:00</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.h_button_list_green} activeOpacity={0.8}>
                                    <Text style={styles.h_text_small_clr_green}>배송전</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.h_box_list__second}>
                            <View style={styles.h_box_list__first_child1}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.h_f_c1_text}>조형래</Text>
                                    <Text style={styles.h_f_c1_phone}>010-2009-7723</Text>
                                </View>
                                <View style={{ paddingTop: 5 }}>
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
                                <Text style={styles.h_bl_s_text1}>2021.05.25 <Text style={{ color: '#dddddd', fontSize: 13 }}> | </Text> 8:00</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.h_button_list_green} activeOpacity={0.8}>
                                    <Text style={styles.h_text_small_clr_green}>배송전</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.h_box_list__second}>
                            <View style={styles.h_box_list__first_child1}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.h_f_c1_text}>조형래</Text>
                                    <Text style={styles.h_f_c1_phone}>010-2009-7723</Text>
                                </View>
                                <View style={{ paddingTop: 5 }}>
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
                                <Text style={styles.h_bl_s_text1}>2021.05.25 <Text style={{ color: '#dddddd', fontSize: 13 }}> | </Text> 8:00</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.h_button_list_green} activeOpacity={0.8}>
                                    <Text style={styles.h_text_small_clr_green}>배송전</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.h_box_list__second}>
                            <View style={styles.h_box_list__first_child1}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.h_f_c1_text}>조형래</Text>
                                    <Text style={styles.h_f_c1_phone}>010-2009-7723</Text>
                                </View>
                                <View style={{ paddingTop: 5 }}>
                                    <Text style={styles.h_bl_f_c1_text}>개포로 20길 17, 2층</Text>
                                </View>
                            </View>
                            <View style={styles.h_box_list__first_child2}>
                                <Text style={styles.h_bl_f_c2_text1}>1-1완모 </Text>
                            </View>
                        </View>
                    </View> */}

            </Screen>
        </View >
    );
}
const styles = StyleSheet.create({
    nlList: {
        flex: 1
    },
    h_f_c1_text: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
    },
    h_f_c1_phone: {
        color: 'black',
        fontSize: 15,
        paddingLeft: 10,
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
        flexDirection: 'row'
    },
    h_box_list__first_child1: {
        flex: 1
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
        fontWeight: 'bold'
    },
    h_text_clr_black: {
        color: '#404148',
        fontSize: 15,
    },
    nlRow: {
        flexDirection: 'row'
    },
    nlBetween: {
        justifyContent: 'space-between'
    },
    nlTabTop: {
        minWidth: '31.5%',
        height: 45,
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderRadius: 8,
        borderStyle: 'solid',
        borderWidth: 1,
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
    nlTabTopSelected: {
        minWidth: '31.5%',
        height: 45,
        backgroundColor: '#7c257a',
        color: '#fff',
        justifyContent: 'center',
        borderRadius: 8,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#7c257a',
        shadowColor: "#222",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
    },
    nlTabTopTextSelected: {
        textAlign: 'center',
        color: '#fff'
    },
    nlListTabTop: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    nlTabTopText: {
        textAlign: 'center'
    },
    nlFormControl: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#e1e1e1',
        borderRadius: 8,
        overflow: 'hidden',
        height: 40,
        width: '49%',
        backgroundColor: '#f3f3f3',
        justifyContent: 'center',

    },
    h_width_select_half: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    nlPicker: {
        width: '100%',
        height: '100%'
    },
    h_pt_15: {
        paddingTop: 15
    },
    nlFixedAtTop: {
        backgroundColor: '#fff',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomColor: '#e1e1e1',
        shadowColor: "#E5E6E7",
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowOpacity: 0.1,
        elevation: 3,

    },

});

export default List
