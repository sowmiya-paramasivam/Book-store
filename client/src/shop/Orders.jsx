import React, { useContext } from "react";
import { CartContext } from "../contexts/CartProvider";

const Orders = () => {
  const { orders } = useContext(CartContext);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Your Orders</h2>

        {orders.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">You have no orders yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {orders.map((order, index) => (
              <div key={index} className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all">
                {/* Book Image */}
                <img
                  src={order.imageURL}
                  alt={order.bookTitle}
                  className="h-48 w-full object-cover rounded-lg"
                />

                {/* Order Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">{order.bookTitle}</h3>
                  <p className="text-gray-600 text-sm mb-2">Quantity: <span className="font-medium">{order.quantity}</span></p>
                  <p className="text-lg font-bold text-blue-700">Total: ${order.totalPrice}</p>
                  <p className="text-gray-500 text-xs mt-2">Ordered on: {order.date}</p>
                </div>

                {/* Status Badge */}
                <div className="mt-4 text-center">
                  <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Order Placed
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
