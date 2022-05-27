import { useEffect, useState } from "react";

const useData = () => {
    const [books, setBooks] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [syllabus, setSyllabus] = useState([]);
    const [allData, setAllData] = useState([]);
    const [dataLoading, setDataLoading] = useState(false);

    useEffect(() => {
        setDataLoading(true)
        fetch(`${process.env.REACT_APP_BACKEND}/books`)
            .then(res => res.json())
            .then(data => {
                setBooks(data)
                setDataLoading(false)
            })
    }, [])

    useEffect(() => {
        setDataLoading(true)
        fetch(`${process.env.REACT_APP_BACKEND}/questions`)
            .then(res => res.json())
            .then(data => {
                setQuestions(data)
                setDataLoading(false)
            })
    }, [])

    useEffect(() => {
        setDataLoading(true)
        fetch(`${process.env.REACT_APP_BACKEND}/syllabus`)
            .then(res => res.json())
            .then(data => {
                setSyllabus(data)
                setDataLoading(false)
            })
    }, [])

    useEffect(() => {
        setAllData([...books, ...questions, ...syllabus]);
    }, [books, questions, syllabus])


    return {
        books,
        allData,
        syllabus,
        questions,
        dataLoading,
        setDataLoading
    }
}

export default useData