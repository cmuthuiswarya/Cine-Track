import React, { useState, useEffect } from "react";
import "../styles/style.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MovieSection from "../components/MovieSection";
import GenreSection from "../components/GenreSection";
import PremiumSection from "../components/PremiumSection";
import Footer from "../components/Footer";
import { fetchTrending, fetchPopular, fetchTopRated, fetchUpcoming, searchMovies } from "../services/tmdb";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const [t, p, tr, u] = await Promise.all([
          fetchTrending(),
          fetchPopular(),
          fetchTopRated(),
          fetchUpcoming(),
        ]);

        setTrending(t);
        setPopular(p);
        setTopRated(tr);
        setUpcoming(u);
      } catch (err) {
        console.error('Failed to fetch movies', err);
      }
    })();
  }, []);

  const handleSearch = async (query) => {
    if (!query) {
      setSearchResults([]);
      return;
    }

    try {
      const results = await searchMovies(query);
      setSearchResults(results);
    } catch (err) {
      console.error('Search failed', err);
    }
  };

  return (
    <div className="home">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero onSearch={handleSearch} />

      {searchResults.length > 0 ? (
        <MovieSection title={`Search Results (${searchResults.length})`} data={searchResults} />
      ) : (
        <>
          <MovieSection title="Trending Movies 🔥" data={trending} />
          <MovieSection title="Popular Movies" data={popular} />
          <MovieSection title="Top Rated Movies ⭐" data={topRated} />
          <MovieSection title="Upcoming Movies" data={upcoming} />
        </>
      )}

      <GenreSection />
      <PremiumSection />
      <Footer />
    </div>
  );
}

export default Home;