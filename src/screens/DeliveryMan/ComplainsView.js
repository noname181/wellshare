import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from 'react-native';

import Screen from '../../components/Screen';
import DeleteImage from '../../images/deliveryman/delete.png';
import DownloadImage from '../../images/deliveryman/download.png';

function ComplainsView({ navigation }) {
    return (
        <Screen>
            <View style={styles.nlCard}>
                <View style={[styles.nlQuestion,styles.nlCardSpace, styles.nlRow]}>
                    <View>
                        <Text style={[styles.nlIcon, styles.nlIconQ]}>Q</Text>
                    </View>
                    <View>
                        <View style={styles.nlRelative}>
                            <Text style={styles.nlTitle}>공지사항 1입니다</Text>
                        </View>
                        <Text  numberOfLines={1} style={{marginRight: 60}}>1. Screen_short_2021-11-06aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
                        <Text style={styles.nlDate}>2021.10.13</Text>
                    </View>
                </View>
                <View style={[styles.nlAnswer, styles.nlCardSpace, styles.nlRow]}>
                    <View>
                        <Text style={[styles.nlIcon,]}>A</Text>
                    </View>
                    <View style={{width: '100%'}}>
                        <View style={[styles.nlRow, styles.nlBetween]}>
                            <Text style={styles.nlText}>공지사항 1입니다공지사항 1입니다 공지사항 1입니다</Text>
                            <Image source={DeleteImage}/>
                        </View>
                        <View style={[styles.nlFilePart, styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlFileName} numberOfLines={1}>1. Screen_short_2021-11-06</Text>
                            <View style={styles.nlActions, styles.nlRow}>
                                <TouchableOpacity>
                                    <Text style={styles.nlActionIcon} >
                                        <Image source={DeleteImage}/>
                                    </Text> 
                                </TouchableOpacity>
                                <Text style={styles.nlLineVerticle}></Text>
                                <TouchableOpacity>
                                    <Text style={styles.nlActionIcon} >
                                        <Image  source={DownloadImage}/>
                                    </Text> 
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[styles.nlFilePart, styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlFileName} numberOfLines={1}>1. Screen_short_2021-11-06</Text>
                            <View style={styles.nlActions, styles.nlRow}>
                                <TouchableOpacity>
                                    <Text style={styles.nlActionIcon} >
                                        <Image source={DeleteImage}/>
                                    </Text> 
                                </TouchableOpacity>
                                <Text style={styles.nlLineVerticle}></Text>
                                <TouchableOpacity>
                                    <Text style={styles.nlActionIcon} >
                                        <Image  source={DownloadImage}/>
                                    </Text> 
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[styles.nlFilePart, styles.nlRow, styles.nlAlignCenter]}>
                            <Text style={styles.nlFileName} numberOfLines={1}>1. Screen_short_2021-11-06</Text>
                            <View style={styles.nlActions, styles.nlRow}>
                                <TouchableOpacity>
                                    <Text style={styles.nlActionIcon} >
                                        <Image source={DeleteImage}/>
                                    </Text> 
                                </TouchableOpacity>
                                <Text style={styles.nlLineVerticle}></Text>
                                <TouchableOpacity>
                                    <Text style={styles.nlActionIcon} >
                                        <Image  source={DownloadImage}/>
                                    </Text> 
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={[styles.nlDate, {marginTop: 10}]}>2021.10.13</Text>
                    </View>
                </View>
            </View>
            <View style={styles.nlCard}>
                
                <TextInput style={styles.nlTextInput}
                multiline={true}
                numberOfLines={10}
                />
                <TouchableOpacity style={styles.nlButtonWhite}>
                    <Text style={styles.nlFont16}>
                        write
                    </Text> 
                </TouchableOpacity>
            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({
    nlCard: {
        marginTop: 20,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#e1e1e1',
        borderRadius: 10,
        overflow: 'hidden',
        
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
    nlCardSpace: {
        padding: 20
    },
    nlQuestion: {
        backgroundColor: '#fff'
    },
    nlAnswer: {
        backgroundColor: '#f5f5f5'
    },
    nlIcon: {
        color: '#fff',
        backgroundColor: '#6d6d6d',
        width: 24,
        height: 24,
        borderRadius: 20,
        textAlign:'center',
        paddingTop: 1,
        marginRight: 8
    },
    nlIconQ: {
        backgroundColor: '#7c257a'
    },
    nlTitle: { 
        fontSize: 18,
        fontWeight: 'bold',
        
    },
    nlFilePart: {
        paddingVertical: 5,
        marginTop: 10
    },
    nlFileName: {
        fontSize: 14,
        
        width: '80%'
    },
    nlDate: {
        color: '#b1b1b1',
        fontSize: 13,
    },
    nlRelative: {
        position: 'relative'
    },
    nlLineVerticle: {
        height: 12,
        width: 1,
        backgroundColor: '#b1b1b1',
        marginHorizontal: 10
    },
    nlActions: {
        width: '20%',
        height: 60
    },
    nlText: {
        fontSize: 14,
        width: '80%'
    },
    nlButtonWhite: {
        backgroundColor: '#fff',
        marginTop: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        orderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#e1e1e1',
        borderRadius: 5,
    },
    nlFont16: {
        fontSize: '16',
    },
    nlBold: {
        fontWeight: 'bold',
    },
    nlTextInput: {
        marginTop: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#e1e1e1',
        borderRadius: 5,
    },
    nlMax: {
        width: ''
    }

});

export default ComplainsView
