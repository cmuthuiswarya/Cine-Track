import React from "react";
import { Link } from "react-router-dom";

function MovieSection({ title, data }) {
    return (
        <section className="section">
            <div className="section-header">
                <h2>{title}</h2>
                <span className="view-all">View All</span>
            </div>

            <div className="card-container">
                {data.map((item, index) => {
                    const displayTitle = item?.trim() || `Movie ${index + 1}`;
                    const movieLink = `/movie/${encodeURIComponent(displayTitle)}`;

                    return (
                        <Link className="movie-card" to={movieLink} key={index}>
                            <div className="poster-placeholder">
                                {displayTitle.charAt(0)}
                            </div>

                            <h4>{displayTitle}</h4>
                            <p></p>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}

export default MovieSection;
