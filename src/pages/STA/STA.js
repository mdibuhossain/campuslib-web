import React from 'react';
import BookShowcase from '../../components/BookShowcase';
import PageLayout from '../../Layout/PageLayout';
import Banner from '../Home/Home.style';

const STA = () => {
    return (
        <PageLayout>
            <Banner title="Statistics" src="assets/images/sta.webp" />
            <BookShowcase department="sta" />
        </PageLayout>
    );
};

export default STA;