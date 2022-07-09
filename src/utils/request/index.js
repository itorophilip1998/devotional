import { authHeader, baseApi } from "../config/index"
import axios from "axios"
export const signIn = async (data) => {
    await axios.post(`${baseApi}/signin`,data).then((result) => {
        return result;
    }).catch((err) => {
       return err
    });
}
export const signUp = async (data) => {
   await axios.post(`${baseApi}/signup`, data).then((result) => {
        return result;
    }).catch((err) => {
        return err
    });
}
export const fogotPassword = async  (data) => {
 await axios.post(`${baseApi}/forgot-password`, data).then((result) => {
        return result;
    }).catch((err) => {
        return err
    });
}
export const resetPassword = async (data) => {
    await axios.post(`${baseApi}/reset-password`, data).then((result) => {
        return result;
    }).catch((err) => {
        return err
    });
}
export const verify = async (data) => {
    await axios.post(`${baseApi}/verify`, data).then((result) => {
        return result;
    }).catch((err) => {
        return err
    });
}
export const saved = async (data) => {
    await axios.post(`${baseApi}/saved`, data, authHeader).then((result) => {
        return result;
    }).catch((err) => {
        return err
    });
}
export const subscribe = async (data) => {
    await axios.post(`${baseApi}/subscribe`, data, authHeader).then((result) => {
        return result;
    }).catch((err) => {
        return err
    });
}