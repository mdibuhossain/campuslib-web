import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import ListOfRequest from '../../components/ListOfRequest';
import { useAuth } from '../../Hooks/useAuth';
import PageLayout from '../../Layout/PageLayout';

const ManageContent = () => {
    const { books, questions, syllabus, setUpdate, update } = useAuth()
    useEffect(() => {
        setUpdate(update + 1)
    }, [])
    return (
        <PageLayout>
            <Typography variant='h5' sx={{ fontWeight: 600, textAlign: 'center', my: 4 }}>MANAGE CONTENTS</Typography>
            <ListOfRequest content={books} status={false} title="Book" />
            <ListOfRequest content={questions} status={false} title="Question" />
            <ListOfRequest content={syllabus} status={false} title="Syllabus" />
        </PageLayout>
    );
};

export default ManageContent;