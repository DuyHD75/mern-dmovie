import responseHandler from "../handlers/response.handler.js";
import favoriteModel from "../models/favorite.model.js";

const addFavorite = async (req, res) => {
     try {
          const isFavorite = await favoriteModel.findOne({
               user: req.user.id, 
               
          })
     } catch  {
          responseHandler.error(res);
     }
}