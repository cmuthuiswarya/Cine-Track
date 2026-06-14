import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Reviews.css";

function Reviews() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  return (
    <div className="reviews-page">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main className="reviews-header">
        <div className="reviews-card">
          <img
            src="https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg"
            alt="Dune"
          />

          <div className="reviews-info">
            <h1>Dune: Part Two</h1>
            <p>2024 • 2h 46m • PG-13</p>

            <div className="reviews-tags">
              <span>Adventure</span>
              <span>Drama</span>
              <span>Sci-Fi</span>
            </div>

            <p className="reviews-copy">
              Paul Atreides unites with Chani and the Fremen while seeking
              revenge against the conspirators who destroyed his family.
            </p>

            <button
              className="review-toggle-btn"
              onClick={() => setShowReviews(!showReviews)}
            >
              {showReviews ? "Hide Reviews" : "Show Reviews"}
            </button>
          </div>
        </div>

        {showReviews && (
          <div className="reviews-list">
            <div className="reviews-summary">
              <h2>8.5 ⭐⭐⭐⭐⭐</h2>
              <p>Based on 1248 reviews</p>
            </div>

            <div className="review-item">
              <h3>Alex Morgan ⭐⭐⭐⭐⭐</h3>
              <p>Denis Villeneuve delivers another cinematic masterpiece.</p>
            </div>

            <div className="review-item">
              <h3>Sarah Chen ⭐⭐⭐⭐⭐</h3>
              <p>Absolutely incredible sequel with amazing visuals.</p>
            </div>

            <div className="review-item">
              <h3>Michael Torres ⭐⭐⭐⭐</h3>
              <p>A bit slow in the first half, but worth it.</p>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Reviews;
