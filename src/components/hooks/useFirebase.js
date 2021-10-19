import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../../firebase/firebase.initialize';
import { useHistory } from "react-router";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    let history = useHistory();

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
                history.push('/login')
            })
            .catch((error) => {
                console.log(error.message)
            });
    }
    const registerWithEmailPassword = (name, email, password) => {
        // console.log('registration', name, email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setUserName(name);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }
    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {
                // Profile updated!
            }).catch((error) => {

            });
    }
    const loginWithEmailPassword = (email, password) => {
        // console.log('Login', email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                // setError('');
            })
            .catch((error) => {
                // setError(error.message);
            });
    }

    //observe whether user auth state changed or not.
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })
    }, [auth, history])
    return { user, signInUsingGoogle, logOut, registerWithEmailPassword, loginWithEmailPassword }

}
export default useFirebase;