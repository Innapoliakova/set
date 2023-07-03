import "./ImageCard.css";
import favouriteIcon from "../assets/icons/favorite.svg";
import downloadIcon from "../assets/icons/download.svg";
import likeIcon from "../assets/icons/like.svg";
import deleteIcon from "../assets/icons/delete.svg";

const ImageCard = ({ image, isLogin, setUpdateImages }) => {
	const handleBookmark = () => {
		// Handle bookmark functionality
	};

	const handleLike = () => {
		// Handle like functionality
	};

	const handleDownload = async (imageId, imageTags, imageKey) => {
		try {
			// Fetch the image data from the specified API endpoint
			const response = await fetch(
				`/api/image/${imageId}/download?downloadAction=true`,
				{
					method: "GET",
					headers: { "Content-Type": "application/json" },
				}
			);

			if (response.status === 200) {
				// Convert the response data to a Blob object
				const imageData = await response.blob();

				// Define the filename based on the availability of imageTags
				let filename;
				if (imageTags) {
					// Extract the first tag

					const firstTag = imageTags.split(" ")[0];
					// Extract the file extension from the imageUrl
					const fileExtension = imageKey.split(".").pop();
					// Construct the filename with the first tag and file extension
					filename = `cyf-${firstTag}.${fileExtension}`;
				} else {
					// Construct the filename with cyf and image key
					filename = `cyf-${imageKey}`;
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

	const handleDelete = async (imageKey) => {
		try {
			// Send a DELETE request to the specified endpoint (/api/{imageKey}) to delete the image
			const response = await fetch(`/api/${imageKey}`, {
				method: "DELETE",
			});

			if (response.status === 200) {
				// If the response status is 200 (OK), parse the response message as JSON
				const resMessage = await response.json();
				console.log(resMessage);
				// Update the state variable 'updateImages' to trigger a re-render and update the images
				setUpdateImages((prevUpdateImages) => !prevUpdateImages);
			} else {
				// If the response status is not 200, throw an error indicating that the image deletion failed
				throw new Error("Image delete failed");
			}
		} catch (err) {
			// Catch any errors that occur during the fetch request or response handling
			console.error(err);
		}
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
				onClick={() => handleDownload(image.id, image.tags, image.key)}
				className="download-button"
			>
				<img src={downloadIcon} alt="" className="icon" />
			</button>

			{isLogin && (
				<button
					onClick={() => handleDelete(image.key)}
					className="delete-button"
				>
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
