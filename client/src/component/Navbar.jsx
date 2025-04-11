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

  const { user } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  // Toggle Menu
  const togglemenu = () => {
    setIsMenuOpen(!IsMenuOpen);
  };

  // Handle Sticky Navbar on Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation Items
  const navItems = [
    { Link: "Home", path: "/" },
    { Link: "About", path: "/about" },
    { Link: "Shop", path: "/shop" },
    { Link: "Sell Your Book", path: "/admin/dashboard" },
    { Link: "Blog", path: "/blog" },
  ];

  return (
    <>
      <header className="w-full fixed top-0 left-0 right-0 transition-all duration-300 ease-in bg-teal-50">
        <nav className={`py-4 px-4 lg:px-24 ${IsSticky ? "sticky top-0 bg-blue-300 shadow-lg" : ""}`}>
          <div className="flex justify-between items-center text-base gap-8">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-blue-700 flex items-center gap-3">
              <FaBlog className="inline-block" /> Books
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-12">
              {navItems.map((item, index) => (
                <Link key={index} to={item.path} className="text-base text-black uppercase hover:text-blue-700">
                  {item.Link}
                </Link>
              ))}
            </div>

            {/* Icons Section */}
            <div className="flex items-center space-x-6">
              {/* Wishlist Icon */}
              <div className="relative">
                <Link to="/wishlist">
                  <FaHeart className="w-6 h-6 text-black hover:text-red-600" />
                  {wishlist.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      {wishlist.length}
                    </span>
                  )}
                </Link>
              </div>

              {/* Cart Icon */}
              <div className="relative">
                <Link to="/orders">
                  <FaCartShopping className="w-6 h-6 text-black hover:text-blue-700" />
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      {cart.length}
                    </span>
                  )}
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button onClick={togglemenu} className="text-black focus:outline-none">
                  {IsMenuOpen ? <FaXmark className="h-5 w-5" /> : <FaBarsStaggered className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`space-y-4 px-4 mt-12 py-7 bg-blue-700 ${IsMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
            {navItems.map((item, index) => (
              <Link key={index} to={item.path} className="block text-base text-white uppercase">
                {item.Link}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
