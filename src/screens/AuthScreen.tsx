import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, TextInput, ScrollView } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { appSpacing, appColors, appTypography } from "../theme";
import React from 'react'
import { useState } from 'react';

export default function AuthScreen() {
  return (
    <SafeAreaView style={styles.main}>
        <View style={styles.wrapper}>
            <Image source={require('../../assets/icons/logo1.png')} style={styles.logo}/>
            <Text style={styles.primaryTxt}>Attendance, made effortless.</Text>
            <Text style={styles.secondaryTxt}>One scan to mark your presence securely</Text>
        </View>
        <View style={styles.textContainer}>
            <Text style={[styles.text2, {marginTop: appSpacing.lg}]}>E-mail</Text>
            <TextInput style={styles.inputBox} placeholder='  Enter Your Email' placeholderTextColor={appColors.textSecondary}/>
            <Text style={styles.text2}>Password</Text>
            <TextInput style={styles.inputBox} placeholder='  Enter Your Password' placeholderTextColor={appColors.textSecondary}/>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.login}>
                <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>Log In</Text>
            </View>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: appSpacing.sm, marginBottom: appSpacing.md}}>
            <View style={[styles.divider, {marginRight: 4}]}/>
            <Text style={{color: appColors.textSecondary}}>OR</Text>
            <View style={[styles.divider, {marginLeft: 4}]}/>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
            <View style={[styles.inputBox, {marginBottom: appSpacing.lg, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}]}>
                <Image source={require('../../assets/icons/search.png')} style={{height: 20, width: 20, marginRight: 10}}/>
                <Text>Log In with Google</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
            <View style={[styles.inputBox, {marginBottom: appSpacing.lg, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}]}>
                <Image source={require('../../assets/icons/call.png')} style={{height: 20, width: 20, marginRight: 10}}/>
                <Text>Log In with Phone Number</Text>
            </View>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: appColors.background,
        justifyContent: 'center',
        alignItems: 'center',
    },

    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        height: 50,
        width: 50,
    },

    primaryTxt: {
        ...appTypography.headingL,
        paddingBottom: appSpacing.sm,
        paddingTop: appSpacing.md
    },

    secondaryTxt: {
        fontWeight: '500',
        color: appColors.textSecondary,
        fontSize: 14
    },

    textContainer: {
        marginTop: appSpacing.sm
    },

    text2: {
        ...appTypography.body,
        marginBottom: appSpacing.xs
    },

    inputBox: {
        width: 300,
        height: 40,
        backgroundColor: appColors.surface,
        borderRadius: 6,
        elevation: 4,
        borderColor: '#111111',
        borderWidth: 1.5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        marginBottom: appSpacing.md,
    },

    login: {
        backgroundColor: appColors.textPrimary,
        width: 300,
        height: 40,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: appSpacing.sm,
        elevation: 4,
        borderColor: '#111111',
        borderWidth: 1.5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        marginBottom: appSpacing.sm
    },

    divider: {
        width: 150,
        height: 1,
        backgroundColor: appColors.textSecondary,
        borderRadius: 2,
    }
})