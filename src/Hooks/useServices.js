import axios from "axios";
import useData from "./useData";
import useRealtimedb from "./useRealtimedb";
import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";

const useServices = () => {
    const { setUpdate, update } = useData()
    const { DB } = useRealtimedb();
    const URL = process.env.REACT_APP_BACKEND
    const Services = async (action, type, data) => {
        switch (action) {
            case "POST_REQUEST":
                axios.post(`${URL}/post_${type}`, data)
                    .then(function (response) {
                        if (response?.data?.insertedId) {
                            alert("Request submit successfully")
                        }
                    })
                    .catch(function (error) { });
                addDoc(collection(DB, type), data)
                    .then(res => console.log(res)).catch(error => console.log(error))
                break;
            case "UPDATE_CONTENT":
                // axios.put(`${URL}/update_${type}/${data?._id}`, data)
                //     .then(res => {
                //         console.log(res)
                //     }).catch(function (error) {
                //         console.log(error);
                //     });
                updateDoc(doc(DB, type, data?._id), data)
                    .then(res => console.log(res)).catch(error => console.log(error))
                break
            case "DELETE_CONTENT":
                // axios.delete(`${URL}/${type}/delete/${data?._id}`)
                //     .then((res) => {
                //         console.log(res)
                //     }).catch(error => console.log(error))
                deleteDoc(doc(DB, type, data?._id))
                    .then(res => console.log(res)).catch(error => console.log(error))
                break;
            case "UPDATE_STATUS":
                // axios.put(`${URL}/${type}/status/${data?._id}`, data)
                //     .then(res => {
                //         console.log(res)
                //     }).catch(error => console.log(error))
                updateDoc(doc(DB, type, data?._id), { status: data.status })
                    .then(res => console.log(res)).catch(error => console.log(error))
                break;
            case "POST_USER":
                axios.post(`${process.env.REACT_APP_BACKEND}/user_post`, data)
                    .then(() => { }).catch(() => { })
                addDoc(collection(DB, type), data)
                    .then(res => console.log(res)).catch(error => console.log(error))
                break;
            case "CHECK_ADMIN":
                // fetch(`${process.env.REACT_APP_BACKEND}/user/checkadmin/${data?.email}`)
                //     .then(res => res.json())
                //     .then(data => data?.setAdmin(data?.admin))
                if (data?.email) {
                    const qData = query(collection(DB, type), where("email", "==", data?.email))
                    const snapshot = await getDocs(qData);
                    snapshot.forEach(doc => {
                        data?.setAdmin(doc?.data()?.role === 'admin')
                    })
                }
                break;
            default:
                break;
        }
    }
    return {
        Services
    }
}

export default useServices