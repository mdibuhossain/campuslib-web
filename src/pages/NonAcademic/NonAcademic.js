import React from 'react';
import BookShowcase from '../../components/BookShowcase';
import PageLayout from '../../Layout/PageLayout';
import Banner from '../Home/Home.style';

const NonAcademic = () => {
    return (
        <PageLayout>
            <Banner title="Non Acadmic" src="assets/images/nonacademic.webp" />
            <BookShowcase department="nonacademic" />
        </PageLayout>
    );
};

export default NonAcademic;