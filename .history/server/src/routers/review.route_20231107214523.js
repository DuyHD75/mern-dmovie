import express from 'express';
import { body } from 'express-validator';
import reviewController from '../controllers/review.controller.js'
import tokenMiddleware from '../middlewares/token.middleware.js';
import responseHandler from '../handlers/response.handler.js';


const router = express.Router({ mergeParams: true });

// CRUD review

router.get(
     "/",
     tokenMiddleware.auth,
     reviewController.getReviewsOfUser
);

router.post(
     "/:movieId",
     tokenMiddleware.auth,
     body('mediaId')
          .exists().withMessage("Media Id is required !")
          .isLength({ min: 1 }).withMessage("Media id can not be empty !"),
     body('content')
          .exists().withMessage("Contend is required !")
          .isLength({ min: 0 }).withMessage("Content can not be empty !"),
     body('mediaType')
          .exists().withMessage("Contend is required !")
          .isLength({ min: 0 }).withMessage("Content can not be empty !"),

)


export default router;