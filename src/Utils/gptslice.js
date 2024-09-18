import { createSlice } from "@reduxjs/toolkit";


const gptslice = createSlice({
    name:'gpt',
    initialState:{
        showgptsearch:false,
        gptsearchmovies:null
    },
    reducers:{
        togglegptpage: (state) => {
            state.showgptsearch = !state.showgptsearch;
        },
        addbrowsemovies:(state,action)=>{
            state.gptsearchmovies = action.payload;
        }
    }

})

export const {togglegptpage,addbrowsemovies} = gptslice.actions;
export default gptslice.reducer;