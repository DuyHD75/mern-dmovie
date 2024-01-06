import express from 'express';
import userRouter from './user.route.js';
import reviewRouter from './review.route.js';

const router = express.Router();

router.use('/user', userRouter);
router.use('/review', )

export default router;