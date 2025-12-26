import React from "react";
import "./HomeWebPage1.css"; // we'll create this CSS file

const items = [
  {
    id: 1,
    name: "Day Pass",
    price: "₹100",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSEMVqXT8ZMa9RmHt2WvN8F4_G4xhRqIVKgg&s",
  },
  {
    id: 2,
    name: "Weekly Pass",
    price: "₹500",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOcmtno5dDlSMhcQsa0ygccWPMwCloYHtjvw&s",
  },
  {
    id: 3,
    name: "Quarterly Pass",
    price: "₹2000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9Xt9v6YXBHOfnLWsE87F07ChHlzbmMDB3g&s",
  },
  {
    id: 4,
    name: "Annual Pass",
    price: "₹5000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk1N8rFvPi5IUZxdbbRz-93-xdT0eMXBf9-A&s",
  },
];

function HomeWebPage1() {
  return (
    <div className="homewebpage-container">
      {/* Left Navbar */}
      <div className="sidebar">
        <h2>Metro Travels</h2>
        <nav>
          <a href="home">Home</a>
          <a href="passes">Passes</a>
          <a href="mycart">My Cart</a>
          <a href="wallet">Wallet</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <section className="hero" id="home">
          <h1>Welcome to Metro Travels</h1>
          <p>Experience unlimited travel with our convenient passes. Choose your pass and travel anywhere in the city effortlessly!</p>
        </section>

        <section className="items-section" id="passes">
          <h2>Our Passes</h2>
          <div className="items-grid">
            {items.map((item) => (
              <div className="item-card" key={item.id}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <button>Buy Now</button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomeWebPage1;
