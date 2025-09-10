import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-green-600 p-4 text-white flex justify-between">
        <h1 className="font-bold text-xl">Grocery Store</h1>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>

      {/* Pages */}
      <div className="p-6">
        <Routes>
          <Route path="/" element={<h2>Welcome to Grocery Store</h2>} />
          <Route path="/products" element={<h2>Product Listing</h2>} />
          <Route path="/cart" element={<h2>Your Cart</h2>} />
          <Route path="/login" element={<h2>Login Page</h2>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
