import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import useRealtimedb from "./useRealtimedb";

const useData = () => {
    const [books, setBooks] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [syllabus, setSyllabus] = useState([]);
    const [allData, setAllData] = useState([]);
    const [dataLoading, setDataLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [update, setUpdate] = useState(0);

    const {
        usersCollectionRef,
        syllabusCollectionRef,
        questionsCollectionRef,
        booksCollectionRef
    } = useRealtimedb();

    useEffect(() => {
        // setDataLoading(true)
        // fetch(`${process.env.REACT_APP_BACKEND}/books`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setBooks(data)
        //         setDataLoading(false)
        //     })
        const unsubscribe = onSnapshot(booksCollectionRef, snapshot => {
            setBooks(snapshot.docs.map(doc => ({ ...doc.data(), _id: doc.id })))
        })
        return () => unsubscribe()
    }, [update])

    useEffect(() => {
        // setDataLoading(true)
        // fetch(`${process.env.REACT_APP_BACKEND}/questions`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setQuestions(data)
        //         setDataLoading(false)
        //     })
        const unsubscribe = onSnapshot(questionsCollectionRef, snapshot => {
            setQuestions(snapshot.docs.map(doc => ({ ...doc.data(), _id: doc.id })))
        })
        return () => unsubscribe()
    }, [update])

    useEffect(() => {
        // setDataLoading(true)
        // fetch(`${process.env.REACT_APP_BACKEND}/syllabus`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setSyllabus(data)
        //         setDataLoading(false)
        //     })
        const unsubscribe = onSnapshot(syllabusCollectionRef, snapshot => {
            setSyllabus(snapshot.docs.map(doc => ({ ...doc.data(), _id: doc.id })))
        })
        return () => unsubscribe()
    }, [update])

    useEffect(() => {
        setAllData([...books, ...questions, ...syllabus]);
    }, [books, questions, syllabus])

    return {
        books,
        update,
        message,
        allData,
        syllabus,
        setUpdate,
        questions,
        setMessage,
        dataLoading,
        setDataLoading
    }
}

export default useData