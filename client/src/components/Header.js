import React, { useState } from "react";
import logo from "../assets/icons/cyf.png";
import "./Header.css";

const Header = () => {
	const [showLoginForm, setShowLoginForm] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");

	const handleLoginClick = () => {
		setShowLoginForm(!showLoginForm);
		setEmail("");
		setPassword("");
		setUsername("");
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
	};

	const handleLoginFormSubmit = (event) => {
		event.preventDefault();
		if (showLoginForm) {
			// We will add 'login logic' here - email and password
			console.log("Login submitted:", email, password);
		} else {
			// We will add 'join logic' here - username, email, and password
			console.log("Join submitted:", username, email, password);
		}
	};

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
					<button onClick={handleLoginClick}>Login</button>
					{showLoginForm && (
						<form onSubmit={handleLoginFormSubmit}>
							{showLoginForm && (
								<>
									<input
										type="text"
										placeholder="Username"
										value={username}
										onChange={handleUsernameChange}
									/>
									<input
										type="email"
										placeholder="Email"
										value={email}
										onChange={handleEmailChange}
									/>
									<input
										type="password"
										placeholder="Password"
										value={password}
										onChange={handlePasswordChange}
									/>
									<button type="submit">Join</button>
								</>
							)}
							{showLoginForm && (
								<>
									<input
										type="text"
										placeholder="Username or Email"
										value={email}
										onChange={handleEmailChange}
									/>
									<input
										type="password"
										placeholder="Password"
										value={password}
										onChange={handlePasswordChange}
									/>
									<button type="submit">Login</button>
								</>
							)}
						</form>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;

