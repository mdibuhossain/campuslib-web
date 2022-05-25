import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./firebase.config";


const initAuth = () => {
    const app = initializeApp(firebaseConfig)
    const analytics = getAnalytics(app);
}

export default initAuth;