import { createSlice } from '@reduxjs/toolkit';

export const appStateSlice = createSlice({
     name: "AppModal",
     initialState: {
          user: null,
          listFavorites: []
     },
     reducers: {
          setUser: (state, action) => {
               if (action.payload == null) {
                    localStorage.removeItem("actkn");
               } else {
                    if (action.payload.token) localStorage.setItem("actkn", action.payload.token);
               }
               state.user = action.payload
          }
        
     }
});

export const {
    
} = appStateSlice.actions; 