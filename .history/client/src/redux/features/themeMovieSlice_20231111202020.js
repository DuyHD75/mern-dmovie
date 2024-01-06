import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
     name: "User",
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