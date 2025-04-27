import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SearchResult = () => {
  const { keyword } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/search-books?search=${keyword}`)
      .then(res => res.json())
      .then(data => setBooks(data));
  }, [keyword]);

  return (
    <div className="px-4 py-10">
      <h2 className="text-3xl font-semibold mb-4 text-center">
        Search results for: <span className="text-blue-700">{keyword}</span>
      </h2>
      {books.length > 0 ? (
        <ul className="space-y-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center mx-auto">
          {books.map(book => (
            <li key={book._id} className="p-4 shadow rounded bg-white flex flex-col items-center justify-center">
              <img
                src={book.imageURL}
                alt={book.bookTitle}
                className="w-32 h-40 object-cover rounded-md mb-3"
              />
              <h3 className="text-xl font-bold text-center">{book.bookTitle}</h3>
              <p className="text-gray-600 text-center">By {book.authorName}</p>
              <p className="text-sm text-gray-500 text-center">{book.category}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResult;
