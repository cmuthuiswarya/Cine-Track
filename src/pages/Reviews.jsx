import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fetchMovieDetails, fetchMovieReviews, IMAGE_BASE } from "../services/tmdb";
import "../styles/Reviews.css";

function Reviews() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState("N/A");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) {
      setError("No movie selected");
      setLoading(false);
      return;
    }

    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [movieData, reviewsData] = await Promise.all([
          fetchMovieDetails(movieId),
          fetchMovieReviews(movieId),
        ]);

        setMovie(movieData);
        setReviews(reviewsData.results);
        setAverageRating(reviewsData.averageRating);
      } catch (err) {
        console.error("Error loading reviews:", err);
        setError("Failed to load reviews. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [movieId]);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const renderStars = (rating) => {
    if (!rating) return "N/A";
    const stars = Math.round(rating / 2); // TMDB uses 0-10 scale, convert to stars
    return "⭐".repeat(stars);
  };

  if (loading) {
    return (
      <div className="reviews-page">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main className="reviews-header">
          <p>Loading reviews...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="reviews-page">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main className="reviews-header">
          <p className="error-message">{error || "Movie not found"}</p>
          <button onClick={() => navigate("/")} className="back-btn">
            Back to Home
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="reviews-page">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main className="reviews-header">
        <div className="reviews-card">
          <img
            src={
              movie.poster_path
                ? `${IMAGE_BASE}${movie.poster_path}`
                : "https://via.placeholder.com/300x450?text=No+Image"
            }
            alt={movie.title}
          />

          <div className="reviews-info">
            <h1>{movie.title}</h1>
            <p>
              {formatDate(movie.release_date)} • {movie.runtime ? `${movie.runtime}m` : "N/A"} •{" "}
              {movie.certification || movie.adult ? "18+" : "PG-13"}
            </p>

            <div className="reviews-tags">
              {movie.genres && movie.genres.length > 0 ? (
                movie.genres.map((genre) => (
                  <span key={genre.id}>{genre.name}</span>
                ))
              ) : (
                <span>No genres</span>
              )}
            </div>

            <p className="reviews-copy">{movie.overview || "No overview available"}</p>

            <button
              className="review-toggle-btn"
              onClick={() => setShowReviews(!showReviews)}
            >
              {showReviews ? "Hide Reviews" : "Show Reviews"} ({reviews.length})
            </button>
          </div>
        </div>

        {showReviews && (
          <div className="reviews-list">
            {reviews.length > 0 ? (
              <>
                <div className="reviews-summary">
                  <h2>{averageRating} ⭐</h2>
                  <p>Based on {reviews.length} reviews</p>
                </div>

                {reviews.map((review) => (
                  <div key={review.id} className="review-item">
                    <div className="review-header">
                      <h3>
                        {review.author} {renderStars(review.author_details?.rating)}
                      </h3>
                      <span className="review-date">{formatDate(review.created_at)}</span>
                    </div>
                    <p>{review.content}</p>
                  </div>
                ))}
              </>
            ) : (
              <div className="reviews-summary">
                <p>No reviews available for this movie yet.</p>
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Reviews;
