import { createSlice } from "@reduxjs/toolkit";

const accomodationSlice = createSlice({
    name: "accomodation",
    initialState: {
        accomodation: [],
        loading: false,
        errors: null,
    },
    reducers: {
        getAccmodationRequest(state){
            state.loading = true;
        },
        getAccmodation(state, action){
            state.accomodation = action.payload;
            state.loading = false;
        },
        getErrors(state, action){
            state.errors = action.payload;
        },
    },
});

export const accomodationActions = accomodationSlice.actions;
export default accomodationSlice;