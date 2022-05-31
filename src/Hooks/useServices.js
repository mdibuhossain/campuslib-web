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
                            setUpdate(update + 1)
                        }
                    })
                    .catch(function (error) {
                        // console.log(error);
                    });
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