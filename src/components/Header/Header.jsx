import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../../firebase.js';
import "./Header.css";


export default function Header() {
  const { currentUser } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();
  const auth = getAuth(app);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsProfileOpen(false);
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="shadow sticky z-50 top-0 bg-white">
      <nav className="navbar px-4 lg:px-6 py-2.5">
        <div className=" flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="ps-4 flex items-center">
            <img
              src="assets/my_logo.png"
              className=" h-12 w- Logo"
              alt="Logo"
            />
          </Link>

          {/* Right side buttons */}
          <div className="flex items-center lg:order-2 gap-3">
            {currentUser ? (
              // User profile dropdown when logged in
              <div className="relative" ref={profileRef}>
                <button
                  onClick={toggleProfile}
                  className="flex items-center gap-2 text-white hover:text-orange-600 focus:outline-none"
                >
                  <span className="hidden md:inline font-medium">
                    {(currentUser.displayName || currentUser.email.split('@')[0])
                      .toLowerCase()
                      .split(' ')
                      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(' ')}
                  </span>

                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-medium">
                    {currentUser.displayName?.charAt(0).toUpperCase() ||
                      currentUser.email.charAt(0).toUpperCase()}
                  </div>
                </button>

                {/* Profile dropdown menu */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    {/* <Link
                      to={`/profile/${currentUser.uid}`}
                      onClick={() => setIsProfileOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Your Profile
                    </Link> */}
                    <Link
                      to="/settings"
                      onClick={() => setIsProfileOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              // Auth buttons when not logged in
              <>
                <div className="hidden md:flex gap-3">
                  <Link
                    to="/login"
                    className="text-white hover:text-white hover:bg-orange-600 font-medium rounded-lg text-sm px-4 py-2 lg:py-2.5 focus:outline-none transition-colors duration-300 border border-gray-300 hover:border-orange-600"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 font-medium rounded-lg text-sm px-4 py-2 lg:py-2.5 focus:outline-none transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                    Register
                  </Link>
                </div>
              </>
            )}

            {/* <a
              href="https://www.fiverr.com/ayushtiwari226"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-blue-700 hover:bg-blue-500 font-medium rounded-lg text-sm px-4 py-2 lg:py-2.5 focus:outline-none cursor-pointer transition-colors duration-300"
            >
              Connect to Fiverr
            </a> */}

            {/* Hamburger Menu Button (Mobile Only) */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-gray-700 hover:text-orange-700 focus:outline-none ml-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Menu (Hidden on Mobile unless opened) */}
          <div
            className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex justify-between items-center w-full lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 font-semibold" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 font-semibold" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 font-semibold" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 font-semibold" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Services
                </NavLink>
              </li>

              {/* Mobile-only auth links */}
              {!currentUser && (
                <li className="lg:hidden mt-2">
                  <div className="flex flex-col space-y-2 pt-2">
                    <Link
                      to="/login"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-center text-gray-800 hover:text-white hover:bg-orange-600 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none transition-colors duration-300 border border-gray-300 hover:border-orange-600"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-center text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none transition-colors duration-300 shadow-md hover:shadow-lg"
                    >
                      Register
                    </Link>
                  </div>
                </li>
              )}
              {currentUser && (
                <li className="lg:hidden mt-2">
                  <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
                    {/* <Link
                      to={`/user/${currentUser.uid}`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsProfileOpen(false);
                      }}
                      className="text-center text-gray-800 hover:bg-gray-100 font-medium rounded-lg text-sm px-4 py-2"
                    >
                      Your Profile
                    </Link> */}
                    <Link
                      to="/settings"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsProfileOpen(false);
                      }}
                      className="text-center text-gray-800 hover:bg-gray-100 font-medium rounded-lg text-sm px-4 py-2"
                    >
                      Account Settings
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="text-center text-gray-800 hover:bg-gray-100 font-medium rounded-lg text-sm px-4 py-2"
                    >
                      Sign Out
                    </button>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}