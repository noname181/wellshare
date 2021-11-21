import React from 'react';
import { View, StyleSheet, SafeAreaView, NativeModules, StatusBar, Platform, } from 'react-native';

function Screen({ children, style }) {

    return (

        <View style={[styles.screen, style]}>
            <StatusBar translucent barStyle={'light-content'} backgroundColor={'transparent'}></StatusBar>
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