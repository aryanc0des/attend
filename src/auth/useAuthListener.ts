//ONE GOAL:- HAS USER LOGGED IN OR NO???, TO SHOW THE RIGHT SCREEN

import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth'
import {useState, useEffect} from 'react'


export function useAuth(){
    
    const [user, setUser] = useState(null)
    const [initializing, setInitializing] = useState(true) // important in order to have a non buggy app and have a loading screen state while we know about auth state
    
    useEffect(()=>{
        const auth = getAuth()
        const unsubscribe = onAuthStateChanged(auth, (user)=>{ //this listener returns a function which unsubscribes or stops the listener from listening 
            setUser(user)
            setInitializing(false)
        })
        return unsubscribe // returning this helps in unsubscribing or stopping the listener
    }, [])
    
    return {user, initializing}
}