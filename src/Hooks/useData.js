import { useEffect, useState } from "react";

const useData = () => {
    const [books, setBooks] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [syllabus, setSyllabus] = useState([]);
    const [allData, setAllData] = useState([]);
    const [dataLoading, setDataLoading] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const unsubscribe = () => {
            setDataLoading(true)
            fetch(`${process.env.REACT_APP_BACKEND}/books`)
                .then(res => res.json())
                .then(data => {
                    setBooks(data)
                    setDataLoading(false)
                })
        }
        return unsubscribe
    }, [])

    useEffect(() => {
        const unsubscribe = () => {
            setDataLoading(true)
            fetch(`${process.env.REACT_APP_BACKEND}/questions`)
                .then(res => res.json())
                .then(data => {
                    setQuestions(data)
                    setDataLoading(false)
                })
        }
        return unsubscribe
    }, [])

    useEffect(() => {
        const unsubscribe = () => {
            setDataLoading(true)
            fetch(`${process.env.REACT_APP_BACKEND}/syllabus`)
                .then(res => res.json())
                .then(data => {
                    setSyllabus(data)
                    setDataLoading(false)
                })
        }
        return unsubscribe
    }, [])

    useEffect(() => {
        const unsubscribe = () => {
            setAllData([...books, ...questions, ...syllabus]);
        }
        return unsubscribe
    }, [books, questions, syllabus])

    return {
        books,
        message,
        allData,
        syllabus,
        questions,
        setMessage,
        dataLoading,
        setDataLoading
    }
}

export default useData