import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS, GET_QUESTIONS, GET_SYLLABUS } from "../queries/query";

const useData = () => {
  //   const [books, setBooks] = useState([]);
  //   const [questions, setQuestions] = useState([]);
  //   const [syllabus, setSyllabus] = useState([]);
  const [allData, setAllData] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [update, setUpdate] = useState(0);

  //   const bookData = useQuery(GET_BOOKS);
  //   const questionData = useQuery(GET_QUESTIONS);
  //   const syllabusData = useQuery(GET_SYLLABUS);

  const {
    loading: load_1,
    error: error_1,
    data: { getBooks: books } = [],
  } = useQuery(GET_BOOKS);
  const {
    loading: load_2,
    error: error_2,
    data: { getQuestions: questions } = [],
  } = useQuery(GET_QUESTIONS);
  const {
    loading: load_3,
    error: error_3,
    data: { getAllSyllabus: syllabus } = [],
  } = useQuery(GET_SYLLABUS);

  useEffect(() => {
    setDataLoading(!(load_1 && load_2 && load_3));
  }, [load_1, load_2, load_3]);

  //   useEffect(() => {
  //     // setDataLoading(bookData?.loading);
  //     setBooks(bookData?.data?.getBooks);
  //   }, [bookData?.data?.getBooks, bookData?.loading]);
  //   useEffect(() => {
  //     setDataLoading(questionData?.loading);
  //     setQuestions(questionData?.data?.getQuestions);
  //   }, [questionData?.data?.getQuestions, questionData?.loading]);
  //   useEffect(() => {
  //     setDataLoading(syllabusData?.loading);
  //     setSyllabus(syllabusData?.data?.getAllSyllabus);
  //   }, [syllabusData?.data?.getAllSyllabus, syllabusData?.loading]);

  //   useEffect(() => {
  //     setDataLoading(true);
  //     fetch(`${process.env.REACT_APP_BACKEND}/books`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setBooks(data);
  //         setDataLoading(false);
  //       });
  //   }, [update]);

  //   useEffect(() => {
  //     setDataLoading(true);
  //     fetch(`${process.env.REACT_APP_BACKEND}/questions`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setQuestions(data);
  //         setDataLoading(false);
  //       });
  //   }, [update]);

  //   useEffect(() => {
  //     setDataLoading(true);
  //     fetch(`${process.env.REACT_APP_BACKEND}/syllabus`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setSyllabus(data);
  //         setDataLoading(false);
  //       });
  //   }, [update]);

  useEffect(() => {
    if (books && questions && syllabus)
      setAllData([...books, ...questions, ...syllabus]);
  }, [books, questions, syllabus]);

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
    setDataLoading,
  };
};

export default useData;
