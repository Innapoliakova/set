import { Router } from "express";

import logger from "./utils/logger";

import images from "./exampleData.json";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.get("/images", (_, res) => {
	try {
		res.status(200).json(images);
	} catch (err) {
		logger.error(err);
	}
});

router.get("/image", (req, res) => {
	try {
		res.status(200).json(images[0]);
	} catch (err) {
		logger.error(err);
	}
});

router.put("/image", (req, res) => {
	res.json({ message: "Put image" });
});

export default router;
