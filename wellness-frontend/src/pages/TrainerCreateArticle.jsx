import { useState } from "react";

function TrainerCreateArticle() {

  const [article, setArticle] = useState({
    title: "",
    content: "",
    category: "",
    trainerName: "Trainer"
  });

  const handleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8080/articles/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(article)
    });

    alert("Article Posted Successfully!");

    setArticle({
      title: "",
      content: "",
      category: "",
      trainerName: "Trainer"
    });
  };

  return (
    <div style={{padding:"40px"}}>
      <h2>Create Article</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={article.title}
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={article.category}
          onChange={handleChange}
        />

        <textarea
          name="content"
          placeholder="Content"
          value={article.content}
          onChange={handleChange}
        />

        <button type="submit">Publish</button>

      </form>
    </div>
  );
}

export default TrainerCreateArticle;