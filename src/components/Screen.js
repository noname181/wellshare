import React from 'react';
import { View, StyleSheet, SafeAreaView, NativeModules, StatusBar, Platform, } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

function Screen({ children, style, showHeader = true }) {

    return (

        <View style={[styles.screen, style, showHeader ? {} : { justifyContent: 'center', alignItems: 'center' }]}>
            <StatusBar translucent barStyle={'light-content'} backgroundColor={'#7c257a'}></StatusBar>
            {children}
        </View>

    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 15,
    }
});

export default Screen;