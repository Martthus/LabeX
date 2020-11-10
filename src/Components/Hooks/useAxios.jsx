import { useEffect } from "react"
import { useState } from "react"

const { default: getData } = require("../ConfigAxios/getData")

const useAxios = (initialState, url, endpoint, headerCors) => {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        getData(url, endpoint, setData, headerCors)
    }, [endpoint])

    const updateData = () => {
        getData(url, endpoint, setData, headerCors)
    }
    return [data, updateData]
}

export default useAxios