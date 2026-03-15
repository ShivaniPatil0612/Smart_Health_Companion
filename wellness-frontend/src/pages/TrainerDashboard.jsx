import { useEffect, useState } from "react";

function TrainerDashboard() {
  const [usersData, setUsersData] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("http://localhost:8080/trainer/dashboard")
      .then((res) => res.json())
      .then((data) => {
        setUsersData(data);
      })
      .catch((err) => console.error(err));

    fetch("http://localhost:8080/blogs/all")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });

  }, []);

  if (loading) {
    return <h2 style={{ padding: "20px" }}>Loading trainer dashboard...</h2>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Trainer Dashboard 🏋️</h2>

      {/* USER DATA SECTION */}

      <h3 style={{marginBottom:"15px"}}>User Health Data</h3>

      {usersData.map((user) => (
        <div key={user.id} style={styles.card}>
          <h3>{user.name}</h3>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Role:</b> {user.role}</p>

          <button
            style={styles.button}
            onClick={() =>
              setSelectedUser(selectedUser?.id === user.id ? null : user)
            }
          >
            {selectedUser?.id === user.id ? "Hide Data" : "View Data"}
          </button>

          {selectedUser?.id === user.id && (
            <div style={styles.dataContainer}>

              {/* Physical Health */}
              <div style={styles.section}>
                <h4>Physical Health</h4>
                {user.physicalHealthData?.length ? (
                  user.physicalHealthData.map((p, i) => (
                    <p key={i}>
                      Steps: {p.steps} | Sleep: {p.sleepHours} hrs | Date: {p.date}
                    </p>
                  ))
                ) : (
                  <p>No records</p>
                )}
              </div>

              {/* Nutrition */}
              <div style={styles.section}>
                <h4>Nutrition</h4>
                {user.nutritionData?.length ? (
                  user.nutritionData.map((n, i) => (
                    <p key={i}>
                      Calories: {n.calories} | Protein: {n.protein}g | Date: {n.date}
                    </p>
                  ))
                ) : (
                  <p>No records</p>
                )}
              </div>

              {/* Workout */}
              <div style={styles.section}>
                <h4>Workout</h4>
                {user.workouts?.length ? (
                  user.workouts.map((w, i) => (
                    <p key={i}>
                      Type: {w.type} | Duration: {w.duration} mins | Calories Burned: {w.caloriesBurned}
                    </p>
                  ))
                ) : (
                  <p>No records</p>
                )}
              </div>

              {/* Mental Wellness */}
              <div style={styles.section}>
                <h4>Mental Wellness</h4>
                {user.mentalWellness?.length ? (
                  user.mentalWellness.map((m, i) => (
                    <p key={i}>
                      Mood: {m.mood} | Stress Level: {m.stressLevel} | Date: {m.date}
                    </p>
                  ))
                ) : (
                  <p>No records</p>
                )}
              </div>

            </div>
          )}
        </div>
      ))}

      {/* BLOG SECTION */}

      <h3 style={{marginTop:"40px"}}>Community Blogs ✍️</h3>

      {blogs.length === 0 ? (
        <p>No blogs available</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id} style={styles.blogCard}>
            <h4>{blog.title}</h4>
            <p><b>Category:</b> {blog.category}</p>
            <p>{blog.content}</p>
            <p style={{color:"gray", fontSize:"14px"}}>
              Posted by User ID: {blog.userId}
            </p>
          </div>
        ))
      )}

    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    maxWidth: "1000px",
    margin: "auto",
  },
  heading: {
    marginBottom: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "20px",
    background: "#f9f9f9",
  },
  button: {
    padding: "8px 15px",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  dataContainer: {
    marginTop: "15px",
    background: "#fff",
    padding: "15px",
    borderRadius: "6px",
  },
  section: {
    marginBottom: "10px",
  },
  blogCard: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    marginTop: "10px",
    background:"#fff"
  }
};

export default TrainerDashboard;