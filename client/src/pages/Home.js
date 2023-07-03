import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import "./Home.css";
// import logo from "./logo.svg";
import Header from "../components/Header";
import Upload from "../components/Upload";
import Search from "../components/Search";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import Filter from "../components/Filter";

export function Home() {
    const [message, setMessage] = useState("Loading...");
    const [images, setImages] = useState([]);
    const [isLogin, setIsLogin] = useState(true);
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [updateImages, setUpdateImages] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            console.log(selectedFilter);
            try {
                const res = await fetch(`/api/images?filter=${selectedFilter}`);
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
    }, [updateImages, selectedFilter]);




    const handleSearch = (query) => {
        setSearchQuery(query);
        // our search logic will be here or call a search API -??
        console.log("/////", query);
    };

    return (
        <div className="App">
            <Header />
            <div>
                <h2>
                    Unlock your creative potential with our user-friendly app, seamlessly
                    discovering, uploading, and utilizing a vast array of assets.
                </h2>
            </div>
            <Upload setUpdateImages={setUpdateImages} />
            <Filter
                setSelectedFilter={setSelectedFilter}

            />
            <Search handleSearch={handleSearch} />
            <Gallery images={images} isLogin={isLogin} message={message} />
            <Footer />
        </div>
    );
}

export default Home;
