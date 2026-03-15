import { useEffect, useState } from "react";
import { getAllBlogs, createBlog, deleteBlog } from "../api/api";

function UserBlogs() {

  const userId = localStorage.getItem("userId");

  const [blogs, setBlogs] = useState([]);
  const [expandedBlog, setExpandedBlog] = useState(null);

  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});

  const [showForm, setShowForm] = useState(false);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {

    try {

      const res = await getAllBlogs();

      if (Array.isArray(res.data)) {
        setBlogs(res.data);
      } else {
        setBlogs([]);
      }

    } catch (error) {
      console.error("Error loading blogs:", error);
    }

  };

  /* ================= CREATE BLOG ================= */

  const handleSubmit = async (e) => {

    e.preventDefault();

    const blog = {
      title,
      category,
      content
    };

    try {

      await createBlog(userId, blog);

      setTitle("");
      setCategory("");
      setContent("");

      setShowForm(false);

      loadBlogs();

    } catch (error) {
      console.error("Error creating blog:", error);
    }

  };

  /* ================= DELETE BLOG ================= */

  const handleDelete = async (blogId, ownerId) => {

    if (parseInt(userId) !== ownerId) {
      alert("You can only delete your own blog");
      return;
    }

    try {

      await deleteBlog(blogId);

      loadBlogs();

    } catch (error) {
      console.error("Error deleting blog:", error);
    }

  };

  /* ================= READ MORE ================= */

  const toggleReadMore = (id) => {

    if (expandedBlog === id) {
      setExpandedBlog(null);
    } else {
      setExpandedBlog(id);
    }

  };

  /* ================= LIKE ================= */

  const handleLike = (id) => {

    setLikes({
      ...likes,
      [id]: (likes[id] || 0) + 1
    });

  };

  /* ================= COMMENT ================= */

  const handleCommentChange = (id, text) => {

    setComments({
      ...comments,
      [id]: text
    });

  };

  return (

    <div style={containerStyle}>

      <div style={headerStyle}>
        <h1>WellNest Community Feed 🌿</h1>

        <button
          style={createButton}
          onClick={()=>setShowForm(!showForm)}
        >
          {showForm ? "Close" : "Create Blog"}
        </button>
      </div>


      {/* CREATE BLOG FORM */}

      {showForm && (

        <form onSubmit={handleSubmit} style={formStyle}>

          <input
            placeholder="Blog Title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            required
          />

          <input
            placeholder="Category (Fitness / Mental Health / Nutrition)"
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
            required
          />

          <textarea
            placeholder="Share your wellness journey..."
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            required
          />

          <button style={publishButton}>Publish</button>

        </form>

      )}


      {/* BLOG FEED */}

      <div style={feedContainer}>

        {blogs.map(blog => {

          const expanded = expandedBlog === blog.id;

          return (

            <div key={blog.id} style={cardStyle}>

              <h3>{blog.title}</h3>

              <p style={categoryStyle}>{blog.category}</p>

              <p style={authorStyle}>
                Posted by User #{blog.userId}
              </p>

              <p>
                {expanded
                  ? blog.content
                  : blog.content.substring(0,120) + "..."}
              </p>

              <button
                style={readMoreBtn}
                onClick={()=>toggleReadMore(blog.id)}
              >
                {expanded ? "Show Less" : "Read More"}
              </button>


              <div style={actionBar}>

                <button
                  style={likeBtn}
                  onClick={()=>handleLike(blog.id)}
                >
                  ❤️ {likes[blog.id] || 0}
                </button>

                {parseInt(userId) === blog.userId && (

                  <button
                    style={deleteBtn}
                    onClick={()=>handleDelete(blog.id, blog.userId)}
                  >
                    Delete
                  </button>

                )}

              </div>             

            </div>

          );

        })}

      </div>

    </div>

  );

}


/* ================= STYLES ================= */

const containerStyle = {
  padding:"40px",
  maxWidth:"900px",
  margin:"auto"
};

const headerStyle = {
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center",
  marginBottom:"30px"
};

const createButton = {
  background:"#27ae60",
  border:"none",
  padding:"10px 16px",
  color:"white",
  borderRadius:"6px",
  cursor:"pointer"
};

const formStyle = {
  display:"flex",
  flexDirection:"column",
  gap:"10px",
  marginBottom:"40px",
  background:"#f9f9f9",
  padding:"20px",
  borderRadius:"10px"
};

const publishButton = {
  padding:"10px",
  background:"#2ecc71",
  border:"none",
  color:"white",
  borderRadius:"6px",
  cursor:"pointer"
};

const feedContainer = {
  display:"flex",
  flexDirection:"column",
  gap:"25px"
};

const cardStyle = {
  background:"white",
  padding:"20px",
  borderRadius:"10px",
  boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
};

const categoryStyle = {
  color:"#27ae60",
  fontWeight:"bold"
};

const authorStyle = {
  fontSize:"12px",
  color:"gray"
};

const readMoreBtn = {
  marginTop:"10px",
  border:"none",
  background:"#3498db",
  color:"white",
  padding:"6px 10px",
  borderRadius:"5px",
  cursor:"pointer"
};

const actionBar = {
  marginTop:"15px",
  display:"flex",
  gap:"10px"
};

const likeBtn = {
  border:"none",
  background:"#f1f1f1",
  padding:"6px 12px",
  borderRadius:"5px",
  cursor:"pointer"
};

const deleteBtn = {
  border:"none",
  background:"#e74c3c",
  color:"white",
  padding:"6px 12px",
  borderRadius:"5px",
  cursor:"pointer"
};

const commentSection = {
  marginTop:"10px"
};

export default UserBlogs;