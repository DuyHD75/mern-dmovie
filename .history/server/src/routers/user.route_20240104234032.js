import express from 'express';
import { body } from 'express-validator';
import favoriteController from '../controllers/favorite.controller.js';
import userController from '../controllers/user.controller.js';
import requestHandler from '../handlers/request.handler.js';
import userModel from '../models/user.model.js';
import tokenMiddleware from '../middlewares/token.middleware.js';

const router = express.Router();

router.post(
     "/signup",
     body('username')
          .exists().withMessage("Username is required !")
          .isLength({ min: 8 }).withMessage("Username must be greater than 8 characters !")
          .custom(async value => {
               const user = await userModel.findOne({ username: value });
               if (user) return Promise.reject("Username already existed !");
          }),
     body('password')
          .exists().withMessage("Password is required !")
          .isLength({ min: 8 }).withMessage("Password must be greater than 8 characters !"),
     body('confirmPassword')
          .exists().withMessage("Confirm Password is required !")
          .isLength({ min: 8 }).withMessage("Confirm password must be greater than 8 characters !")
          .custom((value, { req }) => {
               if (value !== req.body.password) throw new Error("Confirm password dose not match!")
               return true;
          }),
     body('displayName')
          .exists().withMessage("Display name is required !")
          .isLength({ min: 8 }).withMessage("Display name must be greater than 8 characters !"),
     requestHandler.validate,
     userController.signup
);


router.post('/signin',
     body('username')
          .exists().withMessage("Username is required !")
          .isLength({ min: 8 }).withMessage("Username must be greater than 8 characters !")
          
     body('password')
          .exists().withMessage("Password is required !")
          .isLength({ min: 8 }).withMessage("Password must be greater than 8 characters !"),
     requestHandler.validate,
     userController.signin
);

router.put("/update-password",
     tokenMiddleware.auth,
     body('password')
          .exists().withMessage("Password is required !")
          .isLength({ min: 8 }).withMessage("Password must be greater then 8 characters !"),
     body('newPassword')
          .exists().withMessage("New password is required !")
          .isLength({ min: 8 }).withMessage("New Password must be greater then 8 characters !"),
     body('confirmNewPassword')
          .exists().withMessage("Confirm new password is required !")
          .isLength({ min: 8 }).withMessage("Confirm new password must be greater then 8 characters !")
          .custom((value, { req }) => {
               if (value !== req.body.newPassword) throw new Error("Confirm new password not match !")
               return true;
          }),
     requestHandler.validate,
     userController.updatePassword
);


router.get(
     "/info",
     tokenMiddleware.auth,
     userController.getInfo
);

router.get(
     "/favorites",
     tokenMiddleware.auth,
     favoriteController.getFavoriteOfUser
);

router.post(
     "/favorites",
     tokenMiddleware.auth,
     body("mediatype")
          .exists().withMessage("Media type is required !")
          .custom(type => ["movie", "tv"].includes(type))
          .withMessage("MediaType invalid !"),
     body("mediaId")
          .exists().withMessage("MediaId is required")
          .isLength({ min: 1 }).withMessage("MediaId can not be empty"),
     body("mediaTitle")
          .exists().withMessage("MediaTitle is required"),
     body("mediaPoster")
          .exists().withMessage("MediaPoster is required"),
     body("mediaRate")
          .exists().withMessage("MediaRate is required"),
     requestHandler.validate,
     favoriteController.addFavorite
);

router.delete(
     "/favorites/:favoriteId",
     tokenMiddleware.auth,
     favoriteController.removeFavorite
);



export default router;

