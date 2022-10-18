import { lazy, Suspense, useState } from "react";
import { useBooks } from "../Hooks/useBooks";
// import Accordionlist from "./Accordionlist";
import LinearLoadin from "./Linear_Loading/LinearLoadin";
const Accordionlist = lazy(() => import("./Accordionlist"));


const BookShowcase = ({ department }) => {
    const [syllabus, setSyllabus] = useState([]);
    const [academic, setAcademic] = useState([]);
    const [questions, setQuestions] = useState([]);

    useBooks(setAcademic, department, "books");
    useBooks(setQuestions, department, "questions");
    useBooks(setSyllabus, department, "syllabus");

    return (
        <Suspense fallback={<LinearLoadin />}>
            <div className='md:w-3/5 w-11/12 m-auto my-10 md:border-2 md:rounded-lg p-10 bg-white'>
                <Accordionlist title="Syllabus" contents={syllabus} />
                <Accordionlist title="Books" contents={academic} />
                <Accordionlist title="Questions" contents={questions} />
            </div>
        </Suspense>
    );
};

export default BookShowcase;