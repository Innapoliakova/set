import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import "./Home.css";
// import logo from "./logo.svg";
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
	const [selectedFilters, setSelectedFilters] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [updateImages, setUpdateImages] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch("/api/images");
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
	}, [updateImages]);

		const handleFilterChange = (filter) => {
		setSelectedFilters(filter);
		};

	const handleSearch = (query) => {
		setSearchQuery(query);
		// our search logic will be here or call a search API -??
		console.log("/////", query);
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
			<Upload setUpdateImages={setUpdateImages} />
			<Filter
				selectedFilters={selectedFilters}
				handleFilterChange={handleFilterChange}
			/>
			<Search handleSearch={handleSearch} />
			<Gallery
				images={images}
				isLogin={isLogin}
				message={message}
				setUpdateImages={setUpdateImages}
			/>
			<Footer />
		</div>
	);
}

export default Home;
