import express from 'express';
import { body } from 'express-validator';
import reviewController from '../controllers/review.controller.js'
import tokenMiddleware from '../middlewares/token.middleware.js';
import requestHandler from '../handlers/request.handler.js';

const router = express.Router({ mergeParams: true });

router.get(
     "/",
     tokenMiddleware.auth,
     reviewController.getReviewsOfUser
);

router.post(
     "/",
     tokenMiddleware.auth,
     body('mediaId')
          .exists().withMessage("Media Id is required !")
          .isLength({ min: 1 }).withMessage("Media id can not be empty !"),
     body('content')
          .exists().withMessage("Contend is required !")
          .isLength({ min: 0 }).withMessage("Content can not be empty !"),
     body('mediaType')
          .exists().withMessage("Media type is required !")
          .isLength({ min: 0 }).withMessage("Media type can not be empty !"),
     body('mediaTitle')
          .exists().withMessage("Media title is required !")
          .isLength({ min: 0 }).withMessage("Media title can not be empty !"),
     body('mediaPoster')
          .exists().withMessage("Media poster is required !")
          .isLength({ min: 0 }).withMessage("Media poster can not be empty !"),
     requestHandler.validate,
     reviewController.addReview
);

router.delete(
     "/:reviewId",
     tokenMiddleware.auth,
     reviewController.removeReview
);

export default router;