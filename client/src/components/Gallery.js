import ImageCard from "./ImageCard";
import "./Gallery.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Gallery = ({ images, message, setUpdateImages }) => {
	return (
		<>
			{message ? (
				<h1 className="message" data-qa="message">
					{message}
				</h1>
			) : (
				<div className="gallery-section">
					<ResponsiveMasonry
						columnsCountBreakPoints={{ 350: 1, 400: 2, 750: 3, 900: 4 }}
					>
						<Masonry gutter="1.5rem">
							{images.map((image) => (
								<ImageCard
									key={image.id}
									image={image}
									setUpdateImages={setUpdateImages}
								/>
							))}
						</Masonry>
					</ResponsiveMasonry>
				</div>
			)}
		</>
	);
};

export default Gallery;
