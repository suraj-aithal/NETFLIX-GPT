import { createSlice } from "@reduxjs/toolkit";


const gptslice = createSlice({
    name:'gpt',
    initialState:{
        showgptsearch:false
    },
    reducers:{
        togglegptpage: (state) => {
            state.showgptsearch = !state.showgptsearch;
        }
    }

})

export const {togglegptpage} = gptslice.actions;
export default gptslice.reducer;