import { useContext } from "react"
import { UtilityContext } from "../context/UtilityProvider"

const useUtility = () => {
    return useContext(UtilityContext)
}

export default useUtility