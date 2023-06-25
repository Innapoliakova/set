import React, { useState } from "react";
import "./upload.css";


const Upload = () => {
 	const handleFileUpload = (event) => {
 		const file = event.target.files[0];

 };

 const [input1, setInput1] = useState("description");
 const [input2, setInput2] = useState("tags");
 const [input3, setInput3] = useState("categories");

	const handleInput1Change = (event) => {
		setInput1(event.target.value);
	};

	const handleInput2Change = (event) => {
		setInput2(event.target.value);
 };
 const handleInput3Change = (event) => {
		setInput3(event.target.value);
 };


	return (
			<form className="upload-section" >
			<input type="file"  />


	<div className="container">
	<div className="input-field input1">
 <input type="text" value={input1} onChange={handleInput1Change} >
 
 </input>
 
	</div>
	<div className="input-field input2">
 <input type="text" value={input2} onChange={handleInput2Change} />
	</div>
	<div className="input-field input3">
 <input type="text" value={input3} onChange={handleInput3Change} />
	</div>
  </div>
    </form>
	);
};

export default Upload;
