import { useEffect } from "react"

export const useBooks = (setAcademic, department, cat) => {
    useEffect(() => {
        fetch(process.env.REACT_APP_JSON_URL)
            .then(res => res.json())
            .then(data => {
                const display_data = []
                for (const info of data[cat]) {
                    if (info?.categories?.includes(department))
                        display_data.push(info)
                }
                setAcademic(display_data)
            })
    }, [])
}