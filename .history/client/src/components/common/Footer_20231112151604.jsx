import { Paper } from '@mui/material'
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

               </Paper>
          </Container>
     )
}

export default Footer
