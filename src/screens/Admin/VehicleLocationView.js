import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Screen from '../../components/Screen';
import Calendar from '../../images/svg/CalendarIcon';
import MonthPicker from 'react-native-month-year-picker';
import axios from '../../helpers/axiosInterceptor';
import { WebView } from 'react-native-webview';

function VehicleLocationView({ navigation }) {
    const [selectedValue, setSelectedValue] = useState(1);
    const [selectedHospital, setSelectedHospital] = useState(0);
    const [selectedCar, setSelectedCar] = useState(0);
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [hospitals, setHospitals] = useState(null);
    const [cars, setCars] = useState(null);

    const webViewRef = useRef();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            axios.post(`/admin_load_hospital.php`, { type: 'hospital', week: selectedValue, b_season: formatDate(date) })
                .then(res => {
                    setHospitals(res.data.hospitals)
                })
                .catch(err => {
                    console.log(err);
                })
        })
        return () => {
            unsubscribe
        };
    }, []);

    useEffect(() => {
        console.log(`https://scsman23.cafe24.com/admin/webview/car_location.php?car_no=${selectedCar}&b_season=${formatDate()}&value=${selectedValue}`)
    }, [selectedValue])

    useEffect(() => {
        selectedHospital != 0 &&
            axios.post(`/admin_load_hospital.php`, { type: 'car', week: selectedValue, b_season: formatDate(date), h_no: selectedHospital })
                .then(res => {
                    setCars(res.data.cars)
                })
                .catch(err => {
                    console.log(err);
                })
        return () => {
        };
    }, [selectedHospital]);

    const showPicker = useCallback((value) => setShow(value), []);

    const onValueChange = useCallback(
        (event, newDate) => {
            const selectedDate = newDate || date;

            showPicker(false);
            setDate(selectedDate);
        },
        [date, showPicker],
    );


    const formatDate = () => {
        return date.getFullYear() + "-" + ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1));
    }


    return (
        <Screen style={{ backgroundColor: '#f6f7f8', paddingBottom: 130 }}>
            <View style={[styles.nlRow, styles.nlBetween]}>
                <View style={[styles.h_width_select_half, { marginTop: 10 }, { marginBottom: 10 }]}>
                    <TouchableOpacity style={[styles.nlFormControl, { paddingLeft: 15 }]} onPress={() => showPicker(true)}>
                        <Calendar width={16} height={16} />
                        <Text style={{ color: "#000", paddingLeft: 10 }}>{formatDate()}</Text>
                    </TouchableOpacity>
                    <View style={styles.nlFormControl}>
                        <Picker
                            selectedValue={selectedValue}
                            style={styles.nlPicker}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />

                        </Picker>
                    </View>
                </View>
                <View style={styles.nlFormControl}>
                    <Picker
                        selectedValue={selectedHospital}
                        style={styles.nlPicker}
                        onValueChange={(itemValue, itemIndex) => { setSelectedHospital(itemValue); setSelectedCar(0) }}
                    >
                        <Picker.Item label="보건소" value="0" />
                        {hospitals?.map((v, i) => <Picker.Item key={i} label={v.h_name} value={v.h_no} />)}
                    </Picker>
                </View>
                <View style={styles.nlFormControl}>
                    <Picker
                        selectedValue={selectedCar}
                        style={styles.nlPicker}
                        onValueChange={(itemValue, itemIndex) => setSelectedCar(itemValue)}
                    >
                        <Picker.Item label="배송기사" value="0" />
                        {cars?.map((v, i) => <Picker.Item key={i} label={v.d_name + ' - ' + v.car_number} value={v.car_no} />)}
                    </Picker>
                </View>
            </View>
            <View style={[styles.nlCard]}>
                <WebView
                    ref={(ref) => webViewRef.current = ref}
                    source={{ uri: `https://scsman23.cafe24.com/admin/webview/car_location.php?car_no=${selectedCar}&b_season=${formatDate()}&value=${selectedValue}` }}
                    style={{}}
                />
            </View>
            {show && (
                <MonthPicker okButton="예" cancelButton="아니요"
                    onChange={onValueChange}
                    value={date}

                    locale="ko"
                />
            )}
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

export default VehicleLocationView
