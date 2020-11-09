import { Base_Url } from "./ConfigAxios";

const { default: axios } = require("axios");

export const getData = (endpoint, setData) => {
    axios.get(`${Base_Url}${endpoint}`, {
        headers: {
            'Content-Type': 'application/json',
            auth: window.localStorage.getItem("token")
        }
    })
        .then((response) => {
            setData(response.data)
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
}

export default getData