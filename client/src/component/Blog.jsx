import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Blog = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/all-books`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <section className="mt-16 px-4 lg:px-24 bg-teal-100 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <motion.h2
          className="text-4xl font-bold text-teal-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          📖 Latest <span className="text-black">Blogs</span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-800 mt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Stay updated with the latest book trends, recommendations, and literary insights.
        </motion.p>
      </div>

      {/* Blog Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {books.map((book) => (
          <motion.div
            key={book._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            {/* Full-Width Image */}
            <motion.img
              src={book.imageURL}
              alt={book.bookTitle}
              className="w-full h-78 object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* Book Details */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-teal-700 mb-5">{book.bookTitle}</h3>

              {/* Read More Button */}
              <Link to={`/books/${book._id}`}>
                <motion.button
                  className="mt-4 inline-block bg-teal-600 text-white px-5 py-2 rounded-md hover:bg-teal-700 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  Read More
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Blog;
