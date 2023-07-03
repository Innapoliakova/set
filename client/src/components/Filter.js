import "./Filter.css";

const Filter = ({ setSelectedFilter }) => {
    const handleFilterChange = (event) => {
        const filter = event.target.value;
        setSelectedFilter(filter);
    };
    return (
        <div className="filter-section" onChange={handleFilterChange}>
            <h3>Filter by:</h3>
            <div className="filter-options">
                <label className="filter-option">
                    <input type="radio" name="filter" value="null" defaultChecked />
                    All Images
                </label>
                <label className="filter-option ">
                    <input type="radio" name="filter" value="photos" />
                    Photos
                </label>
                <label className="filter-option">
                    <input type="radio" name="filter" value="illustrations" />
                    Illustrations
                </label>
                <label className="filter-option">
                    <input type="radio" name="filter" value="logos" />
                    Logos
                </label>
                <label className="filter-option">
                    <input type="radio" name="filter" value="icons" />
                    Icons
                </label>
            </div>
        </div>
    );


};
export default Filter;