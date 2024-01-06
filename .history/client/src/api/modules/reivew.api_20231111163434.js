import privateClient from "../client/private.client";

const reviewEndpoints = {
     list: "reviews", 
     add: "reviews", 
     remove: ({reviewId}) => `reviews/${reviewId}`
}