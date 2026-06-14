import React from "react";

function GenreSection() {
    const genres = [
        "🚀 Action",
        "🧭Adventure",
        "🌏 Sci-Fi",
        "🎭 Drama",
        "😂 Comedy",
        "💀 Thriller",
    ];

    return (
        <section className="section">
            <div className="section-header">
                <h2>Popular Genres</h2>
            </div>

            <div className="genre-container">
                {genres.map((genre, index) => (
                    <div className="genre-card" key={index}>
                        <h3>{genre}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default GenreSection;
