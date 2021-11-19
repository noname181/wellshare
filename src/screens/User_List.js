import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Screen } from '../components';
import Calendar from '../images/user/calendarPNG.png'


function User_List() {
    return (
        <Screen>
            <View style={styles.body_gray}>
                <View style={styles.box_calendar}>
                    <Image style={styles.icon_calendar} source={Calendar} />
                    <Text style={styles.text_calendar}>2021-05-01</Text>
                </View>
                <View >
                    <TouchableOpacity >
                        <Text>aaa</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({

    h_three_button:{
        display: 'flex',
        justifyContent: 'space-between',
    },
    icon_calendar:{
        position: 'absolute',
        marginLeft: 14,
    },
    body_gray: {
        backgroundColor: 'f8f8f8',
    },
    box_calendar: {
        backgroundColor: '#fff',
        height: 40,
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
        paddingLeft: 38,
    },


});

export default User_List
