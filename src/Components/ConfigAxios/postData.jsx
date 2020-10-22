import { goToList } from "../../Router/Coordinator";
import { Base_Url } from "./ConfigAxios";

const { default: axios } = require("axios");

export const postData = (endpoint, body, mensagem, mensagemError, history) => {
    axios.post(`${Base_Url}${endpoint}`, body, {
        headers: {
            auth: window.localStorage.getItem("token")
        }
    })
        .then((response) => {
            alert(mensagem)
            goToList(history)
        })
        .catch((error) => {
            alert(mensagemError)
        })
}

export default { postData } 