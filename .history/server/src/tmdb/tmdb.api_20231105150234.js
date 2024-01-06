import axiosClient from "../axios/axios.client.js";
import tmdbEndpoint from "./tmdb.endpoint.js";

const tmdbApi = {
     mediaList: ({ mediaType, mediaCategory, page }) => axiosClient.axiosClient(
          tmdbEndpoint.mediaList({ mediaType, mediaCategory, page });
     ),

mediaDetail: ({ mediaType, mediaId }) => axiosClient.get(
     `${mediaType}/${mediaId}`
),

     mediaGenres: ({ mediaType }) => tmdbEndpo.getUrl(
          `genre/${mediaType}/list`
     ),

          mediaCredits: ({ mediaType, mediaId }) => tmdbEndpo.getUrl(
               `${mediaType}/${mediaId}/credits`
          ),

               mediaVideos: ({ mediaType, mediaId }) => tmdbEndpo.getUrl(
                    `${mediaType}/${mediaId}/videos`
               ),


                    mediaVideos: ({ mediaType, mediaId }) => tmdbEndpo.getUrl(
                         `${mediaType}/${mediaId}/videos`
                    ),

                         mediaRecommend: ({ mediaType, mediaId }) => tmdbEndpo.getUrl(
                              `${mediaType}/${mediaId}/recommendations`
                         ),
                              mediaImages: ({ mediaType, mediaId }) => tmdbEndpo.getUrl(
                                   `${mediaType}/${mediaId}/images`
                              ),
                                   mediaSearch: ({ mediaType, query, page }) => tmdbEndpo.getUrl(
                                        `search/${mediaType}`, { query, page }
                                   ),
                                        personDetail: ({ personId }) => tmdbEndpo.getUrl(
                                             `person/${personId}`
                                        ),
                                             personMedias: ({ personId }) => tmdbEndpo.getUrl(
                                                  `person/${personId}/combined_credits`
                                             ),
};

export default tmdbApi;
