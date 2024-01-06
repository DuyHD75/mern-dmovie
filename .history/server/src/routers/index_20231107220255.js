import express from 'express';
import userRouter from './user.route.js';
import reviewRouter from './review.route.js';
import mediaRouter from './media.route.js';
import personRouter from './person.route.js';

const router = express.Router();

router.use('/user', userRouter);
router.use('/reviews', reviewRouter);
router.use('/media', mediaRouter);
router.use('/media', mediaRouter);
router.use('/person', personRouter);

export default router;