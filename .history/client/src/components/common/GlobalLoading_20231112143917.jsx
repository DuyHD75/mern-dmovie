import React from 'react'
import { useSelector } from 'react-redux';
import {} from '@mui/material'
const GlobalLoading = () => {

     const { globalLoading } = useSelector((state) => state.globalLoading);

     return (
          <>
               <Paper>
               
               </Paper>
          </>
     );
};

export default GlobalLoading
