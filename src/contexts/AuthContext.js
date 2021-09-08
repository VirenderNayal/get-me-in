import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();

    function signup(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                // Signed Up
                return userCredentials.user;
            }).catch((error) => {
                return error.message;
            })
    }

    function login(email, password){
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            return userCredentials.user;
        }).catch((error) => {
            const msg = error.message;
            return msg;
        })
    }

    function logout(){
        return signOut(auth);
    }

    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
            }
        });

        return unsub;
    }, [])


    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
    }

    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    );
}
