import { useEffect, useState } from "react";

import "./Home.css";
import Header from "../components/Header";
import Upload from "../components/Upload";
import Search from "../components/Search";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import Filter from "../components/Filter";

export function Home() {
	const [message, setMessage] = useState("Loading...");
	const [images, setImages] = useState([]);
	const [isLogin, setIsLogin] = useState(true);
	const [selectedFilter, setSelectedFilter] = useState(null);
	const [searchQuery, setSearchQuery] = useState("");
useEffect(() => {
		const fetchData = async () => {
			try {

				const res = await fetch(
					`/api/images?filter=${selectedFilter}&searchQuery=${searchQuery}`
				);

				if (!res.ok) {
					throw new Error(res.statusText);
				}
				const allImages = await res.json();
				setMessage(null);
				setImages(allImages.data);
			} catch (err) {
				console.error(err);
			}
		};
		fetchData();

	}, [updateImages, selectedFilter, searchQuery]);
	

	const handleFilterChange = (filter) => {
		if (selectedFilters.includes(filter)) {
			setSelectedFilters(selectedFilters.filter((item) => item !== filter));
		} else {
			setSelectedFilters([...selectedFilters, filter]);
		}
	};




	return (
		<div className="App">
			<Header />
			<div>
				<h2>
					Unlock your creative potential with our user-friendly app, seamlessly
					discovering, uploading, and utilizing a vast array of assets.
				</h2>
			</div>

			<Upload />
			<Filter
				selectedFilters={selectedFilters}
				handleFilterChange={handleFilterChange}
			/>
			
					<Search setSearchQuery={setSearchQuery} />
			<Gallery images={images} isLogin={isLogin} message={message} />

			<Footer />
		</div>
	);
}

export default Home;
