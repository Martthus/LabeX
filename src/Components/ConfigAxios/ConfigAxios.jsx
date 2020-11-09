export const Base_Url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-jackson/`;

export const Countries_Url = `https://restcountries.eu/rest/v2/`;

export const headerCors = {
    headers: {
        auth: window.localStorage.getItem("token")
    }
};
