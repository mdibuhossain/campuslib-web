import React from 'react';
import { useParams } from 'react-router-dom';
import BookShowcase from '../components/BookShowcase';
import PageLayout from '../Layout/PageLayout';
import Banner from './Home/Home.style';

const Department = () => {
    const { dept } = useParams();
    return (
        <PageLayout>
            <Banner title={dept} src={dept} />
            <BookShowcase department={dept} />
        </PageLayout>
    );
};

export default Department;