import { authHeader, baseApi } from "../config/index"
import axios from "axios"
export const signIn = async (data) => {
       try {
          let res= await axios.post(`${baseApi}/auth/signin`, data)
           return res; 
       } catch (error) {
           return error
       }
}
export const signUp = async (data) => {
   await axios.post(`${baseApi}/auth/signup`, data).then((result) => {
        return result;
    }).catch((err) => {
        return err
    });
}
export const fogotPassword = async (data) => {
    try {
        let res = await axios.post(`${baseApi}/auth/forgot-password`, data)
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
export const saved = async (data) => {
    try {
        let res = await axios.post(`${baseApi}/saved`, data, authHeader)
        return res;
    } catch (error) {
        return error
    } 
}
export const subscribe = async (data) => {
    try {
        let res = await axios.post(`${baseApi}/subscribe`, data, authHeader)
        return res;
    } catch (error) {
        return error
    } 
}