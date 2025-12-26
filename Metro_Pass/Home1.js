import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home1.css"; // make sure to create this CSS file

function Home1() {
  const navigate = useNavigate();

  const passes = [
    { 
      name: "Day Pass", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSEMVqXT8ZMa9RmHt2WvN8F4_G4xhRqIVKgg&s",
      desc: "Unlimited travel for 1 day",
      price: 100
    },
    { 
      name: "Weekly Pass",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOcmtno5dDlSMhcQsa0ygccWPMwCloYHtjvw&s",
      desc: "Unlimited travel for 7 days",
      price: 500
    },
    { 
      name: "Quarterly Pass", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9Xt9v6YXBHOfnLWsE87F07ChHlzbmMDB3g&s",
      desc: "Unlimited travel for 3 months",
      price: 2000
    },
    { 
      name: "Annual Pass",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk1N8rFvPi5IUZxdbbRz-93-xdT0eMXBf9-A&s",
      desc: "Unlimited travel for 1 year",
      price: 5000
    },
  ];

  return (
    <div className="home-container">
      <h2 className="home-title">Choose Your Travel Pass</h2>

      <div className="passes-grid">
        {passes.map((pass) => (
          <div className="pass-card" key={pass.name}>
            <div className="pass-image">
              <img src={pass.image} alt={pass.name} />
            </div>
            <div className="pass-details">
              <h3>{pass.name}</h3>
              <p>{pass.desc}</p>
              <p><strong>Price: ₹{pass.price}</strong></p>
              <button onClick={() => navigate(`/pass/${pass.name}`)}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home1;
