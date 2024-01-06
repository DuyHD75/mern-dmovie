import axiosClient from "../axios/axios.client.js";
import tmdbEndpoint from "./tmdb.endpoint.js";

const tmdbApi = {
     mediaList: ({ mediaType, mediaCategory, page }) => axiosClient.axiosClient(
          tmdbEndpoint.mediaList({ mediaType, mediaCategory, page });
     ),

mediaDetail: ({ mediaType, mediaId }) => axiosClient.get(
     `${mediaType}/${mediaId}`
),

     mediaGenres: ({ mediaType }) => axiosClient.getUrl(
          `genre/${mediaType}/list`
     ),

          mediaCredits: ({ mediaType, mediaId }) => axiosClient.getUrl(
               `${mediaType}/${mediaId}/credits`
          ),

               mediaVideos: ({ mediaType, mediaId }) => axiosClient.getUrl(
                    `${mediaType}/${mediaId}/videos`
               ),


                    mediaVideos: ({ mediaType, mediaId }) => axiosClient.getUrl(
                         `${mediaType}/${mediaId}/videos`
                    ),

                         mediaRecommend: ({ mediaType, mediaId }) => axiosClient.getUrl(
                              `${mediaType}/${mediaId}/recommendations`
                         ),
                              mediaImages: ({ mediaType, mediaId }) => axiosClient.getUrl(
                                   `${mediaType}/${mediaId}/images`
                              ),
                                   mediaSearch: ({ mediaType, query, page }) => axiosClient.getUrl(
                                        `search/${mediaType}`, { query, page }
                                   ),
                                        personDetail: ({ personId }) => axiosClient.getUrl(
                                             `person/${personId}`
                                        ),
                                             personMedias: ({ personId }) => axiosClient.getUrl(
                                                  `person/${personId}/combined_credits`
                                             ),
};

export default tmdbApi;
