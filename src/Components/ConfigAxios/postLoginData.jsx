import { goToCreateTrip } from "../../Router/Coordinator";
import { Base_Url } from "./ConfigAxios";

const { default: axios } = require("axios");

export const postLoginData = (endpoint, body, mensagem, mensagemError, history) => {
    axios.post(`${Base_Url}${endpoint}`, body)
        .then((response) => {
            const token = localStorage.setItem("token", response.data.token)
            alert(mensagem)
            goToCreateTrip(history)
        })
        .catch((error) => {
            alert(mensagemError)
        })
}
export const postSignupData = (endpoint, body, mensagem, mensagemError, history) => {
    axios.post(`${Base_Url}${endpoint}`, body)
        .then((response) => {
            const token = localStorage.setItem("token", response.data.token)
            alert(mensagem)
            postSignupData('login', body, 'Login efetuado', 'Login não efetuado', history)

        })
        .catch((error) => {
            alert(mensagemError)
        })
}

export default { postLoginData, postSignupData } 