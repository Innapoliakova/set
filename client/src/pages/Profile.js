import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import "./Profile.css";

const Profile = () => {
	const { user, isAuthenticated } = useAuth0();
	const [message, setMessage] = useState("Loading...");
	const [images, setImages] = useState([]);
	const [updateImages, setUpdateImages] = useState(true);

	const owner = user.sub;
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(`/api/images/${owner}`);
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				const allImages = await res.json();
				setMessage(null);
				setImages(allImages.data);
			} catch (err) {
				console.error(err);
			}
		};
		fetchData();
	}, [owner, updateImages]);

	return (
		isAuthenticated && (
			<div className="profile-page">
				<Header />
				<div className="profile-container-page">
					<div className="profile-details">
						<img className="profile-image" src={user.picture} alt={user.name} />
						<div className="profile-text">
							<h2 className="profile-name">{user.name}</h2>
						</div>
					</div>
					<div className="profile-gallery">
						<Gallery
							images={images}
							message={message}
							setUpdateImages={setUpdateImages}
						/>
					</div>
				</div>

				<Footer />
			</div>
		)
	);
};

export default Profile;
