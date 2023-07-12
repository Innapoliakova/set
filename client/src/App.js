import { Route, Routes } from "react-router-dom";
import UploadPage from "./pages/uploadPage";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/Profile";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/upload" element={<UploadPage />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>

			<ToastContainer />
		</div>
	);
}

export default App;
