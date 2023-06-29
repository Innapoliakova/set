import "./ImageCard.css";
import favouriteIcon from "../assets/icons/favorite.svg";
import downloadIcon from "../assets/icons/download.svg";
import likeIcon from "../assets/icons/like.svg";
import deleteIcon from "../assets/icons/delete.svg";

const ImageCard = ({ image, isLogin }) => {
	const handleBookmark = () => {
		// Handle bookmark functionality
	};

	const handleLike = () => {
		// Handle like functionality
	};

	const handleDownload = async (imageId, imageTags, imageUrl) => {
		try {
			// Fetch the image data from the specified API endpoint
			const response = await fetch(`/api/image/${imageId}`, {
				method: "GET",
				headers: { "Content-Type": "application/json" },
			});

			if (response.status === 200) {
				// Convert the response data to a Blob object
				const imageData = await response.blob();

				// Define the filename based on the availability of imageTags
				let filename;
				if (imageTags) {
					// Extract the first tag
					const firstTag = imageTags.replace(/\s+/g, "-");
					// Extract the file extension from the imageUrl
					const fileExtension = imageUrl.split(".").pop();
					// Construct the filename with the first tag and file extension
					filename = `cyf-${firstTag}.${fileExtension}`;
				} else {
					// Extract the last part of the URL as the filename when imageTags are not available
					const urlParts = imageUrl.split("/");
					const lastPart = urlParts[urlParts.length - 1];
					filename = `cyf-${lastPart}`;
				}

				// Create an object URL for the image data
				const objectUrl = URL.createObjectURL(imageData);

				// Create an anchor element for initiating the download
				const anchorElement = document.createElement("a");
				anchorElement.href = objectUrl;
				anchorElement.setAttribute("download", filename);
				anchorElement.click();

				// Revoke the object URL after the download is complete
				URL.revokeObjectURL(objectUrl);
			} else {
				throw new Error("Image download failed");
			}
		} catch (err) {
			console.error(err);
		}
	};

	const handleDelete = () => {
		// Handle delete functionality
	};

	return (
		<div className="image-card">
			<img width="400" height="250" src={image.url} alt="" />
			<div className="details">
				<div className="description">{image.description}</div>
				<div className="rating">Likes: {image.rating}</div>
				<div className="tags">Tags: {image.tags}</div>
				<div className="Date">Date: {image.upload_date}</div>
				<div className="No.download">Downloads times: {image.no_download}</div>
				<div className="categories">Categories: {image.categories}</div>
			</div>

			<button onClick={handleLike} className="like-button">
				<img src={likeIcon} alt="" className="icon" />
			</button>

			<button
				onClick={() => handleDownload(image.id, image.tags, image.url)}
				className="download-button"
			>
				<img src={downloadIcon} alt="" className="icon" />
			</button>

			{isLogin && (
				<button onClick={handleDelete} className="delete-button">
					<img src={deleteIcon} alt="" className="icon" />
				</button>
			)}
			{isLogin && (
				<button onClick={handleBookmark} className="bookmark-button">
					<img src={favouriteIcon} alt="" className="icon" />
				</button>
			)}
		</div>
	);
};

export default ImageCard;
