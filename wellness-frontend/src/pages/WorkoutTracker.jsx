import { useState, useEffect } from "react";

function WorkoutTracker() {

  const userId = localStorage.getItem("userId");

  const [exerciseType, setExerciseType] = useState("");
  const [duration, setDuration] = useState("");
  const [caloriesBurned, setCaloriesBurned] = useState("");
  const [workouts, setWorkouts] = useState([]);
  const [message, setMessage] = useState("");

  const fetchWorkouts = async () => {

    if (!userId) return;

    try {

      const response = await fetch(
        `http://localhost:8080/workout/user/${userId}`
      );

      if (!response.ok) throw new Error("Error fetching workouts");

      const data = await response.json();
      setWorkouts(data);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const handleSubmit = async (e) => {

    e.preventDefault();

    const workout = {
      exerciseType,
      duration: parseInt(duration),
      caloriesBurned: caloriesBurned ? parseInt(caloriesBurned) : null
    };

    try {

      const response = await fetch(
        `http://localhost:8080/workout/add?userId=${userId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(workout)
        }
      );

      if (response.ok) {

        setMessage("Workout added successfully 💪");

        setExerciseType("");
        setDuration("");
        setCaloriesBurned("");

        fetchWorkouts();

      } else {
        setMessage("Failed to add workout");
      }

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>

      <h2>Workout Tracker 🏋️</h2>

      <form onSubmit={handleSubmit} style={styles.form}>

        <input
          type="text"
          placeholder="Exercise Type"
          value={exerciseType}
          onChange={(e) => setExerciseType(e.target.value)}
          required
          style={styles.input}
        />

        <input
          type="number"
          placeholder="Duration (minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
          style={styles.input}
        />

        <input
          type="number"
          placeholder="Calories Burned"
          value={caloriesBurned}
          onChange={(e) => setCaloriesBurned(e.target.value)}
          style={styles.input}
        />

        <button style={styles.button}>Add Workout</button>

      </form>

      {message && <p>{message}</p>}

      <h3>Your Workouts</h3>

      {workouts.length === 0 ? (
        <p>No workouts logged yet.</p>
      ) : (
        workouts.map((w) => (
          <div key={w.id} style={styles.card}>
            <p><b>Exercise:</b> {w.exerciseType}</p>
            <p><b>Duration:</b> {w.duration} mins</p>
            <p><b>Calories:</b> {w.caloriesBurned || "N/A"}</p>
          </div>
        ))
      )}

    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "auto",
    padding: "30px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  button: {
    padding: "10px",
    backgroundColor: "#2e7d32",
    color: "white",
    border: "none",
    borderRadius: "5px"
  },
  card: {
    backgroundColor: "#f4f4f4",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "5px"
  }
};

export default WorkoutTracker;