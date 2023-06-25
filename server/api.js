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

router.put(
	"/image",
	uploadImage.single("image"), // our uploadImage middleware
	(req, res) => {
		/*
           req.file = {
             fieldname, originalname,
             mimetype, size, bucket, key, location
           }
        */
		console.log("request", req.file);
		// location key in req.file holds the s3 url for the image
		let data = {};
		if (req.file) {
			data.image = req.file.location;
			res.json(data);
		}
		res.json(data);

		// HERE IS YOUR LOGIC TO UPDATE THE DATA IN DATABASE
	}
);

export default router;
