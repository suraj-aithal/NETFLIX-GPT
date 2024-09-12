import { createSlice } from "@reduxjs/toolkit";

const movieslice = createSlice({
    name:"movies",
    initialState:{
        nowplayingmovies:null,
        trailervideo:null,
        popularmovie:null,
        topratedmovies:null,
        upcomingmovies:null,
        // series

        airingtoday:null,
        ontheair:null,
        popularseries:null,
        topseries:null
    },
    reducers:{
        addnowplayingmovies : (state,action) =>{
            state.nowplayingmovies = action.payload;
        },
        addpopularmovies:(state,action) => {
            state.popularmovie = action.payload;
        },
        addtopratedmovies:(state,action) =>{
            state.topratedmovies = action.payload;
        },
        addupcomingmovies:(state,action) =>{
            state.upcomingmovies = action.payload;
        },
        addtrailervideo : (state,action) => {
            state.trailervideo = action.payload;
        },
        // series
        addairingtoday:(state,action) => {
            state.airingtoday = action.payload;
        },
        addontheair:(state,action) => {
            state.ontheair = action.payload;
        },
        addpopularseries:(state,action) => {
            state.popularseries = action.payload;
        },
        addtopseries:(state,action) => {
            state.topseries = action.payload;
        },
    }
})

export const {addnowplayingmovies,addtrailervideo,addpopularmovies,addtopratedmovies,addupcomingmovies,addtopseries,addairingtoday,addontheair,addpopularseries} = movieslice.actions;

export default movieslice.reducer;