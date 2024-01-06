import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './features/userSlice';


const store = configureStore({
     reducer: {
          user: userSlice, 
          them
     }
});

export default store;