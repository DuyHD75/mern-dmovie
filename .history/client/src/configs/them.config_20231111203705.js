import { createTheme } from '@mui/material/styles';
import { colors } from '@mui/material'


export const themeModes = {
     dark: "dark",
     light: "light"
}

const themeConfigs = {
     custom: ({ mode }) => {
          const customPalette = mode === themeModes.dark ? {
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
                    paper: "#131313"
               }
          } : {
               primary: {
                    main: "#ff0000"
               },
               secondary: {
                    main: "#F44336"
               },
               background: {
                    default: colors.grey["100"]
               }
          }

          return createTheme({
               palette: {c}
          })
     }
}