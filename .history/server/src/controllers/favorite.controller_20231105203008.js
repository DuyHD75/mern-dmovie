import responseHandler from "../handlers/response.handler.js";
import favoriteModel from "../models/favorite.model.js";

const addFavorite = async (req, res) => {
     try {
          const isFavorite = await favoriteModel.findOne({
               user: req.user.id, 
               mediaId: req.body.mediaId
          })

          if(isFavorite) {
               return responseHandler.ok(res, isFavorite);
          }

          const favorite = new favoriteModel
     } catch  {
          responseHandler.error(res);
     }
}