import React, { useState } from 'react';
import Accordionlist from '../../components/Accordionlist';
import { useBooks } from '../../Hooks/useBooks';
import { Banner } from '../Home/Home.style';

const EEE = () => {
    const [syllabus, setSyllabus] = useState([]);
    const [academic, setAcademic] = useState([]);
    const [questions, setQuestions] = useState([]);

    useBooks(setAcademic, "eee", "books");
    useBooks(setQuestions, "eee", "questions");
    useBooks(setSyllabus, "eee", "syllabus");

    return (
        <>
            <Banner title="Electrical & Electronics Engineering" src="assets/images/eee.jpg" />
            <div className='md:w-3/5 w-11/12 m-auto my-10 md:border-2 md:rounded-lg md:p-10'>
                <Accordionlist title="Syllabus ↓" contents={syllabus} />
                <Accordionlist title="Academic Books ↓" contents={academic} />
                <Accordionlist title="Previous Year Questions ↓" contents={questions} />
            </div>
        </>
    );
};

export default EEE;