import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Welcome to Grocery Store</h2>
      <p className="text-gray-600 mb-6">
        Fresh groceries delivered to your doorstep.
      </p>
      <Link
        to="/products"
        className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700"
      >
        Shop Now
      </Link>
    </div>
  );
}

export default Home;
