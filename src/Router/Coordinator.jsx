export const goToList = (history) => {
    history.push("/trips/list")
}
export const logout = (history) => {
    window.localStorage.removeItem("token")
    history.push("/adm/signin")
}
export const goToHome = (history) => {
    history.push("/")
}
export const goToLogin = (history) => {
    history.push("/adm/signin")
}
export const goToBack = (history) => {
    history.goBack()
}
export const goToSignUp = (history) => {
    history.push("/adm/signup")
}
export const goToCreateTrip = (history) => {
    history.push("/adm/trips/create")
}
export const goToDetailsTrip = (history, id) => {
    history.push(`/adm/trips/details/${id}`)
}
export const goToApplicationForm = (history, id) => {
    history.push(`/application-form/${id}`)
}