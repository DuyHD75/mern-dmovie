import express from 'express';
import personController from '../controllers/per.controller.js'

const router = express.Router({ mergeParams: true });

router.get("/search", mediaController.search);

router.get("/genres", mediaController.getGenres);

router.get("/detail/:mediaId", mediaController.getDetail);

router.get("/:mediaCategory", mediaController.getList);

export default router;

