import responseHandler from "../handlers/response.handler.js";
import reviewModel from "../models/review.model.js";

const addReview = async (req, res) => {
     try {
          const { movieId } = req.params;

          const review = new reviewModel({
               user: req.user.id,
               movieId,
               ...req.body
          });
          await review.save();

          responseHandler.created(res, {
               ...review._doc,
               id: review.id,
               user: req.user
          });
     } catch {
          responseHandler.error(res);
     }
};


const removeReview = async (req, res) => {
     try {
          const { reviewId } = req.params;
          const review = await reviewModel.findOne({ _id: reviewId, user: req.user.id });
          if (!review) return responseHandler.notfound(res);
          await review.remove();
          responseHandler.ok(res);
     } catch {
          responseHandler.error(res);
     }
};


const getReviewsOfUser = async (req, res) => {
     try {
          
     } catch {
          responseHandler.error(res);
     }
}