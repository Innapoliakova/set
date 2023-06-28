import { Router } from "express";

import logger from "./utils/logger";

import images from "./exampleData.json";

import { uploadImage } from "./utils/uploadImage";

const router = Router();

router.get("/images", async (_, res) => {
	try {
		// Retrieve all images from the database table
		const allImages = await pool.query("SELECT * FROM images ORDER BY id;");

		// Send a success response with the retrieved image data
		return res.status(200).json({ data: allImages.rows });
	} catch (error) {
		// Log the error details for debugging purposes
		logger.error(error);

		// Send an error response with an appropriate status code and message
		res.status(500).json({ error: true, message: "Internal server error" });
	}
});

router.get("/image", (req, res) => {
	try {
		res.status(200).json(images[0]);
	} catch (err) {
		logger.error(err);
	}
});

router.put(
	"/image",
	uploadImage.single("image"), // our uploadImage middleware
	(req, res) => {

		// location key in req.file holds the s3 url for the image
		let data = {};
		if (req.file) {
			data.image = req.file.location;
			
		}
		res.json(data);

		// HERE IS YOUR LOGIC TO UPDATE THE DATA IN DATABASE
	}
);

export default router;
