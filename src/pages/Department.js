import React from 'react';
import { useParams } from 'react-router-dom';
import BookShowcase from '../components/BookShowcase';
import useUtility from '../Hooks/useUtility';
import PageLayout from '../Layout/PageLayout';
import Banner from './Home/Home.style';
import LinearLoadin from '../components/Linear_Loading/LinearLoadin'
import NotFound from '../components/NotFound/NotFound';

const Department = () => {
    const { dept } = useParams()
    const { dataLoading, allData } = useUtility()
    if (!dataLoading) {
        const check = allData.find(it => it.categories.trim().toLowerCase() === dept.trim().toLowerCase())
        if (check) {
            return (
                <PageLayout>
                    <Banner title={dept} src={dept} />
                    <BookShowcase department={dept} />
                </PageLayout>
            )
        } else {
            return <NotFound />
        }
    }
    return <LinearLoadin />
};

export default Department;