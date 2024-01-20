import React from 'react'
import { useState, useEffect } from 'react';
import mediaApi from '../../api/modules/media.api';
import { SwiperSlide } from 'swiper/react';
import { toast } from 'react-toastify'
import AutoSwiper from "./AutoSwiper";
import MediaItem from './MediaItem';


const MediaSlider = ({ mediaType, mediaCategory }) => {
     const [medias, setMedias] = useState([]);

     useEffect(() => {
          const getMedias = async () => {
               const { response, err } = await mediaApi.getList({ mediaType, mediaCategory });
               response && setMedias(response.results);
               err && toast.error(err.message);
          }
          getMedias(); 
     }, [mediaType, mediaCategory])

    
     return (
          <AutoSwiper>
               {medias.map((media, index) => (
                    <SwiperSlide  key={index}>
                         <MediaItem media={media} mediaType={mediaType}></MediaItem>
                    </SwiperSlide>
               ))}
          </AutoSwiper>
     )
}

export default MediaSlider;
