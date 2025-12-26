// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";

// function PassDetails() {
//   const { type } = useParams();
//   const navigate = useNavigate();

//   const [price, setPrice] = useState(0);
//   const [paymentMethod, setPaymentMethod] = useState("UPI");
//   const [error, setError] = useState("");

//   // Generate random price when page loads
//   useEffect(() => {
//     const randomPrice = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
//     setPrice(randomPrice);
//   }, []);

//   const handlePay = () => {
//     if (paymentMethod === "Wallet") {
//       const walletBalance = Number(localStorage.getItem("walletBalance") ?? 100);
//       if (walletBalance < price) {
//         setError("❌ Insufficient wallet balance");
//         return;
//       }
//       const updatedBalance = walletBalance - price;
//       localStorage.setItem("walletBalance", updatedBalance);
//     }
//     navigate("/success");
//   };

//   return (
//     <div className="pass-form">
//       <h2>Selected Pass: {type}</h2>
//       <h3>Price: ₹{price}</h3>

//       <label>Select Payment Method:</label>
//       <select
//         value={paymentMethod}
//         onChange={(e) => setPaymentMethod(e.target.value)}
//       >
//         <option value="UPI">UPI</option>
//         <option value="Wallet">Wallet</option>
//       </select>

//       <br /><br />
//       <button onClick={handlePay}>Pay ₹{price}</button>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       <br /><br />
//       <Link to="/wallet">💼 View Wallet</Link>
//       <br />
//       <Link to="/">⬅ Back to Passes</Link>
//     </div>
//   );
// }

// export default PassDetails;
// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";

// function PassDetails() {
//   const { type } = useParams();
//   const navigate = useNavigate();

//   // Static prices
//   const passPrices = {
//     "Day Pass": 100,
//     "Weekly Pass": 500,
//     "Quarterly Pass": 2000,
//     "Annual Pass": 5000,
//   };

//   const pricePerPass = passPrices[type] || 0;

//   const [quantity, setQuantity] = useState(1);
//   const [totalPrice, setTotalPrice] = useState(pricePerPass);
//   const [paymentMethod, setPaymentMethod] = useState("UPI");
//   const [error, setError] = useState("");

//   // Update total price whenever quantity changes
//   useEffect(() => {
//     setTotalPrice(pricePerPass * quantity);
//   }, [quantity, pricePerPass]);

//   const handleIncrement = () => setQuantity(quantity + 1);
//   const handleDecrement = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };

//   const handlePay = () => {
//     if (paymentMethod === "Wallet") {
//       const walletBalance = Number(localStorage.getItem("walletBalance") ?? 100);
//       if (walletBalance < totalPrice) {
//         setError("❌ Insufficient wallet balance");
//         return;
//       }
//       const updatedBalance = walletBalance - totalPrice;
//       localStorage.setItem("walletBalance", updatedBalance);
//     }
//     navigate("/success");
//   };

//   return (
//     <div className="pass-form">
//       <h2>Selected Pass: {type}</h2>
//       <h3>Price per Pass: ₹{pricePerPass}</h3>

//       <div style={{ margin: "20px 0" }}>
//         <h4>Number of Passes:</h4>
//         <button onClick={handleDecrement} style={{ padding: "5px 10px" }}>-</button>
//         <span style={{ margin: "0 10px", fontSize: "18px" }}>{quantity}</span>
//         <button onClick={handleIncrement} style={{ padding: "5px 10px" }}>+</button>
//       </div>

//       <h3>Total Price: ₹{totalPrice}</h3>

//       <label>Select Payment Method:</label>
//       <select
//         value={paymentMethod}
//         onChange={(e) => setPaymentMethod(e.target.value)}
//         style={{ marginLeft: "10px" }}
//       >
//         <option value="UPI">UPI</option>
//         <option value="Wallet">Wallet</option>
//       </select>

//       <br /><br />
//       <button onClick={handlePay} style={{ padding: "10px 20px", cursor: "pointer" }}>
//         Pay ₹{totalPrice}
//       </button>

//       {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

//       <br /><br />
//       <Link to="/wallet">💼 View Wallet</Link>
//       <br />
//       <Link to="/">⬅ Back to Passes</Link>
//     </div>
//   );
// }

// export default PassDetails;
// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";

// function PassDetails() {
//   const { type } = useParams();
//   const navigate = useNavigate();

