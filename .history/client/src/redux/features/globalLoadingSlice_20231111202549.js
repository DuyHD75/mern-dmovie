import { createSlice } from '@reduxjs/toolkit';

export const globalLoadingSlice = createSlice({
     name: "AppState",
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
     setAppState
} = globalLoadingSlice.actions; 