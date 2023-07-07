import logo from "../assets/icons/cyf.png";
import "./HeaderUploadPage.css";

const Header = () => {
	return (
		<header className="show">
			<div className="header-section">
				<div className="image">
					<img src={logo} alt="Logo" className="logo" />
				</div>
			</div>
		</header>
	);
};

export default Header;
