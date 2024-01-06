import express from 'express';
import userRouter from './user.route.js';
import reviewRouter from './review.route.js';
import mediaRouter from './'
const router = express.Router();

router.use('/user', userRouter);
router.use('/review', reviewRouter);

export default router;