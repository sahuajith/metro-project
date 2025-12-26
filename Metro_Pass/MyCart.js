
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// function MyCart() {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
//     setOrders(savedOrders);
//   }, []);

//   // Images for each pass type
// //   const passImages = {
// //     "Day Pass": "https://via.placeholder.com/150x150?text=Day+Pass",
// //     "Weekly Pass": "https://via.placeholder.com/150x150?text=Weekly+Pass",
// //     "Quarterly Pass": "https://via.placeholder.com/150x150?text=Quarterly+Pass",
// //     "Annual Pass": "https://via.placeholder.com/150x150?text=Annual+Pass",
// //   };
// const passImages = {
//     "Day Pass": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSEMVqXT8ZMa9RmHt2WvN8F4_G4xhRqIVKgg&s",
//     "Weekly Pass": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOcmtno5dDlSMhcQsa0ygccWPMwCloYHtjvw&s",
//     "Quarterly Pass": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9Xt9v6YXBHOfnLWsE87F07ChHlzbmMDB3g&s",
//     "Annual Pass": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk1N8rFvPi5IUZxdbbRz-93-xdT0eMXBf9-A&s",
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "linear-gradient(to right, #f7971e, #ffd200)",
//         padding: "50px 20px",
//       }}
//     >
//       <h1 style={{ textAlign: "center", marginBottom: "30px" }}>My Orders</h1>

//       {orders.length === 0 ? (
//         <p style={{ textAlign: "center", fontSize: "18px" }}>No orders yet.</p>
//       ) : (
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: "20px",
//           }}
//         >
//           {orders.map((order) => (
//             <div
//               key={order.id}
//               style={{
//                 width: "90%",
//                 maxWidth: "700px",
//                 display: "flex",
//                 background: "white",
//                 borderRadius: "15px",
//                 boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
//                 overflow: "hidden",
//                 flexWrap: "wrap",
//               }}
//             >
//               {/* Left side - Image */}
//               <div style={{ flex: 1, minWidth: "150px" }}>
//                 <img
//                   src={passImages[order.passName]}
//                   alt={order.passName}
//                   style={{
//                     width: "100%",
//                     height: "150px",
//                     objectFit: "cover",
//                   }}
//                 />
//               </div>

//               {/* Right side - Details */}
//               <div
//                 style={{
//                   flex: 2,
//                   padding: "20px",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   minWidth: "250px",
//                 }}
//               >
//                 <p>
//                   <strong>Order ID:</strong> {order.id}
//                 </p>
//                 <p>
//                   <strong>Pass:</strong> {order.passName}
//                 </p>
//                 <p>
//                   <strong>Price:</strong> ₹{order.price}
//                 </p>
//                 <p>
//                   <strong>Date:</strong> {order.date}
//                 </p>
//                 <Link
//                   to={`/pass/${order.passName}`}
//                   style={{
//                     marginTop: "10px",
//                     padding: "8px 12px",
//                     background: "#6a11cb",
//                     color: "white",
//                     borderRadius: "5px",
//                     textDecoration: "none",
//                     fontWeight: "bold",
//                     width: "fit-content",
//                   }}
//                 >
//                   View Pass
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Back to home */}
//       <div style={{ textAlign: "center", marginTop: "30px" }}>
//         <Link
//           to="/"
//           style={{
//             padding: "10px 20px",
//             background: "#6a11cb",
//             color: "white",
//             borderRadius: "5px",
//             textDecoration: "none",
//             fontWeight: "bold",
//           }}
//         >
//           ⬅ Back to Passes
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default MyCart;
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// function MyCart() {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
//     setOrders(savedOrders);
//   }, []);

//   const passImages = {
//     "Day Pass": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSEMVqXT8ZMa9RmHt2WvN8F4_G4xhRqIVKgg&s",
//     "Weekly Pass": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOcmtno5dDlSMhcQsa0ygccWPMwCloYHtjvw&s",
//     "Quarterly Pass": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9Xt9v6YXBHOfnLWsE87F07ChHlzbmMDB3g&s",
//     "Annual Pass": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk1N8rFvPi5IUZxdbbRz-93-xdT0eMXBf9-A&s",
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "linear-gradient(to right, #f7971e, #ffd200)",
//         padding: "50px 20px",
//       }}
//     >
//       <h1 style={{ textAlign: "center", marginBottom: "30px" }}>My Orders</h1>

//       {orders.length === 0 ? (
//         <p style={{ textAlign: "center", fontSize: "18px" }}>No orders yet.</p>
//       ) : (
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: "20px",
//           }}
//         >
//           {orders.map((order) => (
//             <div
//               key={order.id}
//               style={{
//                 width: "90%",
//                 maxWidth: "700px",
//                 display: "flex",
//                 background: "white",
//                 borderRadius: "15px",
//                 boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
//                 overflow: "hidden",
//                 flexWrap: "wrap",
//               }}
//             >
//               {/* Left side - Image */}
//               <div style={{ flex: 1, minWidth: "150px" }}>
//                 <img
//                   src={passImages[order.passName]}
//                   alt={order.passName}
//                   style={{
//                     width: "100%",
//                     height: "150px",
//                     objectFit: "cover",
//                   }}
//                 />
//               </div>

