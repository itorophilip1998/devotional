export const token=window.localStorage.getItem("token")
export const authHeader = () => {
    const header = {
        Headers: {
            "Content-type":"application/json",
            "Authorization":`bearer ${token}`
        }
    }
    return header;
}
export const baseApi="https://devotional-api.herokuapp.com/api"