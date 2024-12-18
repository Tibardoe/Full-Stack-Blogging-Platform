
# Freedom Blog Platform

Freedom Blog Platform is a **full-stack web application** that allows users to register, log in, and create, edit, and delete blog posts. It also supports Google authentication and user profile management.

## Features

### User Authentication
- **Local authentication** with username and password.
- **Google OAuth 2.0 integration** for seamless login.
- Persistent user sessions using `express-session` and PostgreSQL.

### Blog Management
- **Create, read, update, and delete (CRUD)** blog posts.
- View all blogs or blogs posted by a specific user.
- Protect sensitive routes using authentication.

### User Management
- Profile management.
- Secure password hashing using `bcrypt`.

### Security
- Secure cookies for session management.
- Cross-Origin Resource Sharing (CORS) enabled for controlled access.
- Environment-specific configuration using `dotenv`.

## Technology Stack

### Backend
- **Node.js** with **Express.js** framework.
- **PostgreSQL** for database management.
- **Passport.js** for authentication.
- **Bcrypt** for password encryption.

### Frontend
- **React.js** for a modern, responsive user interface.
- **React Router** for navigation.
- **Axios** for HTTP requests.

### Deployment
- Hosted on **Render** for backend and **Netlify** for frontend.

## Installation and Setup

### Prerequisites
- Node.js installed on your local machine.
- PostgreSQL database setup.

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Tibardoe/Full-Stack-Blogging-Platform
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   Create a `.env` file and add:
   ```
   DATABASE_URL=<your-database-connection-string>
   SECRET=<your-session-secret>
   GOOGLE_CLIENT_ID=<your-google-client-id>
   GOOGLE_CLIENT_SECRET=<your-google-client-secret>
   GOOGLE_CALLBACK_URL=<your-google-callback-url>
   NODE_ENV=<development|production>
   ```
4. Start the server:
   ```bash
   npm start
   ```
   The backend will run on `http://localhost:5000`.

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure the `.env` file:
   ```
   REACT_APP_BACKEND_URL=http://localhost:5000
   ```
4. Start the development server:
   ```bash
   npm start
   ```
   The frontend will run on `http://localhost:3000`.

## Usage

### Registration and Login
- Users can register or log in using their credentials or Google accounts.

![Home Page](/client/src/assets/images/home.png)

![Login Page](/client/src/assets/images/login.png)

![Signup Page](/client/src/assets/images/signup.png)

### Blog Management
- Navigate to the **Blogs** page to view all posts.
- Create new blogs by clicking the "Write" button.
- Edit or delete your posts from your profile.

![Blogs Page](/client/src/assets/images/blogs.png)

![Blogs Page](/client/src/assets/images/blogs2.png)

![User Page](/client/src/assets/images/userpage.png)

![Post Page](/client/src/assets/images/post.png)

![Edit Page](/client/src/assets/images/edit.png)

### Deployment
- Set the `NODE_ENV` variable to `production` and configure SSL for deployment.

## Folder Structure

### Backend
- `server.js`: Entry point for the server.
- `backup.sql`: Defines the database schema.

### Frontend
- `src/components`: Reusable UI components.
- `src/pages`: Contains page-level components like Home, Blogs, and Login.
- `src/css`: Styling files.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.
