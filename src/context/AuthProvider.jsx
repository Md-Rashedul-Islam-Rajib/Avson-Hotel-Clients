/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";



export const AuthContext = createContext('');

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);


    // register user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

        // sign in user
        const logInUser = (email, password) => {
            setLoading(true)
            return signInWithEmailAndPassword(auth,email,password)
        }
    
        // sign out user
        const logOutUser = () => {
            signOut(auth)
            .then(result=>{
                console.log(result);
                setUser(null)
            })
        }
    
        // google login
        const googleProvider = new GoogleAuthProvider();
    
        const googleSignin = () => {
            setLoading(true)
            return signInWithPopup(auth, googleProvider)
        }
    
    // github login
    const githubProvider = new GithubAuthProvider();
    const githubSignin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    
    
        useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
                if(currentUser){
                    setUser(currentUser)
                    
                }
                setLoading(false)
            });
            return ()=> {
                unsubscribe();
            }
        },[])
    
        const authInfo = {
            user,
            setUser,
            createUser,
            logInUser,
            logOutUser,
            googleSignin,
            githubSignin,
            loading
            
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;







