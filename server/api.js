import { Router } from "express";

import logger from "./utils/logger";

import images from "./exampleData.json";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

export default router;
