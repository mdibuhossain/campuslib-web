import React from 'react';
import Accordionlist from '../../components/Accordionlist';
import { Banner } from '../Home/Home.style';

const MAT = () => {
    return (
        <>
            <Banner title="Mathematics" src="assets/images/math.jpg" />
            <div className='md:w-3/5 w-11/12 m-auto my-10 md:border-2 md:rounded-lg md:p-10'>
                <Accordionlist title="Syllabus ↓" />
                <Accordionlist title="Academic Books ↓" />
                <Accordionlist title="Others Books ↓" />
                <Accordionlist title="Previous Year Questions ↓" />
            </div>
        </>
    );
};

export default MAT;