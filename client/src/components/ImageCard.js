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

	const handleDownload = () => {
		// Handle download functionality
	};

	const handleDelete = () => {
		// Handle delete functionality
	};

	return (
		<div className="image-card">
			<img width="400" height="250" src={`/${image.sr}`} alt="" />
			<div className="details">
				<div className="description">{image.description}</div>
				<div className="rating">Likes: {image.rating}</div>
				<div className="tags">Tags: {image.tags}</div>
				<div className="Date">Date: {image.Date}</div>
				<div className="No.download">Downloads times: {image.no_download}</div>
				<div className="categories">Categories: {image.categories}</div>
			</div>

			<button onClick={handleLike} className="like-button">
				<img src={likeIcon} alt="" className="icon" />
			</button>

			<button onClick={handleDownload} className="download-button">
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
