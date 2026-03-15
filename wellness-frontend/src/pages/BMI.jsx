import { useState } from "react";
import { addBMI } from "../api/api";

function BMI() {

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiResult, setBmiResult] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    const userId = localStorage.getItem("userId");

    const response = await addBMI(userId, weight, height);

    setBmiResult(response.data.bmi);
    setCategory(response.data.category);
  };

  return (
    <div style={containerStyle}>

      <div style={cardStyle}>

        <h2>BMI Calculator</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="number"
            placeholder="Enter Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            style={inputStyle}
          />

          <input
            type="number"
            placeholder="Enter Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            style={inputStyle}
          />

          <button type="submit" style={btnStyle}>
            Calculate BMI
          </button>

        </form>

        {bmiResult && (
          <div style={{ marginTop: "20px", color: "#2e7d32" }}>
            <h3>Your BMI: {bmiResult}</h3>
            <h3>Status: {category}</h3>
          </div>
        )}

      </div>

    </div>
  );
}

export default BMI;

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "85vh",
};

const cardStyle = {
  background: "white",
  padding: "40px",
  borderRadius: "12px",
  width: "400px",
  boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
  textAlign: "center",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const btnStyle = {
  width: "100%",
  padding: "10px",
  background: "#2e7d32",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
};