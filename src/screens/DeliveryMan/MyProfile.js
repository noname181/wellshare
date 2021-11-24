import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import Screen from '../../components/Screen';

//Images
import DeliveryMyProfile1 from '../../images/svg/DeliveryMyProfile1';
import DeliveryMyProfile2 from '../../images/svg/DeliveryMyProfile2';
import DeliveryMyProfile3 from '../../images/svg/DeliveryMyProfile3';
import DeliveryMyProfile4 from '../../images/svg/DeliveryMyProfile4';
import DeliveryMyProfile5 from '../../images/svg/DeliveryMyProfile5';
import DeliveryMyProfile6 from '../../images/svg/DeliveryMyProfile6';

function My_Profile() {
    return (
        <Screen style={styles.nlContainer}>
            <View style={[styles.nlCard, {backgroundColor: '#fff'}]}>
                {/* Item Info */}
                <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween]}>
                    <DeliveryMyProfile1 />
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <Text style={styles.nlColorGrey}>배송인</Text>
                    </View>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <Text style={styles.nlColorBlack}>조형래</Text>
                    </View>
                </View>

            </View>
            <View style={[styles.nlCard, {backgroundColor: '#fff'}]}>
                {/* Item Info */}
                <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, styles.nlLineBottom]}>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <Text style={styles.nlColorGrey}>배송인</Text>
                    </View>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <Text style={styles.nlColorBlack}>조형래</Text>
                    </View>
                </View>
                {/* Item Info */}
                <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, styles.nlLineBottom]}>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <Text style={styles.nlColorGrey}>배송인</Text>
                    </View>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <Text style={styles.nlColorBlack}>조형래</Text>
                    </View>
                </View>
                {/* Item Info */}
                <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, styles.nlLineBottom]}>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <Text style={styles.nlColorGrey}>배송인</Text>
                    </View>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <Text style={styles.nlColorBlack}>조형래</Text>
                    </View>
                </View>
                {/* Item Info */}
                <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, styles.nlLineBottom]}>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <Text style={styles.nlColorGrey}>배송인</Text>
                    </View>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <Text style={styles.nlColorBlack}>조형래</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.nlCard, {backgroundColor: '#fff'}]}>
                {/* Item Info */}
                <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween]}>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <Text style={styles.nlColorGrey}>배송인</Text>
                    </View>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <Text style={styles.nlColorBlack}>조형래</Text>
                    </View>
                </View>

            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({
    
    nlCard: {
        paddingHorizontal: 16,
        marginBottom: 14,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#e1e1e1',
        borderRadius: 10,
        overflow: 'hidden',
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
    nlRow: {
        flexDirection: 'row',
        flexWrap: 'nowrap'
    },
    nlBetween: {
        justifyContent: 'space-between'
    },
    nlAlignCenter: {
        alignItems: 'center'
    },
    nlItemInfo: {
        paddingVertical: 6,
        minHeight: 46
        
    },
    nlLineBottom: {
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
    },
    nlColorWhite: {
        color: "#fff"
    },
    nlColorGrey: {
        color: '#7d7d7d'
    },
    nlColorBlack: {
        color: '#000'
    },
});

export default My_Profile
