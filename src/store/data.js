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
                userId
            },
            speech: {
                lang :"en-US", 
                volume: 1,
                rate : 1,
                pitch: 0,
                voice:6
                    // var msg = new SpeechSynthesisUtterance()
    //   var voices = window.speechSynthesis.getVoices()
    //   msg.voice = voices[6]
    //   msg.volume = 1 // From 0 to 1
    //   msg.rate = 1 // From 0.1 to 10
    //   msg.pitch = 0 // From 0 to 2
    //   msg.lang = 'en-US'
    //   msg.text = data.alphabet
    //   speechSynthesis.speak(msg)
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
            }
        },

    });


export const { getSearch, getSearch2, getUser, offKeys, logout } = data.actions;

export default data.reducer;
