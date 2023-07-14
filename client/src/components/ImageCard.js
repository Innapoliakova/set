
import "./ImageCard.css";
import favouriteIcon from "../assets/icons/favorite.svg";
import downloadIcon from "../assets/icons/download.svg";
import likeIcon from "../assets/icons/like.svg";
import deleteIcon from "../assets/icons/delete.svg";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import { useAuth0 } from "@auth0/auth0-react";

const ImageCard = ({ image, setUpdateImages }) => {
	const handleOpenImage = async () => {
		console.log("hello");
		try {
 // Start preloading the image
 const img = new Image();
 img.src = image.url;

 // Open a new window and wait for it to load
 const newWindow = window.open("", "_blank");
 await new Promise((resolve) => {
			newWindow.onload = resolve;
	});

 // Create the HTML content
 const htmlContent = `
 <div style="margin-left: 20px;">
      <img src="${image.url}" style="width: 50vw; height: auto;">
			<div>
			  <img src="${image.url}" style="width: 50vw; height: auto;">
			  <div class="details">
				<div class="description">${image.description}</div>
				<div class="rating">Likes: ${image.rating}</div>
				<div class="tags">Tags: ${image.tags}</div>
				<div class="Date">Date: ${image.upload_date.split("T")[0]}</div>
				<div class="No.download">Downloads times: ${image.no_download}</div>
				<div class="categories">Categories: ${image.categories}</div>
			  </div>
			</div>
		  `;

 // Set the HTML content in the new window
 newWindow.document.body.innerHTML = htmlContent;
		} catch (err) {
	console.error(err);
		}
 };


	const { user, isAuthenticated } = useAuth0();
	// const sUser = process.env.REACT_APP_sUser;
	const sUser = "google-oauth2|105695661976451935769" || "github|103330478";

	const handleBookmark = () => {
		// Handle bookmark functionality
	};

	const handleLike = () => {
		// Handle like functionality
	};

	const handleDownload = async (imageId) => {
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
				// Convert the response data to a json object
				const imageData = await response.json();

				// Create an anchor element for initiating the download
				const anchorElement = document.createElement("a");
				anchorElement.href = imageData.url;
				anchorElement.click();
				setUpdateImages((prevUpdateImages) => !prevUpdateImages);
			} else {
				throw new Error("Image download failed");
			}
		} catch (err) {
			console.error(err);
		}
	};

	const handleDelete = async (imageKey) => {
		// Check if imageKey is null or empty
		if (!imageKey) {
			// Handle the case when imageKey is null or empty
			console.error("Invalid image key");
			return;
		}
		const confirmDelete = confirm("Delete image?");
		if (confirmDelete) {
			try {
				// Send a DELETE request to the specified endpoint (/api/{imageKey}) to delete the image
				const response = await fetch(`/api/${imageKey}`, {
					method: "DELETE",
				});

				if (response.status === 200) {
					// If the response status is 200 (OK), parse the response message as JSON
					const resMessage = await response.json();
					console.log(resMessage.message);
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
		}
	};

	return (
		<div className="image-card">
			{/* <img width="400" height="250" src={image.url} alt="" /> */}
			<img width="400"
            height="250"
            src={image.url}
          alt=""

 />
			<div className="details">
				<div className="description">{image.description}</div>
				<div className="rating">Likes: {image.rating}</div>
				<div className="tags">Tags: {image.tags}</div>
				<div className="Date">Date: {image.upload_date.split("T")[0]}</div>
				<div className="No.download">Downloads times: {image.no_download}</div>
				<div className="categories">Categories: {image.categories}</div>
			</div>
			{!isAuthenticated && (
				<button onClick={handleLike} className="like-button">
					<img src={likeIcon} alt="" className="icon" />

				</button>
			)}
			<button
				onClick={() => handleDownload(image.id)}
				className="download-button"
			>
				<img src={downloadIcon} alt="" className="icon" />
			</button>
			<button

				onClick={() => handleOpenImage(image.id)}
				className="open-button"

			>

				<OpenInNewIcon className="open-window" />
			</button>

			{isAuthenticated && user && user.sub === sUser && (
				<>
					<button
						onClick={() => handleDelete(image.key)}
						className="delete-button"
					>
						<img src={deleteIcon} alt="" className="icon" />
					</button>
				</>
			)}


		</div>
	);
};

export default ImageCard;
