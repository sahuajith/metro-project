import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function OrderDetails() {
  const { orderId } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);
  const [message, setMessage] = useState("");
  const [showRefundOptions, setShowRefundOptions] = useState(false);
  const [selectedReasons, setSelectedReasons] = useState([]);

  // Pass images
  const passImages = {
    "Day Pass":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSEMVqXT8ZMa9RmHt2WvN8F4_G4xhRqIVKgg&s",
    "Weekly Pass":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOcmtno5dDlSMhcQsa0ygccWPMwCloYHtjvw&s",
    "Quarterly Pass":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9Xt9v6YXBHOfnLWsE87F07ChHlzbmMDB3g&s",
    "Annual Pass":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk1N8rFvPi5IUZxdbbRz-93-xdT0eMXBf9-A&s",
  };

  const refundReasons = [
    "Change of plans",
    "Accidental purchase",
    "Found cheaper option",
    "Other",
  ];

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    const found = orders.find((o) => o.id === orderId);
    if (found) setOrder(found);
  }, [orderId]);

  if (!order) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <p>Order not found.</p>
        <Link to="/mycart">⬅ Back to My Cart</Link>
      </div>
    );
  }

  const handleRefundClick = () => {
    setShowRefundOptions(true);
    setMessage("");
  };

  const handleReasonChange = (e) => {
    const reason = e.target.value;
    setSelectedReasons((prev) =>
      prev.includes(reason)
        ? prev.filter((r) => r !== reason)
        : [...prev, reason]
    );
  };

  const handleRefundSubmit = () => {
    const orderDate = new Date(order.date);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - orderDate);
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    if (diffDays > 3) {
      setMessage("❌ Refund not allowed after 3 days of purchase.");
      return;
    }

    if (selectedReasons.length === 0) {
      setMessage("❌ Please select at least one reason.");
      return;
    }

    // Update wallet
    const walletBalance = Number(localStorage.getItem("walletBalance") || 100);
    const updatedBalance = walletBalance + Number(order.price);
    localStorage.setItem("walletBalance", updatedBalance);

    setMessage(`✅ Refund successful! ₹${order.price} added to your wallet.`);

    // Optionally, update order status in localStorage to prevent multiple refunds
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    const updatedOrders = orders.map((o) =>
      o.id === order.id ? { ...o, refunded: true } : o
    );
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  const handleReplacement = () => {
    setMessage("✅ Replacement request submitted!");
    navigate("/"); // Navigate to Passes/Home page
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #36d1dc, #5b86e5)",
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
        {/* Left side - image */}
        <div style={{ flex: 1, minWidth: "250px" }}>
          <img
            src={passImages[order.passName]}
            alt={order.passName}
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
          />
        </div>

        {/* Right side - details */}
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
          <h2>{order.passName}</h2>
          <p>
            <strong>Order ID:</strong> {order.id}
          </p>
          <p>
            <strong>Price:</strong> ₹{order.price}
          </p>
          <p>
            <strong>Date:</strong> {order.date}
          </p>

          {/* Refund Section */}
          {!showRefundOptions ? (
            <button
              disabled={order.refunded}
              onClick={handleRefundClick}
              style={{
                marginTop: "15px",
                padding: "10px 20px",
                background: order.refunded ? "gray" : "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "5px",
                fontWeight: "bold",
                cursor: order.refunded ? "not-allowed" : "pointer",
              }}
            >
              {order.refunded ? "Refunded" : "Refund"}
            </button>
          ) : (
            <div style={{ marginTop: "15px" }}>
              <p>Select reason(s) for refund:</p>
              {refundReasons.map((reason) => (
                <label
                  key={reason}
                  style={{ display: "block", margin: "5px 0" }}
                >
                  <input
                    type="checkbox"
                    value={reason}
                    onChange={handleReasonChange}
                  />{" "}
                  {reason}
                </label>
              ))}
              <button
                onClick={handleRefundSubmit}
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  background: "#28a745",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Submit Refund
              </button>
            </div>
          )}

          <button
            onClick={handleReplacement}
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              background: "#ffc107",
              color: "black",
              border: "none",
              borderRadius: "5px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Replacement
          </button>

          {message && (
            <p
              style={{
                marginTop: "15px",
                color: message.includes("Refund") ? "green" : "blue",
              }}
            >
              {message}
            </p>
          )}

          <Link
            to="/mycart"
            style={{
              marginTop: "20px",
              color: "#6a11cb",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            ⬅ Back to My Cart
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;

