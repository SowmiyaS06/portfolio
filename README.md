# Sowmiya's Personal Portfolio - MERN Stack

A full-stack personal portfolio website built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring authentication, project management, and contact functionality.

## 🚀 Features

- **Responsive Design**: Beautiful, mobile-first design with TailwindCSS
- **Authentication**: JWT-based login/signup system with bcrypt password hashing
- **Project Showcase**: Dynamic project display with CRUD operations
- **Contact Form**: Contact form with MongoDB persistence
- **Admin Dashboard**: Protected dashboard for managing projects and viewing messages
- **Modern UI**: Gradient backgrounds, smooth animations, and hover effects

## 🛠️ Tech Stack

**Frontend:**
- React 18 with JSX
- React Router for navigation
- Axios for API calls
- TailwindCSS for styling
- Context API for state management

**Backend:**
- Node.js with Express.js
- MongoDB Atlas with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- Express Validator for input validation

## 📁 Project Structure

```
/
├── client/          # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── pages/
│   │   └── ...
│   └── package.json
├── server/          # Express backend
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── package.json
├── package.json     # Root package.json with dev scripts
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sowmiya-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   cd client && npm install
   cd ../server && npm install
   cd ..
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the `server` directory:
   ```bash
   cp server/.env.example server/.env
   ```
   
   Update the `.env` file with your MongoDB Atlas connection string and other settings:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
   JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_random
   FRONTEND_URL=http://localhost:3000
   PORT=5000
   NODE_ENV=development
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   This will start both the frontend (http://localhost:3000) and backend (http://localhost:5000) servers concurrently.

## 🗄️ MongoDB Atlas Setup

1. **Create a MongoDB Atlas Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for a free account

2. **Create a New Cluster**
   - Choose the free tier (M0)
   - Select your preferred region
   - Create the cluster

3. **Set up Database Access**
   - Go to "Database Access" in the left sidebar
   - Add a new database user with read/write permissions
   - Remember the username and password

4. **Set up Network Access**
   - Go to "Network Access" in the left sidebar
   - Add IP address (0.0.0.0/0 for development, or your specific IP)

5. **Get Connection String**
   - Go to "Clusters" and click "Connect"
   - Choose "Connect your application"
   - Copy the connection string and update your `.env` file

## 🖼️ Profile Image Setup

1. **Add your profile image**
   - Place your profile image in `client/public/profile.jpg`
   - The image should be square (recommended: 400x400px or larger)
   - Supported formats: JPG, PNG, WebP

2. **Update profile information**
   - Edit `client/src/pages/Home.jsx` to update personal information
   - Modify the introduction text and skills list
   - Update social media links in `client/src/components/Footer.jsx`

## 📝 Sample Data

The application includes sample projects that will be displayed. To add your own projects:

1. **Register/Login** to access the dashboard
2. **Navigate to Dashboard** after authentication
3. **Add New Project** using the project management interface
4. **Fill in project details** including title, description, technologies, and links

## 🔐 Authentication

- **Registration**: Users can create new accounts with name, email, and password
- **Login**: Existing users can log in with email and password
- **JWT Tokens**: Secure authentication with 7-day token expiration
- **Protected Routes**: Dashboard and admin features require authentication

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Customization

### Colors
Update the color scheme in `client/tailwind.config.js`:
```javascript
colors: {
  primary: { /* Your primary color palette */ },
  secondary: { /* Your secondary color palette */ }
}
```

### Content
- Update personal information in `client/src/pages/Home.jsx`
- Modify the skills list and introduction text
- Update social media links in the footer component

### Styling
- All styles use TailwindCSS utility classes
- Custom styles are in `client/src/index.css` and `client/src/App.css`
- Animations and transitions are defined in the Tailwind config

## 🚀 Deployment

### Frontend (Netlify/Vercel)
1. Build the client: `cd client && npm run build`
2. Deploy the `client/build` folder to your hosting service

### Backend (Heroku/Railway/DigitalOcean)
1. Set environment variables on your hosting platform
2. Deploy the `server` directory
3. Update `FRONTEND_URL` in your environment variables

### Full-Stack Deployment
The server is configured to serve the React build in production. Set `NODE_ENV=production` and ensure the client is built.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues:

1. **Check the console** for error messages
2. **Verify environment variables** are set correctly
3. **Ensure MongoDB Atlas** connection is working
4. **Check network connectivity** and firewall settings

For additional help, please open an issue in the repository.

## 🎯 Future Enhancements

- [ ] Blog functionality
- [ ] Dark mode toggle
- [ ] Email notifications for contact form
- [ ] Image upload for projects
- [ ] SEO optimization
- [ ] Performance monitoring
- [ ] Automated testing

---

Built with ❤️ by Sowmiya using the MERN stack.