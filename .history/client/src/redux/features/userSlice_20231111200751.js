import {createSlice} from '@reduxjs/toolkit';
 

export const userSlice = createSlice({
     name: "User", 
     initialState: {
          user: null, 
          listFavorites: []
     }, 
     reducers: {
          setUser: (state, action) => {
               if(action.payload == null) {
                    localStorage.removeItem("actkn");
               }else {
                    if(action.payload.token) localStorage.setItem("actkn")
               }
          }
     }
})