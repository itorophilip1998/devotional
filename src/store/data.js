import { createSlice } from "@reduxjs/toolkit";
import { devotional } from "../Database/devotional";
import { manual } from "../Database/manual";

let username = window.localStorage.getItem("username")
let email = window.localStorage.getItem("email")
let userId = window.localStorage.getItem("userId")
let token = window.localStorage.getItem("token")

export const data = createSlice(
    {
        name: "data",
        initialState: {
            search: "",
            search2: "",
            devotional,
            manual,
            user: {
                username,
                email,
                userId,
                token
            }
        },
        reducers: {
            getSearch: (state, action) => {
                state.search = action.payload
            },
            getSearch2: (state, action) => {
                state.search2 = action.payload
            },
            getUser: (state, action) => { 
                state.user = action.payload
                let {
                    username,
                    email,
                    id 
                } = action.payload.user
                window.localStorage.setItem("username", username)
                window.localStorage.setItem("email", email)
                window.localStorage.setItem("userId", id)
                window.localStorage.setItem("token", action.payload.access_token)
            }
        },

    });


export const { getSearch, getSearch2, getUser } = data.actions;

export default data.reducer;
