import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ menuOpen, setMenuOpen }) {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar">
                <h2 className="logo">🎬 CineTrack</h2>

                <ul className="nav-links">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                            Home
                        </NavLink>
                    </li>
                     <li>
                        <NavLink to="/favorites" className={({ isActive }) => isActive ? "active" : ""}>
                            Favorites
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/reviews" className={({ isActive }) => isActive ? "active" : ""}>
                            Reviews
                        </NavLink>
                    </li>
                    <li>
                        <a href="#movies">Movies</a>
                    </li>
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
                        <li>
                            <NavLink to="/" onClick={() => setMenuOpen(false)}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/reviews" onClick={() => setMenuOpen(false)}>
                                Reviews
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/favorites" onClick={() => setMenuOpen(false)}>
                                Favorites
                            </NavLink>
                        </li>
                        <li>
                            <a href="#movies" onClick={() => setMenuOpen(false)}>
                                Movies
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;
