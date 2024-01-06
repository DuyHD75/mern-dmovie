import axiosClient from "../axios/axios.client.js";
import tmdbEndpoint from "./tmdb.endpoint.js";

const tmdbApi = {
     mediaList: ({ mediaType, mediaCategory, page }) => axiosClient.axiosClient(
          tmdbEndpoint.mediaList({ mediaType, mediaCategory, page });
     ),

mediaDetail: ({ mediaType, mediaId }) => axiosClient.get(
     `${mediaType}/${mediaId}`
),

     mediaGenres: ({ mediaType }) => tmdbEndpoint.getUrl(
          `genre/${mediaType}/list`
     ),

          mediaCredits: ({ mediaType, mediaId }) => tmdbEndpoint.getUrl(
               `${mediaType}/${mediaId}/credits`
          ),

               mediaVideos: ({ mediaType, mediaId }) => tmdbEndpoint.getUrl(
                    `${mediaType}/${mediaId}/videos`
               ),


                    mediaVideos: ({ mediaType, mediaId }) => tmdbEndpoint.getUrl(
                         `${mediaType}/${mediaId}/videos`
                    ),

                         mediaRecommend: ({ mediaType, mediaId }) => tmdbEndpoint.getUrl(
                              `${mediaType}/${mediaId}/recommendations`
                         ),
                              mediaImages: ({ mediaType, mediaId }) => tmdbEndpoint.getUrl(
                                   `${mediaType}/${mediaId}/images`
                              ),
                                   mediaSearch: ({ mediaType, query, page }) => tmdbEndpoint.getUrl(
                                        `search/${mediaType}`, { query, page }
                                   ),
                                        personDetail: ({ personId }) => tmdbEndpoint.getUrl(
                                             `person/${personId}`
                                        ),
                                             personMedias: ({ personId }) => tmdbEndpoint.getUrl(
                                                  `person/${personId}/combined_credits`
                                             ),
};

export default tmdbApi;
