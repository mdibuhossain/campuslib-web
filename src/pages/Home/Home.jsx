import React from 'react';
import Departments from '../../components/Department/Departments';
import PageLayout from '../../Layout/PageLayout';
import Banner from './Home.style';

const Home = () => {
    return (
        <PageLayout>
            <Banner src="home" title="CAMPUS LIBRARY" />
            <Departments />
        </PageLayout>
    );
};

export default Home;