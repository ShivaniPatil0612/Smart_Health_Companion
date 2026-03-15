import { Link } from "react-router-dom";
import { useEffect } from "react";

function Dashboard() {

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div style={containerStyle}>
      <h1>Health Dashboard 📊</h1>

      <div style={gridStyle}>

        <Link to="/physical-health" style={cardStyle}>
          <h2>💪 Physical Health</h2>
          <p>Steps, Water, Sleep, Calories</p>
        </Link>

        <Link to="/nutrition" style={cardStyle}>
          <h2>🥗 Nutrition</h2>
          <p>Daily food & calorie tracking</p>
        </Link>

        <Link to="/mental-wellness" style={cardStyle}>
          <h2>🧠 Mental Wellness</h2>
          <p>Mood & stress monitoring</p>
        </Link>

        <Link to="/workout-tracker" style={cardStyle}>
          <h2>🏋️ Workout Tracker</h2>
          <p>Track daily workouts</p>
        </Link>

        <Link to="/bmi" style={cardStyle}>
          <h2>⚖️ BMI Calculator</h2>
          <p>Check your Body Mass Index</p>
        </Link>

        <Link to="/analytics" style={cardStyle}>
          <h2>📈 Analytics Dashboard</h2>
          <p>View health insights & trends</p>
        </Link>

        <Link to="/user-articles" style={cardStyle}>
          <h2>📚 Health Articles</h2>
          <p>Read health, fitness & nutrition tips</p>
        </Link>

        {/* NEW BLOG SECTION */}

        <Link to="/user-blogs" style={cardStyle}>
          <h2>✍️ Community Blogs</h2>
          <p>Share your wellness journey & read others</p>
        </Link>

      </div>
    </div>
  );
}

/* Styles */

const containerStyle = {
  padding: "40px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "25px",
};

const cardStyle = {
  textDecoration: "none",
  color: "#000",
  background: "#ffffff",
  padding: "25px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};

export default Dashboard;