import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { useAuth } from '../../Hooks/useAuth';
import PageLayout from '../../Layout/PageLayout';
import ListOfRequest from '../../components/ListOfRequest';

const ContentManagement = ({ isMyContent = false, pageTitle }) => {
    const { books, questions, syllabus, setUpdate, update } = useAuth()
    useEffect(() => {
        setUpdate(update + 1)
    }, [])
    return (
        <PageLayout>
            <Typography variant='h5' sx={{ fontWeight: 600, textAlign: 'center', my: 4 }}>{pageTitle}</Typography>
            <ListOfRequest content={books} status={isMyContent} title="Book" />
            <ListOfRequest content={questions} status={isMyContent} title="Question" />
            <ListOfRequest content={syllabus} status={isMyContent} title="Syllabus" />
        </PageLayout>
    );
};

export default ContentManagement;