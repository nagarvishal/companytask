import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
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

        // Validate
        if (!form.username || !form.password) {
            setMsg("Username and password are required");
            return;
        }

        setLoading(true);
        setMsg("");

        try {
            const response = await fetch("http://localhost:4500/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });

            const data = await response.json();

            console.log("data=>", data);

            if (data.error) {
                setMsg(data.message || "Invalid username or password");
            } else {
                setMsg("Login successful!");

                
                if (data.data.token) {
                    localStorage.setItem("username", data.data.username);
                    localStorage.setItem("token", data.data.token);
                    sessionStorage.setItem("token", data.data.token);
                    sessionStorage.setItem("username", data.data.username);
                    navigate("/product");
                }
                else{
                    setMsg("Something went wrong!")
                }


            }
        } catch (error) {
            setMsg("Something went wrong!");
        }

        setLoading(false);
    };

    return (
        <div style={{
            width: "350px",
            margin: "40px auto",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px"
        }}>
            <h2>Login</h2>
            

            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    required
                    style={{ width: "100%", padding: "8px", margin: "6px 0", border: "1px solid gray" }}
                />

                <label>Password</label>
                <input

                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    style={{ width: "100%", padding: "8px", margin: "6px 0", border: "1px solid gray" }}
                />

                <button
                    type="submit"
                    disabled={loading}
                    style={{ width: "100%", padding: "10px", marginTop: "10px" }}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
                <div onClick={()=>{
                    navigate("/user/create");
                }}>New User? Register Here</div>
            </form>

            {msg && <p style={{ marginTop: "10px" }}>{msg}</p>}
        </div>
    );
};

export default UserLogin;
