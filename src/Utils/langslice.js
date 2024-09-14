import { createSlice } from "@reduxjs/toolkit";

const selectlang = createSlice({
    name:"selectlang",
    initialState:{
        selected_lang:"en"
    },
    reducers:{
        changelang : (state,action) =>{
            state.selected_lang = action.payload;
        }
    }
})


export const {changelang} = selectlang.actions;
export default selectlang.reducer;