//   // Static pass prices
//   const passPrices = {
//     "Day Pass": 100,
//     "Weekly Pass": 500,
//     "Quarterly Pass": 2000,
//     "Annual Pass": 5000,
//   };

//   // Pass images


//   const pricePerPass = passPrices[type] || 0;
//   const passImage = passImages[type];

//   const [quantity, setQuantity] = useState(1);
//   const [totalPrice, setTotalPrice] = useState(pricePerPass);
//   const [paymentMethod, setPaymentMethod] = useState("UPI");
//   const [error, setError] = useState("");

//   useEffect(() => {
//     setTotalPrice(pricePerPass * quantity);
//   }, [quantity, pricePerPass]);

//   const handleIncrement = () => setQuantity(quantity + 1);
//   const handleDecrement = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };

//   const handlePay = () => {
//     if (paymentMethod === "Wallet") {
//       const walletBalance = Number(localStorage.getItem("walletBalance") ?? 100);
//       if (walletBalance < totalPrice) {
//         setError("❌ Insufficient wallet balance");
//         return;
//       }
//       const updatedBalance = walletBalance - totalPrice;
//       localStorage.setItem("walletBalance", updatedBalance);
//     }
//     navigate("/success");
//   };

//   return (
//     <div className="pass-form" style={{ textAlign: "center", padding: "30px" }}>
//       <h2>{type}</h2>

//       {passImage && (
//         <img
//           src={passImage}
//           alt={type}
//           style={{ width: "300px", height: "150px", marginBottom: "20px" }}
//         />
//       )}

//       <h3>Price per Pass: ₹{pricePerPass}</h3>

//       <div style={{ margin: "20px 0" }}>
//         <h4>Number of Passes:</h4>
//         <button onClick={handleDecrement} style={{ padding: "5px 10px" }}>-</button>
//         <span style={{ margin: "0 10px", fontSize: "18px" }}>{quantity}</span>
//         <button onClick={handleIncrement} style={{ padding: "5px 10px" }}>+</button>
//       </div>

//       <h3>Total Price: ₹{totalPrice}</h3>

//       <label>Select Payment Method:</label>
//       <select
//         value={paymentMethod}
//         onChange={(e) => setPaymentMethod(e.target.value)}
//         style={{ marginLeft: "10px" }}
//       >
//         <option value="UPI">UPI</option>
//         <option value="Wallet">Wallet</option>
//       </select>

//       <br /><br />
//       <button onClick={handlePay} style={{ padding: "10px 20px", cursor: "pointer" }}>
//         Pay ₹{totalPrice}
//       </button>

//       {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

//       <br /><br />
//       <Link to="/wallet">💼 View Wallet</Link>
//       <br />
//       <Link to="/">⬅ Back to Passes</Link>
//     </div>
//   );
// }

// export default PassDetails;
// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";

// function PassDetails() {
//   const { type } = useParams();
//   const navigate = useNavigate();

//   // Static pass prices
//   const passPrices = {
//     "Day Pass": 100,
//     "Weekly Pass": 500,
//     "Quarterly Pass": 2000,
//     "Annual Pass": 5000,
//   };

//   // Pass images
//   const passImages = {
//     "Day Pass": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSEMVqXT8ZMa9RmHt2WvN8F4_G4xhRqIVKgg&s",
//     "Weekly Pass": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOcmtno5dDlSMhcQsa0ygccWPMwCloYHtjvw&s",
//     "Quarterly Pass": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9Xt9v6YXBHOfnLWsE87F07ChHlzbmMDB3g&s",
//     "Annual Pass": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk1N8rFvPi5IUZxdbbRz-93-xdT0eMXBf9-A&s",
//   };

//   const pricePerPass = passPrices[type] || 0;
//   const passImage = passImages[type];

//   const [quantity, setQuantity] = useState(1);
//   const [totalPrice, setTotalPrice] = useState(pricePerPass);
//   const [paymentMethod, setPaymentMethod] = useState("UPI");
//   const [error, setError] = useState("");

//   useEffect(() => {
//     setTotalPrice(pricePerPass * quantity);
//   }, [quantity, pricePerPass]);

//   const handleIncrement = () => setQuantity(quantity + 1);
//   const handleDecrement = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };

