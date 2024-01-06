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

     add: async () => {
          try {
               const response = await privateClient.get(favoriteEndpoints.list);
               return { response };
          } catch (err) {
               return { err };
          }
     };
     getList: async () => {
          try {
               const response = await privateClient.get(favoriteEndpoints.list);
               return { response };
          } catch (err) {
               return { err };
          }
     };

}