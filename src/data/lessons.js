// 🔹 Central lesson database (mapped by course ID)
// Each course has its own lessons starting from id: 1

const lessons = {
  // 🔸 1. HTML & CSS Fundamentals (Web Development)
  1: [
    { id: 1, title: "HTML Basics", content: "Learn the structure of web pages with HTML." },
    { id: 2, title: "CSS Basics", content: "Style your pages using CSS." },
    { id: 3, title: "Responsive Design", content: "Make web pages responsive for all devices." },
  ],

  // 🔸 2. JavaScript Essentials (Web Development)
  2: [
    { id: 1, title: "Variables & Data Types", content: "Understand JS variables and types." },
    { id: 2, title: "Functions & Loops", content: "Write reusable code with functions and loops." },
    { id: 3, title: "DOM Manipulation", content: "Interact with web pages dynamically." },
  ],

  // 🔸 3. React for Beginners (Web Development)
  3: [
    { id: 1, title: "Introduction to React", content: "React is a library for building UIs." },
    { id: 2, title: "JSX & Components", content: "Build reusable components with JSX." },
    { id: 3, title: "State & Props", content: "Manage component data with state and props." },
  ],

  // 🔸 4. Advanced React (Web Development)
  4: [
    { id: 1, title: "Hooks Overview", content: "Learn useState, useEffect, and more." },
    { id: 2, title: "Context API", content: "Manage global state in React." },
    { id: 3, title: "Performance Optimization", content: "Improve app performance." },
  ],

  // 🔸 5. Python for Data Science
  5: [
    { id: 1, title: "Python Basics", content: "Introduction to Python programming." },
    { id: 2, title: "Data Structures", content: "Lists, tuples, dictionaries in Python." },
    { id: 3, title: "OOP in Python", content: "Learn classes and objects." },
  ],

  // 🔸 6. Data Analysis with Pandas
  6: [
    { id: 1, title: "Pandas Basics", content: "DataFrames and Series basics." },
    { id: 2, title: "Data Cleaning", content: "Handle missing and messy data." },
    { id: 3, title: "Data Aggregation", content: "Summarize and group data." },
  ],

  // 🔸 7. Data Visualization
  7: [
    { id: 1, title: "Matplotlib Basics", content: "Create simple charts and plots." },
    { id: 2, title: "Seaborn for Statistics", content: "Visualize distributions and relationships." },
    { id: 3, title: "Advanced Charts", content: "Customize charts for storytelling." },
  ],

  // 🔸 8. Statistics for Data Science
  8: [
    { id: 1, title: "Descriptive Statistics", content: "Mean, median, mode, variance." },
    { id: 2, title: "Probability Basics", content: "Understand probability and events." },
    { id: 3, title: "Inferential Statistics", content: "Hypothesis testing and confidence intervals." },
  ],

  // 🔸 9. Machine Learning Basics (AI)
  9: [
    { id: 1, title: "Introduction to ML", content: "What is machine learning?" },
    { id: 2, title: "Supervised Learning", content: "Learn regression and classification." },
    { id: 3, title: "Unsupervised Learning", content: "Clustering and dimensionality reduction." },
  ],

  // 🔸 10. Deep Learning Fundamentals (AI)
  10: [
    { id: 1, title: "Neural Networks", content: "Understand neurons and layers." },
    { id: 2, title: "Backpropagation", content: "Train neural networks effectively." },
    { id: 3, title: "CNN Basics", content: "Learn convolutional neural networks." },
  ],

  // 🔸 11. Computer Vision
  11: [
    { id: 1, title: "Image Basics", content: "Understand images and pixels." },
    { id: 2, title: "Feature Detection", content: "Detect edges, corners, and objects." },
    { id: 3, title: "Image Classification", content: "Train a simple classifier." },
  ],

  // 🔸 12. Natural Language Processing
  12: [
    { id: 1, title: "Text Preprocessing", content: "Clean and tokenize text." },
    { id: 2, title: "Vectorization", content: "Convert text to numbers." },
    { id: 3, title: "Text Classification", content: "Train simple NLP models." },
  ],

  // 🔸 13. Engineering Mathematics
  13: [
    { id: 1, title: "Linear Algebra", content: "Vectors, matrices, and operations." },
    { id: 2, title: "Calculus Basics", content: "Derivatives and integrals." },
    { id: 3, title: "Differential Equations", content: "Solve simple ODEs." },
  ],

  // 🔸 14. Signal Processing
  14: [
    { id: 1, title: "Signals & Systems", content: "Introduction to signals." },
    { id: 2, title: "Fourier Transform", content: "Frequency domain analysis." },
    { id: 3, title: "Filtering", content: "Apply filters to signals." },
  ],

  // 🔸 15. Control Systems
  15: [
    { id: 1, title: "Feedback Systems", content: "Understand control loops." },
    { id: 2, title: "PID Controllers", content: "Proportional, Integral, Derivative control." },
    { id: 3, title: "Stability Analysis", content: "Check system stability." },
  ],

  // 🔸 16. Embedded Systems
  16: [
    { id: 1, title: "Microcontrollers", content: "Learn microcontroller basics." },
    { id: 2, title: "GPIO & Sensors", content: "Interface hardware components." },
    { id: 3, title: "Embedded Programming", content: "Write firmware code." },
  ],

  // 🔸 17. Introduction to Programming
  17: [
    { id: 1, title: "Variables & Types", content: "Understand variables and types." },
    { id: 2, title: "Conditionals & Loops", content: "Control program flow." },
    { id: 3, title: "Functions", content: "Write reusable code blocks." },
  ],

  // 🔸 18. Object-Oriented Programming
  18: [
    { id: 1, title: "Classes & Objects", content: "Create and use classes." },
    { id: 2, title: "Inheritance & Polymorphism", content: "Reuse and extend code." },
    { id: 3, title: "Encapsulation & Abstraction", content: "Protect and organize data." },
  ],

  // 🔸 19. Data Structures & Algorithms
  19: [
    { id: 1, title: "Arrays & Lists", content: "Store and access data efficiently." },
    { id: 2, title: "Stacks & Queues", content: "Understand linear data structures." },
    { id: 3, title: "Sorting & Searching", content: "Common algorithms explained." },
  ],

  // 🔸 20. Version Control with Git
  20: [
    { id: 1, title: "Git Basics", content: "Track changes in code." },
    { id: 2, title: "Branches & Merges", content: "Work with multiple branches." },
    { id: 3, title: "Collaboration", content: "Push, pull, and work with teams." },
  ],
};

export default lessons;