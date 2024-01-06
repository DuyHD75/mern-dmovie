import privateClient from "../client/private.client";

const favoriteEndpoints = {
     list: "user/favorites", 
     add: "user/favorites", 
     remove: ({favoriteId}) => `user/favorites.${favoriteId}`
}