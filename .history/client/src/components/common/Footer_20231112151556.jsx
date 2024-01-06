import { Paper } from '@mui/material'
import Container from './Container';
import React from 'react'

const Footer = () => {
     return (
          <Container>
               <Paper
                    square={true}
                    sx={{
                         backgroundColor: "unset"
                    }}
               >

               </Paper>
          </Container>
     )
}

export default Footer
