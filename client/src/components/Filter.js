import "./Filter.css";

const Filter = ({ selectedFilters, handleFilterChange }) => {
	return (
		<div className="filter-section">
			<h3>Filter by:</h3>
			<div className="filter-options">
				<label
					className={`filter-option ${
						selectedFilters.includes("photo") ? "active" : ""
					}`}
				>
					<input
						type="checkbox"
						checked={selectedFilters.includes("photo")}
						onChange={() => handleFilterChange("photo")}
					/>
					Photos
				</label>
				<label
					className={`filter-option ${
						selectedFilters.includes("illustration") ? "active" : ""
					}`}
				>
					<input
						type="checkbox"
						checked={selectedFilters.includes("illustration")}
						onChange={() => handleFilterChange("illustration")}
					/>
					Illustrations
				</label>
				<label
					className={`filter-option ${
						selectedFilters.includes("logo") ? "active" : ""
					}`}
				>
					<input
						type="checkbox"
						checked={selectedFilters.includes("logo")}
						onChange={() => handleFilterChange("logo")}
					/>
					Logos
				</label>
				<label
					className={`filter-option ${
						selectedFilters.includes("icon") ? "active" : ""
					}`}
				>
					<input
						type="checkbox"
						checked={selectedFilters.includes("icon")}
						onChange={() => handleFilterChange("icon")}
					/>
					Icons
				</label>
			</div>
		</div>
	);
};

export default Filter;
