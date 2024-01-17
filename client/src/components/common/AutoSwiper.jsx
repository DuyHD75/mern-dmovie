import { Box } from "@mui/material";
import { Swiper } from "swiper/react";

const AutoSwiper = ({ children }) => {
     return (
          <Box sx={{
               // "& .swiper-slide": {
               //      width: {
               //           xs: "50%",
               //           sm: "35%",
               //           md: "25%",
               //           lg: "20.5%"
               //      }
               // }
          }}>
               <Swiper
                    slidesPerView="auto"
                    grabCursor={true}
                    style={{ width: "100%", height: "max-content" }}
                    breakpoints={{
                         280: {
                              slidesPerView: 2,
                              spaceBetween: 10
                         },
                         576: {
                              slidesPerView: 3,
                              spaceBetween: 10
                         },
                         768: {
                              slidesPerView: 4,
                              spaceBetween: 10
                         },
                         992: {
                              slidesPerView: 5,
                              spaceBetween: 10
                         }
                    }}
               >
                    {children}
               </Swiper>
          </Box>
     );
};

export default AutoSwiper;