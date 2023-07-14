import ImageCard from "./ImageCard";
import "./Gallery.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Gallery = ({ images, isLogin, message, setUpdateImages, importedInProfile}) => {

  return (
    <>
      {images.length === 0 ? (
        <div className="no-images-message">
          No images were found that match your search/filter.
        </div>
      ) : (
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
                      isLogin={isLogin}
                      setUpdateImages={setUpdateImages}
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