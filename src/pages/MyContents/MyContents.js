import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import ListOfRequest from '../../components/ListOfRequest';
import { useAuth } from '../../Hooks/useAuth';

const MyContents = () => {
    const { books, questions, syllabus, setUpdate, update } = useAuth()
    useEffect(() => {
        setUpdate(update + 1)
    }, [])
    return (
        <div>
            <Typography variant='h5' sx={{ fontWeight: 600, textAlign: 'center', my: 4 }}>My Content</Typography>
            <ListOfRequest content={books} status={true} title="Book" />
            <ListOfRequest content={questions} status={true} title="Question" />
            <ListOfRequest content={syllabus} status={true} title="Syllabus" />
        </div >
    );
};

export default MyContents;