import React from 'react';

const Upload = () => {
	const handleFileUpload = (event) => {
		const file = event.target.files[0];
		
	  };
	return (
			<div className="upload-section">
			<input type="file" onChange={handleFileUpload} />
				<h2>HERE will be form for roozbeh upload</h2>
			</div>
	);
};

export default Upload;
