import "./Filter.css";

const Filter = ({ selectedFilters, handleFilterChange }) => {
	return (
		<div className="filter-section">
			<h3>Filter by:</h3>
			<div className="filter-options">
				<label
					className={`filter-option ${
						selectedFilters === "photo" ? "active" : ""
					}`}
				>
					<input
						type="radio"
						value="photo"
            checked={selectedFilters === "photo"}
						onChange={() => handleFilterChange("photo")}
					/>
					Photos
				</label>
				<label
					className={`filter-option ${
						selectedFilters === "illustration" ? "active" : ""
					}`}
				>
					<input
						type="radio"
						value="illustration"
            checked={selectedFilters === "illustration"}
						onChange={() => handleFilterChange("illustration")}
					/>
					Illustrations
				</label>
				<label
					className={`filter-option ${
						selectedFilters === "logo" ? "active" : ""
					}`}
				>
					<input
						type="radio"
						value="logo"
            checked={selectedFilters === "logo"}
						onChange={() => handleFilterChange("logo")}
					/>
					Logos
				</label>
				<label
					className={`filter-option ${
						selectedFilters === "icon" ? "active" : ""
					}`}
				>
					<input
						type="radio"
						value="icon"
            checked={selectedFilters === "icon"}
						onChange={() => handleFilterChange("icon")}
					/>
					Icons
				</label>
			</div>
		</div>
	);
};

export default Filter;
