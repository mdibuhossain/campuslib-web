import React from 'react';
import BookShowcase from '../../components/BookShowcase';
import { Banner } from '../Home/Home.style';

const CSE = () => {
    return (
        <>
            <Banner title="Computer Science & Engineering" src="assets/images/cse.jpg" />
            <BookShowcase department="cse" />
        </>
    );
};

export default CSE;