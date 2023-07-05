import SearchIcon from "../assets/icons/search.png";
import "./Search.css";
import { useState } from "react";

const Search = ({ setSearchQuery }) => {
	const [searchInput, setSearchInput] = useState("");

	const handleChange = (event) => {
		setSearchInput(event.target.value.trim());
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setSearchQuery(searchInput);
	};

	return (
		<div className="search-section">
			<form onSubmit={handleSubmit}>
				<div className="search-container">
					<input
						type="text"
						className="search-input-field"
						placeholder="Search"
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