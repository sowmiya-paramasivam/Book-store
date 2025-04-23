import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/Authprovidor";
import { FaBook, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setLoading(true);
      fetch(`${import.meta.env.VITE_API_BASE_URL}/orders?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setOrders(data);
          setLoading(false);
        })
        .catch((err) => console.error(err));
    }
  }, [user]);

  const handleOrderClick = (id) => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/orders/${id}`)
      .then((res) => res.json())
      .then((data) => setSelectedOrder(data))
      .catch((err) => console.error(err));
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        <p className="text-xl font-semibold">Please log in to view your dashboard.</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen text-white w-full overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-60 z-0"></div>

      {/* Dashboard Content */}
      <div className="relative z-10 py-10 px-6">
        <div className="max-w-6xl mx-auto bg-teal-400 bg-opacity-90 p-8 rounded-2xl shadow-lg animate-fade-in-up">
          <h1 className="text-4xl font-bold text-center mb-6 animate-fade-in-down">Dashboard</h1>
          <p className="text-center text-gray-100 animate-fade-in-up">Welcome, {user?.displayName}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <Link to="/shop" className="dashboard-card bg-blue-500 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition transform duration-300 animate-slide-in-left">
              <FaBook className="text-5xl mx-auto" />
              <h3 className="mt-3 text-xl font-semibold">Books</h3>
            </Link>

            <Link to="/orders" className="dashboard-card bg-green-500 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition transform duration-300 animate-fade-in">
              <FaShoppingCart className="text-5xl mx-auto" />
              <h3 className="mt-3 text-xl font-semibold">Orders</h3>
            </Link>

            <Link to="/wishlist" className="dashboard-card bg-red-500 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition transform duration-300 animate-slide-in-right">
              <FaHeart className="text-5xl mx-auto" />
              <h3 className="mt-3 text-xl font-semibold">Wishlist</h3>
            </Link>
          </div>
          <div className="mt-8 bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-md animate-fade-in-up">
            <FaUser className="text-5xl text-purple-400" />
            <h3 className="mt-3 text-xl font-semibold">Profile & Settings</h3>
            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Manage Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
