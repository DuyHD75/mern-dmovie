import responseHandler from "../handlers/response.handler.js";
import tmdbApi from "../tmdb/tmdb.api.js";


const personDetail = async (req,res) => {
     try {
          const{ personId} = req.params;

          const person = await tmdbApi.personMedias({personId})

          responseHandler.ok()


     } catch  {
          responseHandler.error(res);
     }
}


