import SearchIcon from "./search.png";

const Search = () => {
	return (
		<div className="search-section">
			<div className="search-icon">
				<img src={SearchIcon} alt="icon for searcing" />
			</div>
			<div className="seach-input">
				<input type="text" className="serch-input" placeholder="Search" />
			</div>
		</div>
	);
};

export default Search;
