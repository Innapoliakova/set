import { Router } from "express";

import logger from "./utils/logger";

import images from "./exampleData.json";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.get("/images", async (_, res) => {
	logger.debug("images imported from exampleData.json");
	try {
		res.status(200).json(images);
	} catch (err) {
		console.error(err);
	}
});

export default router;
