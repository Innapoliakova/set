import { Router } from "express";

import logger from "./utils/logger";

import images from "./exampleData.json";

import { uploadImage } from "./utils/uploadImage";

import { v4 as uuidv4 } from "uuid";

import pool from "./db";

const router = Router();

router.get("/images", async (req, res) => {
    try {
 const { filter } = req.query;


// Validate the filter input if necessary
 // e.g., if (filter && !isValidFilter(filter)) { ... }

 let allImages;
if (filter !== "null") {
        allImages = await pool.query(
    "SELECT * FROM images WHERE categories LIKE $1 ORDER BY id;",
[filter]
        );
 } else {
        allImages = await pool.query("SELECT * FROM images ORDER BY id;");
 }

 // Send a success response with the retrieved image data
 return res.status(200).json({ data: allImages.rows });
    } catch (error) {
 // Log the error details for debugging purposes
 logger.error(error);

 // Send an error response with an appropriate status code and message
 res.status(500).json({ error: true, message: "Internal server error" });
    }
  });

router.get("/image/:id/download", async (req, res) => {
	try {
		const { id } = req.params;
		const { downloadAction } = req.query;
		// Increment the No of downloads for the image in the database when downloaded
		if (downloadAction) {
		await pool.query("UPDATE images SET no_download=(no_download + 1) WHERE id = $1;", [
		id,
		]);
		}

		// Retrieve image from the database using the provided id
		const image = await pool.query("SELECT * FROM images WHERE id = $1;", [id]);

		// Check if image exists
		if (image.rows.length === 0) {
			res.status(404).json("Image not found");
		} else {
			// Return the image data if it exists
			res.status(200).json(image.rows[0]);
		}
	} catch (error) {
		// Log any errors that occur during the request
		logger.error(error);

		// Send a 500 Internal Server Error response with error details
		res
			.status(500)
			.json({ success: false, error: true, message: error.toString() });
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

			const id = uuidv4(); // Generate a unique ID for the image

			await pool.query(
				"INSERT INTO images(id,description, tags, categories, url) VALUES($1, $2, $3, $4, $5)",
				[id, description, tags, categories, url]
			); // Use parameterized query values to add the image details to images table
			res.status(200).json("Image were added successfully");
		} catch (error) {
			logger.error(error);
			res
				.status(500)
				.json({ success: false, error: true, message: error.toString() });
		}
	}
);

export default router;
