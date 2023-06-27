import React, { useState } from "react";
import "./upload.css";


const Upload = () => {
 	

 const [newImage, setNewImage] = useState(
	{
		description: "",
		tags: "",
		categories: "",
	}
 );


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

	const handleImageUploadSubmit = async(event) => {
		event.preventDefault();

		const formData = new FormData();
		formData.append("image", newImage.imageFile);
		formData.append("description", newImage.description);
		formData.append("tags", newImage.tags);
		formData.append("categories", newImage.categories);

		try {
			await fetch("/api/image", {
				method: "Put",
				body: formData,
			});
			console.log("Image uploaded successfully.");
		} catch (error) {
			console.error("Error uploading image:", error);
		}
		event.target.reset();
		
		
	}




	return (

			<form className="upload-section" onSubmit={handleImageUploadSubmit}>
			

			<div class="file-input-container">
			<input type="file" name="imageFile" id="myFileInput" className="hidden" onChange={handleInputChange}/>
			<label for="myFileInput" class="custom-button">Select File</label>
		  </div>
		  
	<div className="container">
	<div className="input-field input1">
 <input type="text" name="description"  onChange={handleInputChange} placeholder="description" >
 
 </input>
 
	</div>
	<div className="input-field input2">
 <input type="text" name="tags" onChange={handleInputChange} placeholder="tags" />
	</div>
	<div className="input-field input3">
 
 <select type="text" className="categoriesbtn" name="categories" onSelect={handleInputChange}>
						<option value="">Categories</option>
						<option value="photos">Photos</option>
						<option value="illustrations">Illustrations</option>
						<option value="logos">Logos</option>
						<option value="icons">Icons</option>
					</select>
	</div>
  </div>
  <button className="submitbtn"> submit </button>
    </form>
	);
};

export default Upload;
