import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Paper, Box, LinearProgress, Toolbar } from '@mui/material'
const GlobalLoading = () => {

     const { globalLoading } = useSelector((state) => state.globalLoading);

     const [isLoading, setIsLoading] = useState(false);


     useEffect(() => {
          if (globalLoading) {
               setIsLoading(true);
          } else {
               setTimeout(() => {
                    setIsLoading(false);
               }, 1000)
          }
     })
     return (
          <>
               <Paper>

               </Paper>
          </>
     );
};

export default GlobalLoading
