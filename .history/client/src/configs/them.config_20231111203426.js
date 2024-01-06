import {createTheme} from '@mui/material/styles';
import {colors} from '@mui/material'


export const themeModes = {
     dark : "dark", 
     light: "light"
}

const themeConfigs = {
     custom: ({mode}) => {
          const customPalete = mode === themeModes.dark ? {
               primary: {
                    main: "#ff0000", 
                    contrastText: "#ffffff"
               }, 
               secondary: {

               }
          }
     }
}