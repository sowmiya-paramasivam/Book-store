import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartProvider';

const OrderPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { placeOrder } = useContext(CartContext);
  const [book, setBook] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [step, setStep] = useState(1);
  const [totalPrice, setTotalPrice] = useState('');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/books/${id}`)
      .then(res => res.json())
      .then(data => {
        setBook(data);
        const numericPrice = parseFloat(data.price);
        setTotalPrice(formatPrice(numericPrice * quantity));
      })
      .catch(error => console.error(error));
  }, [id]);

  useEffect(() => {
    if (book && book.price) {
      const numericPrice = parseFloat(book.price);
      const total = parseFloat((numericPrice * quantity).toFixed(2));
      setTotalPrice(formatPrice(total));
    }
  }, [quantity, book]);
  
 const formatPrice = (price) => {
    const safePrice = Number(price);
    if (isNaN(safePrice)) return '$0.00';
    return `$${safePrice.toFixed(2)}`;
  };
  

  const handleConfirmOrder = () => {
    const orderDetails = {
      id: book._id,
      bookTitle: book.bookTitle,
      quantity,
      totalPrice,
      imageURL: book.imageURL,
      date: new Date().toLocaleString(),
    };

    placeOrder(orderDetails);
    setStep(3);
  };

  const handleQuantityClick = () => {
    setQuantity(prev => prev * 2);
  };

  if (!book) return <p className="text-center text-gray-500 mt-10">Loading...</p>;

  return (
    <div className="p-8 bg-white shadow-lg rounded-lg max-w-lg mx-auto mt-16 border border-gray-300">
      {/* Step Indicator */}
      <div className="flex justify-between items-center mb-6">
        {['Order Summary', 'Payment', 'Confirm'].map((label, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              step === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}
          >
            {index + 1}. {label}
          </span>
        ))}
      </div>

      {/* Step 1: Order Summary */}
      {step === 1 && (
        <>
          <h2 className="text-2xl font-bold text-gray-800 text-center">{book.bookTitle}</h2>
          <img src={book.imageURL} alt={book.bookTitle} className="h-60 mx-auto my-4 rounded-lg shadow-md" />
          <p className="text-lg font-semibold text-gray-700">
            Price: <span className="text-blue-600">{formatPrice(book.price)}</span>
          </p>

          <div className="mt-4">
            <label className="font-semibold text-gray-700">Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onClick={handleQuantityClick}
              onChange={e => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="border p-2 w-full mt-2 rounded cursor-pointer hover:border-blue-500 transition"
            />
            <p className="text-xs text-gray-400 mt-1">Click to double quantity</p>
          </div>

          <p className="text-lg font-bold mt-4">
            Total: <span className="text-green-600 transition duration-300 ease-in-out">{totalPrice}</span>
          </p>

          <button
            onClick={() => setStep(2)}
            className="mt-6 w-full bg-blue-600 text-white py-3 px-5 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Proceed to Payment
          </button>
        </>
      )}

      {/* Step 2: Payment */}
      {step === 2 && (
        <>
          <h2 className="text-2xl font-bold text-gray-800 text-center">Demo Payment Details</h2>
          <p className="text-center text-gray-600 mt-2 mb-4">Use the demo details below to simulate a payment:</p>

          <div className="bg-gray-100 p-4 rounded-lg shadow-sm text-sm">
            <p><strong>Demo Card:</strong> 4111 1111 1111 1111</p>
            <p><strong>Expiry:</strong> 12/34</p>
            <p><strong>CVV:</strong> 123</p>
            <p className="text-red-500 mt-2">* This is a test mode. No real transaction will occur.</p>
          </div>

          <button
            onClick={handleConfirmOrder}
            className="mt-6 w-full bg-blue-600 text-white py-3 px-5 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Confirm Payment
          </button>
          <button
            onClick={() => setStep(1)}
            className="mt-4 w-full text-gray-600 underline text-center"
          >
            Go Back
          </button>
        </>
      )}

      {/* Step 3: Confirmation */}
      {step === 3 && (
        <>
          <h2 className="text-2xl font-bold text-gray-800 text-center">Order Confirmed 🎉</h2>
          <p className="text-center text-gray-600 mt-2">
            Your order for <span className="font-semibold text-blue-600">{book.bookTitle}</span> has been placed!
          </p>
          <button
            onClick={() => navigate('/orders')}
            className="mt-6 w-full bg-green-600 text-white py-3 px-5 rounded-lg shadow-md hover:bg-green-700 transition"
          >
            Go to Orders
          </button>
        </>
      )}
    </div>
  );
};

export default OrderPage;
