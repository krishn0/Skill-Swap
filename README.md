🔁 Skill-Swap
Skill-Swap is a full-stack, peer-to-peer skill exchange platform where users can connect and trade skills seamlessly. Whether you're a designer looking to learn programming or a musician offering lessons in exchange for language practice — Skill-Swap helps users make meaningful, skill-based connections.

Built with React, Node.js, Express, MongoDB, and styled using Tailwind CSS.

📦 Project Structure
plaintext
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
👤 User Authentication
JWT-based signup and login

Password hashing with secure storage

🧑‍💼 Profile Management
Edit name, location, and profile picture (via Cloudinary)

List offered and desired skills

Set availability (weekends, evenings, etc.)

Toggle between public/private profile

🔍 Skill Discovery
Search users by skill sets

Browse public profiles

🔁 Swap Requests
Send, accept, reject, or delete swap offers

Track current and pending swap requests

Leave feedback after a successful skill exchange

🛡️ Admin Controls
Moderate inappropriate listings or behavior

Ban users violating community guidelines

View reports on swaps and feedback

🔔 Real-Time Notifications (Optional)
WebSocket-based updates for swap requests

📱 Responsive UI
Mobile-friendly interface with Tailwind CSS

🔗 RESTful API
Full CRUD API for users, skills, swap requests, and feedback

🔐 Security & Robust Error Handling
Secure handling of environment variables

Validation at both frontend and backend

Informative error messages and graceful fallbacks

🗂️ Database Schema Overview
📍 Users
id

name

location

profile_photo

skills_offered: array of strings

skills_wanted: array of strings

availability: time slots

is_public: boolean

ratings: array of numbers or objects

role: User or Admin

🔁 Swap Requests
id

from_user_id

to_user_id

skill_offered

skill_requested

status: pending, accepted, rejected, cancelled

feedback: string or object

🛑 Admin Messages
id

message

created_at

🛠️ Tech Stack
🔧 Frontend
React

Vite

Tailwind CSS

Axios

⚙️ Backend
Node.js

Express

MongoDB

Mongoose

JWT for authentication

Multer & Cloudinary for image uploads

WebSockets for real-time features

🚀 Getting Started (Optional Section)
You can add the following if you're open-sourcing or sharing for collaboration.

bash
Copy
Edit
# Clone the repo
git clone https://github.com/your-username/skill-swap.git
cd skill-swap

# Install backend dependencies
cd backend
npm install

# Start backend server
npm start

# Install frontend dependencies
cd ../frontend
npm install

# Start frontend server
npm run dev
📬 Contributions
Pull requests, suggestions, and issues are welcome! Please open a GitHub issue for any feature requests or bugs.

