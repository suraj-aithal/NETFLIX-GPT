import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:null,
    reducers:{
        addUser:(state,action) =>{
            return action.payload;
            // it changes the initialState  to the current state there by holding the data
        },
        removeUser:(state,action) => {
            return null;
            // this just returns and updates nothing
        }
    }
})

export const {addUser,removeUser} = userSlice.actions;

export default userSlice.reducer;