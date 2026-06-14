import React, { useState } from "react";
import "../styles/style.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MovieSection from "../components/MovieSection";
import GenreSection from "../components/GenreSection";
import PremiumSection from "../components/PremiumSection";
import Footer from "../components/Footer";

const trendingMovies = ["", "", "", "", "", ""];
const continueWatching = ["", "", "", ""];
const topRated = ["", "", "", "", "", ""];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="home">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <MovieSection title="Trending Movies 🔥" data={trendingMovies} />
      <MovieSection title="Continue Watching ⏯" data={continueWatching} />
      <GenreSection />
      <MovieSection title="Top Rated Movies ⭐" data={topRated} />
      <PremiumSection />
      <Footer />
    </div>
  );
}

export default Home;