//   const handlePay = () => {
//     if (paymentMethod === "Wallet") {
//       const walletBalance = Number(localStorage.getItem("walletBalance") ?? 100);
//       if (walletBalance < totalPrice) {
//         setError("❌ Insufficient wallet balance");
//         return;
//       }
//       const updatedBalance = walletBalance - totalPrice;
//       localStorage.setItem("walletBalance", updatedBalance);
//     }
//     navigate("/success");
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "linear-gradient(to right, #6a11cb, #2575fc)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "50px 20px",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           background: "white",
//           borderRadius: "15px",
//           boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
//           maxWidth: "800px",
//           width: "100%",
//           overflow: "hidden",
//         }}
//       >
//         {/* Left Side - Image */}
//         <div style={{ flex: 1 }}>
//           <img
//             src={passImage}
//             alt={type}
//             style={{ width: "100%", height: "100%", objectFit: "cover" }}
//           />
//         </div>

//         {/* Right Side - Details */}
//         <div style={{ flex: 1, padding: "30px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
//           <h2 style={{ marginBottom: "20px" }}>{type}</h2>
//           <p>Price per Pass: <strong>₹{pricePerPass}</strong></p>

//           <div style={{ margin: "20px 0", display: "flex", alignItems: "center" }}>
//             <button onClick={handleDecrement} style={{ padding: "5px 10px" }}>-</button>
//             <span style={{ margin: "0 15px", fontSize: "18px" }}>{quantity}</span>
//             <button onClick={handleIncrement} style={{ padding: "5px 10px" }}>+</button>
//           </div>

//           <p>Total Price: <strong>₹{totalPrice}</strong></p>

//           <label>Select Payment Method:</label>
//           <select
//             value={paymentMethod}
//             onChange={(e) => setPaymentMethod(e.target.value)}
//             style={{ marginTop: "10px", padding: "5px" }}
//           >
//             <option value="UPI">UPI</option>
//             <option value="Wallet">Wallet</option>
//           </select>

//           <button
//             onClick={handlePay}
//             style={{
//               marginTop: "20px",
//               padding: "10px 20px",
//               cursor: "pointer",
//               background: "#6a11cb",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               fontWeight: "bold",
//             }}
//           >
//             Pay ₹{totalPrice}
//           </button>

//           {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

//           <div style={{ marginTop: "20px" }}>
//             <Link to="/wallet" style={{ marginRight: "20px", color: "#6a11cb" }}>💼 View Wallet</Link>
//             <Link to="/" style={{ color: "#6a11cb" }}>⬅ Back to Passes</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PassDetails;
// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";

// function PassDetails() {
//   const { type } = useParams();
//   const navigate = useNavigate();

//   // Static pass prices
//   const passPrices = {
//     "Day Pass": 100,
//     "Weekly Pass": 500,
//     "Quarterly Pass": 2000,
//     "Annual Pass": 5000,
//   };

//   // Pass images
// //   const passImages = {
// //     "Day Pass": "https://via.placeholder.com/400x300?text=Day+Pass",
// //     "Weekly Pass": "https://via.placeholder.com/400x300?text=Weekly+Pass",
// //     "Quarterly Pass": "https://via.placeholder.com/400x300?text=Quarterly+Pass",
// //     "Annual Pass": "https://via.placeholder.com/400x300?text=Annual+Pass",
// //   };
// 
//   const pricePerPass = passPrices[type] || 0;
//   const passImage = passImages[type];

//   const [quantity, setQuantity] = useState(1);
//   const [totalPrice, setTotalPrice] = useState(pricePerPass);
//   const [paymentMethod, setPaymentMethod] = useState("UPI");
//   const [error, setError] = useState("");

//   useEffect(() => {
//     setTotalPrice(pricePerPass * quantity);
//   }, [quantity, pricePerPass]);

//   const handleIncrement = () => setQuantity(quantity + 1);
//   const handleDecrement = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };

//   const handlePay = () => {
//     if (paymentMethod === "Wallet") {
//       const walletBalance = Number(localStorage.getItem("walletBalance") ?? 100);
//       if (walletBalance < totalPrice) {
//         setError("❌ Insufficient wallet balance");
//         return;
//       }
//       const updatedBalance = walletBalance - totalPrice;
//       localStorage.setItem("walletBalance", updatedBalance);
//     }
//     navigate("/success");
//   };

