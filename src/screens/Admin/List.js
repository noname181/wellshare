import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import Screen from '../../components/Screen';
import {Picker} from '@react-native-picker/picker';




function List() {
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <View>
          <View style={[styles.nlFixedAtBottom]}>
                <View style={[styles.h_width_select_half]}>
                    <View style={styles.nlFormControl}>
                        <Picker
                            selectedValue={selectedValue}
                            style={styles.nlPicker}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="공지사항" value="java" />
                            <Picker.Item label="1입니다공지사항 " value="js" />
                        </Picker>
                    </View>
                    <View style={styles.nlFormControl}>
                        <Picker
                            selectedValue={selectedValue}
                            style={styles.nlPicker}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="공지사항" value="java" />
                            <Picker.Item label="1입니다공지사항 " value="js" />
                        </Picker>
                    </View>
                </View>

          </View>
        <ScrollView>
            <Screen>

            </Screen>
        </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    nlRow: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    nlFormControl: {
        marginTop: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#e1e1e1',
        borderRadius: 5,
        overflow: 'hidden',
        height: 54,
        
    },
    h_width_select_half:{
        width: '30%',
        justifyContent:'space-between',      
    },
    nlPicker: {
        width: '100%',
        height: '100%'
    },
    nlFixedAtBottom: {
        flexDirection:'row',
        backgroundColor: '#fff',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        paddingTop: 10
    },
    
});

export default List
