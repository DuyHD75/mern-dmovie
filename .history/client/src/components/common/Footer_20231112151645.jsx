import { Paper, Stack } from '@mui/material'
import Container from './Container';
import React from 'react'

const Footer = () => {
     return (
          <Container>
               <Paper
                    square={true}
                    sx={{
                         backgroundColor: "unset",
                         padding: "2rem"
                    }}
               >

               <Stack
                    alignItems="center"
                    justifyContent="space-between"
                    direction={{
                         sx: "column", 
                    }}
               >
                    
               </Stack>
               </Paper>
          </Container>
     )
}

export default Footer
