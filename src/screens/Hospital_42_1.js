import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    Button,

} from 'react-native';
import { Screen } from '../components';
import Calendar_icon from '../images/hospital/calendar_icon.svg'
import Search_icon from '../images/hospital/search_icon.svg'


function Hospital_42_1() {
    return (
        <Screen>
            <View style={styles.body_42_1}>
                <View style={styles.box_calendar}>
                    <Image style={styles.Calendar_icon1} source={Calendar_icon} />
                    <Text style={styles.text_calendar}>2021-05-01</Text>
                </View>
                <View style={styles.row__search}>
                    <View style={styles.width40}>
                        <TextInput style={styles.text_input} />
                    </View>
                    <View style={styles.width40}>
                        <TextInput style={styles.text_input} placeholder="조형래" />
                    </View>
                    <View style={styles.width20}>
                        <View style={styles.button_search}>
                            <Image style={styles.Search_icon} source={Search_icon} />
                        </View>
                    </View>
                </View>
                <View style={styles.row__info}>
                    <View style={styles.row__info__child}>
                        <View style={styles.row__info__child__text}>
                            <Text style={styles.row__info__child__text1}>조형래</Text>
                            <Text style={styles.row__info__child__text2}>|</Text>
                            <Text style={styles.row__info__child__text3}>010-2009-7723</Text>
                        </View>
                        <View>

                        </View>
                    </View>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    row__info: {
        display: 'flex',
        paddingTop: 10,
        width: '100%'
    },
    row__info__child: {
        backgroundColor: '#fff',
        width: '100%',
        height: 55,
        borderWidth: 1,
        borderColor: 0,
        borderRadius: 6,
        display: 'flex',
        justifyContent: 'center',
        shadowColor: '#e8e9ea',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 1,
    },
    row__info__child__text: {

        paddingLeft: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    row__info__child__text1: {
        fontWeight: 'bold',
        color: 'black'

    },
    row__info__child__text2: {
        paddingLeft: 5,
        paddingRight: 5,
        color: '#e1e1e1',
        fontSize: 16,
    },
    row__info__child__text3: {
        fontSize: 14,
    },
    button_search: {
        width: '100%',
        height: 40,
        backgroundColor: '#7c257a',
        paddingLeft: 10,
        borderRadius: 6,

    },
    pt10: {
        paddingTop: 10,
    },
    row__search: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingTop: 10,
        flexDirection: 'row',
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
        backgroundColor: 'F6F7F8',
    },
    box_calendar: {
        backgroundColor: '#fff',
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 0,
        borderRadius: 6,
        display: 'flex',
        justifyContent: 'center',
        shadowColor: '#e8e9ea',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 1,
        position: 'relative'
    },
    text_calendar: {
        paddingLeft: 38,
    },
    Calendar_icon1: {
        width: 20,
        height: 20,
        position: 'absolute'
    },
    text_input: {
        backgroundColor: '#fff',
        paddingLeft: 14,
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 0,
        borderRadius: 6,
        display: 'flex',
        justifyContent: 'center',
        shadowColor: '#e8e9ea',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 1,

    }

});

export default Hospital_42_1
