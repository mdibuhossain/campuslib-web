import { logEvent } from 'firebase/analytics'
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, getIdToken } from 'firebase/auth'
import { getDownloadURL, getStorage, ref, uploadString } from 'firebase/storage';
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import initAuth from "../firebase/initAuth"



const { analytics } = initAuth()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [admin, setAdmin] = useState(false);
    const [updateTrack, setUpdateTrack] = useState(0);
    const [error, setError] = useState();
    const [token, setToken] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const storage = getStorage();

    const location = useLocation();
    const history = useNavigate();

    const clearUser = () => {
        setName('')
        setEmail('')
        setPassword('')
    }

    useEffect(() => {
        if (location?.pathname === '/')
            logEvent(analytics, `Homepage_visited`)
        else
            logEvent(analytics, `${location?.pathname?.split("/")[1]}_visited`)
    }, [location?.pathname])

    const redirect = () => {
        const { state } = location;
        (state?.from) ? history(state?.from?.pathname) : history('/')
    }

    const uploadAvatar = async (file) => {
        const fileRef = ref(storage, 'avatar/' + auth?.currentUser?.uid + '.png');
        setIsLoading(true);
        const snapshot = await uploadString(fileRef, file, 'data_url');
        const photoURL = await getDownloadURL(fileRef);
        updateProfile(auth?.currentUser, { photoURL })
            .then(() => console.log('avatar uploaded'))
            .catch(e => console.log(e.message))
            .finally((result) => setUser({ ...user, photoURL }))
        setIsLoading(false);
    }

    const saveUser = (email, password, displayName, photoURL, type, method) => {
        const tmpUser = { email, password, displayName, photoURL, authType: type }
        fetch(`${process.env.REACT_APP_BACKEND}/user_post`, {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tmpUser)
        })
        //.then(data => console.log(data))
    }

    const signWithGoogle = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                fetch(`${process.env.REACT_APP_BACKEND}/users`)
                    .then(res => res.json())
                    .then(data => {
                        const tmpData = data.find(item => item?.email === result?.user?.email)
                        if (!tmpData?.email)
                            saveUser(result?.user?.email, "", result?.user?.displayName, result?.user?.photoURL, result?.user?.providerData[0]?.providerId, "POST")
                    })
                user && redirect()
            })
            .catch(error => setError('Something wrong with Google'))
            .finally(() => setIsLoading(false))
    }

    const signInWithEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                clearUser()
                user && redirect();
            })
            .catch(error => setError("Incorrect Email and Password!"))
            .finally(() => setIsLoading(false))
    }

    const signUpWithEmail = (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError('');
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                auth?.currentUser && (
                    updateProfile(auth?.currentUser, {
                        displayName: `${name && name}`,
                        photoURL: `${name && "/assets/images/avator.png"}`
                    }).then(() => {
                        setUpdateTrack(updateTrack + 1)
                    }).catch(error => setError(error.message))
                )
                saveUser(email, password, name, result?.user?.photoURL, result?.user?.providerData[0]?.providerId, "POST");
                user && redirect();
            })
            .catch(error => setError('Invalid Email and Password!'))
            .finally(() => setIsLoading(false))
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
                clearUser()
            })
        // .finally(() => setIsLoading(false))
        user && redirect();
    }

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND}/user/checkadmin/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data?.admin))
    }, [user])

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => setToken(idToken))
                clearUser()
                if (location.pathname === '/login' || location.pathname === '/signup')
                    history('/');
            }
            else
                setUser({});
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth, history, location, updateTrack])


    return {
        user,
        name,
        email,
        token,
        error,
        admin,
        logOut,
        setName,
        setEmail,
        password,
        isLoading,
        setPassword,
        uploadAvatar,
        signWithGoogle,
        signInWithEmail,
        signUpWithEmail
    }
}

export default useFirebase