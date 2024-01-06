import privateClient from '../client/private.client';
import publicClient from '../client/public.client';

const mediaEndpoints = {
     list: ({ mediaType, mediaCategory, page }) => `${mediaType}/${mediaCategory}?page=${page}`,
     detail: ({ mediaType, mediaId }) => `${mediaType}/detail/${mediaId}`,
     search: ({ mediaType, query, page }) => `${mediaType}/search?query=${query}&page=${page}`
};


const mediaApi = {
     getList: async ({}) => {
          try {     
               const response = await publicClient.get(mediaEndpoints.list({}))
          }catch(err) {return {err}};
     }
}