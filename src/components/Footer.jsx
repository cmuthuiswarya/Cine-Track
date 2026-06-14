import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Logo Section */}
                <div className="footer-section">
                    <h3 className="footer-logo">🎬 CineTrack</h3>
                    <p>
                        Discover, Track, Enjoy.<br />
                        Your ultimate movie companion.
                    </p>
                </div>

                {/* Explore */}
                <div className="footer-section">
                    <h4>Explore</h4>
                    <ul>
                        <li>Home</li>
                        <li>Movies</li>
                        <li>Trending</li>
                        <li>New Releases</li>
                    </ul>
                </div>

                {/* Support */}
                <div className="footer-section">
                    <h4>Support</h4>
                    <ul>
                        <li>Help Center</li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>

                {/* Social */}
                <div className="footer-section">
                    <h4>Stay Connected</h4>

                    <div className="social-icons">
                        <span>ⓕ</span>
                        <span>🌐</span>
                        <span>🅾</span>
                    </div>
                </div>
            </div>

            <hr />

            <p className="copyright">
                © 2024 CineTrack. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
