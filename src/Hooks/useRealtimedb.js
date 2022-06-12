import { collection } from "firebase/firestore";
import initAuth from "../firebase/initAuth"

const useRealtimedb = () => {
    const { DB } = initAuth();
    const booksCollectionRef = collection(DB, "book");
    const questionsCollectionRef = collection(DB, "question");
    const syllabusCollectionRef = collection(DB, "syllabus");
    const usersCollectionRef = collection(DB, "user")
    return {
        DB,
        booksCollectionRef,
        questionsCollectionRef,
        syllabusCollectionRef,
        usersCollectionRef
    }
}

export default useRealtimedb