import React, {useState} from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Screen from '../../components/Screen';
import Calendar from '../../images/svg/CalendarIcon';
import Icon from 'react-native-vector-icons/Ionicons';

function VehicleLocationView() {
    const [selectedValue, setSelectedValue] = useState("1");
    return (
        <Screen  style={{backgroundColor: '#f6f7f8', paddingBottom: 90}}>
            <View style={[styles.nlRow, styles.nlBetween]}>
                <View style={styles.nlFormControl}>
                    <Picker
                        selectedValue={selectedValue}
                        style={styles.nlPicker}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="공지사항" value="1"/>
                        <Picker.Item label="1입니다공지사항 " value="2"/>
                    </Picker>
                </View>
                <View style={styles.nlFormControl}>
                    <Picker
                        selectedValue={selectedValue}
                        style={styles.nlPicker}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="공지사항" value="1"/>
                        <Picker.Item label="1입니다공지사항 " value="2"/>
                    </Picker>
                </View>
            </View>
            <View style={[styles.nlCard]}>

            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({

    nlRow: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    nlBetween: {
        justifyContent: 'space-between'
    },
    nlAlignCenter: {
        alignItems: 'center',
        alignContent: 'center'
    },
    nlMax: {
        width: '100%',
    },
    nlFormControl: {
        marginTop: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#e1e1e1',
        borderRadius: 5,
        overflow: 'hidden',
        width: '48%',
        
    },
    nlPicker: {
        width: '100%',
        height: 44,
        padding: 0,
        backgroundColor: '#fff',
    },
    nlCard: {
        marginVertical: 20,
        backgroundColor: '#fff',
        padding: 16,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#e1e1e1',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
        borderColor: '#e1e1e1',
        shadowColor: "#222",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
        height: '100%'
        
    },


});

export default VehicleLocationView