//   return (
//     <div
//       style={{
//         mineight: "100vw",
//         background: "linear-gradient(to right, #6a11cb, #2575fc)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "50px 20px",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           background: "white",
//           borderRadius: "15px",
//           boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
//           maxWidth: "800px",
//           width: "100%",
//           overflow: "hidden",
//           flexWrap: "wrap",
//         }}
//       >
//         {/* Left Side - Image */}
//         <div style={{ flex: 1, minWidth: "250px" }}>
//           <img
//             src={passImage}
//             alt={type}
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//               borderTopLeftRadius: "15px",
//               borderBottomLeftRadius: "15px",
//             }}
//           />
//         </div>

//         {/* Right Side - Details */}
//         <div
//           style={{
//             flex: 1,
//             padding: "30px",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             minWidth: "250px",
//           }}
//         >
//           <h2 style={{ marginBottom: "20px" }}>{type}</h2>
//           <p>
//             Price per Pass: <strong>₹{pricePerPass}</strong>
//           </p>

//           <div
//             style={{
//               margin: "20px 0",
//               display: "flex",
//               alignItems: "center",
//             }}
//           >
//             <button onClick={handleDecrement} style={{ padding: "5px 10px" }}>
//               -
//             </button>
//             <span style={{ margin: "0 15px", fontSize: "18px" }}>{quantity}</span>
//             <button onClick={handleIncrement} style={{ padding: "5px 10px" }}>
//               +
//             </button>
//           </div>

//           <p>
//             Total Price: <strong>₹{totalPrice}</strong>
//           </p>

//           <label>Select Payment Method:</label>
//           <select
//             value={paymentMethod}
//             onChange={(e) => setPaymentMethod(e.target.value)}
//             style={{ marginTop: "10px", padding: "5px" }}
//           >
//             <option value="UPI">UPI</option>
//             <option value="Wallet">Wallet</option>
//           </select>

//           <button
//             onClick={handlePay}
//             style={{
//               marginTop: "20px",
//               padding: "10px 20px",
//               cursor: "pointer",
//               background: "#6a11cb",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               fontWeight: "bold",
//             }}
//           >
//             Pay ₹{totalPrice}
//           </button>

//           {error && (
//             <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
//           )}

//           <div style={{ marginTop: "20px" }}>
//             <Link
//               to="/wallet"
//               style={{ marginRight: "20px", color: "#6a11cb" }}
//             >
//               💼 View Wallet
//             </Link>
//             <Link to="/" style={{ color: "#6a11cb" }}>
//               ⬅ Back to Passes
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PassDetails;
// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";

// function PassDetails() {
//   const { type } = useParams();
//   const navigate = useNavigate();

//   const passPrices = {
//     "Day Pass": 100,
//     "Weekly Pass": 500,
//     "Quarterly Pass": 2000,
//     "Annual Pass": 5000,
//   };
//   const passImages = {
//             "Day Pass": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSEMVqXT8ZMa9RmHt2WvN8F4_G4xhRqIVKgg&s",
//             "Weekly Pass": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOcmtno5dDlSMhcQsa0ygccWPMwCloYHtjvw&s",
//             "Quarterly Pass": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9Xt9v6YXBHOfnLWsE87F07ChHlzbmMDB3g&s",
//             "Annual Pass": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk1N8rFvPi5IUZxdbbRz-93-xdT0eMXBf9-A&s",
//           };
    

// //  

//   const pricePerPass = passPrices[type] || 0;
//   const passImage = passImages[type];

//   const [quantity, setQuantity] = useState(1);
//   const [totalPrice, setTotalPrice] = useState(pricePerPass);
//   const [paymentMethod, setPaymentMethod] = useState("UPI");
//   const [error, setError] = useState("");

//   useEffect(() => {
//     setTotalPrice(pricePerPass * quantity);
//   }, [quantity, pricePerPass]);

//   const handleIncrement = () => setQuantity(quantity + 1);
//   const handleDecrement = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };

