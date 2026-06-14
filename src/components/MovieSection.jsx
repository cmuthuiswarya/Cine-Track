import React from "react";

function MovieSection({ title, data }) {
    return (
        <section className="section">
            <div className="section-header">
                <h2>{title}</h2>
                <span className="view-all">View All</span>
            </div>

            <div className="card-container">
                {data.map((item, index) => (
                    <div className="movie-card" key={index}>
                        <div className="poster-placeholder">
                            {item.charAt(0)}
                        </div>

                        <h4>{item}</h4>
                        <p></p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default MovieSection;
