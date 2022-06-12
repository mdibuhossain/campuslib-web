import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./firebase.config";
import { getFirestore } from "firebase/firestore";


const initAuth = () => {
    const app = initializeApp(firebaseConfig)
    const analytics = getAnalytics(app)
    const DB = getFirestore(app)
    return {
        DB,
        app,
        analytics
    }
}

export default initAuth;