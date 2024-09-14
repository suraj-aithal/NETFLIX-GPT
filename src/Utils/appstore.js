import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "./movieslice"
import gptreducer from "./gptslice"
import selectlangslice from "./langslice"
const appstore = configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        gpt:gptreducer,
        selectlang : selectlangslice
    }
})

export default appstore;