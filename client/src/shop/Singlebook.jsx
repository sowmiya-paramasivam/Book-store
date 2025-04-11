import React from "react";
import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";

const SingleBook = () => {
  const { bookTitle, imageURL, authorName, category, bookDescription } = useLoaderData();

  return (
    <motion.div
      className="mt-28 px-4 lg:px-24 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Book Image */}
      <motion.div
        className="relative group"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img
          src={imageURL}
          alt={bookTitle}
          className="h-96 object-cover rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
      </motion.div>

      {/* Book Details */}
      <div className="bg-white p-8 mt-6 rounded-lg shadow-lg w-full max-w-2xl animate-fadeIn">
        <motion.h2
          className="text-3xl font-bold text-teal-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {bookTitle}
        </motion.h2>

        <motion.h3
          className="text-xl text-gray-600 mt-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          by {authorName}
        </motion.h3>

        <motion.p
          className="text-lg font-semibold text-teal-600 mt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Category: {category}
        </motion.p>

        <motion.p
          className="text-gray-700 mt-4 leading-relaxed"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {bookDescription}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default SingleBook;
