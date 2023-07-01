// import React, { useState } from "react";
// import "./upload.css";

// const Upload = () => {
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
// 		} catch (error) {
// 			console.error("Error uploading image:", error);
// 		}
// 		event.target.reset();
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
// 						onSelect={handleInputChange}
// 					>
// 						<option value="">Categories</option>
// 						<option value="photos">Photos</option>
// 						<option value="illustrations">Illustrations</option>
// 						<option value="logos">Logos</option>
// 						<option value="icons">Icons</option>
// 					</select>
// 				</div>
// 			</div>
// 			<button className="submitbtn"> submit </button>
// 		</form>
// 	);
// };

// export default Upload;








import React, { useState } from "react";
import "./upload.css";

const Upload = ({ setUpdateImages }) => {
	const [newImage, setNewImage] = useState({
		description: "",
		tags: "",
		categories: "",
	});

	const [filter, setFilter] = useState({
		tag: "",
		category: "",
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

	const handleFilterChange = (event) => {
		const { name, value } = event.target;
		setFilter((filter) => ({
			...filter,
			[name]: value,
		}));
	};

	const handleImageUploadSubmit = async (event) => {
		event.preventDefault();

		const formData = new FormData();
		formData.append("image", newImage.imageFile);
		formData.append("description", newImage.description);
		formData.append("tags", newImage.tags);
		formData.append("categories", newImage.categories);

		try {
			await fetch("/api/image", {
				method: "POST",
				body: formData,
			});
			console.log("Image uploaded successfully.");
			setUpdateImages((updateImages) => !updateImages);
		} catch (error) {
			console.error("Error uploading image:", error);
		}
		event.target.reset();
	};
    let categoriesList =  [
		{ id: 1, name: "Item 1", tags: ["tag1", "tag2"], category: "photos" },
		{ id: 2, name: "Item 2", tags: ["tag2", "tag3"], category: "illustrations" },
		{ id: 3, name: "Item 3", tags: ["tag3", "tag4"], category: "logos" },
		{ id: 4, name: "Item 4", tags: ["tag4", "tag5"], category: "icons" },
	  ];
	// Filter the list based on the selected tag and category
    const filteredList = categoriesList.filter((item) => {
		console.log(item.tags)
	const tagMatch =
	  filter.tag === "" || (item.tags && item.tags.includes(filter.tag));
	const categoryMatch =
	  filter.category === "" || item.category === filter.category;
	return tagMatch && categoryMatch;
  });
  

	return (
		<form className="upload-section" onSubmit={handleImageUploadSubmit}>
			<div className="file-input-container">
				<input
					type="file"
					name="imageFile"
					id="myFileInput"
					className="hidden"
					onChange={handleInputChange}
				/>
				<label htmlFor="myFileInput" className="custom-button">
					Select File
				</label>
			</div>

			<div className="container">
				<div className="input-field input1">
					<input
						type="text"
						name="description"
						onChange={handleInputChange}
						placeholder="description"
					></input>
				</div>
				<div className="input-field input2">
					<input
						type="text"
						name="tags"
						onChange={handleInputChange}
						placeholder="tags"
					/>
				</div>
				<div className="input-field input3">
					<select
						type="text"
						className="categoriesbtn"
						name="categories"
						onChange={handleInputChange}
					>
						<option value="">Categories</option>
						<option value="photos">Photos</option>
						<option value="illustrations">Illustrations</option>
						<option value="logos">Logos</option>
						<option value="icons">Icons</option>
					</select>
				</div>
			</div>

			<div>
				{/* Filter input fields */}
				<input
				className="filterinput"
					type="text"
					name="tag"
					placeholder="Filter by tag"
					onChange={handleFilterChange}
				/>
				<select
				className="selectinput"
					name="category"
					onChange={handleFilterChange}
				>
					<option value="">Filter by category</option>
					<option value="photos">Photos</option>
					<option value="illustrations">Illustrations</option>
					<option value="logos">Logos</option>
					<option value="icons">Icons</option>
				</select>
			</div>

			<button className="submitbtn">submit</button>

			{/* Render the filtered list */}
			<ul className="ulprinter">
				{filteredList.map((item) => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
		</form>
	);
};

export default Upload;
