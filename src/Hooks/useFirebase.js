import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import initAuth from "../firebase/initAuth"



initAuth()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [admin, setAdmin] = useState(false);
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const location = useLocation();
    const history = useNavigate();

    const redirect = () => {
        const { state } = location;
        (state?.from) ? history(state?.from?.pathname) : history('/')
    }

    const saveUser = (email, displayName, method) => {
        const tmpUser = { email, displayName }
        fetch('http://localhost:5000/user_post', {
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
                fetch('http://localhost:5000/users')
                    .then(res => res.json())
                    .then(data => {
                        const tmpData = data.find(item => item?.email === result?.user?.email)
                        if (!tmpData?.email)
                            saveUser(result?.user?.email, result?.user?.displayName, "POST")
                    })
                user && redirect()
            })
            .catch(error => setError('Something wrong with Google'))
            .finally(() => setIsLoading(false))
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => setUser({}))
        // .finally(() => setIsLoading(false))
        user && redirect();
    }

    // useEffect(() => {
    //     fetch(`https://travel-pagla.herokuapp.com/users/admin/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => setAdmin(data?.admin))
    // }, [user])

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                if (location.pathname === '/login' || location.pathname === '/signup')
                    history('/');
            }
            else
                setUser({});
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth, history, location])


    return {
        user,
        admin,
        error,
        isLoading,
        logOut,
        signWithGoogle
    }
}

export default useFirebase