import { useEffect } from "react"
import { useState } from "react"

const { default: getData } = require("../ConfigAxios/getData")

const useAxios = (initialState, endpoint) => {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        getData(endpoint, setData)
    }, [endpoint])

    const updateData = () => {
        getData(endpoint, setData)
    }
    return [data, updateData]
}

export default useAxios