//   const handlePay = () => {
//     if (paymentMethod === "Wallet") {
//       const walletBalance = Number(localStorage.getItem("walletBalance") ?? 100);
//       if (walletBalance < totalPrice) {
//         setError("❌ Insufficient wallet balance");
//         return;
//       }
//       const updatedBalance = walletBalance - totalPrice;
//       localStorage.setItem("walletBalance", updatedBalance);
//     }
//     navigate("/success");
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "linear-gradient(to right, #6a11cb, #2575fc)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "50px 20px",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           background: "white",
//           borderRadius: "15px",
//           boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
//           maxWidth: "800px",
//           width: "100%",
//           overflow: "hidden",
//           flexWrap: "wrap",
//         }}
//       >
//         {/* Left Side - Image */}
//         <div style={{ flex: 1, minWidth: "250px", maxHeight: "300px" }}>
//           <img
//             src={passImage}
//             alt={type}
//             style={{
//               width: "100%",
//               height: "300px", // Fixed height
//               objectFit: "cover",
//               borderTopLeftRadius: "15px",
//               borderBottomLeftRadius: "15px",
//             }}
//           />
//         </div>

//         {/* Right Side - Details */}
//         <div
//           style={{
//             flex: 1,
//             padding: "30px",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             minWidth: "250px",
//           }}
//         >
//           <h2 style={{ marginBottom: "20px" }}>{type}</h2>
//           <p>
//             Price per Pass: <strong>₹{pricePerPass}</strong>
//           </p>

//           <div
//             style={{
//               margin: "20px 0",
//               display: "flex",
//               alignItems: "center",
//             }}
//           >
//             <button onClick={handleDecrement} style={{ padding: "5px 10px" }}>
//               -
//             </button>
//             <span style={{ margin: "0 15px", fontSize: "18px" }}>{quantity}</span>
//             <button onClick={handleIncrement} style={{ padding: "5px 10px" }}>
//               +
//             </button>
//           </div>

//           <p>
//             Total Price: <strong>₹{totalPrice}</strong>
//           </p>

//           <label>Select Payment Method:</label>
//           <select
//             value={paymentMethod}
//             onChange={(e) => setPaymentMethod(e.target.value)}
//             style={{ marginTop: "10px", padding: "5px" }}
//           >
//             <option value="UPI">UPI</option>
//             <option value="Wallet">Wallet</option>
//           </select>

//           <button
//             onClick={handlePay}
//             style={{
//               marginTop: "20px",
//               padding: "10px 20px",
//               cursor: "pointer",
//               background: "#6a11cb",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               fontWeight: "bold",
//             }}
//           >
//             Pay ₹{totalPrice}
//           </button>

//           {error && (
//             <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
//           )}

//           <div style={{ marginTop: "20px" }}>
//             <Link
//               to="/wallet"
//               style={{ marginRight: "20px", color: "#6a11cb" }}
//             >
//               💼 View Wallet
//             </Link>
//             <Link to="/" style={{ color: "#6a11cb" }}>
//               ⬅ Back to Passes
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PassDetails;

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";

// function PassDetails() {
//   const { type } = useParams();
//   const navigate = useNavigate();

//   // Static pass prices
//   const passPrices = {
//     "Day Pass": 100,
//     "Weekly Pass": 500,
//     "Quarterly Pass": 2000,
//     "Annual Pass": 5000,
//   };

//   const passImages = {
//                 "Day Pass": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSEMVqXT8ZMa9RmHt2WvN8F4_G4xhRqIVKgg&s",
//                 "Weekly Pass": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOcmtno5dDlSMhcQsa0ygccWPMwCloYHtjvw&s",
//                 "Quarterly Pass": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9Xt9v6YXBHOfnLWsE87F07ChHlzbmMDB3g&s",
//                 "Annual Pass": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk1N8rFvPi5IUZxdbbRz-93-xdT0eMXBf9-A&s",
//               };
// //   const passImages = {
// //         "Day Pass": "https://via.placeholder.com/400x300?text=Day+Pass",
// //         "Weekly Pass": "https://via.placeholder.com/400x300?text=Weekly+Pass",
// //         "Quarterly Pass": "https://via.placeholder.com/400x300?text=Quarterly+Pass",
// //         "Annual Pass": "https://via.placeholder.com/400x300?text=Annual+Pass",
// //       };
// //   const passImages = {
// //     "Day Pass": "https://via.placeholder.com/400x300?text=Day+Pass",
// //     "Weekly Pass": "https://via.placeholder.com/400x300?text=Weekly+Pass",
// //     "Quarterly Pass": "https://via.placeholder.com/400x300?text=Quarterly+Pass",
// //     "Annual Pass": "https://via.placeholder.com/400x300?text=Annual+Pass",
// //   };

//   const pricePerPass = passPrices[type] || 0;
//   const passImage = passImages[type];

