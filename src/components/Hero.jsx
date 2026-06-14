import React from "react";
import heroImage from "../assets/hero.png";

function Hero() {
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
                        placeholder="🔍︎  Search movies by title..."
                    />

                    <button>Search</button>
                </div>
            </div>

            <div className="hero-card">
                <img src={heroImage} alt="Hero" />
            </div>
        </section>
    );
}

export default Hero;
