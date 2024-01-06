import { Box, Stack, Typography } from '@mui/material';
import React from 'react'

const Container = ({ header, children }) => {



     return (
          <Box sx={{
               marginTop: '5rem',
               marginX: "auto",
               color: "text.primary"
          }}
          >
               <Stack spacing={4}>
                    {header && (
                         <Box
                              sx={{
                                   position: 'relative', 
                                   paddingX: {xs: '20px', md: 0}, 
                                   maxWidth: '1366px', 
                                   marginX: "auto", 
                                   width: "100%", 
                                   "&"

                              }}
                         >
                              <Typography
                                   variant='h5'
                                   fontWeight="700"
                              >{header}</Typography>
                         </Box>
                    )}
               </Stack>

          </Box>
     );
};

export default Container
