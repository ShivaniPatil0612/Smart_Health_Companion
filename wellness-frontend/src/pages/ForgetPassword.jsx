import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword({ prefilledEmail = "" }) {
  const [email, setEmail] = useState(prefilledEmail);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Step 1: Send OTP
  const handleSendOtp = async () => {
    setMessage(""); setError("");
    const trimmedEmail = email?.trim();
    if (!trimmedEmail) return setError("Please enter your registered email.");

    try {
      const res = await fetch("http://localhost:8080/api/otp/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail }),
      });
      const data = await res.json();
      if (res.ok) setMessage(data.message), setStep(2);
      else setError(data.error || "Failed to send OTP.");
    } catch (err) { 
      console.error(err); 
      setError("Could not connect to server."); 
    }
  };

  // Step 2: Reset password using OTP
  const handleResetPassword = async () => {
    setMessage(""); setError("");
    const trimmedEmail = email?.trim();
    const trimmedOtp = otp?.trim();
    const trimmedPassword = newPassword?.trim();

    if (!trimmedEmail || !trimmedOtp || !trimmedPassword) {
      setError("Please enter all fields.");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/api/otp/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail, otp: trimmedOtp, newPassword: trimmedPassword }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(data.message);
        setStep(1); setEmail(""); setOtp(""); setNewPassword("");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setError(data.error || "Failed to reset password.");
      }
    } catch (err) {
      console.error(err);
      setError("Could not connect to server.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Forgot Password 🔑</h2>

      {step === 1 && (
        <>
          <input type="email" placeholder="Enter your registered email" value={email}
            onChange={(e) => setEmail(e.target.value)} style={styles.input} />
          <button onClick={handleSendOtp} style={styles.button}>Send OTP</button>
        </>
      )}

      {step === 2 && (
        <>
          <input type="text" placeholder="Enter OTP" value={otp} 
            onChange={(e) => setOtp(e.target.value)} style={styles.input} />
          <input type="password" placeholder="Enter new password" value={newPassword} 
            onChange={(e) => setNewPassword(e.target.value)} style={styles.input} />
          <button onClick={handleResetPassword} style={styles.button}>Reset Password</button>
        </>
      )}

      {message && <p style={styles.success}>{message}</p>}
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
}

const styles = {
  container: { padding: "40px", maxWidth: "400px", margin: "auto", textAlign: "center" },
  header: { marginBottom: "20px" },
  input: { width: "100%", padding: "10px", marginBottom: "15px", borderRadius: "5px", border: "1px solid #ccc" },
  button: { width: "100%", padding: "10px", backgroundColor: "#2e7d32", color: "white", border: "none", borderRadius: "5px", fontWeight: "bold", cursor: "pointer" },
  success: { color: "green", marginTop: "15px" },
  error: { color: "red", marginTop: "15px" },
};

export default ForgotPassword;