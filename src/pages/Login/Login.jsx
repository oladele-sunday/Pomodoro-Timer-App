import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    // 🔥 fake user (since no backend yet)
    const user = {
      name: formData.email.split("@")[0], // simple name from email
      email: formData.email,
    };

    localStorage.setItem("user", JSON.stringify(user));

    login(); // sets isLoggedIn = true

    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setFormData({ ...formData, password: e.target.value })
        }
      />

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;