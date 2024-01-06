import { useTheme } from '@emotion/react'
import { Typography } from '@mui/material'
import React from 'react'

const Logo = () => {

     const theme = useTheme()
     return (
          <div>
               <Typography
                    fontWeight="500"
                    fontSize="1.7rem"
                    lineHeight="2rem"
               >
                   Net<span style={{ color: theme.palette.primary.main }}>flix</span>
               </Typography>
          </div>
     )
}

export default Logo;
