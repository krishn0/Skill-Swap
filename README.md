# Skill-Swap
A full-stack peer-to-peer skill exchange application where users can trade skills with each other. Built with React, Node.js, Express, MongoDB, and styled using Tailwind CSS.

📁 Project Structure
lua
Copy
Edit
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
✨ Features
User Authentication
JWT-based signup and login

Password hashing for security

Profile Management
Add or update name, location, and profile photo (via Cloudinary)

List skills offered and skills wanted

Set availability (e.g., weekends, evenings)

Public/private profile toggle

Skill Discovery
Search for other users by skills

Browse public profiles

Swap Requests
Send, accept, reject, or delete swap offers

Track pending and current swap requests

Leave feedback after completing a swap

Admin Controls
Moderate inappropriate listings

Ban users violating community policies

Access reports on swap activity and feedback

Real-Time Notifications
(Optional) WebSocket-based swap request updates

Responsive UI
Mobile-friendly interface built with Tailwind CSS

REST API
Endpoints for managing users, skills, swap requests, and feedback

Security & Error Handling
Environment variables for sensitive data

Input validation (frontend and backend)

Clear error messages and fallback mechanisms

🗂️ Database Schema Overview
Users
id

name

location

profile_photo

skills_offered (array)

skills_wanted (array)

availability

is_public

ratings (array)

role (User/Admin)

Swap Requests
id

from_user_id

to_user_id

skill_offered

skill_requested

status (pending/accepted/rejected/cancelled)

feedback

Admin Messages
id

message

created_at

🛠️ Tech Stack
Frontend
React

Vite

Tailwind CSS

Axios

Backend
Node.js

Express

MongoDB

Mongoose

JWT for authentication

Multer + Cloudinary for image uploads

WebSockets 
