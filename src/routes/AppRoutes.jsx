import { Routes, Route } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import Footer from "../components/layout/Footer";

import Timer from "../pages/Timer/Timer";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import ProtectedRoute from "./ProtectedRoute";
import Tasks from "../pages/Tasks/Tasks";



function HomePage() {
  return (
    <div className="pt-24">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/timer" element={<Timer />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default AppRoutes;