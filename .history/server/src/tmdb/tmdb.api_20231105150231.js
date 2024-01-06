import axiosClient from "../axios/axios.client.js";
import tmdbEndpoint from "./tmdb.endpoint.js";

const tmdbApi = {
     mediaList: ({ mediaType, mediaCategory, page }) => axiosClient.axiosClient(
          tmdbEndpoint.mediaList({ mediaType, mediaCategory, page });
     ),

mediaDetail: ({ mediaType, mediaId }) => axiosClient.get(
     `${mediaType}/${mediaId}`
),

     mediaGenres: ({ mediaType }) => tm.getUrl(
          `genre/${mediaType}/list`
     ),

          mediaCredits: ({ mediaType, mediaId }) => tm.getUrl(
               `${mediaType}/${mediaId}/credits`
          ),

               mediaVideos: ({ mediaType, mediaId }) => tm.getUrl(
                    `${mediaType}/${mediaId}/videos`
               ),


                    mediaVideos: ({ mediaType, mediaId }) => tm.getUrl(
                         `${mediaType}/${mediaId}/videos`
                    ),

                         mediaRecommend: ({ mediaType, mediaId }) => tm.getUrl(
                              `${mediaType}/${mediaId}/recommendations`
                         ),
                              mediaImages: ({ mediaType, mediaId }) => tm.getUrl(
                                   `${mediaType}/${mediaId}/images`
                              ),
                                   mediaSearch: ({ mediaType, query, page }) => tm.getUrl(
                                        `search/${mediaType}`, { query, page }
                                   ),
                                        personDetail: ({ personId }) => tm.getUrl(
                                             `person/${personId}`
                                        ),
                                             personMedias: ({ personId }) => tm.getUrl(
                                                  `person/${personId}/combined_credits`
                                             ),
};

export default tmdbApi;
