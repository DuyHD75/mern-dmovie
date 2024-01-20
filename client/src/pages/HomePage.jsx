import React, { Fragment } from 'react'
import HeroSlide from '../components/common/HeroSlide'
import tmdbConfigs from "../api/configs/tmdb.configs";
import { Box } from '@mui/material';
import uiConfigs from '../configs/ui.configs';
import Container from "../components/common/Container";
import MediaSlider from '../components/common/MediaSlider';

const HomePage = () => {
  return (
    <Fragment>
      <HeroSlide mediaType={tmdbConfigs.mediaType.movie} mediaCategory={tmdbConfigs.mediaCategory.now_playing} />

      <Box marginTop="-3rem" sx={{ ...uiConfigs.style.mainContent }}>
        <Container header="popular movies">
          <MediaSlider mediaType={tmdbConfigs.mediaType.movie} mediaCategory={tmdbConfigs.mediaCategory.popular}></MediaSlider>
        </Container>
        <Container header="popular series">
          <MediaSlider mediaType={tmdbConfigs.mediaType.tv} mediaCategory={tmdbConfigs.mediaCategory.popular}></MediaSlider>
        </Container>

        <Container header="top rate movies">
          <MediaSlider mediaType={tmdbConfigs.mediaType.movie} mediaCategory={tmdbConfigs.mediaCategory.top_rated}></MediaSlider>
        </Container>

        <Container header="top rate series">
          <MediaSlider mediaType={tmdbConfigs.mediaType.tv} mediaCategory={tmdbConfigs.mediaCategory.top_rated}></MediaSlider>
        </Container>
      </Box>
    </Fragment>
  )
}

export default HomePage
