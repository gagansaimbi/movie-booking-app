// movie.slice.js
import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movieSlice',
  initialState: {
    latestMovieList: [],
    upcomingMovieList: [],
    detailsList: [],
    eventsList: [],
    clickedId: '',
    userSelectionInfo: {
      name: '',
      date: '',
      time: '',
      seats: ''
    }
  },
  reducers: {
    saveLatestMovies: (state, action) => {
      state.latestMovieList = action.payload;
    },
    saveUpcomingMovies: (state, action) => {
      state.upcomingMovieList = action.payload;
    },
    saveDetails: (state, action) => {
      state.detailsList = action.payload;
    },
    saveEvents: (state, action) => {
      state.eventsList = action.payload;
    },
    saveClickId: (state, action) => {
      state.clickedId = action.payload;
    },
    saveUserSelections: (state, action) => {
      state.userSelectionInfo = action.payload;
    }
  },
});

export default movieSlice;
export const { saveEvents, saveLatestMovies, saveUpcomingMovies, saveDetails, saveClickId, saveUserSelections } =
  movieSlice.actions;
