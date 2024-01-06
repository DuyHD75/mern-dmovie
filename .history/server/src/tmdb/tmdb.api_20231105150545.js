import axiosClient from "../axios/axios.client.js";
import tmdbEndpoint from "./tmdb.endpoint.js";

const tmdbApi = {
     mediaList: ({ mediaType, mediaCategory, page }) => axiosClient.axiosClient(
          tmdbEndpoint.mediaList({ mediaType, mediaCategory, page })
     ),

     mediaDetail: ({ mediaType, mediaId }) => axiosClient.get(
          tmdbEndpoint.mediaDetail({ mediaType, mediaId })
     ),

     mediaGenres: ({ mediaType }) => axiosClient.get(
          tmdbEndpoint.mediaGenres({ mediaType })
     ),

     mediaCredits: ({ mediaType, mediaId }) => axiosClient.get(
          tmdbEndpoint.mediaCredits({ mediaType, mediaId })
     ),

     mediaVideos: ({ mediaType, mediaId }) => axiosClient.get(
          tmdbEndpoint.mediaVideos({ mediaType, mediaId })
     ),


     mediaRecommend: ({ mediaType, mediaId }) => axiosClient.get(
          tmdbEndpoint.mediaRecommend({ mediaType, mediaId })

     ),
     mediaImages: ({ mediaType, mediaId }) => axiosClient.get(
          tmdbEndpoint.mediaImages({ mediaType, mediaId })

     ),
     mediaSearch: ({ mediaType, query, page }) => axiosClient.get(
          tmdbEndpoint.mediaSearch({ mediaType, query, page })

     ),
     personDetail: ({ personId }) => axiosClient.get(
          tmdbEndpoint.personDetail({ personId})

     ),
     personMedias: ({ personId }) => axiosClient.get(
          `person/${personId}/combined_credits`
     ),
};

export default tmdbApi;
