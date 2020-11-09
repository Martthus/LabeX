const { default: axios } = require("axios");

export const getData = (url, endpoint, setData, headerCors) => {
    axios.get(`${url}${endpoint}`, headerCors)
        .then((response) => {
            setData(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
}

export default getData