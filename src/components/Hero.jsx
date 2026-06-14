import React, { useState } from "react";
import heroImage from "../assets/hero.png";

function Hero({ onSearch }) {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if (onSearch) onSearch(query.trim());
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleSearch();
    };

    return (
        <section className="hero">
            <div>
                <h1>Find your</h1>

                <h2>next favorite movie</h2>

                <p>
                    Search, discover and track the best movies
                    <br />
                    from around the world.
                </p>

                <div className="search-box">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="🔍︎  Search movies by title..."
                    />

                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>

            <div className="hero-card">
                <img src={heroImage} alt="Hero" />
            </div>
        </section>
    );
}

export default Hero;
