import React, { Fragment } from 'react'
import { LoadingButton } from '@mui/lab';
import { Box, Button, Stack, TextField, Toolbar } from "@mui/material";
import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import mediaApi from '../api/modules/media.api';
import MediaGrid from '../components/common/MediaGrid';
import uiConfigs from '../configs/ui.configs';

const mediaTypes = ["movie", "tv", "people"];
let timer;
const timeOut = 500


const MediaSearch = () => {

  const [query, setQuery] = useState("");
  const [onSearch, setOnSearch] = useState(false);
  const [mediaType, setMediaType] = useState(mediaTypes[0]);
  const [medias, setMedias] = useState([]);
  const [page, setPage] = useState(1);
  const [isFullLoad, setIsFullLoad] = useState(false);


  const search = useCallback(async () => {
    setOnSearch(true);
    const { response, err } = await mediaApi.search({ mediaType, query, page })

    setOnSearch(false);

    if (err) toast.error(err.message);

    if (response) page > 1 ? setMedias([...medias, ...response.results]) : setMedias([...response.results]);

    if (response.results.length === 0) { toast.warning(`All ${mediaType} have been loaded`); setIsFullLoad(true); }

  }, [mediaType, query, page]);


  useEffect(() => {
    if (query.trim().length === 0) {
      setMedias([]);
      setPage(1)
    } else search();
  }, [search, query, mediaType, page]);


  useEffect(() => {
    window.scrollTo(0, 0);
    setMedias([]);
    setPage(1);
  }, [mediaType]);

  const onCategoryChange = (selectedCategory) => setMediaType(selectedCategory);

  const onQueryChange = (e) => {
    const newQuery = e.target.value;
    clearTimeout(timer);

    timer = setTimeout(() => {
      setQuery(newQuery);
    }, timeOut);
  }

  return (
    <Fragment>
      <Toolbar />
      <Box sx={{ ...uiConfigs.style.mainContent }}>
        <Stack spacing={2}>
          <Stack
            spacing={2}
            direction="row"
            justifyContent="center"
            sx={{ width: "100%" }}
          >
            {mediaTypes.map((type, index) => (
              <Button key={index} size='large' variant={mediaType === type ? "contained" : "text"}
                sx={{
                  color: mediaType === type ? "primary.contrastText" : "text",
                }}
                onClick={() => onCategoryChange(type)}

              >{type}</Button>
            ))}
          </Stack>

          <TextField color='success' placeholder='Enter your key word ...'
            sx={{ width: "100%" }}
            autoFocus
            onChange={onQueryChange}
          />

          <MediaGrid medias={medias} mediaType={mediaType} />

          {medias.length > 0 && (
            <LoadingButton
              loading={onSearch}
              onClick={() => setPage(page + 1)}
              disabled={isFullLoad}
            >
              load more
            </LoadingButton>
          )}

        </Stack>
      </Box>



    </Fragment>
  )
}

export default MediaSearch;
