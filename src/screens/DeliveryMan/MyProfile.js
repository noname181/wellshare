import React, { useState } from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';
import Screen from '../../components/Screen';

//Images
import DeliveryMyProfile1 from '../../images/svg/DeliveryMyProfile1';
import DeliveryMyProfile2 from '../../images/svg/DeliveryMyProfile2';
import DeliveryMyProfile3 from '../../images/svg/DeliveryMyProfile3';
import DeliveryMyProfile4 from '../../images/svg/DeliveryMyProfile4';
import DeliveryMyProfile5 from '../../images/svg/DeliveryMyProfile5';
import DeliveryMyProfile6 from '../../images/svg/DeliveryMyProfile6';

function My_Profile() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <Screen style={styles.nlContainer}>
            <View style={[styles.nlCard, { backgroundColor: '#fff' }]}>
                {/* Item Info */}
                <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween]}>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <DeliveryMyProfile1 height={18} width={18} />
                        <Text style={[styles.nlColorGrey, styles.nlMarginLeft10]}>업무시간 설정: 8:00-20:00</Text>
                    </View>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <Switch
                            trackColor={{ false: "#767577", true: "#f2d4f1" }}
                            thumbColor={isEnabled ? "#7c257a" : "#fff"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>
            </View>
            <View style={[styles.nlCard, { backgroundColor: '#fff' }]}>
                {/* Item Info */}
                <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, styles.nlLineBottom]}>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <DeliveryMyProfile2 height={18} width={18} />
                        <Text style={[styles.nlColorGrey, styles.nlMarginLeft10]}>아이디</Text>
                    </View>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <Text style={styles.nlColorBlack}>km2415</Text>
                    </View>
                </View>
                {/* Item Info */}
                <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, styles.nlLineBottom]}>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <DeliveryMyProfile3 height={18} width={18} />
                        <Text style={[styles.nlColorGrey, styles.nlMarginLeft10]}>기사명</Text>
                    </View>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <Text style={styles.nlColorBlack}>박지우</Text>
                    </View>
                </View>
                {/* Item Info */}
                <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, styles.nlLineBottom]}>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <DeliveryMyProfile4 height={18} width={18} />
                        <Text style={[styles.nlColorGrey, styles.nlMarginLeft10]}>이메일</Text>
                    </View>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <Text style={styles.nlColorBlack}>오류동 21-1</Text>
                    </View>
                </View>
                {/* Item Info */}
                <View style={[styles.nlItemInfo, styles.nlRow, styles.nlBetween, styles.nlLineBottom]}>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <DeliveryMyProfile5 height={18} width={18} />
                        <Text style={[styles.nlColorGrey, styles.nlMarginLeft10]}>주소</Text>
                    </View>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <Text style={styles.nlColorBlack}>parkju@daum.net</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.nlCard, { backgroundColor: '#fff' }]}>
                {/* Item Info */}
                <View style={[styles.nlItemInfo, styles.nlRow]}>
                    <View style={[styles.nlRow, styles.nlAlignCenter]}>
                        <DeliveryMyProfile6 height={18} width={18} />
                        <Text style={[styles.nlColorGrey, styles.nlMarginLeft10]}>로그아웃</Text>
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
    nlMarginRight10: {
        marginRight: 10
    },
    nlMarginLeft10: {
        marginLeft: 10
    }
});

export default My_Profile
