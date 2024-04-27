import { createContext, useEffect } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // useEffect(() => {
    //     const unSubscribe = onAuthStateChanged(auth, currentUser => {
    //         console.log('user in the auth st6ate changed', currentUser);
    //         setUser(currentUser);

    //     });
    //     return () => {
    //         unSubscribe();
    //     }
    // }, [])

    const authInfo = {
        user,
        createUser,
    }
    
    return (
        <>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export default AuthProvider