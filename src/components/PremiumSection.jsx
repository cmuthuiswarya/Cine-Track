import React from "react";
import premium from "../assets/under.png";

function PremiumSection() {
    return (
        <section className="premium">
            <div>
                <h1>Your Ultimate Movie</h1>
                <h2>Companion</h2>

                <p>
                    Save favorites, track watched movies and<br />
                    get personalized recommendations.
                </p>

                <button>Get Started  ➜</button>
            </div>

            <div className="premium-img">
                <img src={premium} alt="icon" />
            </div>
        </section>
    );
}

export default PremiumSection;
