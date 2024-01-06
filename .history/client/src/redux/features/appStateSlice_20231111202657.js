import { createSlice } from '@reduxjs/toolkit';

export const appStateSlice = createSlice({
     name: "AuthModal",
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
} = appStateSlice.actions; 