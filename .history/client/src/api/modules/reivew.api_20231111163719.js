import privateClient from "../client/private.client";

const reviewEndpoints = {
     list: "reviews",
     add: "reviews",
     remove: ({ reviewId }) => `reviews/${reviewId}`
};



const reviewApi = {
     getList: async () => {
          try {
               const response = await privateClient.get(v
                 
               );
               return response;
          } catch (err) { return { err }; }
     }
};


export default reviewApi;