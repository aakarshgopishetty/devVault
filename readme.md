# 🛠️ DevVault

**DevVault** is a full-stack MERN (MongoDB, Express.js, React, Node.js) application for task and project management. It provides secure user authentication, personal dashboards, and comprehensive task management features.

> 🔒 Built with security, scalability, and modern development practices in mind.

---

## 🚀 Features

- 🧑‍💻 **User Authentication**: Secure registration & login with JWT
- ✅ **Task Management**: Create, read, update, and delete tasks
- 🔐 **Protected Routes**: Token-based authentication for secure access
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile
- 🌐 **RESTful API**: Clean and documented API endpoints
- 💾 **Persistent Storage**: MongoDB database integration
- ⚡ **Fast Development**: Built with Vite for optimal performance

---

## 🧰 Tech Stack

### Frontend
- **React.js** - Modern UI library
- **Vite** - Lightning-fast build tool
- **Axios** - HTTP client for API calls
- **React Router** - Client-side routing

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Security & Authentication
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/devVault.git
cd devVault
```

### 2. Backend Setup
```bash
cd devVault-backend
npm install
```

Create a `.env` file in the backend directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
NODE_ENV=development
```

Start the backend server:
```bash
npm start
```

### 3. Frontend Setup
```bash
cd ../devVault-frontend
npm install
```

Create a `.env` file in the frontend directory (if needed):
```env
VITE_API_URL=http://localhost:5000
```

Start the frontend development server:
```bash
npm run dev
```

The application should now be running at:
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000`

---

## 🔗 API Documentation

### Authentication Endpoints

| Route | Method | Protected | Description |
|-------|---------|-----------|-------------|
| `/api/users/register` | POST | ❌ | Register a new user |
| `/api/users/login` | POST | ❌ | Login and receive JWT token |
| `/api/users/profile` | GET | ✅ | Get user profile information |

### Task Management Endpoints

| Route | Method | Protected | Description |
|-------|---------|-----------|-------------|
| `/api/tasks` | GET | ✅ | Fetch all user tasks |
| `/api/tasks` | POST | ✅ | Create a new task |
| `/api/tasks/:id` | PUT | ✅ | Update a specific task |
| `/api/tasks/:id` | DELETE | ✅ | Delete a specific task |

### Example API Usage

**Register a new user:**
```javascript
POST /api/users/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Create a new task:**
```javascript
POST /api/tasks
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json

{
  "title": "Complete project documentation",
  "description": "Write comprehensive README and API docs",
  "priority": "high",
  "status": "pending"
}
```

---

## 📁 Project Structure

```
devVault/
├── devVault-backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── taskController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   ├── .env
│   ├── server.js
│   └── package.json
├── devVault-frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── index.html
│   └── package.json
└── README.md
```

---

## 🧪 Testing

### Backend Testing
```bash
cd devVault-backend
npm test
```

### Frontend Testing
```bash
cd devVault-frontend
npm run test
```

---

## 🚀 Deployment

### Backend Deployment (Railway/Render)
1. Create account on Railway or Render
2. Connect your GitHub repository
3. Set environment variables in the platform dashboard
4. Deploy with one click

### Frontend Deployment (Vercel/Netlify)
1. Build the production version:
```bash
cd devVault-frontend
npm run build
```
2. Deploy the `dist` folder to Vercel or Netlify
3. Update API URL in environment variables

---

## ✨ Future Enhancements

- [ ] 📝 Advanced task editing with rich text editor
- [ ] 📅 Due dates and calendar integration
- [ ] 🏷️ Task categories and tags
- [ ] 📊 Analytics and progress tracking dashboard
- [ ] 👥 Team collaboration features
- [ ] 🔔 Real-time notifications
- [ ] 📱 Mobile app (React Native)
- [ ] 🌙 Dark mode theme
- [ ] 📈 Data export functionality
- [ ] 🔍 Advanced search and filtering

---

## 📝 License

This project is proprietary and confidential. All rights reserved by Aakarsh Gopishetty.

---

## 👨‍💻 Author

**Aakarsh Gopishetty**
- 💼 Full Stack Developer | AI & Cybersecurity Enthusiast
- 📧 Email: gopishettyaakarsh@gmail.com
- 🔗 LinkedIn: [Connect with me](https://www.linkedin.com/in/aakarsh-gopishetty-863b99280/)

---

## 🙏 Acknowledgments

- Thanks to the MERN stack community for excellent documentation
- Inspired by modern task management applications
- Special thanks to contributors and beta testers

---

**⭐ Star this repository if you found it helpful!**