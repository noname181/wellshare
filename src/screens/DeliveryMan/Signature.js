
import React, { useRef, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, PermissionsAndroid, Alert, Platform } from "react-native";
import CameraRoll from '@react-native-community/cameraroll';
import Signature from "react-native-signature-canvas";
import Screen from '../../components/Screen';
import RNFS from "react-native-fs";
import RNFetchBlob from 'rn-fetch-blob';

async function hasAndroidPermission() {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
        return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
}

const save_base64 = (base64Img, success, fail) => {

    const dirs = Platform.OS === 'ios' ? RNFS.LibraryDirectoryPath : RNFS.ExternalDirectoryPath; // android
    const downloadDest = `${dirs}/${((Math.random() * 10000000) | 0)}.png`;
    const imageDatas = base64Img.split('data:image/png;base64,');
    const imageData = imageDatas[1];

    RNFetchBlob.fs.writeFile(downloadDest, imageData, 'base64').then(async (rst) => {
        if (Platform.OS === "android" && !(await hasAndroidPermission())) {
            return;
        }
        try {
            CameraRoll.save(downloadDest, 'photo').then((e1) => {
                console.log('suc', e1)
                console.log(downloadDest)
                success && success()
            }).catch((e2) => {
                console.log('fai', e2)
                Alert.alert('[]-[]-[]')
            })
        } catch (e3) {
            // Alert.alert(JSON.stringify(e3))
            console.log('catch', e3)
            fail && fail()
        }
    });
}

function ListEdit({ navigation }) {
    const [signature, setSign] = useState(null);
    const ref = useRef();

    const handleOK = (signature) => {
        console.log(signature);
        // onOK(signature);
        setSign(signature);

        save_base64(signature, (success) => {
            navigation.navigate('ListView', {
                backFromSign: true
            })
        }, (err) => {
            console.log(err)
        })

    };



    const handleClear = () => {
        ref.current.clearSignature();
    };

    const handleConfirm = () => {
        console.log("end");
        ref.current.readSignature();
    };

    const style = `.m-signature-pad--footer {display: none; margin: 0px;} .m-signature-pad {background-color: #fff; box-shadow: none; height: 100vh}`;



    return (
        <Screen>

            <Signature ref={ref} onOK={handleOK} webStyle={style} backgroundColor="rgba(255,255,255,1)" />



            <View

                style={{ width: '100%', height: 50, marginTop: 10 }}
            >
                <View style={styles.row}>
                    <TouchableOpacity style={[styles.nlButton]} onPress={handleClear}>
                        <Text style={[styles.nlColorWhite, styles.nlTextCenter]}>Clear</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.nlButton]} onPress={handleConfirm}>
                        <Text style={[styles.nlColorWhite, styles.nlTextCenter]}>Save</Text>
                    </TouchableOpacity>

                </View>
            </View>


        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: 250,
        padding: 10,
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
    },
    nlMax: {
        width: '96%',
    },

    nlButton: {
        backgroundColor: '#7c257a',
        marginBottom: 10,
        marginHorizontal: "2%",
        padding: 10,
        borderRadius: 10,
        minWidth: "46%",
        textAlign: 'center'
    },
    nlColorWhite: {
        color: "#fff"
    },
    nlTextCenter: {
        textAlign: 'center'
    },
});

export default ListEdit;