import { createSlice } from '@reduxjs/toolkit';

export const themeMovieSlice = createSlice({
     name: "ThemeMode",
     initialState: {
          user: null,
          listFavorites: []
     },
     reducers: {
          setUser: (state, action) => {
               
          }
         
     }
});

export const {
     setUser,
     setListFavorites,
     removeListFavorites,
     addFavorite
} = userSlice.actions; 