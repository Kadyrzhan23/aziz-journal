import { createSlice } from "@reduxjs/toolkit";


const serviceSlice = createSlice({
    name: 'service',
    initialState: {
        language: 'ru'
    },
    reducers: {
        changeLanguage(state, { payload }) {
            state.language = payload
            window.localStorage.setItem('lang',payload)
        }
    }
})

export default serviceSlice.reducer

export const {
    changeLanguage } = serviceSlice.actions;