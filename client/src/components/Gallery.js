import ImageCard from "./ImageCard";

const Gallery = ({ images }) => {
	return (
		<div className="gallery-section">
			<ImageCard images={images} />
		</div>
	);
};

export default Gallery;
