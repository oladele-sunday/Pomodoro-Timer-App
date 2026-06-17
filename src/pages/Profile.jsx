import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">

      <h1 className="text-2xl font-bold">Profile</h1>

      <button
        onClick={() => navigate("/login")}
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        Login
      </button>

      <button
        onClick={() => navigate("/signup")}
        className="border border-purple-600 px-4 py-2 rounded"
      >
        Sign Up
      </button>

    </div>
  );
}

export default Profile;