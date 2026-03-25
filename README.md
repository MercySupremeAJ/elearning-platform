# Supremium E-Learning Platform

This is a comprehensive solution to building a modern E-Learning application. The project serves as a real-world style platform where users can browse, enroll in, and watch full educational courses while seamlessly tracking their learning progress.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for every page depending on their device's screen size
- See premium hover states and interactive micro-animations for all elements on the page
- Authenticate (Login/Signup) and maintain a globally protected user session
- Browse a heavily-styled catalog of 20 programming and technology courses
- Enroll in specific courses and manage active enrollments in a dedicated dashboard
- Click seamlessly onto a lesson to securely update their unique progress percentage while the interactive tutorial securely opens via an external YouTube link
- Experience completely isolated tracking/history unique strictly to their logged-in username

### Screenshot

![Supremium E-Learning Platform](./images/Screenshot.png)

### Links

- Solution URL: [GitHub Repository](https://github.com/MercySupremeAJ/elearning-platform)
- Live Site URL: [Live Deployment](https://your-vercel-link-here.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (CSS Variables)
- Flexbox & CSS Grid frameworks
- Mobile-first responsive workflow
- Premium Glassmorphism design utilizing `backdrop-filter`
- [React](https://reactjs.org/) - JS library
- [React Router v6](https://reactrouter.com/) - Nested routing and protected routes
- Secure State Management - Context API & Custom Hooks (`useAuth`, `useEnrollment`)
- LocalStorage caching for persistent authentications

### What I learned

Working on this scalable React learning application strengthened my understanding of several core architectural concepts:

**Advanced Glassmorphism & UI Aesthetics:**
```css
.glass-panel {
  background: var(--glass-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--glass-border);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}
```

**Complex State Management & Secure User Scoping:**
Building custom hooks and Context providers to manage enrollment data securely, mapping all arrays accurately to unique user identities to prevent session leakages.
```javascript
const toggleLessonComplete = (courseId, lessonId) => {
  setProgress((prev) => {
    const userProgress = prev[user.username] || {};
    const courseProgress = userProgress[courseId] || [];
    // Safely updating nested objects without mutating global state
  });
};
```

**Dynamic React Routing & Protected Routes:**
```javascript
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
```

### Continued development

Areas I want to continue improving on:

- Implementing backend authentication (e.g., Firebase or Node.js/Express) instead of relying purely on localStorage.
- Fetching dynamically expanding course databases from a real REST API framework natively.
- Integrating a community comments section or a live forum dashboard within the platform.

### Useful resources

- [React Router v6 Documentation](https://reactrouter.com/docs/en/v6) - Essential reference for upgrading and executing the paradigm switch to nested routing.
- [React Context API Guide](https://react.dev/reference/react/useContext) - Phenomenal guide for constructing scalable data patterns spanning deep components.
- [Glassmorphism UI Generator](https://ui.glass/generator/) - Crucial resource for visualizing frosted-glass aesthetic properties mathematically before putting them in standard indices.

## Author

- GitHub - [@MercySupremeAJ](https://github.com/MercySupremeAJ)
- Frontend Mentor - [@MercySupremeAJ](https://www.frontendmentor.io/profile/MercySupremeAJ)
