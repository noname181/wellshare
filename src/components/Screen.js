import React from 'react';
import { View, StyleSheet, SafeAreaView, NativeModules, StatusBar } from 'react-native';

function Screen({ children, style }) {
    return (
        <View style={[styles.screen, style]}>
            <StatusBar backgroundColor={'#7c257a'} barStyle={'light-content'}></StatusBar>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 15
    }
});

export default Screen;