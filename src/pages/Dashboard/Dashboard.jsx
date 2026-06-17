import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Timer from "../Timer/Timer";
import { getUser } from "../../utils/auth";
import TaskList from "../../components/Task/TaskList";

function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("timer"); 
  const user = getUser();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="p-4 text-right">
        <p className="text-gray-700">
          Welcome, <b>{user?.name || "Guest"}</b> 👋
        </p>
      </div>

        
  

      {/* PROFILE BUTTON */}
      <div className="flex justify-end px-4 pt-4">
        <button
          onClick={() => navigate("/profile")}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          Profile
        </button>
      </div>

      {/* TAB SWITCHER */}
      <div className="flex justify-center gap-4 mt-2">
        <button
          onClick={() => setActiveTab("timer")}
          className={`px-4 py-2 rounded ${
            activeTab === "timer" ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          Timer
        </button>

        <button
          onClick={() => setActiveTab("tasks")}
          className={`px-4 py-2 rounded ${
            activeTab === "tasks" ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          Tasks
        </button>
      </div>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col items-center gap-6 px-4 py-6">

        <h2 className="text-gray-600 text-sm uppercase tracking-widest">
          Stay focused. One session at a time.
        </h2>

        {/* TIMER VIEW */}
        {activeTab === "timer" && (
          <div className="w-full max-w-md">
            <Timer />
          </div>
        )}

        {/* TASK VIEW */}
        {activeTab === "tasks" && (
          <div className="w-full max-w-md">
            <TaskList />
          </div>
        )}

      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Dashboard;