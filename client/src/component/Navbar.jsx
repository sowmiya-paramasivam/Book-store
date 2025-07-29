import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// React Icons
import { FaBarsStaggered, FaBlog, FaCartShopping, FaHeart, FaXmark } from "react-icons/fa6";
import { AuthContext } from "../contexts/Authprovidor";
import { CartContext } from "../contexts/CartProvider";
import { WishlistContext } from "../contexts/WishlistProvider";

const Navbar = () => {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);
  const [IsSticky, setIsSticky] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { user } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  // Toggle Mobile Menu
  const togglemenu = () => setIsMenuOpen(!IsMenuOpen);

  // Sticky Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  // Navigation Items
  const navItems = [
    { Link: "Home", path: "/" },
    { Link: "About", path: "/about" },
    { Link: "Shop", path: "/shop" },
    { Link: "Sell Your Book", path: "/admin/dashboard" },
    { Link: "Blog", path: "/blog" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <div className="bg-blue-500 h-10 flex items-center overflow-hidden w-full relative">
        <h3 className="absolute whitespace-nowrap text-white text-lg md:text-xl font-normal animate-marquee">
          Books are your own store served from another mind
        </h3>
      </div>
      <nav className={`py-4 px-4 lg:px-24 transition-all duration-300 ease-in ${IsSticky ? "bg-blue-300 shadow-lg" : "bg-teal-50"}`}>
        <div className="flex justify-between items-center text-base gap-8">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-700 flex items-center gap-3">
            <FaBlog /> Books
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-12">
            {navItems.map((item, index) => (
              <Link key={index} to={item.path} className="text-base text-black uppercase hover:text-blue-700">
                {item.Link}
              </Link>
            ))}
          </div>
          {/* Icons & Auth */}
          <div className="flex items-center space-x-4">
            {/* Wishlist */}
            <Link to="/wishlist" className="relative">
              <FaHeart className="w-6 h-6 text-black hover:text-red-600" />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link to="/addcart" className="relative">
              <FaCartShopping className="w-6 h-6 text-black hover:text-blue-700" />
              {cart.reduce((total, item) => total + item.quantity, 0) > 0 && (
             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {cart.reduce((total, item) => total + item.quantity, 0)}
             </span>
              )}
            </Link>

            {/* User Profile */}
            <div className="relative">
              {user ? (
                <div className="relative group">
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500 focus:outline-none"
                  >
                    <img
                      src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                      alt="User Avatar"
                      className="w-full h-full object-cover"
                    />
                  </button>
                  {showDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                      <div className="px-4 py-2 border-b border-gray-200 text-sm text-gray-800">
                        Hello, <span className="font-semibold">{user.displayName || "User"}</span>
                      </div>
                      <ul className="py-1 text-sm text-gray-700">
                        <li>
                          <Link
                            to="/admin/dashboard"
                            className="block px-4 py-2 hover:bg-blue-100 transition"
                            onClick={() => setShowDropdown(false)}
                          >
                            Dashboard
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/settings"
                            className="block px-4 py-2 hover:bg-blue-100 transition"
                            onClick={() => setShowDropdown(false)}
                          >
                            Settings
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/logout"
                            onClick={() => {
                              setShowDropdown(false);
                            }}
                            className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-600 transition"
                          >
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  className="btn btn-sm bg-blue-600 text-white hover:bg-blue-700 rounded-full px-4 py-1 gap-3"
                >
                  Login
                </Link>
              )}
            </div>
            {/* Mobile Menu Icon */}
            <button onClick={togglemenu} className="md:hidden text-black focus:outline-none">
              {IsMenuOpen ? <FaXmark className="h-5 w-5" /> : <FaBarsStaggered className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`${IsMenuOpen ? "block fixed top-16 left-0 w-full bg-blue-700 z-40" : "hidden"}`}>
          <div className="space-y-4 px-4 py-6">
            {navItems.map((item, index) => (
              <Link key={index} to={item.path} className="block text-base text-white uppercase" onClick={() => setIsMenuOpen(false)}>
                {item.Link}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
