import { useState } from "react";
import { useBooks } from "../Hooks/useBooks";
import Accordionlist from "./Accordionlist";


const BookShowcase = ({ department }) => {
    const [syllabus, setSyllabus] = useState([]);
    const [academic, setAcademic] = useState([]);
    const [questions, setQuestions] = useState([]);

    useBooks(setAcademic, department, "books");
    useBooks(setQuestions, department, "questions");
    useBooks(setSyllabus, department, "syllabus");

    return (
        <div className='md:w-3/5 w-11/12 m-auto my-10 md:border-2 md:rounded-lg md:p-10 bg-white'>
            <Accordionlist title="Syllabus ↓" contents={syllabus} />
            <Accordionlist title="Academic Books ↓" contents={academic} />
            <Accordionlist title="Previous Year Questions ↓" contents={questions} />
        </div>
    );
};

export default BookShowcase;