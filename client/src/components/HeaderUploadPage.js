import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/icons/cyf.png";
import "./HeaderUploadPage.css";

import LogoutButton from "./LogoutBtn";

import { useAuth0 } from "@auth0/auth0-react";

const HeaderUploadPage = () => {
	const [showHeader, setShowHeader] = useState(false);
	const [showDropdown, setShowDropdown] = useState(false);

	const { user, isAuthenticated } = useAuth0();

	const dropdownRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setShowDropdown(false);
			}
		};

		window.addEventListener("click", handleClickOutside);

		return () => {
			window.removeEventListener("click", handleClickOutside);
		};
	}, []);

	const handleDropdownToggle = () => {
		setShowDropdown(!showDropdown);
	};

	return (
		<header className={showHeader ? "show" : ""}>
			<div className="header-section">
				<div className="image">
					<img src={logo} alt="Logo" className="logo" />
				</div>
				<div className="btn-pos">
					{isAuthenticated && (
						<div className="profile-container" ref={dropdownRef}>
							<img
								src={user.picture}
								alt={user.name}
								className="profileImage"
								onClick={handleDropdownToggle}
							/>
							{showDropdown && (
								<ul className="dropdown-menu">
									<li>Profile</li>
									<li>
										<LogoutButton />
									</li>
								</ul>
							)}
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default HeaderUploadPage;
