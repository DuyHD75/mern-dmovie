import { useTheme } from '@emotion/react'
import { Typography } from '@mui/material'
import React from 'react'

const Logo = () => {

     const theme = useTheme()
  return (
    <div>
      <Typography
          fontWeight="700"
          fontSize="1.7rem"
      >
          Net <span style={{color: theme.palette.primary.main}}></span>
      </Typography>
    </div>
  )
}

export default Logo
