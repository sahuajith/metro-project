
import React, { useEffect, useState } from "react";
import "./HomeWebPage1.css";

function HomeWebPage1() {
  const [headingText, setHeadingText] = useState("");
  const [paraText, setParaText] = useState("");

  const fullHeading = "Welcome to Metro Travels";
  const fullPara =
    "Experience unlimited travel with our convenient passes. Choose your pass and travel anywhere in the city effortlessly!";

  useEffect(() => {
    // Typing effect for heading
    let i = 0;
    const headingInterval = setInterval(() => {
      setHeadingText(fullHeading.slice(0, i + 1));
      i++;
      if (i === fullHeading.length) clearInterval(headingInterval);
    }, 100);

    // Typing effect for paragraph
    let j = 0;
    const paraInterval = setInterval(() => {
      setParaText(fullPara.slice(0, j + 1));
      j++;
      if (j === fullPara.length) clearInterval(paraInterval);
    }, 30);
  }, []);

  return (
    <div className="homewebpage-container">
      {/* Left Navbar */}
      <div className="sidebar">
        <h2>Metro Travels</h2>
        <nav>
          <a href="#home">Home</a>
          <a href="#passes">Passes</a>
          <a href="#cards">Cards</a>
          <a href="#wallet">Wallet</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <section className="hero" id="home">
          <h1 className="animated-heading">{headingText}</h1>
          <p className="animated-para">{paraText}</p>
        </section>

        {/* Cards Section */}
        <section className="cards-section">
          <div className="card" id="passes">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd5qUpATERZS4PnPJiacyZkwKqUzQMqdZXFQ&s"
              alt="Passes"
            />
            <h3>Passes</h3>
            <p>Choose the best travel pass for your convenience.</p>
          </div>

          <div className="card" id="cards">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1qrpNll_tjGpSYP_UoVdAojUwFQDgEA-Mgw&s"
              alt="Cards"
            />
            <h3>Cards</h3>
            <p>Reload your metro card quickly and easily.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomeWebPage1;
