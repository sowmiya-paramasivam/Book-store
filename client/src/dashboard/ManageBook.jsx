import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageBook = () => {
  const [allbooks, setallbooks] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/all-books`).then(res => res.json()).then(data => setallbooks(data));
  }, [])

  // deleted books 
  const handleDelete = (id) => {
    console.log(id);
    fetch(`${import.meta.env.VITE_API_BASE_URL}/books/${id}`, {
      method: "DELETE",
    }).then(res => res.json()).then(data => alert("book is deleted sucessfully"))
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>

      {/* table for book edit */}
      <table className="w-full max-w-[900px] mx-auto border border-gray-300 shadow-xl rounded-lg overflow-hidden">
        {/* Table Header */}
        <thead className="bg-gradient-to-r from-teal-500 to-blue-500 text-white text-lg">
          <tr>
            <th className="px-6 py-3 text-left">No.</th>
            <th className="px-6 py-3 text-left">Book Name</th>
            <th className="px-6 py-3 text-left">Author Name</th>
            <th className="px-6 py-3 text-left">Category</th>
            <th className="px-6 py-3 text-left">Price</th>
            <th className="px-6 py-3 text-left">Actions</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="divide-y">
          {allbooks.map((book, index) => (
            <tr
              key={book._id}
              className={`transition-all duration-300 ${index % 2 === 0
                  ? "bg-gray-100 dark:bg-gray-800"
                  : "bg-gray-200 dark:bg-gray-700"
                } hover:bg-teal-500 hover:text-white dark:hover:bg-gray-900`}
            >
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {index + 1}
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {book.bookTitle}
              </td>
              <td className="px-6 py-4">{book.authorName}</td>
              <td className="px-6 py-4">{book.category}</td>
              <td className="px-6 py-4 font-bold text-green-600 dark:text-green-400">
                {book.price}
              </td>
              <td className="px-6 py-4 flex gap-3">
                {/* Edit Button */}
                <Link
                  to={`/admin/dashboard/edit-books/${book._id}`}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded transition-all duration-300"
                >
                  Edit
                </Link>

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(book._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded transition-all duration-300"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ManageBook
