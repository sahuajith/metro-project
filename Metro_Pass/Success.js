// import React from "react";
// import { Link } from "react-router-dom";

// function Success() {
//   return (
//     <div className="pass-success">
//       <h1>✅ Payment Successful!</h1>
//       <p>Your travel pass has been activated.</p>

//       <Link to="/">⬅ Go Back to Home</Link>
//     </div>
//   );
// }

// export default Success;
import React from "react";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "linear-gradient(to right, #11998e, #38ef7d)",
        color: "white",
        padding: "50px 20px",
        textAlign: "center",
      }}
    >
      <h1>🎉 Payment Successful!</h1>
      <p style={{ fontSize: "18px", marginTop: "20px" }}>
        Your pass has been booked successfully.
      </p>

      {/* Button to go to My Cart */}
      <Link
        to="/mycart"
        style={{
          marginTop: "30px",
          padding: "12px 25px",
          background: "#fff",
          color: "#11998e",
          fontWeight: "bold",
          borderRadius: "5px",
          textDecoration: "none",
        }}
      >
        🛒 View My Cart
      </Link>

      {/* Optional: Back to Home */}
      <Link
        to="/"
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#6a11cb",
          color: "white",
          borderRadius: "5px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        ⬅ Back to Passes
      </Link>
    </div>
  );
}

export default Success;

