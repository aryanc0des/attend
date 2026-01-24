import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; 

export function signIn(email: string, password: string){
    const auth = getAuth()

    try{
        const userCred = signInWithEmailAndPassword(auth, email, password) // signs in user
        console.log("user signed in", userCred)
    }
    catch(err){
        console.log("Error:", err)
    }
}

//
//

