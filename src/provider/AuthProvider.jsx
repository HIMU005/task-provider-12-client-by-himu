import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosCommon from '../Hooks/useAxiosCommon';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
<<<<<<< HEAD
<<<<<<< HEAD
    const [loading, setLoading] = useState(true);
=======
    const [loading, setLoading] = useState(false);
>>>>>>> b2e9578 (registration authprovider)
=======
    const [loading, setLoading] = useState(true);
>>>>>>> 0f62718 (fixed bug in authprovider)
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
<<<<<<< HEAD
<<<<<<< HEAD
        setLoading(true)
=======
>>>>>>> b2e9578 (registration authprovider)
=======
        setLoading(true)
>>>>>>> 0f62718 (fixed bug in authprovider)
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
<<<<<<< HEAD
<<<<<<< HEAD
                            setLoading(false)
=======
>>>>>>> b2e9578 (registration authprovider)
=======
                            setLoading(false)
>>>>>>> f7a9c7b (improve in usesecure)
                        }
                    })
            } else {
                // TODO: remove the token if the token store in the client side 
                localStorage.removeItem('access-token')
<<<<<<< HEAD
<<<<<<< HEAD
                setLoading(false)
            }

            // console.log("current user", currentUser);
            // setLoading(false);
<<<<<<< HEAD
=======
=======
                setLoading(false)
>>>>>>> f7a9c7b (improve in usesecure)
            }

            // console.log("current user", currentUser);
            setLoading(false);
>>>>>>> b2e9578 (registration authprovider)
=======
>>>>>>> 0f62718 (fixed bug in authprovider)
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
<<<<<<< HEAD
<<<<<<< HEAD
        setUser,
=======
>>>>>>> b2e9578 (registration authprovider)
=======
        setUser,
>>>>>>> 0f62718 (fixed bug in authprovider)
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
<<<<<<< HEAD
<<<<<<< HEAD
    children: PropTypes.object,
=======
    children: PropTypes.array,
>>>>>>> b2e9578 (registration authprovider)
=======
    children: PropTypes.object,
>>>>>>> d8d0a65 (implement helmet of dynamic title)
}
