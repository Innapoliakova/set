import multer from "multer";
import multerS3 from "multer-s3";
import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";
import path from "node:path";
import logger from "./logger";

// create s3 instance using S3Client
// (this is how we create s3 instance in v3)
const s3 = new S3Client({
	credentials: {
		accessKeyId: process.env.ACCESS_KEY_ID, // store it in .env file to keep it safe
		secretAccessKey: process.env.SECRET_ACCESS_KEY,
	},
	region: "eu-west-1", // this is the region that you select in AWS account
});

const s3Storage = multerS3({
	s3, // s3 instance
	bucket: "cyf-images-fp", // change it as per your project requirement
	acl: "public-read", // storage access type
	contentType: multerS3.AUTO_CONTENT_TYPE,
	metadata: (req, file, cb) => {
		cb(null, {
			fieldname: file.fieldname,
		});
	},
	key: (req, file, cb) => {
		const fileName =
			Date.now() + "_" + file.fieldname + "_" + file.originalname;
		cb(null, fileName);
	},
});

// Function to sanitize files and send an error for unsupported files
function sanitizeFile(file, cb) {
	// Define the allowed extensions
	const fileExts = [".png", ".jpg", ".jpeg", ".gif", ".svg"];

	// Check allowed extensions
	const isAllowedExt = fileExts.includes(
		path.extname(file.originalname.toLowerCase())
	);

	// Mime type must be an image
	const isAllowedMimeType = file.mimetype.startsWith("image/");

	// Check if the file is an SVG
	const isSVG = file.originalname.endsWith(".svg");

	if (isSVG) {
		file.mimetype = "image/svg+xml"; // Set the content type to "image/svg+xml" for SVG images
	}

	if (isAllowedExt && isAllowedMimeType) {
		return cb(null, true); // no errors
	} else {
		// Pass error msg to callback, which can be displayed in the frontend
		cb(
			"Error: Invalid file format! Please upload a file with a valid extension. Only .png, .jpg, .jpeg, .gif, .svg formats are accepted."
		);
	}
}

// our middleware
export const uploadImage = multer({
	storage: s3Storage,
	fileFilter: (req, file, callback) => {
		sanitizeFile(file, callback);
	},
	limits: {
		fileSize: 1024 * 1024 * 2, // 2mb file size
	},
});

// Delete functionality
export const deleteImageFromS3 = async (key) => {
	try {
		const command = new DeleteObjectCommand({
			Bucket: "cyf-images-fp",
			Key: key,
		});
		await s3.send(command);
		console.log("Successfully deleted image");
	} catch (err) {
		console.error("Error deleting image from S3:", err);
	}
};
