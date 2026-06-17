import { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow"
      >
        <h2 className="text-2xl font-bold mb-6">Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 mb-4 rounded"
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border p-3 mb-4 rounded"
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full border p-3 mb-4 rounded"
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password (8+ characters)"
          className="w-full border p-3 mb-6 rounded"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded"
        >
          Sign Up
        </button>
      </form>

    </div>
  );
}

export default Signup;