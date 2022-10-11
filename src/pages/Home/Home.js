import React from 'react';
import PageLayout from '../../Layout/PageLayout';
import { Banner } from './Home.style';

const Home = () => {
    return (
        <PageLayout>
            <Banner src="assets/images/home.webp" title="CAMPUS LIBRARY" />
        </PageLayout>
    );
};

export default Home;