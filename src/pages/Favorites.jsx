import { useState } from "react";
import "../styles/Favorites.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FavoriteCard from "../components/FavoriteCard";

function Favorites() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [movies, setMovies] = useState(
    Array.from({ length: 12 }, (_, index) => ({
      title: `Movie ${index + 1}`,
      year: "2026",
      rating: (7.0 + index * 0.1).toFixed(1),
    }))
  );

  const handleRemove = (title) => {
    setMovies((prev) => prev.filter((movie) => movie.title !== title));
  };

  const averageRating = (
    movies.reduce((sum, movie) => sum + Number(movie.rating), 0) /
    Math.max(movies.length, 1)
  ).toFixed(1);

  return (
    <div className="favorites-page">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <section className="favorites-header">
        <div>
          <h1>My Favorites</h1>
          <p>Your saved favorite movies collection</p>
        </div>
      </section>

      <section className="stats">
        <div className="stat-card">
          <h3>{movies.length}</h3>
          <span>Movies</span>
        </div>
        <div className="stat-card">
          <h3>{averageRating}</h3>
          <span>Avg Rating</span>
        </div>
        <div className="stat-card">
          <h3>5</h3>
          <span>Genres</span>
        </div>
        <div className="stat-card">
          <h3>24h</h3>
          <span>Watch Time</span>
        </div>
      </section>

      <section className="categories">
        {['All', 'Action', 'Drama', 'Sci-Fi', 'Adventure'].map((category) => (
          <button key={category}>{category}</button>
        ))}
      </section>

      <section className="movie-grid">
        {movies.map((movie) => (
          <FavoriteCard key={movie.title} movie={movie} onRemove={handleRemove} />
        ))}
      </section>

      <Footer />
    </div>
  );
}

export default Favorites;
