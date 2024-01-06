const uiConfigs = {
     style: {
          gradientBgImage: {
               dark: {
                    backgroundImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0)"
               },
               light: {
                    backgroundImage: "linear-gradient(to top, rgba(245,245,245,1), rgba(0,0,0,0)"
               },
               horizontalGradientBgImage: {
                    dark: {
                         backgroundImage: "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))"
                    },
                    light: {
                         backgroundImage: "linear-gradient(to right, rgba(245,245,245,1), rgba(0,0,0,0))"
                    }
               },

               typoLines : (lines, textAlign) => {
                    textAlign: textAlign || 'justify'
               }


          }
     }


};

export default uiConfigs;