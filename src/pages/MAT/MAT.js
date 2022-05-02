import React, { useState } from 'react';
import Accordionlist from '../../components/Accordionlist';
import { useBooks } from '../../Hooks/useBooks';
import { Banner } from '../Home/Home.style';

const MAT = () => {
    const [syllabus, setSyllabus] = useState([]);
    const [academic, setAcademic] = useState([]);
    const [others, setOthers] = useState([]);
    const [questions, setQuestions] = useState([]);

    useBooks(setAcademic, setOthers, "math", "academic", "others");

    return (
        <>
            <Banner title="Mathematics" src="assets/images/math.jpg" />
            <div className='md:w-3/5 w-11/12 m-auto my-10 md:border-2 md:rounded-lg md:p-10'>
                <Accordionlist title="Syllabus ↓" />
                <Accordionlist title="Academic Books ↓" contents={academic} />
                <Accordionlist title="Others Books ↓" contents={others} />
                <Accordionlist title="Previous Year Questions ↓" />
            </div>
        </>
    );
};

export default MAT;