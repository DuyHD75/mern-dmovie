import { Box } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import tmdbConfigs from "../../api/configs/tmdb.configs";
import NavigationSwiper from "./NavigationSwiper";

const BackdropSlide = ({ backdrops }) => {
     return (
          <NavigationSwiper>
               {[...backdrops].slice(0, 10).map((item, index) => (
                    <SwiperSlide key={index}>
                         <Box
                              sx={{
                                   paddingTop: "40%",
                                   width: "100%",
                                   backgroundPosition: "center",
                                   backgroundSize: 'cover',
                                   backgroundImage: `url(${tmdbConfigs.backdropPath(item.file_path)})`,
                                   border: '2px solid rgba(255,255,255,0.9)',
                                   borderRadius: "10px"
                              }}
                         />
                    </SwiperSlide>
               ))}
          </NavigationSwiper>
     );
};

export default BackdropSlide;
