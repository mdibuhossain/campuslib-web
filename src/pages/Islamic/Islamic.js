import React from 'react';
import BookShowcase from '../../components/BookShowcase';
import PageLayout from '../../Layout/PageLayout';
import Banner from '../Home/Home.style';

const Islamic = () => {
    return (
        <PageLayout>
            <Banner title="Islamic" src="assets/images/nonacademic.webp" />
            <BookShowcase department="islamic" />
        </PageLayout>
    );
};

export default Islamic;