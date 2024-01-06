import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './features/userSlice';


const store = configureStore({
     reducer: {
          user: userSlice, 
          themeModel: 
     }
});

export default store;