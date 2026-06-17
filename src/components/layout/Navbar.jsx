import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, logout } from "../../utils/auth.js";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const loggedIn = isLoggedIn();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-2 bg-surface/70 backdrop-blur-xl">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">
          bubble_chart
        </span>
        <span className="font-bold">FocusFlow</span>
      </Link>

      {/* Nav Links */}
      <nav className="flex items-center gap-6">

        <Link to="/timer">Timer</Link>
        <Link to="/Home">Home</Link>

        {/* 🔥 AUTH SECTION */}
        {!loggedIn ? (
          <>
            <Link to="/login" className="px-3 py-1">
              Login
            </Link>

            <Link
              to="/signup"
              className="bg-purple-600 text-white px-4 py-2 rounded"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <Link to="/profile">Profile</Link>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        )}

      </nav>
    </header>
  );
}

export default Navbar;