import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import tmdbConfigs from '../../api/configs/tmdb.configs';
import uiConfigs from '../../configs/ui.configs';
import { routesGen } from '../../routes/routes';

const CastSlide = ({ casts }) => {
     return (
          <Box
               sx={{
                    "& .swiper-slide": {
                         width: { xs: "50%", md: "25%", lg: "20.5%" },
                         color: "text.primary"
                    }




               }}
          >
               <Swiper
                    spaceBetween={10}
                    grabCursor={true}
                    style={{ width: "100%", height: "max-content" }}
                    slidesPerView={"5"}
               >
                    {casts.map((cast, index) => (
                         <SwiperSlide
                              key={index}
                         >
                              <Box
                                   sx={{
                                        "&:hover": {
                                             transform: "translateY(4px)",
                                             transition: "all 0.2s ease-in"
                                        }
                                   }}
                              >
                                   <Link to={routesGen.person(cast.id)}>
                                        <Box sx={{
                                             paddingTop: "120%", color: "text.primary",
                                             ...uiConfigs.style.backgroundImage(tmdbConfigs.posterPath(cast.profile_path)),
                                             borderRadius: "16px",
                                        }} />
                                   </Link>
                                   <Box
                                        sx={{
                                             // position: "absolute",
                                             width: "100%",
                                             height: "max-content",
                                             bottom: 0,
                                             padding: "10px 0",

                                        }}>
                                        <Typography sx={{
                                             fontSize: { xs: "12px", md: "12px", lg: "14px" },
                                             ...uiConfigs.style.typoLines(1, "left"),
                                        }}>
                                             {cast.name}
                                        </Typography>
                                   </Box>

                              </Box>

                         </SwiperSlide>
                    ))}
               </Swiper>
          </Box >
     )
}

export default CastSlide
