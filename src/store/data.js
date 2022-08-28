import { createSlice } from "@reduxjs/toolkit";
import { devotional } from "../Database/devotional";
import { manual } from "../Database/manual";

let username = window.localStorage.getItem("username")
let email = window.localStorage.getItem("email")
let userId = window.localStorage.getItem("userId")
let token = window.localStorage.getItem("token")
let isSub = window.localStorage.getItem("isSub")

export const data = createSlice(
    {
        name: "data",
        initialState: {
            search: "",
            search2: "",
            devotional,
            manual,
            isSub,
            user: {
                username,
                email,
                userId
            },
            speech: { 
                volume: 1,
                rate: 1, 
                voice: 6 
            },
            token,
            isOffKeys: true
        },
        reducers: {
            getSearch: (state, action) => {
                state.search = action.payload
            },
            getSearch2: (state, action) => {
                state.search2 = action.payload
            },
            offKeys: (state, action) => {
                state.isOffKeys = action.payload
            },
            getUser: (state, action) => {

                let {
                    username,
                    email,
                    id
                } = action.payload.user

                state.user = {
                    username,
                    email,
                    id
                }
                state.token = action.payload.access_token
                window.localStorage.setItem("username", username)
                window.localStorage.setItem("email", email)
                window.localStorage.setItem("userId", id)
                window.localStorage.setItem("token", action.payload.access_token)
            },
            logout: (state, action) => {
                state.token = false
                window.localStorage.clear()
            },
            getSetup: (state,action) => {
                state.speed = action.payload 
            }
        },

    });


export const { getSearch, getSearch2, getUser, offKeys, logout, getSetup } = data.actions;

export default data.reducer;
