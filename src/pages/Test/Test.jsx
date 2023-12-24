import axios from 'axios';
import React from 'react';

const Test = () => {
    const [dept, setDept] = React.useState("")
    const submitHandler = async (e) => {
        e.preventDefault()
        let formData = new FormData(e.currentTarget)
        axios.post(`${import.meta.env.VITE_APP_BACKEND_WITHOUT_GQL}/test`, formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }).then(res => console.log(res)).catch(er => console.log("error: ", er))


        e.target.reset()
    }
    return (
        <div className='m-auto w-10/12 text-center border-2 border-gray-500 p-10 mt-10'>
            <form
                onSubmit={submitHandler}
            >
                <input
                    type="file"
                    name={dept}
                    required
                />
                <input type="text" name="dept" required onChange={(e) => setDept(e.target.value)} />
                <button className="bg-red-300 px-2 py-1 rounded-md" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Test;