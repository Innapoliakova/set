// import React from 'react';
import React, { useState } from 'react';
const Upload = () => {
	const handleFileUpload = (event) => {
		const file = event.target.files[0];
		
	  };

	  const [input1, setInput1] = useState('description');
	  const [input2, setInput2] = useState('tags');
	  const [input3, setInput3] = useState('categories');
	
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
			<div className="upload-section">
			<input type="file" onChange={handleFileUpload} />
				<h2>HERE will be form for roozbeh upload</h2>
	
	<div className="container">
	<div className="input-field">
	  <input type="text" value={input1} onChange={handleInput1Change} />
	</div>
	<div className="input-field">
	  <input type="text" value={input2} onChange={handleInput2Change} />
	</div>
	<div className="input-field">
	  <input type="text" value={input3} onChange={handleInput3Change} />
	</div>
  </div>
    </div>
	)
};

export default Upload;
