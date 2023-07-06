// import "./Search.css";
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
				</div>
			</form>
		</div>
	);
};
export default Search;






