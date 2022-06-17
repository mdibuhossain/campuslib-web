import axios from "axios";
import { useAuth } from "./useAuth";

const useServices = () => {
    const { setUpdate, update, token } = useAuth()
    const URL = process.env.REACT_APP_BACKEND
    const Services = (action, type, data) => {
        switch (action) {
            case "POST_REQUEST":
                axios.post(`${URL}/post_${type}`, data)
                    .then(function (response) {
                        if (response?.data?.insertedId) {
                            alert("Request submit successfully")
                        }
                    })
                    .catch(function (error) {
                        // console.log(error);
                    });
                break;
            case "UPDATE_CONTENT":
                axios.put(`${URL}/update_${type}/${data?._id}`, data, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                    .then(res => {
                        if (res?.data?.acknowledged) {
                            setUpdate(update + 1)
                        }
                    }).catch(function (error) {
                        console.log(error);
                    });
                break
            case "DELETE_CONTENT":
                axios.delete(`${URL}/${type}/delete/${data?._id}`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                    .then((res) => {
                        if (res?.data?.acknowledged) {
                            setUpdate(update + 1)
                        }
                    }).catch(error => console.log(error))
                break;
            case "UPDATE_STATUS":
                axios.put(`${URL}/${type}/status/${data?._id}`, data, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                    .then(res => {
                        if (res?.data?.acknowledged) {
                            setUpdate(update + 1)
                        }
                    }).catch(error => console.log(error))
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