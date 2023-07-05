import { Route, Routes } from "react-router-dom";
import UploadPage from "./pages/uploadPage";
import Home from "./pages/Home";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/upload" element={<UploadPage />} />
		</Routes>
	);
}

export default App;