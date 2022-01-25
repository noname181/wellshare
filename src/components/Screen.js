import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, NativeModules, StatusBar, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

function Screen({ children, style, keyboard = false, showHeader = true }) {
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true); // or some other action
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false); // or some other action
            }
        );
        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, [])


    return (
        keyboard ?
            <TouchableWithoutFeedback onPress={() => { isKeyboardVisible ? Keyboard.dismiss() : null }}>
                <View style={[styles.screen, style, showHeader ? {} : { justifyContent: 'center', alignItems: 'center' }]}>
                    <StatusBar translucent barStyle={'light-content'} backgroundColor={'#7c257a'}></StatusBar>
                    {children}
                </View>
            </TouchableWithoutFeedback>
            :
            <View style={[styles.screen, style, showHeader ? {} : { justifyContent: 'center', alignItems: 'center' }]}>
                <StatusBar translucent barStyle={'light-content'} backgroundColor={'#7c257a'}></StatusBar>
                {children}
            </View>
    )

        ;
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 15,
    }
});

export default Screen;