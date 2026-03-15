import { useEffect, useState } from "react";
import { getAllArticles } from "../api/api";

function UserArticles() {

  const [articles, setArticles] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    try {
      const response = await getAllArticles();
      setArticles(response.data);
    } catch (error) {
      console.error("Error fetching articles", error);
    }
  };

  const toggleReadMore = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <div style={containerStyle}>
      <h1>Health Articles 📚</h1>

      {articles.length === 0 ? (
        <p>No articles available</p>
      ) : (
        <div style={gridStyle}>
          {articles.map((article) => (
            <div key={article.id} style={cardStyle}>

              <h2>{article.title}</h2>

              <p style={categoryStyle}>
                Category: {article.category}
              </p>

              {expandedId === article.id && (
                <>
                  <p>{article.content}</p>

                  <p style={authorStyle}>
                    Trainer: {article.trainerName}
                  </p>
                </>
              )}

              <button
                onClick={() => toggleReadMore(article.id)}
                style={readMoreButton}
              >
                {expandedId === article.id ? "Read Less" : "Read More"}
              </button>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* Styles */

const containerStyle = {
  padding: "40px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "25px",
};

const cardStyle = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};

const categoryStyle = {
  fontWeight: "bold",
  color: "#4CAF50",
};

const authorStyle = {
  marginTop: "10px",
  fontSize: "14px",
  color: "gray",
};

const readMoreButton = {
  marginTop: "10px",
  padding: "8px 12px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#145334",
  color: "#fff",
  cursor: "pointer",
};

export default UserArticles;