# Smart_Health_Companion
Wellness Health Platform

A full-stack wellness management platform designed to help users track and improve their physical health, nutrition, and mental well-being. This application provides role-based access for users, trainers, and administrators, ensuring a structured and scalable health ecosystem.

🚀** Features**

👤** User Module**
User registration and secure login (JWT-based authentication)
Access to:
1.Physical health workouts
2.Nutrition plans
3.Mental wellness content
4.Personalized dashboard experience

🧑‍🏫** Trainer Module**
Manage and monitor user-related wellness data
Contribute workouts and guidance

🛠️** Admin Module**
View all users and their data
Manage:
Workouts
Meals
Blogs / Articles
Delete or control platform content
Centralized dashboard for system overview

🧰** Tech Stack**
🔹 Frontend
React.js
Axios (API communication)
React Router
🔹 Backend
Spring Boot
Spring Security (JWT Authentication)
JPA / Hibernate
🔹 Database
MySQL (Railway)
🔹 Deployment
Docker
Render (Backend hosting)
GitHub (Version control)
🔐 Authentication & Security
JWT-based authentication system
Role-based authorization (Admin, User, Trainer)
Secure API endpoints
Environment variables used for sensitive data

⚙️ **Environment Variables**
Create a .env or configure in deployment:

SPRING_DATASOURCE_URL=your_database_url
SPRING_DATASOURCE_USERNAME=your_username
SPRING_DATASOURCE_PASSWORD=your_password

JWT_SECRET=your_secret_key

SPRING_MAIL_USERNAME=your_email
SPRING_MAIL_PASSWORD=your_email_password
🐳 Docker Setup

Build and run the backend using Docker:

docker build -t wellness-app .
docker run -p 8080:8080 wellness-app
🧪 Running Locally
Backend (Spring Boot)
mvn clean install
mvn spring-boot:run
Frontend (React)
npm install
npm start


🌍** Deployment**
Backend deployed on Render using Docker
Database hosted on Railway
Environment variables configured securely in deployment platform
🎯 Future Improvements
Progress tracking dashboard (charts & analytics)
Appointment booking with trainers
Mobile responsiveness enhancement
Notifications & reminders
AI-based health recommendations

📄 **License**
             This project is open-source and available under the MIT License.

👩‍💻 **Author**

Shivani Patil
Full Stack Developer