//   const [quantity, setQuantity] = useState(1);
//   const [totalPrice, setTotalPrice] = useState(pricePerPass);
//   const [paymentMethod, setPaymentMethod] = useState("UPI");
//   const [error, setError] = useState("");
//   const [walletBalance, setWalletBalance] = useState(
//     Number(localStorage.getItem("walletBalance") ?? 100)
//   );
//   const [showRecharge, setShowRecharge] = useState(false);

//   useEffect(() => {
//     setTotalPrice(pricePerPass * quantity);
//     setError("");
//     setShowRecharge(false);
//   }, [quantity, pricePerPass]);

//   const handleIncrement = () => setQuantity(quantity + 1);
//   const handleDecrement = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };

//   const handlePay = () => {
//     if (paymentMethod === "Wallet") {
//       if (walletBalance < totalPrice) {
//         setError("❌ Insufficient wallet balance");
//         setShowRecharge(true);
//         return;
//       }
//       const updatedBalance = walletBalance - totalPrice;
//       localStorage.setItem("walletBalance", updatedBalance);
//       setWalletBalance(updatedBalance);
//     }
//     navigate("/success");
//   };

//   const handleRecharge = () => {
//     const rechargeAmount = 500; // Example fixed recharge amount
//     const updatedBalance = walletBalance + rechargeAmount;
//     localStorage.setItem("walletBalance", updatedBalance);
//     setWalletBalance(updatedBalance);
//     setError(`✅ Recharge done! ₹${rechargeAmount} added`);
//     setShowRecharge(false);
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "linear-gradient(to right, #6a11cb, #2575fc)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "50px 20px",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           background: "white",
//           borderRadius: "15px",
//           boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
//           maxWidth: "800px",
//           width: "100%",
//           overflow: "hidden",
//           flexWrap: "wrap",
//         }}
//       >
//         {/* Left Side - Image */}
//         <div style={{ flex: 1, minWidth: "250px" }}>
//           <img
//             src={passImage}
//             alt={type}
//             style={{
//               width: "100%",
//               height: "300px",
//               objectFit: "cover",
//               borderTopLeftRadius: "15px",
//               borderBottomLeftRadius: "15px",
//             }}
//           />
//         </div>

//         {/* Right Side - Details */}
//         <div
//           style={{
//             flex: 1,
//             padding: "30px",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             minWidth: "250px",
//           }}
//         >
//           <h2 style={{ marginBottom: "20px" }}>{type}</h2>
//           <p>
//             Price per Pass: <strong>₹{pricePerPass}</strong>
//           </p>
//           <p>
//             Wallet Balance: <strong>₹{walletBalance}</strong>
//           </p>

//           <div
//             style={{
//               margin: "20px 0",
//               display: "flex",
//               alignItems: "center",
//             }}
//           >
//             <button onClick={handleDecrement} style={{ padding: "5px 10px" }}>
//               -
//             </button>
//             <span style={{ margin: "0 15px", fontSize: "18px" }}>{quantity}</span>
//             <button onClick={handleIncrement} style={{ padding: "5px 10px" }}>
//               +
//             </button>
//           </div>

//           <p>
//             Total Price: <strong>₹{totalPrice}</strong>
//           </p>

//           <label>Select Payment Method:</label>
//           <select
//             value={paymentMethod}
//             onChange={(e) => setPaymentMethod(e.target.value)}
//             style={{ marginTop: "10px", padding: "5px" }}
//           >
//             <option value="UPI">UPI</option>
//             <option value="Wallet">Wallet</option>
//           </select>

//           <button
//             onClick={handlePay}
//             style={{
//               marginTop: "20px",
//               padding: "10px 20px",
//               cursor: "pointer",
//               background: "#6a11cb",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               fontWeight: "bold",
//             }}
//           >
//             Pay ₹{totalPrice}
//           </button>

//           {error && (
//             <p style={{ color: error.includes("Insufficient") ? "red" : "green", marginTop: "10px" }}>
//               {error}
//             </p>
//           )}

//           {showRecharge && (
//             <button
//               onClick={handleRecharge}
//               style={{
//                 marginTop: "10px",
//                 padding: "8px 15px",
//                 background: "#28a745",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//               }}
//             >
//               Recharge Wallet +₹500
//             </button>
//           )}

