# Skill Swap Platform
A full-stack skill sharing application built with React (frontend) and Express/MongoDB (backend).

## Project Structure
```
skillswap/
├── backend/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   ├── index.js
│   └── package.json
└── frontend/
    ├── src/
    ├── public/
    ├── .eslintrc.cjs
    ├── index.html
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    └── vite.config.js
```

## Features
- **User Authentication**
  - Registration and login (JWT-based)
  - Password hashing and security
- **Skill Management**
  - Add and showcase skills on profile
  - Skill categories and proficiency levels
  - Portfolio and certificate uploads (Cloudinary integration)
- **Skill Requests**
  - Browse other users' skills
  - Send skill learning requests
  - Accept or reject incoming requests
- **Request Management**
  - Track request status (Pending, Accepted, Rejected)
  - Manage ongoing skill sessions
- **File Uploads**
  - Profile picture and document uploads (Cloudinary)
- **User Profiles**
  - Professional profiles with skills and experience
  - Skill endorsements from other users
- **Responsive UI**
  - Mobile-friendly design using Tailwind CSS
- **Notifications**
  - Email notifications for skill requests and status updates
- **API Integration**
  - RESTful API endpoints for all resources
- **Security**
  - Environment variables for sensitive data
  - Input validation and error handling
- **Other**
  - Custom environment configuration
  - Modular code structure for scalability

## Backend
- **Tech:** Express, MongoDB, Mongoose, JWT, Cloudinary, Multer
- **Start:**
  ```bash
  cd backend
  npm install
  npm run dev
  ```
- **Environment:**
  Configure .env with your database, JWT, and Cloudinary credentials.

## Frontend
- **Tech:** React, Redux, Vite, Tailwind CSS, Axios
- **Start:**
  ```bash
  cd frontend
  npm install
  npm run dev
  ```
- **Environment:**
  If needed, create a .env file for frontend variables (e.g., VITE_API_BASE_URL).

## Development
- Backend runs on http://localhost:8000
- Frontend runs on http://localhost:5173
- Update CORS and API endpoints as needed
