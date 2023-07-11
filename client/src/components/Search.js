import "./Search.css";
import { useState } from "react";

const Search = ({ setSearchQuery }) => {
	const [searchInput, setSearchInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const handleChange = (event) => {
		setSearchInput(event.target.value.trim());
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsLoading(true);
		setSearchQuery(searchInput);
		try {
			await setSearchQuery(searchInput); // Assuming setSearchQuery is an asynchronous API call
			setIsLoading(false);
		  } catch (error) {
			console.error("API call error:", error);
			setIsLoading(false);
		  }
	};

	return (
		<form className="search-box" onSubmit={handleSubmit}>
        <input type="text" name="" id="" placeholder="search..." onChange={handleChange} />
        {/*<a href="##" className="icon">
            <i className="fas fa-search"></i>
	</a>*/}
		<a href="##" className="icon">
		{isLoading ? (
<i className="fas fa-spinner fa-spin"></i>
		) : (
<i className="fas fa-search"></i>
		)}
 </a>
    </form>
	);
};
export default Search;






