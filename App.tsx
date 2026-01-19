import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react';
import AttendanceSuccess from './src/screens/AttendanceSuccess'
import LiveSession from './src/screens/LiveSession'
import Home from './src/screens/Home'
import Profile from './src/screens/Profile'
import AuthScreen from './src/screens/AuthScreen'
import {firebaseSanityCheck} from './src/utils/firebaseTest'

export default function App() {
  useEffect(() => {
    firebaseSanityCheck();
  }, []);
  return (
    <View style={{flex: 1}}>
      <AuthScreen/>
    </View>
  )
}

const styles = StyleSheet.create({})