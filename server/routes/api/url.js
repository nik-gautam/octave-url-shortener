import { Router } from "express";

import {
  getAddShortUrl,
  getAllUrls,
  getEditUrl,
  getDeleteUrl
} from "../../controllers/urlController";

const router = Router();

router.get("/shorten", getAddShortUrl);
router.get("/", getAllUrls);
router.get("/edit", getEditUrl);
router.get("/delete", getDeleteUrl);

export default router;
