import React, { useState } from "react";
import logo from "../assets/icons/cyf.png";
import "./Header.css";

import LoginButton from "./LoginBtn";
import LogoutButton from "./LogoutBtn";

import { useAuth0 } from "@auth0/auth0-react";

import { useNavigate } from "react-router-dom";

const Header = () => {
	const [showLoginForm, setShowLoginForm] = useState(false);
	const [selectedForm, setSelectedForm] = useState("login");
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");
	const [joinEmail, setJoinEmail] = useState("");
	const [joinPassword, setJoinPassword] = useState("");
	const [joinUsername, setJoinUsername] = useState("");
	const [showHeader, setShowHeader] = useState(false);

	const { user, isAuthenticated, loginWithRedirect } = useAuth0();

	const navigate = useNavigate();

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

	const handleUploadButtonClick = () => {
		if (isAuthenticated) {
			navigate("/upload");
		} else {
			const redirectUrl = window.location.origin + "/upload/";
			loginWithRedirect({
				appState: {
					returnTo: redirectUrl,
				},
				redirectUri: redirectUrl,
			});
		}
	};

	return (
		<header className={showHeader ? "show" : ""}>
			<div className="header-section">
				<div className="image">
					<img src={logo} alt="Logo" className="logo" />
				</div>
				{isAuthenticated && (
					<div>
						<h2>{user.name}</h2>
						<p>{user.email}</p>
					</div>
				)}
				<div className="btn-pos">
					<div className="login-button">
						<LoginButton />
						<LogoutButton />

						<button className="upBut" onClick={handleUploadButtonClick}>
							Upload
						</button>
					</div>
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
