import privateClient from "../client/private.client";


const personEndpoints = {
     details: ({personId}) => `person/${personId}`, 
     medias: ({personId}) => `person/${personId}/medias`
}


const personApi = {
     detail: async ({personID})
}