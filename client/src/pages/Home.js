import { useEffect, useState } from "react";

import "./Home.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
// import Search from "../components/Search";
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

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const res = await fetch(
                    `/api/images?filter=${selectedFilter}&searchQuery=${searchQuery}`
                );
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                const allImages = await res.json();
                setMessage(null);
                setImages(allImages.data);
                setIsLoading(false);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, [updateImages, selectedFilter, searchQuery]);

    return (
        <div className="App">
            <Header />
            <Hero setSearchQuery={setSearchQuery} isLoading={isLoading} />
            {/* <Search setSearchQuery={setSearchQuery} /> */}
            <Filter setSelectedFilter={setSelectedFilter} />
            <Gallery
                images={images}
                isLogin={isLogin}
                message={message}
                setUpdateImages={setUpdateImages}
            />
            <Footer />
        </div>
    );
}

export default Home;