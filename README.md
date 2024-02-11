Chat Application using MERN Stack
This is a chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to register, log in, and communicate with each other in real-time.

Folder Structure
java
Copy code
chat-application/
│
├── client/
│   ├── public/
│   │   ├── index.html
│   │   └── ...
│   ├── src/
│   │   ├── assets/
│   │   │   └── ...
│   │   ├── components/
│   │   │   ├── ChatContainer.jsx
│   │   │   ├── ChatInput.jsx
│   │   │   ├── Contacts.jsx
│   │   │   ├── LogOut.jsx
│   │   │   ├── SetAvatar.jsx
│   │   │   └── Welcome.jsx
│   │   ├── Pages/
│   │   │   ├── Chat.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── ResetPassword.jsx
│   │   └── utils/
│   │       ├── App.css
│   │       ├── App.jsx
│   │       ├── index.css
│   │       └── main.jsx
│   ├── .eslint.cjs
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── README.md
│
└── server/
    ├── controllers/
    │   ├── messageController.js
    │   └── userControllers.js
    ├── models/
    │   ├── messageModel.js
    │   └── userModel.js
    ├── routes/
    │   ├── messages.js
    │   └── userRoutes.js
    └── utils/
        └── db.js

Setup
Client Setup:

Navigate to the client directory.
Install dependencies using npm install.
Start the client using npm start.
Server Setup:

Navigate to the server directory.
Install dependencies using npm install.
Create a .env file based on the .env.example file and configure your MongoDB connection string.
Start the server using npm start.
Database Setup:

Ensure MongoDB is installed and running.
Configure the MongoDB connection string in the server's .env file.
Usage:

Register an account or log in.
Start chatting with other users in real-time.
Features
User authentication (registration, login, logout).
Real-time messaging using WebSockets.
User profile settings (e.g., setting avatar).
Responsive design for mobile and desktop devices.
Technologies Used
MongoDB
Express.js
React.js
Node.js
Socket.IO (for real-time communication)
Contributors
Anish Kumar
