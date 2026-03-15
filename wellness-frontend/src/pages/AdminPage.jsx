import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminPage() {
  const [users, setUsers] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const [meals, setMeals] = useState([]);
  const [bmiRecords, setBmiRecords] = useState([]);
  const [physicalHealth, setPhysicalHealth] = useState([]);
  const [mentalWellness, setMentalWellness] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchWorkouts();
    fetchMeals();
    fetchBmiRecords();
    fetchPhysicalHealth();
    fetchMentalWellness();
    fetchBlogs();
    fetchArticles();
  }, []);

  // ================= FETCH FUNCTIONS =================
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8080/admin/users");
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  const fetchWorkouts = async () => {
    try {
      const res = await axios.get("http://localhost:8080/admin/workouts");
      setWorkouts(res.data);
    } catch (err) {
      console.error("Error fetching workouts:", err);
    }
  };

  const fetchMeals = async () => {
    try {
      const res = await axios.get("http://localhost:8080/admin/nutrition");
      setMeals(res.data);
    } catch (err) {
      console.error("Error fetching meals:", err);
    }
  };

  const fetchBmiRecords = async () => {
    try {
      const res = await axios.get("http://localhost:8080/admin/bmi");
      setBmiRecords(res.data);
    } catch (err) {
      console.error("Error fetching BMI records:", err);
    }
  };

  const fetchPhysicalHealth = async () => {
    try {
      const res = await axios.get("http://localhost:8080/admin/physical");
      setPhysicalHealth(res.data);
    } catch (err) {
      console.error("Error fetching physical health:", err);
    }
  };

  const fetchMentalWellness = async () => {
    try {
      const res = await axios.get("http://localhost:8080/admin/mental");
      setMentalWellness(res.data);
    } catch (err) {
      console.error("Error fetching mental wellness:", err);
    }
  };

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:8080/admin/blogs");
      setBlogs(res.data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  const fetchArticles = async () => {
    try {
      const res = await axios.get("http://localhost:8080/admin/articles");
      setArticles(res.data);
    } catch (err) {
      console.error("Error fetching articles:", err);
    }
  };

  // ================= DELETE FUNCTION =================
  const handleDelete = async (type, id) => {
    try {
      await axios.delete(`http://localhost:8080/admin/${type}/${id}`);
      switch (type) {
        case "users": fetchUsers(); break;
        case "workouts": fetchWorkouts(); break;
        case "nutrition": fetchMeals(); break;
        case "bmi": fetchBmiRecords(); break;
        case "physical": fetchPhysicalHealth(); break;
        case "mental": fetchMentalWellness(); break;
        case "blogs": fetchBlogs(); break;
        case "articles": fetchArticles(); break;
        default: break;
      }
    } catch (err) {
      console.error(`Error deleting ${type}:`, err);
    }
  };

  // ================= INLINE CSS =================
  const styles = {
    page: { fontFamily: "Arial, sans-serif", padding: "20px", backgroundColor: "#f4f4f9" },
    header: { textAlign: "center", marginBottom: "30px", color: "#333" },
    section: { marginBottom: "40px", backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" },
    table: { width: "100%", borderCollapse: "collapse", marginTop: "10px" },
    th: { backgroundColor: "#007BFF", color: "#fff", padding: "10px", textAlign: "left" },
    td: { padding: "10px", borderBottom: "1px solid #ddd" },
    button: { padding: "5px 10px", backgroundColor: "#FF4C4C", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" },
    sectionHeader: { fontSize: "1.5em", color: "#007BFF", marginBottom: "10px" },
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.header}>Admin Dashboard</h1>

      {/* USERS */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>Users</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Role</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id}>
                <td style={styles.td}>{u.id}</td>
                <td style={styles.td}>{u.name}</td>
                <td style={styles.td}>{u.email}</td>
                <td style={styles.td}>{u.role}</td>
                <td style={styles.td}><button style={styles.button} onClick={() => handleDelete("users", u.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* WORKOUTS */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>Workouts</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>User ID</th>
              <th style={styles.th}>Exercise Type</th>
              <th style={styles.th}>Duration</th>
              <th style={styles.th}>Calories Burned</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map(w => (
              <tr key={w.id}>
                <td style={styles.td}>{w.userId}</td>
                <td style={styles.td}>{w.exerciseType}</td>
                <td style={styles.td}>{w.duration}</td>
                <td style={styles.td}>{w.caloriesBurned}</td>
                <td style={styles.td}>{w.date}</td>
                <td style={styles.td}><button style={styles.button} onClick={() => handleDelete("workouts", w.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* NUTRITION */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>Nutrition</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Meal Type</th>
              <th style={styles.th}>Food Item</th>
              <th style={styles.th}>Quantity</th>
              <th style={styles.th}>Calories</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {meals.map(m => (
              <tr key={m.id}>
                <td style={styles.td}>{m.mealType}</td>
                <td style={styles.td}>{m.foodItem}</td>
                <td style={styles.td}>{m.quantity}</td>
                <td style={styles.td}>{m.calories}</td>
                <td style={styles.td}>{m.date}</td>
                <td style={styles.td}><button style={styles.button} onClick={() => handleDelete("nutrition", m.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* BMI */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>BMI Records</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Weight</th>
              <th style={styles.th}>Height</th>
              <th style={styles.th}>BMI</th>
              <th style={styles.th}>Category</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {bmiRecords.map(b => (
              <tr key={b.id}>
                <td style={styles.td}>{b.weight}</td>
                <td style={styles.td}>{b.height}</td>
                <td style={styles.td}>{b.bmi}</td>
                <td style={styles.td}>{b.category}</td>
                <td style={styles.td}>{b.createdAt}</td>
                <td style={styles.td}><button style={styles.button} onClick={() => handleDelete("bmi", b.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* PHYSICAL HEALTH */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>Physical Health</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Calories</th>
              <th style={styles.th}>Sleep</th>
              <th style={styles.th}>Steps</th>
              <th style={styles.th}>Water</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {physicalHealth.map(p => (
              <tr key={p.id}>
                
                <td style={styles.td}>{p.calories}</td>
                <td style={styles.td}>{p.sleep}</td>
                <td style={styles.td}>{p.steps}</td>
                <td style={styles.td}>{p.water}</td>
                <td style={styles.td}>{p.date}</td>
                <td style={styles.td}><button style={styles.button} onClick={() => handleDelete("physical", p.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* MENTAL WELLNESS */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>Mental Wellness</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Mood</th>
              <th style={styles.th}>Stress Level</th>
              <th style={styles.th}>Meditation Minutes</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {mentalWellness.map(m => (
              <tr key={m.id}>
                <td style={styles.td}>{m.mood}</td>
                <td style={styles.td}>{m.stressLevel}</td>
                <td style={styles.td}>{m.notes}</td>
                <td style={styles.td}>{m.date}</td>
                <td style={styles.td}><button style={styles.button} onClick={() => handleDelete("mental", m.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* BLOGS */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>Blogs</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Title</th>
              <th style={styles.th}>Category</th>
              <th style={styles.th}>Content</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map(b => (
              <tr key={b.id}>
                <td style={styles.td}>{b.id}</td>
                <td style={styles.td}>{b.title}</td>
                <td style={styles.td}>{b.category}</td>
                <td style={styles.td}>{b.content}</td>
                <td style={styles.td}><button style={styles.button} onClick={() => handleDelete("blogs", b.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* ARTICLES */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>Articles</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Title</th>
              <th style={styles.th}>Category</th>
              <th style={styles.th}>Content</th>
              <th style={styles.th}>Author</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {articles.map(a => (
              <tr key={a.id}>
                <td style={styles.td}>{a.id}</td>
                <td style={styles.td}>{a.title}</td>
                <td style={styles.td}>{a.category}</td>
                <td style={styles.td}>{a.content}</td>
                <td style={styles.td}>{a.author}</td>
                <td style={styles.td}><button style={styles.button} onClick={() => handleDelete("articles", a.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default AdminPage;