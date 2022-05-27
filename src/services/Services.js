import axios from "axios";

const Services = (action, type, data) => {
    switch (action) {
        case "POST_REQUEST":
            axios.post(`${process.env.REACT_APP_BACKEND}/post_${type}`, data)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            break;

        default:
            break;
    }
}

export default Services