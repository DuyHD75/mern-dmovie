import { createSlice } from '@reduxjs/toolkit';

export const appStateSlice = createSlice({
     name: "AppModal",
     initialState: {
         appState: ""
     },
     reducers: {
          setAppState: (state, action) => {
               state.app
          }
        
     }
});

export const {
    
} = appStateSlice.actions; 