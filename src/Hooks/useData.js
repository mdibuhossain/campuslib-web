import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS, GET_QUESTIONS, GET_SYLLABUS } from "../queries/query";

const useData = () => {
    const [allData, setAllData] = useState([]);
    const [dataLoading, setDataLoading] = useState(false);
    const [update, setUpdate] = useState(0);

    const {
        loading: load_1,
        data: { getBooks: books } = [],
    } = useQuery(GET_BOOKS);
    const {
        loading: load_2,
        data: { getQuestions: questions } = [],
    } = useQuery(GET_QUESTIONS);
    const {
        loading: load_3,
        data: { getAllSyllabus: syllabus } = [],
    } = useQuery(GET_SYLLABUS);

    useEffect(() => {
        setDataLoading(load_1 || load_2 || load_3);
    }, [load_1, load_2, load_3]);

    useEffect(() => {
        if (books && questions && syllabus)
            setAllData([...books, ...questions, ...syllabus]);
    }, [books, questions, syllabus]);

    return {
        books,
        update,
        allData,
        syllabus,
        setUpdate,
        questions,
        dataLoading,
        setDataLoading,
    };
};

export default useData;
