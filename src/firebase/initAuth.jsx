import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const initAuth = () => {
    const app = initializeApp(firebaseConfig)
    return {
        app
    }
}

export default initAuth;