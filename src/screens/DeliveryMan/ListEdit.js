
import React, { useRef, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Signature from "react-native-signature-canvas";
import Screen from '../../components/Screen';

function ListEdit({ onOK }) {
    const [signature, setSign] = useState(null);
    const ref = useRef();

    const handleOK = (signature) => {
        console.log(signature);
        // onOK(signature);
        setSign(signature);

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

            <Signature ref={ref} onOK={handleOK} webStyle={style} />



            <View

                style={{ width: '100%', height: 50, marginTop: 10 }}
            >
                <View style={styles.row}>
                    <TouchableOpacity style={[styles.nlButton]} onPress={handleClear}>
                        <Text style={[styles.nlColorWhite, styles.nlTextCenter]}>Clear</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.nlButton]} onPress={handleConfirm}>
                        <Text style={[styles.nlColorWhite, styles.nlTextCenter]}>Confirm</Text>
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