import { createSlice } from '@reduxjs/toolkit';

export const themeMovieSlice = createSlice({
     name: "ThemeMode",
     initialState: {
          themeMode: 'dark'
     },
     reducers: {
          setThemMode: (state, action) => {
               state.themeMode = action.payload
          }

     }
});

export const {
     setUser,
     setListFavorites,
     removeListFavorites,
     addFavorite
} = userSlice.actions; 