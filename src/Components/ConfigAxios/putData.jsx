import { goToCreateTrip } from "../../Router/Coordinator";
import { Base_Url } from "./ConfigAxios";

const { default: axios } = require("axios");

export const putData = (endpoint, approve, mensagem, mensagemError) => {
    const body = {
        approve: approve
    }
    axios.put(`${Base_Url}${endpoint}`, body, {
        headers: {
            auth: window.localStorage.getItem("token")
        }
    })
        .then((response) => {
            alert(mensagem)
        })
        .catch((error) => {
            alert(mensagemError)
        })
}

export default { putData } 