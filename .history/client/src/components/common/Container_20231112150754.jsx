import { Box, Stack } from '@mui/material';
import React from 'react'

const Container = ({header, children}) => {



  return (
    <Box sx={{
     marginTop: '5rem', 
     marginX: "auto", 
     color:"text.primary"
    }}
    >

    <Stack spacing={4}>
     {header && (
          <Box>
               
          </Box>

     )}
    </Stack>
      
    </Box>
  );
};

export default Container
