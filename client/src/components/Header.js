import logo from "../assets/icons/cyf.png";
import "./Header.css";
const Header = () => {
    return (
			<header>
				<div className="header-section">
					<div className="image">
						<img src={logo} alt="Logo" className="logo" />
					</div>
					<div className="title">
						<h1 className="title">CYF's picture gallery</h1>
					</div>
					<div className="login-button">
						<button>Login</button>
					</div>
				</div>
			</header>
		);
};

export default Header;