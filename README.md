# JWT Authentication in Node.js

This project implements JWT (JSON Web Token) authentication in a Node.js application, following the guide: [JWT Authentication in Node.js: A Practical Guide](https://dvmhn07.medium.com/jwt-authentication-in-node-js-a-practical-guide-c8ab1b432a49).

## Features

- User registration and login
- Password hashing with bcrypt
- JWT token generation on login
- Protected routes requiring valid JWT
- Token verification middleware

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```
   git clone <your-repo-url>
   cd <your-project-folder>
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add:
   ```
   JWT_SECRET=your_jwt_secret_key
   PORT=3000
   MONGO_URI=mongo_url
   ```

### Running the Application

```
npm start
```

The server will start on `http://localhost:3000`.

## API Endpoints

- `POST /register` — Register a new user
- `POST /login` — Login and receive a JWT token
- `GET /protected` — Example of a protected route (requires JWT in `Authorization` header)

## Usage Example

1. **Register:**
   ```
   POST /register
   {
     "username": "testuser",
     "password": "yourpassword"
   }
   ```

2. **Login:**
   ```
   POST /login
   {
     "username": "testuser",
     "password": "yourpassword"
   }
   ```
   Response will include a JWT token.

3. **Access Protected Route:**
   ```
   GET /protected
   Authorization: Bearer <your_jwt_token>
   ```

## License

This project is for educational purposes, following the referenced Medium article.
