import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Home/Navbar";
import Hero from "./components/Home/Hero";
import Footer from "./components/Home/Footer";
import Timer from "./pages/Timer";

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

      </Routes>

    </BrowserRouter>
  );
}

export default App;