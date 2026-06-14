import React from "react";

function Navbar({ menuOpen, setMenuOpen }) {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar">
                <h2 className="logo">🎬 CineTrack</h2>

                <ul className="nav-links">
                    <li>Home</li>
                    <li>Favorites</li>
                    <li>Movies</li>
                    <li>Reviews</li>
                </ul>

                <input
                    className="nav-search"
                    type="text"
                    placeholder="Search movies..."
                />

                {/* Hamburger Menu */}
                <div
                    className="menu-icon"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </div>
            </nav>

            {/* Backdrop Overlay */}
            {menuOpen && (
                <div
                    className="backdrop"
                    onClick={() => setMenuOpen(false)}
                ></div>
            )}

            {/* Offcanvas Sidebar Menu */}
            <div className={`offcanvas ${menuOpen ? "show" : ""}`}>
                <div className="offcanvas-header">
                    <div
                        className="close-btn"
                        onClick={() => setMenuOpen(false)}
                    >
                        ✕
                    </div>
                </div>

                <div className="offcanvas-body">
                    <ul className="offcanvas-menu">
                        <li>Home</li>
                        <li>Movies</li>
                        <li>Reviews</li>
                        <li>Favorites</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;
