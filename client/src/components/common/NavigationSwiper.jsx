import { Box } from "@mui/material";
import { Swiper } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';


const NavigationSwiper = ({ children }) => {
     return (
          <Box sx={{
               "& .swiper-slide": {
                    width: "100%",
                    opacity: "0.6",
                    paddingBottom: "3rem"
               },
               "& .swiper-slide-active": { opacity: 1 },
               "& .swiper-pagination-bullet": {
                    backgroundColor: "text.primary"
               },
               "& .swiper-button-next, & .swiper-button-prev": {
                    color: "text.primary",
                    "&::after": {
                         fontSize: { xs: "1rem", md: "2rem" }
                    }
               },
               "& .swiper": {
                    paddingX: { xs: "1rem", md: "4rem" }
               }
          }}>
               <Swiper
                    spaceBetween={70}
                    grabCursor={true}
                    pagination={{ clickable: true }}
                    navigation={true}
                    slidesPerView={1}
                    modules={[Navigation, Pagination, EffectCreative, Autoplay]}
                    style={{ width: "100%", height: "max-content" }}
               >
                    {children}
               </Swiper>
          </Box>
     );
};

export default NavigationSwiper;