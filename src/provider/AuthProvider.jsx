import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosCommon from '../Hooks/useAxiosCommon';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const googleProvider = new GoogleAuthProvider();
    const axiosCommon = useAxiosCommon();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const GoogleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {
                // get token and store client 
                const userInfo = { email: currentUser.email };
                axiosCommon.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                        }
                    })
            } else {
                // TODO: remove the token if the token store in the client side 
                localStorage.removeItem('access-token')
            }

            // console.log("current user", currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe()
        };
    }, [axiosCommon])

    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        signInUser,
        logOut,
        updateUserProfile,
        GoogleLogin,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;
AuthProvider.propTypes = {
    // Array of children.
    children: PropTypes.array,
}
