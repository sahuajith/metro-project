import React from "react";
import "./HomeWebPage.css";

function HomeWebPage() {
  return (
    <div className="home-container">
      {/* Left Navbar */}
      <div className="sidebar">
        <h2 className="logo">🚇 MetroGo</h2>
        <ul className="nav-links">
          <li>Home</li>
          <li>Passes</li>
          <li>Wallet</li>
          <li>My Cart</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="fade-in">Travel Smart with Metro Pass</h1>
        <p className="slide-up">
          Metro travel is the fastest, safest, and most eco-friendly way to
          commute in modern cities. With our digital metro passes, you can
          travel seamlessly without standing in long queues.
        </p>

        <p className="slide-up delay">
          Choose from daily, weekly, quarterly, or annual passes and enjoy
          hassle-free journeys. Recharge your wallet, manage your passes, and
          track your trips — all in one place.
        </p>

        <button className="explore-btn pulse">
          Explore Passes
        </button>
      </div>
    </div>
  );
}

export default HomeWebPage;
