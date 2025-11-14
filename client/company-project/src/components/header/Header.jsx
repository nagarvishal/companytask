import React, { useState } from "react";
import { Link,NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="bg-white  shadow-md w-full top-0 left-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">My Application</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/product/add" className="text-gray-700 dark:text-gray-500 hover:text-indigo-500 transition">Add Product</Link>
          <Link to="/product"  className="text-gray-700 dark:text-gray-500 hover:text-indigo-500 transition">Product List</Link>
          <Link to="/product/update" className="text-gray-700 dark:text-gray-500 hover:text-indigo-500 transition">Update Product</Link>
          <Link to="/" className="text-gray-700 dark:text-gray-500 hover:text-indigo-500 transition">Contact</Link>
          <Link to="/" className="text-gray-700 dark:text-gray-500 hover:text-indigo-500 transition">Contact</Link>
          <Link to="/user" className="text-gray-700 dark:text-gray-500 hover:text-indigo-500 transition">Login</Link>
          <Link to="/user/create" className="text-gray-700 dark:text-gray-500 hover:text-indigo-500 transition">Register</Link>
        </nav>

        {/* Right-side controls */}
        <div className="flex items-center space-x-4">
          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-gray-700 dark:text-gray-200 hover:text-indigo-500 transition"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <nav className="flex flex-col space-y-2 px-4 py-3">
            <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-indigo-500 transition">Home</a>
            <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-indigo-500 transition">About</a>
            <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-indigo-500 transition">Services</a>
            <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-indigo-500 transition">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
