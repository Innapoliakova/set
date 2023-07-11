import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate, Link } from "react-router-dom";
import "./uploadPage.css";
import Header from "../components/HeaderUploadPage";
import "../components/Header.css";
import deleteIcon from "../assets/icons/delete.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Upload = () => {
	const navigate = useNavigate();
	const [images, setImages] = useState([]);

	const [newImage, setNewImage] = useState({
		description: "",
		tags: "",
		categories: "",
	});

	const handleInputChange = (event) => {
		let { name, value = null } = event.target;

		if (name === "imageFile") {
			value = event.target.files[0];
		}

		setNewImage((newImage) => ({
			...newImage,
			[name]: value,
		}));
	};

	const {
		getRootProps,
		getInputProps,
		open,
		isDragActive,
		isDragAccept,
		isDragReject,
		isFocused,
	} = useDropzone({
		accept: {
			"image/*": [".jpeg", ".png", ".jpg", ".svg", ".gif"],
		},
		noClick: true,
		noKeyboard: true,
		maxFiles: 1,
		onDrop: useCallback((acceptedFiles) => {
			setImages(
				acceptedFiles.map((file) => {
					const previewURL = URL.createObjectURL(file);
					return { file, previewURL };
				})
			);
		}, []),
	});

	const handleImageUploadSubmit = async (event) => {
		event.preventDefault();
		if (images.length === 0) {
			console.error("No image file found");
			return;
		}

		const imageFile = images[0].file;
		const formData = new FormData();
		formData.append("image", imageFile);
		formData.append("description", newImage.description);
		formData.append("tags", newImage.tags);
		formData.append("categories", newImage.categories);

		try {
			await fetch("/api/image", {
				method: "POST",
				body: formData,
			});
			console.log("Image uploaded successfully.");
			navigate("/"); // Navigate back to the home page after successful upload
			event.target.reset();
			toast.success("Image uploaded successfully!", {
				position: "top-center",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		} catch (error) {
			console.error("Error uploading image:", error);
		}
		event.target.reset();
	};

	const style = useMemo(
		() => ({
			flex: 1,
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			padding: "40px",
			borderWidth: "2px",
			borderRadius: "4px",
			borderColor: "#dfe1e5",
			borderStyle: "dashed",
			backgroundColor: "#f8f8f8",
			color: "#757575",
			outline: "none",
			transition: "border 0.24s ease-in-out",
			...(isFocused ? { borderColor: "#2196f3" } : {}),
			...(isDragAccept ? { borderColor: "#00e676" } : {}),
			...(isDragReject ? { borderColor: "#ff1744" } : {}),
		}),
		[isFocused, isDragAccept, isDragReject]
	);

	const handleDeleteImage = (file) => {
		setImages((images) => images.filter((image) => image.file !== file));
	};

	const thumbs = images.map((file) => (
		<div className="thumb" key={file.file}>
			<div className="thumb-inner">
				<img
					src={file.previewURL}
					className="img"
					// Revoke data uri after image is loaded
					onLoad={() => {
						URL.revokeObjectURL(file.previewURL);
					}}
					alt=""
				/>

				<button onClick={() => handleDeleteImage(file.file)}>
					<img src={deleteIcon} alt="" className="icon" />
				</button>
			</div>
		</div>
	));

	useEffect(() => {
		// Make sure to revoke the data uris to avoid memory leaks, will run on unmount
		return () => images.forEach((file) => URL.revokeObjectURL(file.preview));
	}, [images]);

	return (
		<>
			<Header />
			<section className="container">
				<div className="upload-container" {...getRootProps({ style })}>
					<input {...getInputProps()} />
					{isDragAccept && <p>Image is accepted</p>}
					{isDragReject && <p>Image is rejected</p>}
					{!isDragActive && <p className="drop-text">Drop image here ...</p>}
				</div>
				<button type="button" className="select-button" onClick={open}>
					Select Image
				</button>
				<Link to="/" className="home-link" >Return Home</Link>
				<div className="thumbs-container">
					{thumbs}

					{!!images.length &&
						images.map((image) => (
							<form
								key={image.file}
								className="upload-section"
								onSubmit={handleImageUploadSubmit}
							>
								<div className="container">
									<div className="input-field">
										<input
											type="text"
											name="description"
											className="input-description"
											onChange={handleInputChange}
											placeholder="Description"
											required
										/>
									</div>
									<div className="input-field">
										<input
											type="text"
											name="tags"
											className="input-tags"
											onChange={handleInputChange}
											placeholder="Tags"
											required
										/>
									</div>
									<div className="input-field">
										<select
											className="categories-select"
											name="categories"
											onChange={handleInputChange}
											required
										>
											<option value="">Categories</option>
											<option value="photos">Photos</option>
											<option value="illustrations">Illustrations</option>
											<option value="logos">Logos</option>
											<option value="icons">Icons</option>
										</select>
									</div>

									<button className="submit-button" type="submit">
										Submit
									</button>
									<ToastContainer />
								</div>
							</form>
						))}
				</div>
			</section>
		</>
	);
};

export default Upload;
