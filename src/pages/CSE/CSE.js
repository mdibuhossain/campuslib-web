import React from 'react';
import BookShowcase from '../../components/BookShowcase';
import PageLayout from '../../Layout/PageLayout';
import Banner from '../Home/Home.style';

const CSE = () => {
    return (
        <PageLayout>
            <Banner title="Computer Science & Engineering" src="assets/images/cse.webp" />
            <BookShowcase department="cse" />
        </PageLayout>
    );
};

export default CSE;