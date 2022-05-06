import React from 'react';
import BookShowcase from '../../components/BookShowcase';
import { Banner } from '../Home/Home.style';

const EEE = () => {
    return (
        <>
            <Banner title="Electrical & Electronics Engineering" src="assets/images/eee.jpg" />
            <BookShowcase department="eee" />
        </>
    );
};

export default EEE;