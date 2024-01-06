import privateClient from "../client/private.client";

const reviewEndpoints = {
     list: "reviews",
     add: "reviews",
     remove: ({ reviewId }) => `reviews/${reviewId}`
};



const reviewApi = {
     getList: async () => {
          try {
               const response = await privateClient.get(reviewEndpoints.list);
               return { response };
          } catch (err) { return { err }; }
     }, 
     add: as
};


export default reviewApi;