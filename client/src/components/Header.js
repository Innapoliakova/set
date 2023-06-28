import logo from "../assets/icons/cyf.png";
import "./Header.css";
const Header = () => {
    return (
			<header>
				<div className="header-section">
					<img src={logo} alt="Logo" className="logo" />
					<h1 className="title">CYF's picture gallery</h1>
				</div>
				<div className="login-section">
					<button>Login</button>
				</div>
			</header>
		);
};

export default Header;