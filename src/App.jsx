import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import Footer from "./components/layout/Footer";
import Timer from "./pages/Timer";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <div className="pt-24">
              <Navbar />
              <Hero />
              <Footer />
            </div>
          }
        />

        {/* TIMER PAGE */}
        <Route path="/timer" element={<Timer />} />        
        {/* DASHBOARD PAGE */}
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;