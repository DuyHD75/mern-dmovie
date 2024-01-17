import { Box } from "@mui/material";
import { Swiper } from "swiper/react";
import { Pagination, Autoplay, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';


const NavigationSwiper = ({ children }) => {
     return (
          <Box sx={{
               "& .swiper-slide": {
                    width: "90%",
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
                    spaceBetween={10}
                    grabCursor={true}
                    effect={'creative'}
                    creativeEffect={{
                         prev: {
                              shadow: true,
                              translate: [0, 0, -400],
                         },
                         next: {
                              translate: ['100%', 0, 0],
                         },
                    }}
                    autoplay={{
                         delay: 3000,
                         disableOnInteraction: true,
                    }}
                    pagination={{ clickable: true }}

                    
                    slidesPerView={1}
                    modules={[Pagination, EffectCreative, Autoplay]}
                    style={{ width: "90%", height: "max-content" }}
               >
                    {children}
               </Swiper>
          </Box>
     );
};

export default NavigationSwiper;