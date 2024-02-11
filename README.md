## Chat Application using MERN Stack

This is a chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to register, log in, and communicate with each other in real-time.




## Project Structure

```
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
```


## Project Description

This is a chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to register, log in, and communicate with each other in real-time.

## Setup

### Client Setup:

1. Navigate to the client directory.
2. Install dependencies using `npm install`.
3. Start the client using `npm start`.

### Server Setup:

1. Navigate to the server directory.
2. Install dependencies using `npm install`.
3. Create a `.env` file based on the `.env.example` file and configure your MongoDB connection string.
4. Start the server using `npm start`.

## Database Setup

1. Ensure MongoDB is installed and running.
2. Configure the MongoDB connection string in the server's `.env` file.

## Usage

1. Register an account or log in.
2. Start chatting with other users in real-time.

## Features

- **User Authentication**: Users can register, log in, and log out securely.
- **Real-time Messaging**: Users can communicate with each other in real-time using WebSockets.
- **User Profile Settings**: Users can customize their profiles, such as setting avatars.
- **Responsive Design**: The application is responsive and works well on both mobile and desktop devices.

## Technologies Used

- MongoDB
- Express.js
- React.js
- Node.js
- Socket.IO (for real-time communication)

## License

This project is licensed under the [MIT License](LICENSE).

## Contributors

- [Anish Kumar](https://github.com/anishkt200)
