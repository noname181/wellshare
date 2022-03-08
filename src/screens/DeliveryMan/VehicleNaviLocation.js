import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Screen from '../../components/Screen';
import MonthPicker from 'react-native-month-year-picker';
import { WebView } from 'react-native-webview';

function VehicleNaviLocation({ navigation }) {


    const webViewRef = useRef();

    return (
        <Screen style={{ backgroundColor: '#f6f7f8', paddingBottom: 130 }}>
            <View style={[styles.nlCard]}>
                <WebView
                    ref={(ref) => webViewRef.current = ref}
                    source={{ uri: `https://scsman23.cafe24.com/admin/webview/navi_car_location.php` }}
                    style={{}}
                />
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
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#e1e1e1',
        borderRadius: 8,
        overflow: 'hidden',
        height: 40,
        width: '49%',
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row',
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
    h_width_select_half: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

});

export default VehicleNaviLocation
