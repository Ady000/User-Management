# 🚀 User Management System

A modern, full-stack user management application built with **Next.js** and **NestJS**, featuring secure authentication, profile management, and a playful UX touch.

![User Management System](https://i.imgur.com/your-demo-image.png)

## ✨ Features

- **Secure Authentication** - JWT-based authentication system
- **User Registration** - Complete signup flow with validation
- **Profile Management** - Edit user profile details
- **Interactive UX** - Playful "dodging" login button that avoids the cursor when form is invalid
- **Responsive Design** - Works seamlessly on mobile and desktop
- **Form Validation** - Client and server-side validation

## 🔧 Tech Stack

### Frontend
- **Next.js** - React framework with server-side rendering
- **TypeScript** - Type safety and better developer experience
- **React Hook Form** - Form state management and validation
- **Zod** - Schema validation
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **js-cookie** - Cookie management

### Backend
- **NestJS** - Progressive Node.js framework
- **TypeScript** - Type safety
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Passport** - Authentication middleware
- **bcrypt** - Password hashing
- **class-validator** - DTOs validation

## 📋 Prerequisites

- Node.js (v16+)
- MongoDB (local or Atlas)
- npm or yarn

## 🚀 Getting Started

### Backend Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/user-management-system.git
cd user-management-system/user-management-api

# Install dependencies
npm install

# Create .env file with the following variables
# MONGODB_URI=mongodb://localhost:27017/user-management
# JWT_SECRET=your-secret-key
# FRONTEND_URL=http://localhost:3000

# Start the development server
npm run start:dev
```

The NestJS backend will be running at http://localhost:3001.

### Frontend Setup

```bash
# Navigate to the frontend directory
cd ../user-management-frontend

# Install dependencies
npm install

# Create .env.local file with
# NEXT_PUBLIC_API_URL=http://localhost:3001

# Start the development server
npm run dev
```

The Next.js frontend will be running at http://localhost:3000.

## 📱 Application Flow

1. **Sign Up**: Register a new account with username, email, password, name, birth date, gender, and optional description
2. **Login**: Sign in with username and password
3. **Edit Profile**: Update your profile information
4. **Logout**: End your session securely

## 🎮 Special Features

### 🏃‍♂️ Dodging Login Button

The login button playfully dodges the cursor when field validation fails. It "runs away" when you try to click it with empty fields!

```tsx
// Login button dodge feature
const handleButtonMouseEnter = (e: React.MouseEvent) => {
  if (!isFormValid && buttonRef.current) {
    // Button dodging logic
    // ...
  }
};
```

## 🔐 API Endpoints

### Authentication
- `POST /auth/signup` - Register a new user
- `POST /auth/login` - Authenticate a user
- `POST /auth/logout` - Logout a user

### User Management
- `GET /user/profile` - Fetch user profile (protected)
- `PUT /user/profile` - Update user profile (protected)

## 🎯 Future Improvements

- [ ] Add email verification
- [ ] Implement password reset functionality
- [ ] Add social login options
- [ ] Create admin dashboard
- [ ] Add unit and integration tests
- [ ] Implement dark mode

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributors

- Your Name - [GitHub](https://github.com/yourusername)

## 🙏 Acknowledgements

- [NestJS Documentation](https://docs.nestjs.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB](https://www.mongodb.com/)