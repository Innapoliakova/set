import "./Hero.css";
import Search from "./Search";

const Hero = ({ setSearchQuery, isLoading }) => {
	return (
		<div className="hero">
			<h1 className="">CYF's picture gallery</h1>
			<h2>
				Unlock your creative potential with our user-friendly app, seamlessly
				discovering, uploading, and utilizing a vast array of assets.
			</h2>
			<Search setSearchQuery={setSearchQuery} isLoading={isLoading} />
		</div>
	);
};

export default Hero;