//           <div style={{ marginTop: "20px" }}>
//             <Link to="/wallet" style={{ marginRight: "20px", color: "#6a11cb" }}>
//               💼 View Wallet
//             </Link>
//             <Link to="/" style={{ color: "#6a11cb" }}>
//               ⬅ Back to Passes
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PassDetails;

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";

// function PassDetails() {
//   const { type } = useParams();
//   const navigate = useNavigate();

//   // Pass prices and images
//   const passPrices = {
//     "Day Pass": 100,
//     "Weekly Pass": 500,
//     "Quarterly Pass": 2000,
//     "Annual Pass": 5000,
//   };

//   const passImages = {
//     "Day Pass": "https://via.placeholder.com/400x300?text=Day+Pass",
//     "Weekly Pass": "https://via.placeholder.com/400x300?text=Weekly+Pass",
//     "Quarterly Pass": "https://via.placeholder.com/400x300?text=Quarterly+Pass",
//     "Annual Pass": "https://via.placeholder.com/400x300?text=Annual+Pass",
//   };

//   const pricePerPass = passPrices[type] || 0;
//   const passImage = passImages[type];

//   // States
//   const [quantity, setQuantity] = useState(1);
//   const [totalPrice, setTotalPrice] = useState(pricePerPass);
//   const [paymentMethod, setPaymentMethod] = useState("UPI");
//   const [error, setError] = useState("");
//   const [walletBalance, setWalletBalance] = useState(
//     Number(localStorage.getItem("walletBalance") ?? 100)
//   );
//   const [showRecharge, setShowRecharge] = useState(false);

//   // Update total price when quantity changes
//   useEffect(() => {
//     setTotalPrice(pricePerPass * quantity);
//     setError("");
//     setShowRecharge(false);
//   }, [quantity, pricePerPass]);

//   // Increment / Decrement
//   const handleIncrement = () => setQuantity(quantity + 1);
//   const handleDecrement = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };

//   // ========== THIS IS WHERE YOU PUT handlePay ==========
//   const handlePay = () => {
//     if (paymentMethod === "Wallet") {
//       if (walletBalance < totalPrice) {
//         setError("❌ Insufficient wallet balance");
//         setShowRecharge(true);
//         return;
//       }
//       const updatedBalance = walletBalance - totalPrice;
//       localStorage.setItem("walletBalance", updatedBalance);
//       setWalletBalance(updatedBalance);
//     }

//     // Save order to localStorage
//     const orders = JSON.parse(localStorage.getItem("orders") || "[]");
//     const newOrder = {
//       id: "ORD" + Date.now(),
//       passName: type,
//       price: totalPrice,
//       date: new Date().toLocaleString(),
//     };
//     orders.push(newOrder);
//     localStorage.setItem("orders", JSON.stringify(orders));

//     // Navigate to Success page
//     navigate("/success");
//   };
//   // =======================================================

//   // Recharge handler
//   const handleRecharge = () => {
//     const rechargeAmount = 500;
//     const updatedBalance = walletBalance + rechargeAmount;
//     localStorage.setItem("walletBalance", updatedBalance);
//     setWalletBalance(updatedBalance);
//     setError(`✅ Recharge done! ₹${rechargeAmount} added`);
//     setShowRecharge(false);
//   };

//   return (
//     <div>
//       {/* Your JSX code for card, image, details, payment buttons */}
//       <h2>{type}</h2>
//       <p>Price per Pass: ₹{pricePerPass}</p>
//       <p>Total Price: ₹{totalPrice}</p>

//       <button onClick={handlePay}>Pay ₹{totalPrice}</button>
//       {showRecharge && <button onClick={handleRecharge}>Recharge Wallet +₹500</button>}

//       <Link to="/wallet">View Wallet</Link>
//       <Link to="/">Back to Passes</Link>
//     </div>
//   );
// }

