/* eslint-disable react/prop-types */

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Config/firebase.config";
import Swal from "sweetalert2";


export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUserEmailPass = async (email, pass) => {
        if (user) {
            Swal.fire("Please Log out Current User !")
            return;
        }
        setLoading(true);
        const userCredentials = await createUserWithEmailAndPassword(auth, email, pass);
        await sendEmailVerification(userCredentials.user);
        await signOut(auth);
    };

    const signInEmailPass = (email, pass) => {
        if (user) {
            Swal.fire("Please Log out Current User !")
            return;
        }
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass);
    };

    const signInWithGoogle = () => {
        if (user) {
            Swal.fire("Please Log out Current User !")
            return;
        }
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false);
        });
        return () => unSubscribe();
    }, []);

    const authInfo = {
        user,
        loading,
        createUserEmailPass,
        signInWithGoogle,
        logOut,
        signInEmailPass,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
