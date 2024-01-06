import { createSlice } from '@reduxjs/toolkit';

export const globalLoadingSlice = createSlice({
     name: "AppState",
     initialState: {
          globalLoading: false
     },
     reducers: {
          setGloblaLoading: (state, action) => {
               state.appState = action.payload
          }

     }
});

export const {
     setAppState
} = globalLoadingSlice.actions; 