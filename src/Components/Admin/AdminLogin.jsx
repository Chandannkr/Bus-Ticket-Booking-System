import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../Styles/AdminLogin.css";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/info.json") // Ensure info.json exists in the 'public' folder
      .then((res) => {
        if (res.data && res.data.info) {
          setUsers(res.data.info);
        }
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  function handleLogin(e) {
    e.preventDefault();
    const userFound = users.some(
      (user) => user.user === username && user.password === password
    );

    if (userFound) {
      localStorage.setItem("isLoggedIn", "true");
      toast.success("Login success!");
      setTimeout(() => navigate("/adminhomepage", { replace: true }), 2000);
    } else {
      toast.error("Login failed! Invalid username or password.");
    }
  }

  return (
    <div className="adminLog">
      <ToastContainer position="top-center" autoClose={2000} />
      <aside className="admin_image">
        <img src="/admin.png" alt="Admin" /> {/* Ensure the image exists in 'public' */}
      </aside>
      <aside className="admin_form">
        <form onSubmit={handleLogin}>
          <label>Username:</label>
          <input
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Enter the username"
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <Link to="/adminsignup">Create Account</Link>
          <button type="submit">Submit</button>
        </form>
      </aside>
    </div>
  );
}