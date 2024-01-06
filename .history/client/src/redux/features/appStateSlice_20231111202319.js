import { createSlice } from '@reduxjs/toolkit';

export const appStateSlice = createSlice({
     name: "AppModal",
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
    
} = appStateSlice.actions; 