import React from "react";
import { IMAGE_BASE } from "../services/tmdb";

function FavoriteCard({ movie, onRemove }) {
  const posterUrl = movie.poster_path ? `${IMAGE_BASE}${movie.poster_path}` : null;
  const year = movie.release_date ? new Date(movie.release_date).getFullYear() : "";
  const rating = movie.vote_average != null ? Number(movie.vote_average).toFixed(1) : movie.rating || "N/A";

  return (
    <div className="favorite-card">
      {posterUrl ? (
        <img className="poster" src={posterUrl} alt={movie.title} />
      ) : (
        <div className="poster">🎬</div>
      )}
      <div className="movie-content">
        <h3>{movie.title}</h3>
        <p>{year}</p>
        <p>⭐{rating}</p>
        <button onClick={() => onRemove(movie.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default FavoriteCard;
