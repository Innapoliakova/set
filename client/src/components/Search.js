import SearchIcon from "./search.png";
import "./Search.css";

const Search = () => {
	return (
		<div className="search-section">
			<div className="search-input">
				<input
					type="text"
					className="search-input-field"
					placeholder="Search"
				/>
				<img
					className="icon-for-search"
					src={SearchIcon}
					alt="icon for searching"
				/>
			</div>
		</div>
	);
};

export default Search;
