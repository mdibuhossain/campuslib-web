import React, { useEffect } from 'react';
import { useAuth } from '../../Hooks/useAuth';
import { Typography } from '@mui/material';
import ListOfRequest from '../../components/ListOfRequest';
import PageLayout from '../../Layout/PageLayout';

const PendingRequest = () => {
    const { books, questions, syllabus, setUpdate, update } = useAuth()
    useEffect(() => {
        setUpdate(update + 1)
    }, [])
    return (
        <PageLayout>
            <div>
                <Typography variant='h5' sx={{ fontWeight: 600, textAlign: 'center', my: 4 }}>PENDING REQUEST</Typography>
                <ListOfRequest content={books} status={false} title="Book" />
                <ListOfRequest content={questions} status={false} title="Question" />
                <ListOfRequest content={syllabus} status={false} title="Syllabus" />
            </div >
        </PageLayout>
    );
};

export default PendingRequest;