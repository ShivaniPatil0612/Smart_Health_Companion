import React, { useState } from "react";
import axios from "axios";

function Login({ setIsLoggedIn }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {

      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          email: email,
          password: password
        }
      );

      const { token, id, role } = response.data;

      // normalize role (IMPORTANT FIX)
      const cleanedRole = role.replace("ROLE_", "");

      // Store user data
      localStorage.setItem("token", token);
      localStorage.setItem("userId", id);
      localStorage.setItem("role", cleanedRole);
      localStorage.setItem("isLoggedIn", "true");

      // Update login state
      setIsLoggedIn(true);

      // Redirect based on role
      if (cleanedRole === "TRAINER") {
        window.location.href = "/trainer-dashboard";
      } else {
        window.location.href = "/dashboard";
      }

    } catch (err) {
      setError("Invalid email or password");
    }
  };


  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>

        <h2 style={{ textAlign: "center" }}>Login</h2>

        {error && <p style={styles.error}>{error}</p>}

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Login
        </button>

        <p style={styles.link}>
          <a href="/forgot-password">Forgot Password?</a>
        </p>

        <p style={styles.link}>
          Don't have an account? <a href="/register">Register</a>
        </p>

      </form>
    </div>
  );
}


// SAME UI STYLES
const styles = {

  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  },

  form: {
    background: "#fff",
    padding: "30px",
    borderRadius: "8px",
    width: "350px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  },

  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },

  button: {
    width: "100%",
    padding: "10px",
    background: "#145334",
    color: "#f3f6f4",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },

  link: {
    textAlign: "center",
    marginTop: "10px"
  },

  error: {
    color: "red",
    textAlign: "center"
  }

};

export default Login;