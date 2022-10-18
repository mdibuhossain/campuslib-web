import React from 'react';
import BookShowcase from '../../components/BookShowcase';
import PageLayout from '../../Layout/PageLayout';
import Banner from '../Home/Home.style';

const MAT = () => {
    return (
        <PageLayout>
            <Banner title="Mathematics" src="assets/images/math.webp" />
            <BookShowcase department="math" />
        </PageLayout>
    );
};

export default MAT;