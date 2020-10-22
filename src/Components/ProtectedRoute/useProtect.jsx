import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useProtect = () => {
    const history = useHistory();

    useEffect(() => {
        const token = window.localStorage.getItem("token");
        if (!token) {
            history.push("/adm/signin");
        }
    }, [history]);
};