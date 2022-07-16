import { createSlice } from "@reduxjs/toolkit";
import { devotional } from "../Database/devotional";
import { manual } from "../Database/manual";

export const data = createSlice(
    {
        name: "data",
        initialState: {
            search: "",
            devotional,
            manual
        },
        reducers: {
            getSearch: (state, action) => { 
                state.search= action.payload 
            },
        },

    });


export const { getSearch } = data.actions;

export default data.reducer;
