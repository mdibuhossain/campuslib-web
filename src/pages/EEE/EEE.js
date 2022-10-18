import React from 'react';
import BookShowcase from '../../components/BookShowcase';
import PageLayout from '../../Layout/PageLayout';
import Banner from '../Home/Home.style';

const EEE = () => {
    return (
        <PageLayout>
            <Banner title="Electrical & Electronics Engineering" src="assets/images/eee.webp" />
            <BookShowcase department="eee" />
        </PageLayout>
    );
};

export default EEE;