import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-white bg-opacity-95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl gradient-text">Sowmiya</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 transition-colors duration-200 ${
                isActive('/') 
                  ? 'nav-link-active' 
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={`px-3 py-2 transition-colors duration-200 ${
                isActive('/projects') 
                  ? 'nav-link-active' 
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 transition-colors duration-200 ${
                isActive('/contact') 
                  ? 'nav-link-active' 
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Contact
            </Link>
            
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className={`px-3 py-2 transition-colors duration-200 ${
                    isActive('/dashboard') 
                      ? 'nav-link-active' 
                      : 'text-gray-600 hover:text-primary-600'
                  }`}
                >
                  Dashboard
                </Link>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">Hi, {user.name}!</span>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn-primary"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary-600 focus:outline-none focus:text-primary-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link
                to="/"
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  isActive('/') 
                    ? 'text-primary-600 bg-primary-50' 
                    : 'text-gray-600 hover:text-primary-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/projects"
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  isActive('/projects') 
                    ? 'text-primary-600 bg-primary-50' 
                    : 'text-gray-600 hover:text-primary-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  isActive('/contact') 
                    ? 'text-primary-600 bg-primary-50' 
                    : 'text-gray-600 hover:text-primary-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                      isActive('/dashboard') 
                        ? 'text-primary-600 bg-primary-50' 
                        : 'text-gray-600 hover:text-primary-600'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <div className="px-3 py-2">
                    <p className="text-sm text-gray-600 mb-2">Hi, {user.name}!</p>
                    <button
                      onClick={handleLogout}
                      className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block mx-3 my-2 btn-primary text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;