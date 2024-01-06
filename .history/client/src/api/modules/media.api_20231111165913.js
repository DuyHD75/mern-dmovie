import privateClient from '../client/private.client';
import publicClient from '../client/public.client';

const mediaEndpoints = {
     list: ({ mediaType, mediaCategory, page }) => `${mediaType}/${mediaCategory}?page=${page}`,
     detail: ({ mediaType, mediaId }) => `${mediaType}/detail/${mediaId}`,
     search: ({ mediaType, query, page }) => `${mediaType}/search?query=${query}&page=${page}`
};


const mediaApi = {
     getList: async ({ mediaType, mediaCategory }) => {
          try {
               const response = await publicClient.get(mediaEndpoints.list({ mediaType, mediaCategory }),
                    { mediaType, mediaCategory });
               return { response };
          } catch (err) { return { err } };
     },
     detail: async ({ mediaType, mediaId }) => {
          try {
               const response = await publicClient.get(mediaEndpoints.detail({ mediaType, mediaId }));
               return { response };
          } catch (err) { return { err } };
     },

     search: async ({ mediaType, query, page }) => {
          try {
               const response = await publicClient.get(
                    mediaEndpoints.search({ mediaType, query, page })
               );
               return { response };
          } catch (err) { return { err }; }
     }
}


export default mediaApi;