import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterUser = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!form.username || !form.password) {
      setMsg("Username and password are required");
      return;
    }

    setLoading(true);
    setMsg("");

    try {
      const response = await fetch("http://localhost:4500/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await response.json();


      if (data.data.error) {
        setMsg(data.message || "Error creating user");
      } else {
        setMsg("User created successfully!");
        setForm({ username: "", password: "" });
      }
      navigate("/user");
    } catch (error) {
      setMsg("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div style={{ width: "350px", margin: "40px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
      <h2>Create User</h2>

      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input 
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", margin: "6px 0",border: "1px solid gray" }}
        />

        <label>Password</label>
        <input 
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", margin: "6px 0",border: "1px solid gray" }}
        />

        <button 
          type="submit" 
          disabled={loading}
          style={{ width: "100%", padding: "10px", marginTop: "10px",width:"fit-content" }}
        >
          {loading ? "Creating..." : "Create User"}
        </button>
        <div onClick={()=>{
            navigate("/user");
        }}>Already User? Login Herer</div>
      </form>

      {msg && <p style={{ marginTop: "10px" }}>{msg}</p>}
    </div>
  );
};

export default RegisterUser;
