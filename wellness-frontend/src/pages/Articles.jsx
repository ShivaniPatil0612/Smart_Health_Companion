import { useState, useEffect } from "react";
import { createArticle, getAllArticles, deleteArticle } from "../api/api";

function Articles() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Health");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = () => {
    getAllArticles()
      .then((res) => setArticles(res.data))
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const articleData = {
      title,
      content,
      category
    };

    createArticle(articleData)
      .then(() => {
        setTitle("");
        setContent("");
        setCategory("Health");
        loadArticles();
      })
      .catch((err) => console.error(err));
  };

  const handleDelete = (id) => {
    deleteArticle(id)
      .then(() => loadArticles())
      .catch((err) => console.error(err));
  };

  return (
    <div style={styles.container}>

      <h2 style={styles.heading}>Trainer Articles 📝</h2>

      {/* Create Article Form */}
      <form style={styles.form} onSubmit={handleSubmit}>

        <input
          style={styles.input}
          type="text"
          placeholder="Article Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <select
          style={styles.select}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Health</option>
          <option>Nutrition</option>
          <option>Fitness</option>
          <option>Mental Wellness</option>
        </select>

        <textarea
          style={styles.textarea}
          placeholder="Write article content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <button style={styles.button}>Publish Article</button>

      </form>

      {/* Article List */}

      <div style={styles.articleContainer}>

        {articles.length === 0 ? (
          <p>No articles posted yet.</p>
        ) : (
          articles.map((article) => (
            <div key={article.id} style={styles.card}>

              <div style={styles.categoryBadge(article.category)}>
                {article.category}
              </div>

              <h3 style={styles.title}>{article.title}</h3>

              <p style={styles.content}>{article.content}</p>

              <button
                style={styles.deleteButton}
                onClick={() => handleDelete(article.id)}
              >
                Delete
              </button>

            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default Articles;

// =================== Inline CSS ===================

const styles = {

  container: {
    maxWidth: "1000px",
    margin: "auto",
    padding: "30px"
  },

  heading: {
    textAlign: "center",
    marginBottom: "25px"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginBottom: "30px",
    background: "#f8f9fa",
    padding: "20px",
    borderRadius: "10px"
  },

  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },

  select: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },

  textarea: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    height: "120px"
  },

  button: {
    padding: "10px",
    backgroundColor: "#2ecc71",
    border: "none",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold"
  },

  articleContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
    gap: "20px"
  },

  card: {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    position: "relative"
  },

  title: {
    marginBottom: "10px"
  },

  content: {
    fontSize: "14px",
    color: "#555"
  },

  deleteButton: {
    marginTop: "15px",
    padding: "6px 10px",
    border: "none",
    backgroundColor: "#e74c3c",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer"
  },

  categoryBadge: (category) => {

    let color = "#3498db";

    if (category === "Nutrition") color = "#27ae60";
    if (category === "Fitness") color = "#e67e22";
    if (category === "Mental Wellness") color = "#9b59b6";

    return {
      position: "absolute",
      top: "10px",
      right: "10px",
      backgroundColor: color,
      color: "white",
      padding: "4px 10px",
      borderRadius: "20px",
      fontSize: "12px"
    };
  }

};