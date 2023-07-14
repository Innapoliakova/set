import "./Search.css";
import { useState } from "react";

const Search = ({ setSearchQuery, isLoading }) => {
    const [searchInput, setSearchInput] = useState("");
        const handleChange = (event) => {
        setSearchInput(event.target.value.trim());
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSearchQuery(searchInput);
    };

    return (
        <form className="search-box" onSubmit={handleSubmit}>
        <input type="text" name="" id="" placeholder="search..." onChange={handleChange} />
 <button type="submit" className="icon" disabled={isLoading}>
        {isLoading ? (
          <i className="fas fa-spinner fa-spin"></i>
        ) : (
          <i className="fas fa-search"></i>
        )}
      </button>

    </form>
    );
};
export default Search;