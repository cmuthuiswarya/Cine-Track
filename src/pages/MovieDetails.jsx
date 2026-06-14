import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaPlay, FaStar, FaPlus, FaShareAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/MovieDetails.css";

const cast = [
  {
    name: "Timothée Chalamet",
    role: "Paul Atreides",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Zendaya",
    role: "Chani",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Rebecca Ferguson",
    role: "Lady Jessica",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Austin Butler",
    role: "Feyd-Rautha",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Javier Bardem",
    role: "Stilgar",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Josh Brolin",
    role: "Gurney Halleck",
    image: "https://via.placeholder.com/150",
  },
];

const recommendations = [
  "Dune",
  "Interstellar",
  "Blade Runner 2049",
  "Arrival",
  "The Martian",
];

export default function MovieDetails() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { movieId } = useParams();
  const movieTitle = movieId ? decodeURIComponent(movieId) : "Dune: Part Two";

  return (
    <div className="movie-details-page">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Hero Section */}
      <section className="hero">
        <div className="poster">
          <img
            src="https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg"
            alt="Dune"
          />

          <div className="play-btn">
            <FaPlay />
          </div>
        </div>

        <div className="movie-info">
          <h1>Dune: Part Two</h1>

          <div className="meta">
            <span>2024</span>
            <span>2h 46m</span>
            <span>PG-13</span>
          </div>

          <div className="genres">
            <span>Adventure</span>
            <span>Drama</span>
            <span>Sci-Fi</span>
          </div>

          <p>
            Paul Atreides unites with Chani and the Fremen while seeking revenge
            against the conspirators who destroyed his family.
          </p>

          <div className="action-buttons">
            <button className="primary">
              <FaPlay /> Watch Trailer
            </button>

            <button>
              <FaPlus /> Add to Favorites
            </button>

            <button>
              <FaShareAlt /> Share
            </button>
          </div>
        </div>

        <div className="rating-card card">
          <h2>
            <FaStar /> 8.5<span>/10</span>
          </h2>

          <p>125K Ratings</p>

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

      {/* Info Row */}
      <section className="info-row">
        <div className="info-card">
          <h5>Release Date</h5>
          <p>March 1, 2024</p>
        </div>

        <div className="info-card">
          <h5>Director</h5>
          <p>Denis Villeneuve</p>
        </div>

        <div className="info-card">
          <h5>Writers</h5>
          <p>Denis Villeneuve, Jon Spaihts</p>
        </div>

        <div className="info-card">
          <h5>Stars</h5>
          <p>Timothée Chalamet, Zendaya</p>
        </div>

        <div className="info-card">
          <h5>Budget</h5>
          <p>$190 Million</p>
        </div>

        <div className="info-card">
          <h5>Box Office</h5>
          <p>$714.4 Million</p>
        </div>
      </section>

      {/* Tabs */}
      <div className="tabs">
        <button className="active">Overview</button>
        <button>Cast</button>
        <button>Reviews</button>
        <button>Photos</button>
        <button>Videos</button>
      </div>

      {/* Content */}
      <section className="content-grid">
        <div className="story card">
          <h3>Storyline</h3>

          <p>
            Paul Atreides unites with Chani and the Fremen while seeking revenge
            against the conspirators who destroyed his family.
          </p>

          <div className="details-grid">
            <div>
              <strong>Status:</strong> Released
            </div>
            <div>
              <strong>Language:</strong> English
            </div>
            <div>
              <strong>Country:</strong> USA, Canada
            </div>
            <div>
              <strong>Distributor:</strong> Warner Bros.
            </div>
          </div>
        </div>

        <div className="trailer card">
          <h3>Official Trailer</h3>

          <img
            src="https://image.tmdb.org/t/p/w780/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg"
            alt=""
          />
        </div>
      </section>

      {/* Bottom Section */}
      <section className="bottom-grid">
        <div className="cast-section card">
          <h3>Top Cast</h3>

          <div className="cast-grid">
            {cast.map((actor) => (
              <div className="cast-card" key={actor.name}>
                <img src={actor.image} alt="" />
                <h4>{actor.name}</h4>
                <span>{actor.role}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reviews card">
          <h3>Top Reviews</h3>

          <div className="review">
            <h4>Alex Morgan</h4>
            <p>
              A breathtaking masterpiece with incredible visuals and stunning
              world-building.
            </p>
          </div>

          <div className="review">
            <h4>Sarah Chen</h4>
            <p>
              Epic in every sense. Performances and score are phenomenal.
            </p>
          </div>
        </div>
      </section>

      <section className="recommendations card">
        <h3>More Like This</h3>

        <div className="movie-list">
          {recommendations.map((movie) => (
            <div className="recommend-card" key={movie}>
              <img
                src="https://via.placeholder.com/220x300"
                alt={movie}
              />
              <p>{movie}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}