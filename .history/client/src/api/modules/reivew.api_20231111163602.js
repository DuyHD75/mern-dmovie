import privateClient from "../client/private.client";

const reviewEndpoints = {
     list: "reviews",
     add: "reviews",
     remove: ({ reviewId }) => `reviews/${reviewId}`
};



const reviewApi = {
     list: async ({ }) => {
          try {
               const response = await privateClient.
          } catch (err) { return { err }; }
     }
}