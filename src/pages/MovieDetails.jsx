import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaPlay, FaStar, FaPlus, FaShareAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fetchMovieDetails, IMAGE_BASE } from "../services/tmdb";
import { addFavorite, removeFavorite, isFavorite } from "../services/favorites";
import "../styles/MovieDetails.css";

export default function MovieDetails() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorite, setFavorite] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      setError("No movie selected");
      setLoading(false);
      return;
    }

    const loadMovie = async () => {
      try {
        setLoading(true);
        setError(null);
        const details = await fetchMovieDetails(movieId);
        setMovie(details);
        setFavorite(isFavorite(details.id));
      } catch (err) {
        console.error("Failed to load movie details", err);
        setError("Unable to load movie details.");
      } finally {
        setLoading(false);
      }
    };

    loadMovie();
  }, [movieId]);

  const handleFavoriteToggle = () => {
    if (!movie) return;
    if (favorite) {
      removeFavorite(movie.id);
      setFavorite(false);
    } else {
      addFavorite(movie);
      setFavorite(true);
    }
  };

  const formatRuntime = (runtime) => {
    if (!runtime) return "";
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  };

  if (loading) {
    return (
      <div className="movie-details-page">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main style={{ padding: '40px', color: '#fff' }}>
          <p>Loading movie details…</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="movie-details-page">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main style={{ padding: '40px', color: '#fff' }}>
          <p>{error || 'Movie not found'}</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="movie-details-page">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <section className="heroS">
        <div className="poster">
          <img
            src={
              movie.poster_path
                ? `${IMAGE_BASE}${movie.poster_path}`
                : "https://via.placeholder.com/500x750?text=No+Image"
            }
            alt={movie.title}
          />

          <div className="play-btn">
            <FaPlay />
          </div>
        </div>

        <div className="movie-info">
          <h1>{movie.title}</h1>

          <div className="meta">
            <span>{movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}</span>
            <span>{formatRuntime(movie.runtime)}</span>
            <span>{movie.adult ? '18+' : 'PG-13'}</span>
          </div>

          <div className="genres">
            {movie.genres?.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </div>

          <p>{movie.overview || 'No description available.'}</p>

          <div className="action-buttons">
            <button className="primary">
              <FaPlay /> Watch Trailer
            </button>

            <button onClick={handleFavoriteToggle}>
              <FaPlus /> {favorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>

            <button>
              <FaShareAlt /> Share
            </button>
          </div>
        </div>

        <div className="rating-card card">
          <h2>
            <FaStar /> {movie.vote_average?.toFixed(1) || 'N/A'}<span>/10</span>
          </h2>

          <p>{movie.vote_count?.toLocaleString() || '0'} Ratings</p>

          <div className="streaming">
            <h4>Available to Watch</h4>

            <div className="platforms">
              <div>MAX</div>
              <div>Apple TV</div>
              <div>Prime</div>
            </div>
          </div>
        </div>
      </section>

      <section className="info-row">
        <div className="info-card">
          <h5>Release Date</h5>
          <p>{movie.release_date || 'N/A'}</p>
        </div>

        <div className="info-card">
          <h5>Status</h5>
          <p>{movie.status || 'N/A'}</p>
        </div>

        <div className="info-card">
          <h5>Language</h5>
          <p>{movie.original_language?.toUpperCase() || 'N/A'}</p>
        </div>

        <div className="info-card">
          <h5>Runtime</h5>
          <p>{formatRuntime(movie.runtime)}</p>
        </div>

        <div className="info-card">
          <h5>Budget</h5>
          <p>{movie.budget ? `$${movie.budget.toLocaleString()}` : 'N/A'}</p>
        </div>

        <div className="info-card">
          <h5>Revenue</h5>
          <p>{movie.revenue ? `$${movie.revenue.toLocaleString()}` : 'N/A'}</p>
        </div>
      </section>

      <div className="tabs">
        <button className="active">Overview</button>
        <button>Cast</button>
        <button>Reviews</button>
        <button>Photos</button>
        <button>Videos</button>
      </div>

      <section className="content-grid">
        <div className="story card">
          <h3>Storyline</h3>

          <p>{movie.overview || 'No storyline available.'}</p>

          <div className="details-grid">
            <div>
              <strong>Status:</strong> {movie.status || 'N/A'}
            </div>
            <div>
              <strong>Language:</strong> {movie.original_language?.toUpperCase() || 'N/A'}
            </div>
            <div>
              <strong>Country:</strong> {movie.production_countries?.map((country) => country.name).join(', ') || 'N/A'}
            </div>
            <div>
              <strong>Production:</strong> {movie.production_companies?.map((company) => company.name).join(', ') || 'N/A'}
            </div>
          </div>
        </div>

        <div className="trailer card">
          <h3>Official Trailer</h3>

          <img
            src={
              movie.backdrop_path
                ? `${IMAGE_BASE}${movie.backdrop_path}`
                : "https://via.placeholder.com/780x400?text=Trailer+Unavailable"
            }
            alt="Trailer"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
