import { Router } from "express";

import logger from "./utils/logger";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.get("/images", (_, res) => {
	res.json({ message: "Get images" });
});

router.get("/image", (req, res) => {
	res.json({ message: "Get image" });
});

router.put("/image", (req, res) => {
	res.json({ message: "Put image" });
});

export default router;
