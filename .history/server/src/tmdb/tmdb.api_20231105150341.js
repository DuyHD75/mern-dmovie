import axiosClient from "../axios/axios.client.js";
import tmdbEndpoint from "./tmdb.endpoint.js";

const tmdbApi = {
     mediaList: ({ mediaType, mediaCategory, page }) => axiosClient.axiosClient(
          tmdbEndpoint.mediaList({ mediaType, mediaCategory, page })
     ),

     mediaDetail: ({ mediaType, mediaId }) => axiosClient.get(
          tmdbEndpoint.mediaList({ mediaType, mediaId })
     ),

     mediaGenres: ({ mediaType }) => axiosClient.get(
          tmdbEndpoint.mediaList({ mediaType })
     ),

     mediaCredits: ({ mediaType, mediaId }) => axiosClient.get(
          `${mediaType}/${mediaId}/credits`
     ),

     mediaVideos: ({ mediaType, mediaId }) => axiosClient.get(
          `${mediaType}/${mediaId}/videos`
     ),


     mediaVideos: ({ mediaType, mediaId }) => axiosClient.get(
          `${mediaType}/${mediaId}/videos`
     ),

     mediaRecommend: ({ mediaType, mediaId }) => axiosClient.get(
          `${mediaType}/${mediaId}/recommendations`
     ),
     mediaImages: ({ mediaType, mediaId }) => axiosClient.get(
          `${mediaType}/${mediaId}/images`
     ),
     mediaSearch: ({ mediaType, query, page }) => axiosClient.get(
          `search/${mediaType}`, { query, page }
     ),
     personDetail: ({ personId }) => axiosClient.get(
          `person/${personId}`
     ),
     personMedias: ({ personId }) => axiosClient.get(
          `person/${personId}/combined_credits`
     ),
};

export default tmdbApi;
