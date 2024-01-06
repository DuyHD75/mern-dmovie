import axiosClient from "../axios/axios.client.js";
import tmdbEndpoint from "./tmdb.endpoint.js";

const tmdbApi = {
     mediaList: ({ mediaType, mediaCategory, page }) => axiosClient.axiosClient(
          tmdbEndpoint.mediaList({ mediaType, mediaCategory, page });
     ),

mediaDetail: ({ mediaType, mediaId }) => axiosClient.get(
     `${mediaType}/${mediaId}`
),

     mediaGenres: ({ mediaType }) => tmdbEnd.getUrl(
          `genre/${mediaType}/list`
     ),

          mediaCredits: ({ mediaType, mediaId }) => tmdbEnd.getUrl(
               `${mediaType}/${mediaId}/credits`
          ),

               mediaVideos: ({ mediaType, mediaId }) => tmdbEnd.getUrl(
                    `${mediaType}/${mediaId}/videos`
               ),


                    mediaVideos: ({ mediaType, mediaId }) => tmdbEnd.getUrl(
                         `${mediaType}/${mediaId}/videos`
                    ),

                         mediaRecommend: ({ mediaType, mediaId }) => tmdbEnd.getUrl(
                              `${mediaType}/${mediaId}/recommendations`
                         ),
                              mediaImages: ({ mediaType, mediaId }) => tmdbEnd.getUrl(
                                   `${mediaType}/${mediaId}/images`
                              ),
                                   mediaSearch: ({ mediaType, query, page }) => tmdbEnd.getUrl(
                                        `search/${mediaType}`, { query, page }
                                   ),
                                        personDetail: ({ personId }) => tmdbEnd.getUrl(
                                             `person/${personId}`
                                        ),
                                             personMedias: ({ personId }) => tmdbEnd.getUrl(
                                                  `person/${personId}/combined_credits`
                                             ),
};

export default tmdbApi;
