import privateClient from "../client/private.client";
import publicClient from "../client/public.client";


const personEndpoints = {
     details: ({ personId }) => `person/${personId}`,
     medias: ({ personId }) => `person/${personId}/medias`
}

const personApi = {
     detail: async ({ personId }) => {
          try {
               const response = await publicClient.get(personEndpoints.details({ personId }));
               return { response };
          } catch (err) { return { err }; }
     },
     medias: async ({ personId }) => {
          try {
               const response = await publicClient.get(personEndpoints.medias({ personId }));
               return { response };
          } catch (err) { return { err }; }
     }
};

export default personApi;