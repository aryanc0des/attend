import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth';

export function authListener(){
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
        console.log(user)
    })
    
}