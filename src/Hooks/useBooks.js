import { useEffect } from "react"

export const useBooks = (setAcademic, setOthers, cat, subcat1, subcat2) => {
    useEffect(() => {
        fetch('assets/data/books.json')
            .then(res => res.json())
            .then(data => {
                const tmp_academic = [], tmp_others = []
                for (const info of data) {
                    if (info?.categories?.includes(cat) && info?.categories?.includes(subcat1))
                        tmp_academic.push(info)
                    if (info?.categories?.includes(cat) && info?.categories?.includes(subcat2))
                        tmp_others.push(info)
                }
                setAcademic(tmp_academic)
                setOthers(tmp_others)
            })
    }, [])
}