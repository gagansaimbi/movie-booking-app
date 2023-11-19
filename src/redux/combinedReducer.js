import movieSlice from "./movie.slice";
import { combineReducers } from "@reduxjs/toolkit";


const reducer = combineReducers({
    moviesData: movieSlice.reducer,
})


export default reducer;