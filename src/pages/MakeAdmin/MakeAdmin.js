import { Avatar, Chip, CircularProgress, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Hooks/useAuth';

const MakeAdmin = () => {
    const { user } = useAuth();
    const [isFetching, setIsFetching] = useState(false);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        setIsFetching(true)
        axios.get(`${process.env.REACT_APP_BACKEND}/users`)
            .then(res => {
                setUsers(res?.data)
                setIsFetching(false)
            })
    }, [])
    return (
        <>
            <Typography variant='h5' sx={{ fontWeight: 600, textAlign: 'center', my: 4 }}>MAKE ADMIN</Typography>
            <div className='flex flex-col 2xl:w-6/12 xl:w-7/12 lg:w-8/12 md:w-9/12 w-11/12 mx-auto mt-10 mb-10 bg-white p-5 rounded-lg'>
                {
                    isFetching ? <div className=" flex justify-center items-center">
                        <CircularProgress color="info" />
                    </div> :
                        users?.map(item => (
                            <div key={item._id} className="grid grid-cols-1 sm:grid-cols-3 m-2">
                                <div className='flex items-center col-span-2'>
                                    <div className='mr-2 w-12 hidden sm:block'>
                                        <img
                                            src={item?.photoURL || '/assets/images/avator.png'}
                                            className="rounded-full w-full"
                                            alt="Avatar"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-start w-full">
                                        <h5 className="text-sm font-medium leading-tight mr-2">{item.email}</h5>
                                        <p className="text-xs text-gray-500">{item.displayName} {user.email === item.email && '( me )'}</p>
                                    </div>
                                </div>
                                <div className="sm:grid sm:justify-self-end sm:mt-0 mt-1 content-center">
                                    {
                                        item.role === 'admin' ?
                                            <button className="bg-gray-300 rounded-md px-2 py-1 font-semibold text-gray-50 text-xs cursor-default">Admin</button>
                                            :
                                            <button className="bg-green-500 hover:bg-green-600 rounded-md px-2 py-1 font-semibold text-gray-800 hover:text-gray-200 text-xs">Make Admin</button>
                                    }
                                </div>
                            </div>
                        ))
                }
            </div >
        </>
    );
};

export default MakeAdmin;