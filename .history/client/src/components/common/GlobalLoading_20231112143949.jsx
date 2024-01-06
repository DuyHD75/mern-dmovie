import React from 'react'
import { useSelector } from 'react-redux';
import { Paper, Box, LinearProgress, Toolbar } from '@mui/material'
const GlobalLoading = () => {

     const { globalLoading } = useSelector((state) => state.globalLoading);

     const [first, setfirst] = useState(second)
     return (
          <>
               <Paper>

               </Paper>
          </>
     );
};

export default GlobalLoading
