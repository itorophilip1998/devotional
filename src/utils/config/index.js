// import Authorization from "./Authorization"


export const token = window.localStorage.getItem('token')
export const authHeader = {
    headers: {
        "Content-type": "application/json",
        "Authorization": `bearer ${token}`
    }
}
// export const baseApi="https://devotional-api.herokuapp.com/api"
export const baseApi = "http://ec2-44-207-0-223.compute-1.amazonaws.com/api"