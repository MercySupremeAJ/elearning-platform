// Example lessons data mapped by course id
const lessons = {
  1: [ // React for Beginners course
    { id: 1, title: "Introduction to React", content: "React is a JavaScript library for building UIs." },
    { id: 2, title: "JSX & Components", content: "Learn how to use JSX and build reusable components." },
    { id: 3, title: "State & Props", content: "Understand state management and passing props." },
  ],
  2: [ // Advanced React course
    { id: 4, title: "Hooks Overview", content: "Learn useState, useEffect, useContext and more." },
    { id: 5, title: "Context API Deep Dive", content: "Manage state globally with Context." },
    { id: 6, title: "Performance Optimization", content: "Learn memoization, lazy loading, etc." },
  ],
  // Add more courses here with unique IDs
};

export default lessons;