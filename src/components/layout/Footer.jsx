import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md z-50">

      <div className="flex justify-between items-center px-4 py-3">

        {/* Home */}
        <Link
          to="/dashboard"
          className="flex flex-col items-center text-xs text-gray-600 hover:text-red-500"
        >
          <span className="material-symbols-outlined">timer</span>
          Home
        </Link>

        {/* Tasks */}
        <Link
          to="/tasks"
          className="flex flex-col items-center text-xs text-gray-600 hover:text-red-500"
        >
          <span className="material-symbols-outlined">checklist</span>
          Tasks
        </Link>

        {/* Profile */}
        <Link
          to="/profile"
          className="flex flex-col items-center text-xs text-gray-600 hover:text-red-500"
        >
          <span className="material-symbols-outlined">person</span>
          Profile
        </Link>

      </div>
    </footer>
  );
}

export default Footer;