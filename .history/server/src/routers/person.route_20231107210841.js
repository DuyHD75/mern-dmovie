import express from 'express';
import personController from '../controllers/person.controller.js'

const router = express.Router({ mergeParams: true });

router.get("/:person/medias", personController.search);

router.get("/genres", personController.getGenres);

router.get("/detail/:mediaId", personController.getDetail);

router.get("/:mediaCategory", personController.getList);

export default router;

