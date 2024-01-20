import { useEffect, useRef } from "react"
import { Box } from '@mui/material';
import { SwiperSlide } from "swiper/react";
import tmdbConfigs from "../../api/configs/tmdb.configs";
import NavigationSwiper from "./NavigationSwiper";



const MediaVideo = ({ video }) => {
     const iframeRef = useRef();

     useEffect(() => {
          const height = iframeRef.current.offsetWidth * 7 / 16 + "px";
          iframeRef.current.setAttribute("height", height);
     }, [video])


     return (
          <Box
               sx={{ height: "max-content" }}
          >
               <iframe
                    key={video.key}
                    src={tmdbConfigs.ytbPath(video.key)}
                    ref={iframeRef}
                    width={"100%"}
                    title={video.id}
                    style={{
                         border: '2px solid rgba(255,255,255,0.9)',
                         borderRadius: "10px",
                    }}
               ></iframe>
          </Box>
     )
}

const MediaVideosSlide = ({ videos }) => {
     return (
          <NavigationSwiper>
               {videos.map((video, index) => (
                    <SwiperSlide key={index}>
                         <MediaVideo video={video} />
                    </SwiperSlide>
               ))}
          </NavigationSwiper>
     );
};

export default MediaVideosSlide;
