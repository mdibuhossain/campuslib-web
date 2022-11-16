import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_DATA } from "../queries/query";

const useData = () => {
    const [allData, setAllData] = useState([]);

    const {
        data: { getBooks: books = [], getQuestions: questions = [], getAllSyllabus: syllabus = [] } = {},
        loading: dataLoading,
    } = useQuery(GET_ALL_DATA)

    useEffect(() => {
        if (books && questions && syllabus)
            setAllData([...books, ...questions, ...syllabus]);
    }, [dataLoading]);

    return {
        books,
        allData,
        syllabus,
        questions,
        dataLoading,
    };
};

export default useData;
