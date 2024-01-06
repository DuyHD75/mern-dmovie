import express from 'express';
import {body} from 'express-validator';
import reviewController from '../controllers/review.controller.js'
import tokenMiddleware from '../middlewares/token.middleware.js';
import req
const router = express.Router({ mergeParams: true });

// CRUD review

router.get();


export default router;