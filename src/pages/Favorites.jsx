import { useState, useEffect } from "react";
import "../styles/Favorites.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FavoriteCard from "../components/FavoriteCard";
import { getFavorites, removeFavorite } from "../services/favorites";

function Favorites() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(getFavorites());
  }, []);

  const handleRemove = (movieId) => {
    const updated = removeFavorite(movieId);
    setMovies(updated);
  };

  const averageRating = movies.length
    ? (
        movies.reduce((sum, movie) => sum + Number(movie.vote_average || 0), 0) /
        movies.length
      ).toFixed(1)
    : "0.0";

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
          <h3>{new Set(movies.flatMap((movie) => movie.genres || [])).size}</h3>
          <span>Genres</span>
        </div>
        <div className="stat-card">
          <h3>{movies.length * 2}h</h3>
          <span>Watch Time</span>
        </div>
      </section>

      <section className="categories">
        {['All', 'Action', 'Drama', 'Sci-Fi', 'Adventure'].map((category) => (
          <button key={category}>{category}</button>
        ))}
      </section>

      <section className="movie-grid">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <FavoriteCard key={movie.id} movie={movie} onRemove={handleRemove} />
          ))
        ) : (
          <div className="empty-state" style={{ color: '#aaa', padding: '40px', textAlign: 'center' }}>
            <h3>No favorites saved yet.</h3>
            <p>Open a movie and tap "Add to Favorites" to keep your watchlist here.</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}

export default Favorites;
