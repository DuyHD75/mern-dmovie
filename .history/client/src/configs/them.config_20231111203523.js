import {createTheme} from '@mui/material/styles';
import {colors} from '@mui/material'


export const themeModes = {
     dark : "dark", 
     light: "light"
}

const themeConfigs = {
     custom: ({mode}) => {
          const customPallete = mode === themeModes.dark ? {
               primary: {
                    main: "#ff0000", 
                    contrastText: "#ffffff"
               }, 
               secondary: {
                    main: "#F44336", 
                    contrastText: "#ffffff"
               }, 
               background: {
                    default: "#000000", 
                    paper: #
               }
          }
     }
}