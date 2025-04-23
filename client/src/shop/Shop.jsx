import React, { useEffect, useState, useContext } from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartProvider";

const Shop = () => {
  const [Books, setBooks] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/all-books`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="px-4 lg:px-24 bg-teal-100 gap-5 mt-24">
      <h2 className="text-5xl font-bold text-center ">All Books Are Here</h2>
      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {Books.map((book) => (
          <Card key={book._id}>
            <img src={book.imageURL} alt="" className="h-94" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.bookTitle}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2024 so far, in reverse chronological order.
            </p>
            <div className="flex justify-between items-center gap-4 mt-4">
              {/* Buy Now Button */}
              <Link to={`/order/${book._id}`} className="w-1/2">
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 font-semibold text-white py-3 px-5 rounded-xl shadow-md hover:from-blue-700 hover:to-blue-900 transition-transform transform hover:scale-105">
                  Buy Now
                </button>
              </Link>

              <button
                onClick={() => addToCart(book)}
                className="w-1/2 bg-gradient-to-r from-green-600 to-green-800 font-semibold text-white py-3 px-5 rounded-xl shadow-md hover:from-green-700 hover:to-green-900 transition-transform transform hover:scale-105"
              >
                Add to Cart
              </button>
            </div>

          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
