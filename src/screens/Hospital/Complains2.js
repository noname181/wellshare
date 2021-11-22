import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    Button,
    TouchableOpacity

} from 'react-native';
// import { Screen } from '../../components';
import CalendarIcon from '../../images/svg/CalendarIcon';
import SearchIcon from '../../images/svg/SearchIcon';
import Screen from '../../components/Screen';
import Icon from 'react-native-vector-icons/Ionicons';



function Complains() {

    return (
        <Screen style={styles.body_42_1}>
            <View>
                <View style={styles.box_calendar}>
                    <CalendarIcon width={16} height={16} />
                    <Text style={styles.text_calendar}>2021-05-01</Text>
                    <Icon style={styles.icon_select} name={'chevron-down-outline'} color={'#9b9b9b'} size={20} />
                </View>
                <View style={styles.row__search}>
                    <View style={styles.width40}>
                        <TextInput value='010-2009-7712' style={styles.text_input} />
                    </View>
                    <View style={styles.width40}>
                        <TextInput style={styles.text_input} value='조형래' />
                    </View>
                    <View style={styles.width20}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.button_search}>
                            <SearchIcon width={23} height={23} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.row__info}>
                    <View style={styles.row__info__child}>
                        <View style={styles.row__info__child__text}>
                            <View>
                                 <Text style={styles.row__info__child__text1}>비번분실했어요3</Text>
                            </View>
                            <View>
                                <Text style={styles.row__info__child__text3}>2021.10.22 | 09:01</Text>
                            </View>
                        </View>
                        <View style={styles.h_circle_blue}>
                            <Text style={styles.h_circle_number}>2</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.row__info}>
                    <View style={styles.row__info__child}>
                        <View style={styles.row__info__child__text}>
                            <View>
                                 <Text style={styles.row__info__child__text1}>비번분실했어요3</Text>
                            </View>
                            <View>
                                <Text style={styles.row__info__child__text3}>2021.10.22 | 09:01</Text>
                            </View>
                        </View>
                        <View style={styles.h_circle_blue}>
                            <Text style={styles.h_circle_number}>7</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    h_circle_number:{
        color: '#fff',
        fontWeight:'bold',
    },
    h_circle_blue:{
        width:25,
        height:25,
        backgroundColor:'#465CDB',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:25/2,
    },
    row__info: {
        paddingBottom: 13,
        width: '100%'
    },

    row__info__child__text: {

        flexDirection: 'column',

    },
    row__info__child__text1: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15,

    },
    row__info__child__text3: {
        fontSize: 14,
        color: '#B9B9B9',
        paddingTop: 5,
    },
    button_search: {
        width: '100%',
        height: 46,
        backgroundColor: '#7c257a',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pt10: {
        paddingTop: 10,
    },
    row__search: {
        flexWrap: 'wrap',
        paddingTop: 14,
        paddingBottom: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    width40: {
        width: '39%',
        marginRight: 10,
    },
    width20: {
        width: '15%',
    },
    width100: {
        width: '100%',
    },
    body_42_1: {
        backgroundColor: '#f6f7f8',
    },
    row__info__child: {
        paddingLeft: 14,
        paddingRight: 14,
        backgroundColor: '#fff',
        paddingTop:17,
        paddingBottom: 17,
        borderWidth: 1,
        borderColor: '#e1e1e1',
        borderRadius: 6,
        alignItems: 'center',
        flexDirection:'row',
        justifyContent:'space-between',
        shadowColor: '#222',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
    },
    box_calendar: {
        backgroundColor: '#fff',
        height: 46,
        borderWidth: 0,
        borderColor: '#e1e1e1',
        borderRadius: 6,
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: '#222',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 4,
        position: 'relative',
        paddingHorizontal: 15
    },
    text_calendar: {
        paddingLeft: 10,
        fontSize: 15
    },
    icon_select: {
        position: 'absolute',
        right: 17,
    },
    Calendar_icon1: {
        width: 20,
        height: 20,
        position: 'absolute'
    },
    text_input: {
        backgroundColor: '#fff',
        paddingLeft: 14,
        height: 46,
        borderWidth: 0,
        borderColor: '#e1e1e1',
        borderRadius: 6,
        justifyContent: 'center',
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.1,
        elevation: 4,
        fontSize: 14,


    }

});

export default Complains
