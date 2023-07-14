import "./ProfileFilter.css";

const ProfileFilter = ({ setSelectedFilter }) => {
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
					My Images
				</label>

				<input type="radio" name="filter" id="filter2" value="Likes" />
				<label htmlFor="filter2" className="filter-option ">
					Likes
				</label>
			</div>
		</div>
	);
};
export default ProfileFilter;
