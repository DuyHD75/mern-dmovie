import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './features/userSlice';
import { themeMovieSlice } from './features/themeMovieSlice';


const store = configureStore({
     reducer: {
          user: userSlice, 
          themeModel: themeMovieSlice, 
          authModal: a
     }
});

export default store;