import React from "react";

function FavoriteCard({ movie, onRemove }) {
  return (
    <div className="favorite-card">
      <div className="poster">🎬</div>
      <div className="movie-content">
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
        <p>⭐{movie.rating}</p>
        <button onClick={() => onRemove(movie.title)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default FavoriteCard;
