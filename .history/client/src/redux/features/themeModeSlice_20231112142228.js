import { createSlice } from '@reduxjs/toolkit';

export const themeModeSlice = createSlice({
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
     setThemMode
} = themeModeSlice.actions; 