import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../Styles/AdminLogin.css";

export default function AdminLogin() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [user, setUsers] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/info.json")
      .then((res) => {
        if (res.data && res.data.info) {
          setUsers(res.data.info); // Accessing the correct structure
        }
      })
      .catch((err) => console.log("Error:", err));
  }, []);

  function handleFun(e) {
    e.preventDefault();
    let userFound = user.some(
      (user) => user.user === username && user.password === password
    );

    if (userFound) {
      localStorage.setItem("isLoggedIn", "true");
      toast.success("Login success!");
      setTimeout(() => navigate("/adminhomepage"), 2000);
    } else {
      toast.error("Login failed! Invalid username or password.");
    }
  }

  return (
    <div className="adminLog">
      <ToastContainer position="top-center" autoClose={2000} />
      <aside className="admin_image">
        <img src="" alt="Admin" />
      </aside>
      <aside className="admin_form">
        <form onSubmit={handleFun}>
          <label>UserName :</label>
          <input
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Enter the username"
          />

          <label>Password :</label>
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
