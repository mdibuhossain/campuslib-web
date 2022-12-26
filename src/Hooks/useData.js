import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_DATA, GET_DEPARTMENTS } from "../queries/query";

const initNav = [
    {
        name: 'CSE',
        to: '/department/cse'
    },
    {
        name: 'EEE',
        to: '/department/eee'
    },
    {
        name: 'MATH',
        to: '/department/math'
    },
    {
        name: 'STATISTICS',
        to: '/department/sta'
    },
    {
        name: 'NON ACADEMIC',
        to: '/department/nonacademic'
    }
]

const useData = () => {
    const [allData, setAllData] = useState([]);
    const [deptNavList, setDeptNavList] = useState(initNav);

    const {
        data: { getBooks: books = [], getQuestions: questions = [], getAllSyllabus: syllabus = [] } = {},
        loading: dataLoading,
    } = useQuery(GET_ALL_DATA)

    const { data: { getDepartments = [] } = {}, loading: deptLoading } =
        useQuery(GET_DEPARTMENTS);

    useEffect(() => {
        if (getDepartments.length > 0) {
            const tmpNav = new Array();
            getDepartments.map(item => {
                if (item) {
                    tmpNav.push({ name: item?.toUpperCase(), to: `/department/${item?.toLowerCase()}` })
                }
            })
            setDeptNavList(tmpNav)
        }
    }, [deptLoading, getDepartments]);

    useEffect(() => {
        if (books && questions && syllabus)
            setAllData([...books, ...questions, ...syllabus]);
    }, [dataLoading]);

    return {
        books,
        allData,
        syllabus,
        questions,
        deptNavList,
        dataLoading,
        deptLoading,
        getDepartments
    };
};

export default useData;
