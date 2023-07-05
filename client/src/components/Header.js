import React, { useState } from "react";
import logo from "../assets/icons/cyf.png";
import "./Header.css";

import { Link } from "react-router-dom";

const Header = () => {
	const [showLoginForm, setShowLoginForm] = useState(false);
	const [selectedForm, setSelectedForm] = useState("login");
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");
	const [joinEmail, setJoinEmail] = useState("");
	const [joinPassword, setJoinPassword] = useState("");
	const [joinUsername, setJoinUsername] = useState("");

	const handleLoginClick = () => {
		setShowLoginForm(true);
		setSelectedForm("login");
		setLoginEmail("");
		setLoginPassword("");
		setJoinEmail("");
		setJoinPassword("");
		setJoinUsername("");
	};

	const handleFormChange = (form) => {
		setSelectedForm(form);
	};

	const handleLoginEmailChange = (event) => {
		setLoginEmail(event.target.value);
	};

	const handleLoginPasswordChange = (event) => {
		setLoginPassword(event.target.value);
	};

	const handleJoinEmailChange = (event) => {
		setJoinEmail(event.target.value);
	};

	const handleJoinPasswordChange = (event) => {
		setJoinPassword(event.target.value);
	};

	const handleJoinUsernameChange = (event) => {
		setJoinUsername(event.target.value);
	};

	const handleLoginSubmit = (event) => {
		event.preventDefault();
		// 'login' logic here with loginEmail and loginPassword
		console.log("Login submitted:", loginEmail, loginPassword);
		setLoginEmail("");
		setLoginPassword("");
	};

	const handleJoinSubmit = (event) => {
		event.preventDefault();
		// 'join' logic here with joinUsername, joinEmail, and joinPassword
		console.log("Join submitted:", joinUsername, joinEmail, joinPassword);
		setJoinEmail("");
		setJoinPassword("");
		setJoinUsername("");
	};

	const handleCloseModal = () => {
		setShowLoginForm(false);
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

				<Link to="/upload">
					<button>Upload</button>
				</Link>

				<div className="login-button">
					<button onClick={handleLoginClick}>Login</button>
				</div>
			</div>
			{showLoginForm && (
				<div className="modal-container">
					<div className="modal">
						<button className="close-button" onClick={handleCloseModal}>
							<i className="iconClose">X</i>
						</button>
						<div className="form-field">
							<div className="form-options">
								<button
									className={selectedForm === "login" ? "active" : ""}
									onClick={() => handleFormChange("login")}
								>
									Login
								</button>
								<button
									className={selectedForm === "join" ? "active" : ""}
									onClick={() => handleFormChange("join")}
								>
									Join
								</button>
							</div>
							{selectedForm === "login" ? (
								<form className="loginForm" onSubmit={handleLoginSubmit}>
									<input
										type="text"
										placeholder="Email"
										value={loginEmail}
										onChange={handleLoginEmailChange}
									/>
									<input
										type="password"
										placeholder="Password"
										value={loginPassword}
										onChange={handleLoginPasswordChange}
									/>
									<button type="submit">Login</button>
								</form>
							) : (
								<form onSubmit={handleJoinSubmit}>
									<input
										type="text"
										placeholder="Username"
										value={joinUsername}
										onChange={handleJoinUsernameChange}
									/>
									<input
										type="email"
										placeholder="Email"
										value={joinEmail}
										onChange={handleJoinEmailChange}
									/>
									<input
										type="password"
										placeholder="Password"
										value={joinPassword}
										onChange={handleJoinPasswordChange}
									/>
									<button type="submit">Join</button>
								</form>
							)}
						</div>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;