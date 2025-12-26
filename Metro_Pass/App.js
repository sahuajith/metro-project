

// export default App;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PassDetails from "./PassDetails";
import Success from "./Success";
import Wallet from "./Wallet";
import MyCart from "./MyCart";
import OrderDetails from "./OrderDetails";

import Home1 from "./Home1";
import HomeWebPage1 from "./HomeWebPage1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomeWebPage1 />} /> 
      <Route path="/home" element={<Home1 />} /> 
        <Route path="/pass/:type" element={<PassDetails />} />
        <Route path="/success" element={<Success />} />
        <Route path="/mycart" element={<MyCart />} /> 
        <Route path="/wallet" element={<Wallet />} /> 
        
        <Route path="/order/:orderId" element={<OrderDetails />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
