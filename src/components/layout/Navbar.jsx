// import React from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// function Navbar() {
//   const navigate = useNavigate();
//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     navigate("/login");
//   };

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-2 bg-surface/70 backdrop-blur-xl border-b border-white/20 shadow-[0px_20px_40px_rgba(0,0,0,0.04)]">
      
//       <button onClick={handleLogout}>
//         Logout
//       </button>

//       {/* Logo */}
//       <Link to="/" className="flex items-center gap-2">
//         <span className="material-symbols-outlined text-primary text-headline-md">
//           bubble_chart
//         </span>

//         <span className="text-headline-md font-bold text-primary tracking-tight">
//           FocusFlow
//         </span>
//       </Link>

//       {/* Nav Links */}
//       <nav className="hidden md:flex items-center gap-8">
//         <a className="text-label-md text-on-surface-variant hover:bg-primary/5 px-3 py-1 rounded-lg transition" href="#features">
//           Features
//         </a>

//         <a className="text-label-md text-on-surface-variant hover:bg-primary/5 px-3 py-1 rounded-lg transition" href="#how-it-works">
//           Workflow
//         </a>

//         {/* <a className="text-label-md text-on-surface-variant hover:bg-primary/5 px-3 py-1 rounded-lg transition" href="#pricing">
//           Pricing
//         </a> */}

//         <Link
//         to="/dashboard"
//           className="bg-tomato text-white px-6 py-2 rounded-full hover:opacity-90 transition"
//         >
//           Start Focusing
//         </Link>
//       </nav>

//       {/* Profile */}
//       <div className="flex items-center gap-3">
//         <Link
//         to="/login"
//         className="text-sm font-medium hover:text-primary"
//         >
//           Login
//         </Link>
//         <Link
//         to="/signup"
//         className="bg-primary text-white px-4 py-2 rounded-lg text-sm"
//         >
//           Sign Up
//         </Link>

//         <Link        
//           to="/profile"
//           className="w-10 h-10 rounded-full border-2 border-primary/20 p-0.5 block"
//         >
//           <img
//             alt="User Profile"
//             className="w-full h-full rounded-full bg-surface-container"
//             src="https://lh3.googleusercontent.com/aida-public/AB6AXuBch9NYdNA2kETpAoVSy_fnAbErEcYZXv7DsL3WwAr6P1IxtlFV21uUlwslpc6AsNJmQeG4QAePjD-_V1GS2RdkzDLxN9SknpO0Fn6IuZmdooeIWp23zeo2JOBr4uLyS_JF9pt3GZzsiw0IozjRvSDxKGKNFVWQD_6YXfEMkGuxMXJE9eNuz7ORjYLxnvC2YR_KgBBh24xVhtAR7nnXwCwKux4OsjTaOuU2f0N5ZiFtm4SuMUDUZTq7daXfElpalL7e_n4DquYrELw"
//           />
//         </Link>
//       </div>

//     </header>
//   );
// }

// export default Navbar;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, logout } from "../../utils/auth";
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
        <Link to="/dashboard">Dashboard</Link>

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