//               {/* Right side - Details */}
//               <div
//                 style={{
//                   flex: 2,
//                   padding: "20px",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   minWidth: "250px",
//                 }}
//               >
//                 <p>
//                   <strong>Order ID:</strong> {order.id}
//                 </p>
//                 <p>
//                   <strong>Pass:</strong> {order.passName}
//                 </p>
//                 <p>
//                   <strong>Price:</strong> ₹{order.price}
//                 </p>
//                 <p>
//                   <strong>Date:</strong> {order.date}
//                 </p>

//                 {/* View button links to OrderDetails page */}
//                 <Link
//                   to={`/order/${order.id}`}
//                   style={{
//                     marginTop: "10px",
//                     padding: "8px 12px",
//                     background: "#6a11cb",
//                     color: "white",
//                     borderRadius: "5px",
//                     textDecoration: "none",
//                     fontWeight: "bold",
//                     width: "fit-content",
//                   }}
//                 >
//                   View
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       <div style={{ textAlign: "center", marginTop: "30px" }}>
//         <Link
//           to="/"
//           style={{
//             padding: "10px 20px",
//             background: "#6a11cb",
//             color: "white",
//             borderRadius: "5px",
//             textDecoration: "none",
//             fontWeight: "bold",
//           }}
//         >
//           ⬅ Back to Passes
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default MyCart;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MyCart() {
  const [orders, setOrders] = useState([]);
  const [searchType, setSearchType] = useState(""); // Day, Weekly, etc.
  const [filterStatus, setFilterStatus] = useState(""); // Successful, Refunded, Replacement

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(savedOrders);
  }, []);

//   const passImages = {
//     "Day Pass": "https://via.placeholder.com/150x150?text=Day+Pass",
//     "Weekly Pass": "https://via.placeholder.com/150x150?text=Weekly+Pass",
//     "Quarterly Pass": "https://via.placeholder.com/150x150?text=Quarterly+Pass",
//     "Annual Pass": "https://via.placeholder.com/150x150?text=Annual+Pass",
//   };
const passImages = {
        "Day Pass": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSEMVqXT8ZMa9RmHt2WvN8F4_G4xhRqIVKgg&s",
        "Weekly Pass": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOcmtno5dDlSMhcQsa0ygccWPMwCloYHtjvw&s",
        "Quarterly Pass": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9Xt9v6YXBHOfnLWsE87F07ChHlzbmMDB3g&s",
        "Annual Pass": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk1N8rFvPi5IUZxdbbRz-93-xdT0eMXBf9-A&s",
      };
  
  const filteredOrders = orders.filter((order) => {
    const matchesType = searchType ? order.passName === searchType : true;
    const matchesStatus = filterStatus ? order.status === filterStatus : true;
    return matchesType && matchesStatus;
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #f7971e, #ffd200)",
        padding: "50px 20px",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>My Orders</h1>

      {/* Search and Filter */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "30px",
          flexWrap: "wrap",
        }}
      >
        {/* Search by pass type */}
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          style={{ padding: "8px", borderRadius: "5px" }}
        >
          <option value="">All Passes</option>
          <option value="Day Pass">Day Pass</option>
          <option value="Weekly Pass">Weekly Pass</option>
          <option value="Quarterly Pass">Quarterly Pass</option>
          <option value="Annual Pass">Annual Pass</option>
        </select>

        {/* Filter by status */}
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          style={{ padding: "8px", borderRadius: "5px" }}
        >
          <option value="">All Status</option>
          <option value="Successful">Successful</option>
          <option value="Refunded">Refunded</option>
          <option value="Replacement">Replacement</option>
        </select>
      </div>

      {filteredOrders.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "18px" }}>No orders found.</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              style={{
                width: "90%",
                maxWidth: "700px",
                display: "flex",
                background: "white",
                borderRadius: "15px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
                overflow: "hidden",
                flexWrap: "wrap",
              }}
            >
              {/* Left side - Image */}
              <div style={{ flex: 1, minWidth: "150px" }}>
                <img
                  src={passImages[order.passName]}
                  alt={order.passName}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Right side - Details */}
              <div
                style={{
                  flex: 2,
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  minWidth: "250px",
                }}
              >
                <p>
                  <strong>Order ID:</strong> {order.id}
                </p>
                <p>
                  <strong>Pass:</strong> {order.passName}
                </p>
                <p>
                  <strong>Price:</strong> ₹{order.price}
                </p>
                <p>
                  <strong>Date:</strong> {order.date}
                </p>
                <p>
                  <strong>Status:</strong> {order.status || "Successful"}
                </p>

                {/* View button links to OrderDetails page */}
                <Link
                  to={`/order/${order.id}`}
                  style={{
                    marginTop: "10px",
                    padding: "8px 12px",
                    background: "#6a11cb",
                    color: "white",
                    borderRadius: "5px",
                    textDecoration: "none",
                    fontWeight: "bold",
                    width: "fit-content",
                  }}
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Link
          to="/"
          style={{
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
    </div>
  );
}

export default MyCart;
