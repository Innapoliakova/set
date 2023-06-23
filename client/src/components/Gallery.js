import ImageCard from "./ImageCard";
import "./Gallery.css";

const Gallery = ({ images, isLogin, message }) => {
	return (
		<>
			{message ? (
				<h1 className="message" data-qa="message">
					{message}
				</h1>
			) : (
				<div className="gallery-section">
					{images.map((image) => (
						<ImageCard key={image.id} image={image} isLogin={isLogin} />
					))}
				</div>
			)}
		</>
	);
};

export default Gallery;
