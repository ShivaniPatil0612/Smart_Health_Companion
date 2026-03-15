import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

// ✅ Create axios instance
const API = axios.create({
  baseURL: API_BASE_URL,
});

// ✅ Automatically attach JWT to every request
// attach token if present
API.interceptors.request.use((req) => {

  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

// ================= Physical Health =================
export const savePhysicalHealthData = (data) => {
  const userId = localStorage.getItem("userId");
  return API.post(`/physical/save/${userId}`, data);
};

// ================= Nutrition =================
export const saveNutritionData = (payload) => {
  const userId = localStorage.getItem("userId");
  return API.post(`/api/nutrition/${userId}`, payload);
};

// ================= BMI =================
export const addBMI = (userId, weight, height) => {
  return API.post(
    `/api/bmi/add?userId=${userId}&weight=${weight}&height=${height}`
  );
};

// ================= Mental Wellness =================
export const saveMentalWellnessData = (userId, mood, stressLevel, note) =>
  API.post(
    `/mental-wellness/add?userId=${userId}&mood=${mood}&stressLevel=${stressLevel}&note=${note}`
  );

export const getMentalWellnessData = (userId) =>
  API.get(`/mental-wellness/user/${userId}`);

// ================= Workout =================
export const saveWorkoutData = (userId, data) =>
  API.post(`/workout/add?userId=${userId}`, data);

export const getWorkoutData = (userId) =>
  API.get(`/workout/user/${userId}`);


// ================= Articles =================
export const createArticle = (data) => {
  return API.post("/articles/create", data);
};

export const getAllArticles = () => {
  return API.get("/articles/all");
};

export const deleteArticle = (id) => {
  return API.delete(`/articles/delete/${id}`);
};

//================== Blogs =================
export const getAllBlogs = () => {
  return API.get("/blogs/all");
};

export const createBlog = (userId, blog) => {
  return API.post(`/blogs/add?userId=${userId}`, blog);
};

export const deleteBlog = (blogId) => {
  return API.delete(`/blogs/delete/${blogId}`);
};

// =================== ADMIN DASHBOARD ===================
export const getAdminDashboard = () => API.get("/api/admin/dashboard");

// =================== USERS ===================
export const getAllUsers = () => API.get("/api/admin/users");
export const deleteUser = (id) => API.delete(`/api/admin/users/${id}`);
export const updateUser = (id, data) => API.put(`/api/admin/users/${id}`, data);

// =================== TRAINERS ===================
export const getAllTrainers = () => API.get("/api/admin/trainers");
export const deleteTrainer = (id) => API.delete(`/api/admin/trainers/${id}`);
export const updateTrainer = (id, data) => API.put(`/api/admin/trainers/${id}`, data);

// =================== BLOGS ===================
export const getAllAdminBlogs = () => API.get("/api/admin/blogs");
export const deleteAdminBlog = (id) => API.delete(`/api/admin/blogs/${id}`);
export const updateBlog = (id, data) => API.put(`/api/admin/blogs/${id}`, data);

// =================== ARTICLES ===================
export const getAllAdminArticles = () => API.get("/api/admin/articles");
export const deleteAdminArticle = (id) => API.delete(`/api/admin/articles/${id}`);
export const updateArticle = (id, data) => API.put(`/api/admin/articles/${id}`, data);

// =================== USER HEALTH DATA ===================
// Assuming backend endpoints exist for fetching nested health data per user
export const getUserHealthData = (userId) => API.get(`/api/admin/users/${userId}/health`);


export default API;