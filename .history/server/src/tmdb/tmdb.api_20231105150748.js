import axiosClient from "../axios/axios.client.js";
import tmdbEndpoint from "./tmdb.endpoint.js";

const tmdbApi = {
     mediaList: async ({ mediaType, mediaCategory, page }) => axiosClient.axiosClient(
          tmdbEndpoint.mediaList({ mediaType, mediaCategory, page })
     ),

     mediaDetail: ({ mediaType, mediaId }) => await axiosClient.get(
          tmdbEndpoint.mediaDetail({ mediaType, mediaId })
     ),

     mediaGenres: ({ mediaType }) => await axiosClient.get(
          tmdbEndpoint.mediaGenres({ mediaType })
     ),

     mediaCredits: ({ mediaType, mediaId }) => await axiosClient.get(
          tmdbEndpoint.mediaCredits({ mediaType, mediaId })
     ),

     mediaVideos: ({ mediaType, mediaId }) => await axiosClient.get(
          tmdbEndpoint.mediaVideos({ mediaType, mediaId })
     ),

     mediaRecommend: ({ mediaType, mediaId }) => await axiosClient.get(
          tmdbEndpoint.mediaRecommend({ mediaType, mediaId })
     ),
     mediaImages: ({ mediaType, mediaId }) => await axiosClient.get(
          tmdbEndpoint.mediaImages({ mediaType, mediaId })
     ),
     mediaSearch: ({ mediaType, query, page }) => await axiosClient.get(
          tmdbEndpoint.mediaSearch({ mediaType, query, page })
     ),
     personDetail: ({ personId }) => await axiosClient.get(
          tmdbEndpoint.personDetail({ personId })
     ),
     personMedias: ({ personId }) => await axiosClient.get(
          tmdbEndpoint.personMedias({ personId })
     ),
};

export default tmdbApi;
