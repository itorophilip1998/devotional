import { createSlice } from "@reduxjs/toolkit";
import { devotional } from "../Database/devotional";
import { manual } from "../Database/manual";

export const data = createSlice(
    {
        name: "data",
        initialState: {
            search: "",
            search2: "",
            devotional,
            manual
        },
        reducers: {
            getSearch: (state, action) => {  
                state.search= action.payload 
            },
            getSearch2: (state, action) => {  
                state.search2= action.payload 
            },
        },

    });


export const { getSearch, getSearch2 } = data.actions;

export default data.reducer;
