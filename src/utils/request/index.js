import { authHeader, baseApi } from "../config/index"
import axios from "axios"
export const signIn = async (data) => {
    try {
        let res = await axios.post(`${baseApi}/auth/signin`, data)
        return res;
    } catch (error) {
        return error
    }
}
export const signUp = async (data) => {

    try {
        let res = await axios.post(`${baseApi}/auth/signup`, data)
        return res;
    } catch (error) {
        return error
    }
}
export const fogotPassword = async (data) => {
    try {
        let res = await axios.post(`${baseApi}/auth/forgot-password`, data)
        return res;
    } catch (error) {
        return error
    }

}
export const refreshToken = async (data) => {
    try {
        let res = await axios.post(`${baseApi}/auth/refresh`, null, authHeader)
        return res;
    } catch (error) {
        return error
    }

}
export const resetPassword = async (data) => {
    try {
        let res = await axios.post(`${baseApi}/auth/reset-password`, data)
        return res;
    } catch (error) {
        return error
    }

}
export const verify = async (data) => {
    try {
        let res = await axios.post(`${baseApi}/auth/verify`, data)
        return res;
    } catch (error) {
        return error
    }

}
export const user = async (data) => {
    try {
        let res = await axios.post(`${baseApi}/user`, data, authHeader)
        return res;
    } catch (error) {
        return error
    }
}
export const subscribe = async (data) => {
    try {

        let res = await axios.post(`${baseApi}/subscribe`, data, authHeader)

        if (res.data) {
            window.localStorage.setItem(
                "isSub",
                res?.data?.data?.is_active || 0
            );
        }
        return res;
    } catch (error) {
        return error
    }
}