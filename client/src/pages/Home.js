import { useEffect, useState } from "react";
import "./Home.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import Filter from "../components/Filter";

export function Home() {
	const [images, setImages] = useState([]);
	const [selectedFilter, setSelectedFilter] = useState(null);
	const [searchQuery, setSearchQuery] = useState("");
	const [updateImages, setUpdateImages] = useState(true);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		const fetchData = async () => {
			try {
				const res = await fetch(
					`/api/images?filter=${selectedFilter}&searchQuery=${searchQuery}`
				);
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				const allImages = await res.json();
				setImages(allImages.data);
				setIsLoading(false);
			} catch (err) {
				console.error(err);
			}
		};
		fetchData();
	}, [updateImages, selectedFilter, searchQuery]);

	return (
		<div className="App">
			<Header />
			<Hero setSearchQuery={setSearchQuery} isLoading={isLoading} />
			<Filter setSelectedFilter={setSelectedFilter} />
			<Gallery
				images={images}
				setUpdateImages={setUpdateImages}
				isLoading={isLoading}
			/>
			<Footer />
		</div>
	);
}

export default Home;
