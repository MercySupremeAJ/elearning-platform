// 🔹 Central lesson database (mapped by course ID)
// Each course has its own lessons starting from id: 1

const lessons = {
  // 🔸 1. React for Beginners
  1: [
    { id: 1, title: "Introduction to React", content: "React is a JavaScript library for building UIs." },
    { id: 2, title: "JSX & Components", content: "Learn how to use JSX and build reusable components." },
    { id: 3, title: "State & Props", content: "Understand state management and passing props." },
  ],

  // 🔸 2. Advanced React
  2: [
    { id: 1, title: "Hooks Overview", content: "Learn useState, useEffect, useContext and more." },
    { id: 2, title: "Context API Deep Dive", content: "Manage state globally with Context." },
    { id: 3, title: "Performance Optimization", content: "Learn memoization and lazy loading." },
  ],

  // 🔸 3. JavaScript Mastery
  3: [
    { id: 1, title: "JavaScript Basics", content: "Learn variables, functions, and loops." },
    { id: 2, title: "Closures", content: "Understand scope and closures." },
    { id: 3, title: "Async JavaScript", content: "Promises and async/await explained." },
  ],

  // 🔸 4. Python Programming
  4: [
    { id: 1, title: "Python Basics", content: "Introduction to Python programming." },
    { id: 2, title: "Data Structures", content: "Lists, tuples, and dictionaries." },
    { id: 3, title: "OOP in Python", content: "Classes and objects in Python." },
  ],

  // 🔸 5. Data Science
  5: [
    { id: 1, title: "Intro to Data Science", content: "Understanding data science concepts." },
    { id: 2, title: "Pandas & NumPy", content: "Data manipulation libraries." },
    { id: 3, title: "Data Visualization", content: "Matplotlib and Seaborn basics." },
  ],

  // 🔸 6. Machine Learning
  6: [
    { id: 1, title: "ML Basics", content: "Introduction to machine learning." },
    { id: 2, title: "Supervised Learning", content: "Regression and classification." },
    { id: 3, title: "Model Evaluation", content: "Accuracy, precision, recall." },
  ],

  // 🔸 7. Artificial Intelligence
  7: [
    { id: 1, title: "Intro to AI", content: "What is Artificial Intelligence?" },
    { id: 2, title: "Search Algorithms", content: "Basic AI search techniques." },
    { id: 3, title: "Neural Networks", content: "Introduction to deep learning." },
  ],

  // 🔸 8. Web Development
  8: [
    { id: 1, title: "HTML & CSS", content: "Structure and styling of web pages." },
    { id: 2, title: "JavaScript DOM", content: "Manipulating the DOM." },
    { id: 3, title: "Frontend Frameworks", content: "Overview of React and others." },
  ],
};

export default lessons;