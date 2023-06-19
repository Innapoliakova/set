// import { Route, Routes } from "react-router-dom";

// import About from "./pages/About";
// import Home from "./pages/Home";
import Header from "./components/Header";
import Upload from "./components/Upload";
import Search from "./components/Search";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App () {
	return (
		<div className="App">
			<Header />
			<Upload />
			<Search />
			<Gallery></Gallery>
			<Footer />
		</div>
	);
	// <Routes>
	// 	<Route path="/" element={<Home />} />
	// 	<Route path="/about/this/site" element={<About />} />
	// </Routes>
}

export default App;
