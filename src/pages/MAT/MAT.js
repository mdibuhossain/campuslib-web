import React from 'react';
import BookShowcase from '../../components/BookShowcase';
import { Banner } from '../Home/Home.style';

const MAT = () => {
    return (
        <>
            <Banner title="Mathematics" src="assets/images/math.jpg" />
            <BookShowcase department="math" />
        </>
    );
};

export default MAT;