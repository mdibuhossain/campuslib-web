import { useEffect } from "react";
import { useAuth } from "./useAuth"

export const useBooks = (setData, department, cat) => {
    const { books, questions, syllabus, setDataLoading } = useAuth();

    useEffect(() => {
        switch (cat) {
            case "books":
                const tmpBooks = books.filter(item => item.categories === department)
                setData(tmpBooks)
                break
            case "questions":
                const tmpQuestions = questions.filter(item => item.categories === department)
                setData(tmpQuestions)
                break
            case "syllabus":
                const tmpSyllabus = syllabus.filter(item => item.categories === department)
                setData(tmpSyllabus)
                break
            default:
                setData([])
                break
        }
    }, [books, questions, syllabus, cat, setData, department, setDataLoading])
}