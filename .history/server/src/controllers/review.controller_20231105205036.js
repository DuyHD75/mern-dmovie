import responseHandler from "../handlers/response.handler.js";
import reviewModel from "../models/review.model.js";

const addReview = async (req, res) => {
     try {
          const { movieId } = req.params;

          const review = new reviewModel({
               ...review,
               user: req.user.id, 
               movieId: movieId, 
               
          })

     } catch {
          responseHandler.error(res);
     }
}