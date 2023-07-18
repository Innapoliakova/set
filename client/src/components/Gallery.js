import ImageCard from "./ImageCard";
import "./Gallery.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import LoadingSpinner from "./LoadingSpinner";

const Gallery = ({
	images,
	isLoading,
	setUpdateImages,
	importedInProfile,
	selectedFilter,
}) => {
	return (
		<>
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<>
					{images.length === 0 ? (
						<div className="no-images-message">
							No images were found that match your search/filter.
						</div>
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
											importedInProfile={importedInProfile}
											selectedFilter={selectedFilter}
										/>
									))}
								</Masonry>
							</ResponsiveMasonry>
						</div>
					)}
				</>
			)}
		</>
	);
};

export default Gallery;
