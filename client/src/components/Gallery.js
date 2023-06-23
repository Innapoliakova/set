import ImageCard from "./ImageCard";
import "./Gallery.css";

const Gallery = ({ images, isLogin }) => {
	return (
		<div className="gallery-section">
			{images.map((image) => (
				<ImageCard key={image.id} image={image} isLogin={isLogin} />
			))}
		</div>
	);
};

export default Gallery;
