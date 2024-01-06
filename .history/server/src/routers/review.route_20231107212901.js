import express from 'express';
import {body} from 'express-validator';
import reviewController from '../controllers/review.controller.js'
import tokenMiddleware from '../middlewares/token.middleware.js';
import responseHandler from '../handlers/response.handler';
const router = express.Router({ mergeParams: true });

// CRUD review

router.get();


export default router;