// export default PassDetails;
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function PassDetails() {
  const { type } = useParams();
  const navigate = useNavigate();

  // Pass prices and images
  const passPrices = {
    "Day Pass": 100,
    "Weekly Pass": 500,
    "Quarterly Pass": 2000,
    "Annual Pass": 5000,
  };

   const passImages = {
            "Day Pass": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSEMVqXT8ZMa9RmHt2WvN8F4_G4xhRqIVKgg&s",
            "Weekly Pass": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOcmtno5dDlSMhcQsa0ygccWPMwCloYHtjvw&s",
            "Quarterly Pass": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9Xt9v6YXBHOfnLWsE87F07ChHlzbmMDB3g&s",
            "Annual Pass": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk1N8rFvPi5IUZxdbbRz-93-xdT0eMXBf9-A&s",
          };
  const pricePerPass = passPrices[type] || 0;
  const passImage = passImages[type];

  // States
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(pricePerPass);
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [error, setError] = useState("");
  const [walletBalance, setWalletBalance] = useState(
    Number(localStorage.getItem("walletBalance") ?? 100)
  );
  const [showRecharge, setShowRecharge] = useState(false);

  // Update total price when quantity changes
  useEffect(() => {
    setTotalPrice(pricePerPass * quantity);
    setError("");
    setShowRecharge(false);
  }, [quantity, pricePerPass]);

  // Increment / Decrement
  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Handle payment
  const handlePay = () => {
    if (paymentMethod === "Wallet") {
      if (walletBalance < totalPrice) {
        setError("❌ Insufficient wallet balance");
        setShowRecharge(true);
        return;
      }
      const updatedBalance = walletBalance - totalPrice;
      localStorage.setItem("walletBalance", updatedBalance);
      setWalletBalance(updatedBalance);
    }

    // Save order to localStorage
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    const newOrder = {
      id: "ORD" + Date.now(),
      passName: type,
      price: totalPrice,
      date: new Date().toLocaleString(),
    };
    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));

    // Navigate to Success page
    navigate("/success");
  };

  // Handle wallet recharge
  const handleRecharge = () => {
    const rechargeAmount = 500; // Fixed recharge amount
    const updatedBalance = walletBalance + rechargeAmount;
    localStorage.setItem("walletBalance", updatedBalance);
    setWalletBalance(updatedBalance);
    setError(`✅ Recharge done! ₹${rechargeAmount} added`);
    setShowRecharge(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #6a11cb, #2575fc)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          background: "white",
          borderRadius: "15px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
          maxWidth: "800px",
          width: "100%",
          overflow: "hidden",
          flexWrap: "wrap",
        }}
      >
        {/* Left side - Image */}
        <div style={{ flex: 1, minWidth: "250px" }}>
          <img
            src={passImage}
            alt={type}
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              borderTopLeftRadius: "15px",
              borderBottomLeftRadius: "15px",
            }}
          />
        </div>

        {/* Right side - Details */}
        <div
          style={{
            flex: 1,
            padding: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minWidth: "250px",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>{type}</h2>
          <p>
            Price per Pass: <strong>₹{pricePerPass}</strong>
          </p>
          <p>
            Wallet Balance: <strong>₹{walletBalance}</strong>
          </p>

          {/* Quantity selection */}
          <div
            style={{
              margin: "20px 0",
              display: "flex",
              alignItems: "center",
            }}
          >
            <button onClick={handleDecrement} style={{ padding: "5px 10px" }}>
              -
            </button>
            <span style={{ margin: "0 15px", fontSize: "18px" }}>{quantity}</span>
            <button onClick={handleIncrement} style={{ padding: "5px 10px" }}>
              +
            </button>
          </div>

          <p>
            Total Price: <strong>₹{totalPrice}</strong>
          </p>

          <label>Select Payment Method:</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            style={{ marginTop: "10px", padding: "5px" }}
          >
            <option value="UPI">UPI</option>
            <option value="Wallet">Wallet</option>
          </select>

          <button
            onClick={handlePay}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              cursor: "pointer",
              background: "#6a11cb",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
          >
            Pay ₹{totalPrice}
          </button>

          {/* Recharge button */}
          {showRecharge && (
            <button
              onClick={handleRecharge}
              style={{
                marginTop: "10px",
                padding: "8px 15px",
                background: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Recharge Wallet +₹500
            </button>
          )}

          {/* Error / Success message */}
          {error && (
            <p style={{ color: error.includes("Insufficient") ? "red" : "green", marginTop: "10px" }}>
              {error}
            </p>
          )}

          {/* Links */}
          <div style={{ marginTop: "20px" }}>
            <Link to="/wallet" style={{ marginRight: "20px", color: "#6a11cb" }}>
              💼 View Wallet
            </Link>
            <Link to="/" style={{ color: "#6a11cb" }}>
              ⬅ Back to Passes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PassDetails;
