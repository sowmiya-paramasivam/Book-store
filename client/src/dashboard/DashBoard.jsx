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
    <div className="min-h-screen bg-teal-600 text-white py-10 px-6 w-full">
      <div className="max-w-6xl mx-auto bg-teal-400 p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-6">Dashboard</h1>
        <p className="text-center text-gray-400">Welcome, {user?.displayName}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <Link to="/shop" className="dashboard-card bg-blue-500">
            <FaBook className="text-5xl" />
            <h3 className="mt-3 text-xl font-semibold">Books</h3>
          </Link>

          <Link to="/orders" className="dashboard-card bg-green-500">
            <FaShoppingCart className="text-5xl" />
            <h3 className="mt-3 text-xl font-semibold">Orders</h3>
          </Link>

          <Link to="/wishlist" className="dashboard-card bg-red-500">
            <FaHeart className="text-5xl" />
            <h3 className="mt-3 text-xl font-semibold">Wishlist</h3>
          </Link>
        </div>

        <h2 className="mt-10 text-2xl font-semibold">Your Orders</h2>
        <div className="mt-6 space-y-4">
          {orders.length > 0 ? (
            orders.map((order) => (
              <div
                key={order._id}
                onClick={() => handleOrderClick(order._id)}
                className="p-4 bg-gray-700 rounded-lg shadow-md cursor-pointer hover:bg-gray-600 transition"
              >
                <p className="text-lg font-semibold">Order #{order._id}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-700">No orders found.</p>
          )}
        </div>

        {selectedOrder && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Order Details</h3>
              <p>Order ID: {selectedOrder._id}</p>
              <button
                onClick={() => setSelectedOrder(null)}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <div className="mt-8 bg-gray-700 p-6 rounded-lg shadow-md">
          <FaUser className="text-5xl text-purple-600" />
          <h3 className="mt-3 text-xl font-semibold">Profile & Settings</h3>
          <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Manage Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;