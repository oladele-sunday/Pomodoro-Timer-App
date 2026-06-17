import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Timer from "../../pages/Timer/Timer";
// import TaskList from "../components/Task/TaskList";
// import SettingsModal from "../components/settings/SettingsModal";

function Dashboard() {
  const [showSettings, setShowSettings] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[rgb(246,238,243)] flex flex-col">
      
      {/* NAVBAR */}
      <Navbar />

      {/* TOP ACTIONS */}
      <div className="flex justify-end px-6 pt-4">
        <button
          onClick={() => navigate("/profile")}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          Profile
        </button>
      </div>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col items-center gap-8 px-4 py-10">
        
        <h2 className="text-gray-600 text-sm uppercase tracking-widest">
          Stay focused. One session at a time.
        </h2>

        {/* TIMER */}
        {/* <Timer /> */}

        <div className="w-full max-w-md border-t border-gray-300" />

        {/* TASK LIST */}
        {/* <TaskList /> */}

      </main>

      {/* FOOTER */}
      <Footer />

      {/* SETTINGS MODAL */}
      {/*
      <SettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
      />
      */}
    </div>
  );
}

export default Dashboard;