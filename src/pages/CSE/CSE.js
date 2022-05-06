import React, { useEffect, useState } from 'react';
import Accordionlist from '../../components/Accordionlist';
import { useBooks } from '../../Hooks/useBooks';
import { Banner } from '../Home/Home.style';

const CSE = () => {
    const [syllabus, setSyllabus] = useState([]);
    const [academic, setAcademic] = useState([]);
    const [questions, setQuestions] = useState([]);

    useBooks(setAcademic, "cse", "books");
    useBooks(setQuestions, "cse", "questions");
    useBooks(setSyllabus, "cse", "syllabus");

    return (
        <>
            <Banner title="Computer Science & Engineering" src="assets/images/cse.jpg" />
            <div className='md:w-3/5 w-11/12 m-auto my-10 md:border-2 md:rounded-lg md:p-10'>
                <Accordionlist title="Syllabus ↓" contents={syllabus} />
                <Accordionlist title="Academic Books ↓" contents={academic} />
                {/* <Accordionlist title="Others Books ↓" /> */}
                <Accordionlist title="Previous Year Questions ↓" contents={questions} />
            </div>

        </>
    );
};

export default CSE;