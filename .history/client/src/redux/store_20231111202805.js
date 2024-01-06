import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './features/userSlice';
import { themeMovieSlice } from './features/themeMovieSlice';
import { authModalSlice } from './features/authModalSlice';
import { globalLoadingSlice } from './features/globalLoadingSlice';


const store = configureStore({
     reducer: {
          user: userSlice, 
          themeModel: themeMovieSlice, 
          authModal: authModalSlice, 
          globalLoading: globalLoadingSlice, 
          
     }
});

export default store;