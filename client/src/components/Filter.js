import "./Filter.css";

const Filter = ({ setSelectedFilter }) => {
	const handleFilterChange = (event) => {
		const filter = event.target.value;
		setSelectedFilter(filter);
	};
	return (
		<div className="filter-section" onChange={handleFilterChange}>
			<div className="filter-options">
				<input
					type="radio"
					name="filter"
					id="filter1"
					value="null"
					defaultChecked
				/>
				<label htmlFor="filter1" className="filter-option">
					Home
				</label>

				<input type="radio" name="filter" id="filter2" value="photos" />
				<label htmlFor="filter2" className="filter-option ">
					Photos
				</label>

				<input type="radio" name="filter" id="filter3" value="illustrations" />
				<label htmlFor="filter3" className="filter-option">
					Illustrations
				</label>

			</div>
		</div>
	);
};
export default Filter;
