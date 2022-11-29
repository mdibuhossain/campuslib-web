import React from 'react';
import Departments from '../../components/Department/Departments';
import PageLayout from '../../Layout/PageLayout';
import Banner from './Home.style';

const Home = () => {
    return (
        <PageLayout>
            <Banner src="assets/images/home.webp" title="CAMPUS LIBRARY" />
            <Departments />
        </PageLayout>
    );
};

export default Home;