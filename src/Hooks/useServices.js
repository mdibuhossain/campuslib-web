import axios from "axios";
import useData from "./useData";

const useServices = () => {
    const { setUpdate, update } = useData()
    const Services = (action, type, data) => {
        switch (action) {
            case "POST_REQUEST":
                axios.post(`${process.env.REACT_APP_BACKEND}/post_${type}`, data)
                    .then(function (response) {
                        if (response?.data?.insertedId) {
                            alert("Request submit successfully")
                        }
                    })
                    .catch(function (error) {
                        // console.log(error);
                    });
                break;
            case "DELETE":
                axios.delete(`${process.env.REACT_APP_BACKEND}/${type}/delete/${data?._id}`)
                    .then((res) => {
                        console.log(res)
                    }).catch(error => console.log(error))
                break;
            case "STATUS_UPDATE":
                axios.put(`${process.env.REACT_APP_BACKEND}/${type}/status/${data?._id}`, data)
                    .then(res => {
                        console.log(res)
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