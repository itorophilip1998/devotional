// import Authorization from "./Authorization"


export const token = window.localStorage.getItem('token') 
export const authHeader = {
    headers: {
        "Content-type": "application/json",
        "Authorization": `bearer ${token}`
    }
}
// export const baseApi="https://devotional-api.herokuapp.com/api"
export const baseApi = "https://fulgadevotional.store/api"