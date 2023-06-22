import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import "./Home.css";
// import logo from "./logo.svg";
import Header from "./components/Header";
import Upload from "./components/Upload";
import Search from "./components/Search";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export function Home() {
	const [message, setMessage] = useState("Loading...");

	useEffect(() => {
		fetch("/api")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setMessage(body.message);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<div className="App">
			<Header />
			<Upload />
			<Search />
			<Gallery />
			<Footer />
		</div>
	);

	// <main role="main">
	// 	// 	<div>
	// 	// 		<img
	// 			className="logo"
	// 			data-qa="logo"
	// 			src={logo}
	// 			alt="Just the React logo"
	// 		/>
	// 		<h1 className="message" data-qa="message">
	// 			{message}
	// 		</h1>
	// 		<Link to="/about/this/site">About</Link>
	// 	</div>
	// </main>
}

export default Home;
