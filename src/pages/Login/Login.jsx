import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Validate user

    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow"
      >
        <h2 className="text-2xl font-bold mb-6">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 mb-4 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 mb-6 rounded"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;