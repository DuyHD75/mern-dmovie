import axiosClient from "../axios/axios.client.js";
import tmdbEndpoint from "./tmdb.endpoint.js";

const tmdbApi = {
     mediaList: async ({ mediaType, mediaCategory, page }) => axiosClient.get(
          tmdbEndpoint.mediaList({ mediaType, mediaCategory, page })
     ),

     mediaDetail:async ({ mediaType, mediaId }) => await axiosClient.get(
          tmdbEndpoint.mediaDetail({ mediaType, mediaId })
     ),

     mediaGenres:async ({ mediaType }) => await axiosClient.get(
          tmdbEndpoint.mediaGenres({ mediaType })
     ),

     mediaCredits:async ({ mediaType, mediaId }) => await axiosClient.get(
          tmdbEndpoint.mediaCredits({ mediaType, mediaId })
     ),

     mediaVideos:async ({ mediaType, mediaId }) => await axiosClient.get(
          tmdbEndpoint.mediaVideos({ mediaType, mediaId })
     ),

     mediaRecommend:async ({ mediaType, mediaId }) => await axiosClient.get(
          tmdbEndpoint.mediaRecommend({ mediaType, mediaId })
     ),
     mediaImages:async ({ mediaType, mediaId }) => await axiosClient.get(
          tmdbEndpoint.mediaImages({ mediaType, mediaId })
     ),
     mediaSearch: async({ mediaType, query, page }) => await axiosClient.get(
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
