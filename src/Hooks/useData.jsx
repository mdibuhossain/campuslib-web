import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_DATA, GET_DEPARTMENTS } from "../queries/query";
import { tagTitle } from "../utility/tagTitle";

const initNav = [
    {
        name: "ACCE",
        to: "/department/acce"
    },
    {
        name: "ACCOUNTING",
        to: "/department/accounting"
    },
    {
        name: "AGRICULTURE",
        to: "/department/agriculture"
    },
    {
        name: "AGROPROCESS",
        to: "/department/agroprocess"
    },
    {
        name: "ARCHITECTURE",
        to: "/department/architecture"
    },
    {
        name: "BIOCHEMISTRY",
        to: "/department/biochemistry"
    },
    {
        name: "BOTANY",
        to: "/department/botany"
    },
    {
        name: "CHEMISTRY",
        to: "/department/chemistry"
    },
    {
        name: "CIVIL",
        to: "/department/civil"
    },
    {
        name: "CSE",
        to: "/department/cse"
    },
    {
        name: "ECONOMICS",
        to: "/department/economics"
    },
    {
        name: "EEE",
        to: "/department/eee"
    },
    {
        name: "ENGLISH",
        to: "/department/english"
    },
    {
        name: "ENVIRONMENTAL",
        to: "/department/environmental"
    },
    {
        name: "FINANCE",
        to: "/department/finance"
    },
    {
        name: "FISHERIES",
        to: "/department/fisheries"
    },
    {
        name: "GENETIC",
        to: "/department/genetic"
    },
    {
        name: "HISTORY",
        to: "/department/history"
    },
    {
        name: "IR",
        to: "/department/ir"
    },
    {
        name: "ISLAMIC",
        to: "/department/islamic"
    },
    {
        name: "LAW",
        to: "/department/law"
    },
    {
        name: "MANAGEMENT",
        to: "/department/management"
    },
    {
        name: "MARKETING",
        to: "/department/marketing"
    },
    {
        name: "MATH",
        to: "/department/math"
    },
    {
        name: "NONACADEMIC",
        to: "/department/nonacademic"
    },
    {
        name: "PHARMACY",
        to: "/department/pharmacy"
    },
    {
        name: "PHYSICS",
        to: "/department/physics"
    },
    {
        name: "POLITICAL",
        to: "/department/political"
    },
    {
        name: "PSYCHOLOGY",
        to: "/department/psychology"
    },
    {
        name: "SOCIOLOGY",
        to: "/department/sociology"
    },
    {
        name: "STA",
        to: "/department/sta"
    },
    {
        name: "TOURISM",
        to: "/department/tourism"
    },
    {
        name: "VETERINARY",
        to: "/department/veterinary"
    }
]


const useData = () => {
    const [allData, setAllData] = useState([]);
    const [deptNavList, setDeptNavList] = useState(initNav);

    const {
        data: { getBooks: books = [], getQuestions: questions = [], getAllSyllabus: syllabus = [] } = {},
        loading: dataLoading,
    } = useQuery(GET_ALL_DATA)


    // for testing purpose
    const [deptLoading, setDeptLoading] = useState(true);
    const [getDepartments, setGetDepartments] = useState([]);
    useEffect(() => {
        setDeptLoading(true);
        setGetDepartments(Object.keys(tagTitle));
        setDeptLoading(false);
    }, [])

    // const { data: { getDepartments = [] } = {}, loading: deptLoading } =
    //     useQuery(GET_DEPARTMENTS);

    // useEffect(() => {
    //     if (getDepartments.length > 0) {
    //         const tmpNav = [...initNav];
    //         getDepartments.map(item => {
    //             if (item) {
    //                 tmpNav.push({ name: item?.toUpperCase(), to: `/department/${item?.toLowerCase()}` })
    //             }
    //         })
    //         setDeptNavList(tmpNav)
    //     }
    // }, [deptLoading, getDepartments]);

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
