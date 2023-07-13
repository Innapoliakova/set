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
        setTimeout(() => {
            setIsLoading(false);
 }, 3000);
    };

    return (
        <form className="search-box" onSubmit={handleSubmit}>
        <input type="text" name="" id="" className="input-search" placeholder="search..." onChange={handleChange} />
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
