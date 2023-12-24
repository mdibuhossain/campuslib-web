import { useMutation, useQuery } from '@apollo/client';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, getIdToken } from 'firebase/auth'
import { getDownloadURL, getStorage, ref, uploadString } from 'firebase/storage';
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import initAuth from "../firebase/initAuth"
import { POST_USER, GET_ADMIN, UPDATE_PROFILE } from '../queries/query';



initAuth()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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

    const redirect = () => {
        const { state } = location;
        (state?.from) ? history(state?.from?.pathname) : history('/')
    }

    // Change Profile photo
    const [changePhoto,{ loading: updateProfileLoading } ] = useMutation(UPDATE_PROFILE)

    // new user entry in DB
    const [saveUser] = useMutation(POST_USER)

    // Check is User admin or Not
    const { data: { isAdmin: { isAdmin: admin = false } = {} } = [], loading: adminLoading = true } = useQuery(GET_ADMIN, {
        variables: { email: user?.email }
    })

    const uploadAvatar = async (file) => {
        const fileRef = ref(storage, 'avatar/' + auth?.currentUser?.uid + '.png');
        setIsLoading(true);
        const snapshot = await uploadString(fileRef, file, 'data_url');
        const photoURL = await getDownloadURL(fileRef);
        updateProfile(auth?.currentUser, { photoURL })
            .then(() => { })
            .catch(e => { })
            .finally((result) => {
                changePhoto({ variables: { token, photoURL } })
                setUser({ ...user, photoURL })
            })
        setIsLoading(false);
    }

    const updateProfileSettings = (updateData) => {
        updateProfile(auth?.currentUser, { displayName: updateData?.displayName })
            .then(() => {
                setUser({ ...user, displayName: updateData?.displayName })
                changePhoto({ variables: { token, ...user } })
            })
            .catch(e => { setError(e.message) })
    }

    const signWithGoogle = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                saveUser({
                    variables: {
                        email: result?.user?.email,
                        displayName: result?.user?.displayName,
                        photoURL: result?.user?.photoURL,
                        authType: result?.user?.providerData[0]?.providerId
                    }
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
                        photoURL: `${name && "/assets/images/avator.webp"}`
                    }).then(() => {
                        setUpdateTrack(updateTrack + 1)
                    }).catch(error => setError(error.message))
                )
                saveUser({
                    variables: {
                        email,
                        password,
                        displayName: name,
                        photoURL: result?.user?.photoURL,
                        authType: result?.user?.providerData[0]?.providerId
                    }
                })
                // saveUser(email, password, name, result?.user?.photoURL, result?.user?.providerData[0]?.providerId, "POST");
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
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => setToken(`Bearer ${idToken}`))
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
        setError,
        password,
        isLoading,
        setPassword,
        adminLoading,
        uploadAvatar,
        signWithGoogle,
        signInWithEmail,
        signUpWithEmail,
        updateProfileLoading,
        updateProfileSettings,
    }
}

export default useFirebase