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
     }, [globalLoading]);


     return (
          <>
               <Paper sx={{
                    opacity: isLoading ? 1: 0,
                    pointerEvents: "none", 
                    transition: "all .3s ease", 
                    position: "fixed", 
                    width: "100vw", 
                    height:"100vh", 
                    zIndex: 999
               }}>

               <Toolbar/>

               <LinearProgress/>
               

               </Paper>
          </>
     );
};

export default GlobalLoading
