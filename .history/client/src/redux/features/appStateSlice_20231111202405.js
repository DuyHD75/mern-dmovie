import { createSlice } from '@reduxjs/toolkit';

export const appStateSlice = createSlice({
     name: "AppModal",
     initialState: {
         appState: ""
     },
     reducers: {
          setAppState: (state, action) => {
               state.appState = action.payload
          }
        
     }
});

export const {
    
} = appStateSlice.actions; 