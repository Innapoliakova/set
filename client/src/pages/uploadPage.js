// import React, { useState } from "react";
// import "./uploadPage.css";
// import { useNavigate } from "react-router-dom";

// const Upload = () => {
// 	const navigate = useNavigate();

// 	const [newImage, setNewImage] = useState({
// 		description: "",
// 		tags: "",
// 		categories: "",
// 	});

// 	const handleInputChange = (event) => {
// 		let { name, value = null } = event.target;

// 		if (name === "imageFile") {
// 			value = event.target.files[0];
// 		}

// 		setNewImage((newImage) => ({
// 			...newImage,
// 			[name]: value,
// 		}));
// 	};

// 	const handleImageUploadSubmit = async (event) => {
// 		event.preventDefault();

// 		const formData = new FormData();
// 		formData.append("image", newImage.imageFile);
// 		formData.append("description", newImage.description);
// 		formData.append("tags", newImage.tags);
// 		formData.append("categories", newImage.categories);

// 		try {
// 			await fetch("/api/image", {
// 				method: "POST",
// 				body: formData,
// 			});
// 			console.log("Image uploaded successfully.");

// 			navigate("/"); // Navigate back to the home page after successful upload
// 			event.target.reset();
// 		} catch (error) {
// 			console.error("Error uploading image:", error);
// 		}
// 	};

// 	return (
// 		<form className="upload-section" onSubmit={handleImageUploadSubmit}>
// 			<div className="file-input-container">
// 				<input
// 					type="file"
// 					name="imageFile"
// 					id="myFileInput"
// 					className="hidden"
// 					onChange={handleInputChange}
// 				/>
// 				<label htmlFor="myFileInput" className="custom-button">
// 					Select File
// 				</label>
// 			</div>

// 			<div className="container">
// 				<div className="input-field input1">
// 					<input
// 						type="text"
// 						name="description"
// 						onChange={handleInputChange}
// 						placeholder="description"
// 					></input>
// 				</div>
// 				<div className="input-field input2">
// 					<input
// 						type="text"
// 						name="tags"
// 						onChange={handleInputChange}
// 						placeholder="tags"
// 					/>
// 				</div>
// 				<div className="input-field input3">
// 					<select
// 						type="text"
// 						className="categoriesbtn"
// 						name="categories"
// 						onChange={handleInputChange}
// 					>
// 						<option value="">Categories</option>
// 						<option value="photos">Photos</option>
// 						<option value="illustrations">Illustrations</option>
// 						<option value="logos">Logos</option>
// 						<option value="icons">Icons</option>
// 					</select>
// 				</div>
// 			</div>

// 			<button type="submit" className="submitbtn">
// 				Submit
// 			</button>
// 		</form>
// 	);
// };

// export default Upload;

// import React, { useMemo } from "react";
// import { useDropzone } from "react-dropzone";

// const baseStyle = {
// 	flex: 1,
// 	display: "flex",
// 	flexDirection: "column",
// 	alignItems: "center",
// 	padding: "20px",
// 	borderWidth: 2,
// 	borderRadius: 2,
// 	borderColor: "#eeeeee",
// 	borderStyle: "dashed",
// 	backgroundColor: "#fafafa",
// 	color: "#bdbdbd",
// 	outline: "none",
// 	transition: "border .24s ease-in-out",
// };

// const focusedStyle = {
// 	borderColor: "#2196f3",
// };

// const acceptStyle = {
// 	borderColor: "#00e676",
// };

// const rejectStyle = {
// 	borderColor: "#ff1744",
// };

// function Upload() {
// 	const {
// 		acceptedFiles,
// 		getRootProps,
// 		getInputProps,
// 		isFocused,
// 		isDragAccept,
// 		isDragReject,
// 		open,
// 	} = useDropzone({
// 		accept: {
// 			"image/jpeg": [],
// 			"image/png": [],
// 			"image/jpg": [],
// 			"image/svg": [],
// 			"image/gif": [],
// 		},
// 		noClick: true,
// 		noKeyboard: true,
// 	});

// 	const style = useMemo(
// 		() => ({
// 			...baseStyle,
// 			...(isFocused ? focusedStyle : {}),
// 			...(isDragAccept ? acceptStyle : {}),
// 			...(isDragReject ? rejectStyle : {}),
// 		}),
// 		[isFocused, isDragAccept, isDragReject]
// 	);

// 	const files = acceptedFiles.map((file) => (
// 		<li key={file.path}>
// 			{file.path} - {file.size} bytes
// 		</li>
// 	));

// 	return (
// 		<div className="container">
// 			<div {...getRootProps({ style })}>
// 				<input {...getInputProps()} />
// 				<p>Drag 'n' drop some files here</p>
// 				<button type="button" onClick={open}>
// 					Open File Dialog
// 				</button>
// 				<aside>
// 					<h4>Files</h4>
// 					<ul>{files}</ul>
// 				</aside>
// 			</div>
// 		</div>
// 	);
// }

// export default Upload;

import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const thumbsContainer = {
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	marginTop: 16,
};

const thumb = {
	display: "inline-flex",
	borderRadius: 2,
	border: "1px solid #eaeaea",
	marginBottom: 8,
	marginRight: 8,
	width: 100,
	height: 100,
	padding: 4,
	boxSizing: "border-box",
};

const thumbInner = {
	display: "flex",
	minWidth: 0,
	overflow: "hidden",
};

const img = {
	display: "block",
	width: "auto",
	height: "100%",
};

function Upload() {
	const [files, setFiles] = useState([]);
	const { getRootProps, getInputProps, open } = useDropzone({
		accept: {
			"image/jpeg": [],
			"image/png": [],
			"image/jpg": [],
			"image/svg": [],
			"image/gif": [],
		},
		noClick: true,
		noKeyboard: true,
		onDrop: (acceptedFiles) => {
			setFiles(
				acceptedFiles.map((file) =>
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					})
				)
			);
		},
	});

	const thumbs = files.map((file) => (
		<div style={thumb} key={file.name}>
			<div style={thumbInner}>
				<img
					src={file.preview}
					style={img}
					// Revoke data uri after image is loaded
					onLoad={() => {
						URL.revokeObjectURL(file.preview);
					}}
					alt=""
				/>
			</div>
		</div>
	));

	useEffect(() => {
		// Make sure to revoke the data uris to avoid memory leaks, will run on unmount
		return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
	}, []);

	return (
		<section className="container">
			<div {...getRootProps({ className: "dropzone" })}>
				<input {...getInputProps()} />
				<p>Drag 'n' drop some files here</p>
			</div>
			<button type="button" onClick={open}>
				Open File Dialog
			</button>
			<aside style={thumbsContainer}>{thumbs}</aside>
		</section>
	);
}

export default Upload;