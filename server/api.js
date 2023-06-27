import { Router } from "express";

import logger from "./utils/logger";

import images from "./exampleData.json";

import { uploadImage } from "./utils/uploadImage";

const router = Router();

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

router.post(
	"/image",
	uploadImage.single("image"), // our uploadImage middleware
	async (req, res) => {
		try {
			if (!req.body || Object.entries(req.body).length === 0) {
				return res.status(400).json({
					success: false,
					error: true,
					message: "The request body is empty.",
				});
			}

			if (!req.file) {
				return res.status(400).json({
					success: false,
					error: true,
					message: "No image file found in the request.",
				});
			}

			// location key in req.file holds the s3 url for the image
			const url = req.file.location;

			const { description, tags, categories } = req.body; // Extract description, tags, and categories from the request body

		// HERE IS YOUR LOGIC TO UPDATE THE DATA IN DATABASE
	}
);

export default router;
