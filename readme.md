# 🚀 DevVault

**Your Personal Developer Productivity Hub**

DevVault is a full-stack MERN application designed to help developers **securely manage and organize their work**. Whether you're tracking tasks, managing project workflows, or need a clean dashboard to stay focused, DevVault keeps your developer life centralized and organized.

---

## ✨ Features

### 🔧 Core Functionality

- **📝 Task Manager**
  - Create, edit, and delete personal tasks
  - Track progress with intuitive status updates (Pending → In Progress → Completed)
  - Priority levels and due date management

- **📁 Project Workspace**
  - Organize work under specific projects and modules
  - Attach notes and documentation to projects
  - Visual project progress tracking

- **🔐 Secure Authentication**
  - JWT-based secure login and registration
  - Private, user-specific data vaults
  - Password encryption with bcrypt

- **📊 Developer Dashboard**
  - Unified view of tasks, projects, and productivity metrics
  - Quick access to recent work and upcoming deadlines
  - Customizable widget layout

- **🎨 Modern UI/UX**
  - Responsive design that works on all devices
  - Custom theming with CSS variables
  - Clean, developer-focused interface

---

## 🛠️ Tech Stack

### Frontend

- **React.js** - Modern UI library
- **Axios** - HTTP client for API communication
- **React Router** - Client-side routing
- **CSS3** with custom properties for theming

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Secure authentication tokens
- **Bcrypt** - Password hashing

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/aakarshgopishetty/devvault.git
   cd devvault
   ```

2. **Backend Setup**

   ```bash
   cd devvault-backend
   npm install
   
   # Create .env file with your configuration
   cp .env.example .env
   
   # Start the development server
   npm run dev
   ```

3. **Frontend Setup**

   ```bash
   cd devvault-frontend
   npm install
   
   # Start the React development server
   npm run dev
   ```

4. **Access the application**
   - Frontend: `http://localhost:5187`
   - Backend API: `http://localhost:5000`

### Environment Variables

Create a `.env` file in the backend directory:

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/devvault
JWT_SECRET=your-secret-key-here
JWT_EXPIRE=7d
```

---

## 🗂️ Project Structure

```

devvault/
├── devvault-frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── styles/
│   └── package.json
├── devvault-backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── package.json
└── README.md
```

---

## 🛣️ Roadmap

### 🔮 Upcoming Features

- **🧠 Code Snippet Manager** - Store and organize reusable code snippets
- **📚 Knowledge Base** - Personal developer documentation system
- **🔑 API Token Manager** - Securely store and manage API keys
- **📅 Developer Calendar** - Schedule and track development milestones
- **🔌 Plugin System** - Extensible architecture for custom integrations
- **📈 Analytics Dashboard** - Productivity insights and time tracking
- **🌙 Dark/Light Mode** - Enhanced theming options
- **📱 Mobile App** - React Native companion app

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow existing code style and conventions
- Write clear commit messages
- Add tests for new features
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support & Contact

- **Issues**: [GitHub Issues](https://github.com/your-username/devvault/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/devvault/discussions)
- **Email**: gopishettyaakarsh@gmail.com

---

## 🌟 Show Your Support

If DevVault helps you stay organized and productive, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 🤝 Contributing code

---
