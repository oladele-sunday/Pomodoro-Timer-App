import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md z-50">

      <div className="flex justify-between items-center px-4 py-3">

        {/* Focus */}
        <button className="flex flex-col items-center text-xs text-gray-600 hover:text-red-500">
          <span className="material-symbols-outlined">timer</span>
          Focus
        </button>

        {/* Tasks */}
        <button className="flex flex-col items-center text-xs text-gray-600 hover:text-red-500">
          <span className="material-symbols-outlined">checklist</span>
          Tasks
        </button>

        {/* Stats */}
        <button className="flex flex-col items-center text-xs text-gray-600 hover:text-red-500">
          <span className="material-symbols-outlined">bar_chart</span>
          Stats
        </button>

        {/* Profile */}
        <button className="flex flex-col items-center text-xs text-gray-600 hover:text-red-500">
          <span className="material-symbols-outlined">person</span>
          Profile
        </button>

        {/* Settings */}
        <button className="flex flex-col items-center text-xs text-gray-600 hover:text-red-500">
          <span className="material-symbols-outlined">settings</span>
          Settings
        </button>

      </div>
    </footer>
  );
}

export default Footer;