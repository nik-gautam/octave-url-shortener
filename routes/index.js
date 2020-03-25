import { Router } from "express";

import { getIndex, getInit } from "../controllers/indexController";

const router = Router();

router.get("/:urlCode", getIndex);
// router.get("/", getInit);

export default router;
