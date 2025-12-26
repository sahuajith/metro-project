import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Wallet() {
  const [balance, setBalance] = useState(0);
  const [rechargeAmount, setRechargeAmount] = useState("");
  const [message, setMessage] = useState("");

  // Load wallet balance from localStorage
  useEffect(() => {
    const storedBalance = localStorage.getItem("walletBalance");
    if (storedBalance === null) {
      localStorage.setItem("walletBalance", 100);
      setBalance(100);
    } else {
      setBalance(Number(storedBalance));
    }
  }, []);

  const handleRecharge = () => {
    const amount = Number(rechargeAmount);
    if (isNaN(amount) || amount <= 0) {
      setMessage("❌ Enter a valid amount");
      return;
    }

    const updatedBalance = balance + amount;
    localStorage.setItem("walletBalance", updatedBalance);
    setBalance(updatedBalance);
    setRechargeAmount("");
    setMessage("✅ Recharge Successful!");
  };

  return (
    <div
      className="pass-form"
      style={{
        background: "linear-gradient(to bottom right, #6a11cb, #2575fc)",
        minHeight: "100vh",
        color: "white",
        textAlign: "center",
        paddingTop: "50px",
      }}
    >
      <h1>💼 Wallet</h1>
      <h2>Available Balance: ₹{balance}</h2>

      <div style={{ marginTop: "30px" }}>
        <h3>Recharge Wallet</h3>
        <input
          type="number"
          placeholder="Enter amount"
          value={rechargeAmount}
          onChange={(e) => setRechargeAmount(e.target.value)}
          style={{ padding: "10px", width: "200px", marginRight: "10px" }}
        />
        <select
          style={{ padding: "10px", marginRight: "10px" }}
          value="UPI"
          
        >
          <option>UPI</option>
          <option>Phone Pay</option>
          <option>Paytm</option>
          <option>Google Pay</option>
        </select>
        <button
          onClick={handleRecharge}
          style={{ padding: "10px 20px", cursor: "pointer" }}
        >
          Recharge
        </button>
      </div>

      {message && <p style={{ marginTop: "20px", fontWeight: "bold" }}>{message}</p>}

      <br /><br />
      <Link to="/" style={{ color: "white", textDecoration: "underline" }}>
        ⬅ Back to Home
      </Link>
    </div>
  );
}

export default Wallet;
