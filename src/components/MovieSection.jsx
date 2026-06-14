import React from "react";
import { Link } from "react-router-dom";
import { IMAGE_BASE } from "../services/tmdb";

function MovieSection({ title, data = [] }) {
    return (
        <section className="section">
            <div className="section-header">
                <h2>{title}</h2>
                <span className="view-all">View All</span>
            </div>

            <div className="card-container">
                {data.length === 0 && <p style={{ color: 'gray' }}>No items to show</p>}

                {data.map((item, index) => {
                    const isObj = typeof item === 'object' && item !== null;
                    const titleText = isObj ? item.title || item.name : (item?.trim && item.trim()) || `Movie ${index + 1}`;
                    const movieLink = isObj && item.id ? `/movie/${item.id}` : `/movie/${encodeURIComponent(titleText)}`;
                    const poster = isObj && item.poster_path ? `${IMAGE_BASE}${item.poster_path}` : null;

                    return (
                        <Link className="movie-card" to={movieLink} key={item.id || index}>
                            {poster ? (
                                <img src={poster} alt={titleText} />
                            ) : (
                                <div className="poster-placeholder">{String(titleText).charAt(0)}</div>
                            )}

                            <div className="meta">
                                <h4>{titleText}</h4>
                                <p>{isObj ? (item.release_date || item.first_air_date || '') : ''}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}

export default MovieSection;
