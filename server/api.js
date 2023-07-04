import { Router } from "express";

import logger from "./utils/logger";

import images from "./exampleData.json";

import { uploadImage } from "./utils/uploadImage";

import { v4 as uuidv4 } from "uuid";

import pool from "./db";

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





router.get("/search", async (req, res) => {
	try {
 const searchQuery = req.query.searchQuery; // Get the search query from the request query parameters
console.log(searchQuery)
	  // Perform the filter logic based on the search query
 let filteredImages = await pool.query(
   `SELECT * FROM images WHERE lower(description) LIKE $1 OR lower(tags) LIKE $1 ORDER BY rating DESC;`,
  [`%${searchQuery.toLowerCase()}%`]
  );
   res.json(filteredImages.rows); // Return the filtered images as JSON
} catch (err) {
console.error(err);
	res.status(500).json({ error: "An error occurred while searching for images." });
   }
  });




export default router;
