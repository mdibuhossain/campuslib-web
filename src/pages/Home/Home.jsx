import React from 'react';
import Departments from '../../components/Department/Departments';
import PageLayout from '../../Layout/PageLayout';

const Home = () => {
    return (
        <PageLayout>
            {/* <Banner src="home" title="CAMPUS LIBRARY" /> */}
            <Departments />
        </PageLayout>
    );
};

export default Home;