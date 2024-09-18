import { createSlice } from "@reduxjs/toolkit";


const info = createSlice({
    name:'info',
    initialState:{
        movieinfo:null,
        vid:null
    },
    reducers:{
        addinfo:(state,action)=>{
            state.movieinfo = action.payload;
        },
        addinfovid:(state,action)=>{
            state.vid = action.payload;
        },
    }
})

export const {addinfo,addinfovid} = info.actions;
export default info.reducer;