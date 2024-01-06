import privateClient from "../client/private.client";

const favoriteEndpoints = {
     list: "user/favorites",
     add: "user/favorites",
     remove: ({ favoriteId }) => `user/favorites.${favoriteId}`
};

const favoriteApi = {
     getList: async () => {
          try {
               const response = await privateClient.get(favoriteEndpoints.list);
               return { response };
          } catch (err) {
               return { err };
          }
     };

     add: async ({
          mediaId, mediaTitle, mediaType, mediaPoster, mediaRate
     }) => {
          try {
               const response = await privateClient.post(favoriteEndpoints.add,
                    { mediaId, mediaTitle, mediaType, mediaPoster, mediaRate }
               );
               return { response };
          } catch (err) {
               return { err };
          }
     };
     remove: async ({favoriteId}) => {
          try {
               const response = await privateClient.delete(favoriteEndpoints.remove, 

                    );
               return { response };
          } catch (err) {
               return { err };
          }
     };

}