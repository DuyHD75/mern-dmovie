import express from 'express';
import userRouter from './user.route.js';
import reviewRo

const router = express.Router();

router.use('/user', userRouter);
router.use('/review', )

export default router;