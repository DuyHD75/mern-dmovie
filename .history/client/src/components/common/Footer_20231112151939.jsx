import { Box, Paper, Stack } from '@mui/material'
import Container from './Container';
import React from 'react'
import Logo from './Logo';
import menuConfigs from "../../configs/menu.config"
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
                              sx: "column", md: "row"
                         }}
                         sx={{ height: "max-content" }}
                    >
                         <Logo></Logo>
                         <Box>
                              {menuConfigs.main.map}
                         </Box>
                    </Stack>
               </Paper>
          </Container>
     )
}

export default Footer
