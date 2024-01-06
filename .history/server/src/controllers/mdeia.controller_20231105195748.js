import responseHandler from "../handlers/response.handler.js";
import tmdbApi from '../tmdb/tmdb.api.js';
import userModel from '../models/user.model.js';
import favoriteModel from '../models/favorite.model.js';
import reviewModel from '../models/review.model.js';


const getList = async (req, res) => {
     try {
          const { page } = req.query;
          const { mediaType, mediaCategory } = req.params;
          const response = await tmdbApi.mediaList({ mediaType, mediaCategory, page });

          return responseHandler.ok(res, response);

     } catch {
          responseHandler.error(res);
     }
};

const getGenres = async (req, res) => {
     try {
          const { mediaType } = req.params;
          const response = await tmdbApi.mediaGenres({ mediaType });
          return responseHandler.ok(res, response);
     } catch {
          responseHandler.error(res);
     }
};

const search = async (req, res) => {
     try {
          const { mediaType } = req.params;
          const { query, page } = req.query;

          const response = await tmdbApi.mediaSearch({
               mediaType: mediaType === "people" ? "person" : mediaType
               , query, page
          });

          return responseHandler.ok(res, response);
     } catch {
          responseHandler.error(res);
     }
};


const getDetail = async (req, res) => {
     try {
          const { mediaType, mediaId } = req.params;

          const params = 


          const media = await tmdbApi.mediaDetail({mediaType, mediaId});
          media.credits = await tmdbApi.mediaCredits({mediaType})


     } catch {
          responseHandler.error(res);
     }
}
