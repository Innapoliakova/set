import SearchIcon from "../assets/icons/search.png";
import "./Search.css";

import React, { useState } from "react";


const Search = ( ) => {
	const [searchQuery, setSearchQuery] = useState("");

	const handleChange = (event) => {
		setSearchQuery(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		
		try {
			const response = await fetch(
			  `api/search?searchQuery=${searchQuery}`,
			  {
				method: "GET",
				headers: { "Content-Type": "application/json" },
			  }
			);
			if (response.status === 200) {
			  const data = await response.json();
			  setImages(data);
			}
		  } catch (err) {
			console.error(err);
		  }
		};
	



	return (
		<div className="search-section">
			<form onSubmit={handleSubmit}>
				<div className="search-container">
					<input
						type="text"
						className="search-input-field"
						placeholder="Search"
						value={searchQuery}
						onChange={handleChange}
					/>
					<img
						className="icon-for-search"
						src={SearchIcon}
						alt="icon for searching"
					/>
				</div>
				<button type="submit" className="search-button">
					Search
				</button>
			</form>
		</div>
	);
};

export default Search;
