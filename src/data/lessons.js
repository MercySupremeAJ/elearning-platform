// 🔹 Central lesson database (mapped by course ID)
// Each course has its own lessons starting from id: 1
// Every lesson includes a unique renowned programming video embed link mapped to its course topic.

const vid1 = "https://www.youtube.com/embed/G3e-cpL7ofc"; // HTML/CSS (SuperSimpleDev)
const vid2 = "https://www.youtube.com/embed/W6NZfCO5SIk"; // JS (Programming with Mosh)
const vid3 = "https://www.youtube.com/embed/SqcY0GlETPk"; // React (Programming with Mosh)
const vid4 = "https://www.youtube.com/embed/LlvBzyy-558"; // Adv React (Web Dev Simplified)
const vid5 = "https://www.youtube.com/embed/_uQrJ0TkZlc"; // Python DS (Programming with Mosh)
const vid6 = "https://www.youtube.com/embed/ZyhVh-qRZPA"; // Pandas (Corey Schafer)
const vid7 = "https://www.youtube.com/embed/UO98lJQ3QGI"; // Data Vis (Corey Schafer)
const vid8 = "https://www.youtube.com/embed/v_ikGpswAps"; // Stats (FreeCodeCamp)
const vid9 = "https://www.youtube.com/embed/7eh4d6sabA0"; // ML (Programming with Mosh)
const vid10 = "https://www.youtube.com/embed/qFJeN9V1ZsI"; // Deep Learning (FreeCodeCamp)
const vid11 = "https://www.youtube.com/embed/oXlwWbU8l2o"; // CV (FreeCodeCamp)
const vid12 = "https://www.youtube.com/embed/VyVEj2sA1qQ"; // NLP (Edureka)
const vid13 = "https://www.youtube.com/embed/T647CGsuOVY"; // Eng Math (FreeCodeCamp)
const vid14 = "https://www.youtube.com/embed/-Y7PLaxEXS0"; // Signal (Ira Fulton)
const vid15 = "https://www.youtube.com/embed/sIbbIe2p1kU"; // Control Systems (FreeCodeCamp)
const vid16 = "https://www.youtube.com/embed/m7wB4d9X7OQ"; // Embedded (Udemy)
const vid17 = "https://www.youtube.com/embed/zOjov-2c0iU"; // Intro Prog (CS50)
const vid18 = "https://www.youtube.com/embed/pTB0EiLXUC8"; // OOP (Programming with Mosh)
const vid19 = "https://www.youtube.com/embed/8hly31xKli0"; // DSA (FreeCodeCamp)
const vid20 = "https://www.youtube.com/embed/8JJ101D3knE"; // Git (Programming with Mosh)

const lessons = {
  // 🔸 1. HTML & CSS Fundamentals (Web Development)
  1: [
    { id: 1, title: "HTML Basics", content: "Learn the structure of web pages with HTML.", videoUrl: vid1 },
    { id: 2, title: "CSS Basics", content: "Style your pages using CSS.", videoUrl: vid1 },
    { id: 3, title: "Responsive Design", content: "Make web pages responsive for all devices.", videoUrl: vid1 },
  ],

  // 🔸 2. JavaScript Essentials (Web Development)
  2: [
    { id: 1, title: "Variables & Data Types", content: "Understand JS variables and types.", videoUrl: vid2 },
    { id: 2, title: "Functions & Loops", content: "Write reusable code with functions and loops.", videoUrl: vid2 },
    { id: 3, title: "DOM Manipulation", content: "Interact with web pages dynamically.", videoUrl: vid2 },
  ],

  // 🔸 3. React for Beginners (Web Development)
  3: [
    { id: 1, title: "Introduction to React", content: "React is a library for building UIs.", videoUrl: vid3 },
    { id: 2, title: "JSX & Components", content: "Build reusable components with JSX.", videoUrl: vid3 },
    { id: 3, title: "State & Props", content: "Manage component data with state and props.", videoUrl: vid3 },
  ],

  // 🔸 4. Advanced React (Web Development)
  4: [
    { id: 1, title: "Hooks Overview", content: "Learn useState, useEffect, and more.", videoUrl: vid4 },
    { id: 2, title: "Context API", content: "Manage global state in React.", videoUrl: vid4 },
    { id: 3, title: "Performance Optimization", content: "Improve app performance.", videoUrl: vid4 },
  ],

  // 🔸 5. Python for Data Science
  5: [
    { id: 1, title: "Python Basics", content: "Introduction to Python programming.", videoUrl: vid5 },
    { id: 2, title: "Data Structures", content: "Lists, tuples, dictionaries in Python.", videoUrl: vid5 },
    { id: 3, title: "OOP in Python", content: "Learn classes and objects.", videoUrl: vid5 },
  ],

  // 🔸 6. Data Analysis with Pandas
  6: [
    { id: 1, title: "Pandas Basics", content: "DataFrames and Series basics.", videoUrl: vid6 },
    { id: 2, title: "Data Cleaning", content: "Handle missing and messy data.", videoUrl: vid6 },
    { id: 3, title: "Data Aggregation", content: "Summarize and group data.", videoUrl: vid6 },
  ],

  // 🔸 7. Data Visualization
  7: [
    { id: 1, title: "Matplotlib Basics", content: "Create simple charts and plots.", videoUrl: vid7 },
    { id: 2, title: "Seaborn for Statistics", content: "Visualize distributions and relationships.", videoUrl: vid7 },
    { id: 3, title: "Advanced Charts", content: "Customize charts for storytelling.", videoUrl: vid7 },
  ],

  // 🔸 8. Statistics for Data Science
  8: [
    { id: 1, title: "Descriptive Statistics", content: "Mean, median, mode, variance.", videoUrl: vid8 },
    { id: 2, title: "Probability Basics", content: "Understand probability and events.", videoUrl: vid8 },
    { id: 3, title: "Inferential Statistics", content: "Hypothesis testing and confidence intervals.", videoUrl: vid8 },
  ],

  // 🔸 9. Machine Learning Basics (AI)
  9: [
    { id: 1, title: "Introduction to ML", content: "What is machine learning?", videoUrl: vid9 },
    { id: 2, title: "Supervised Learning", content: "Learn regression and classification.", videoUrl: vid9 },
    { id: 3, title: "Unsupervised Learning", content: "Clustering and dimensionality reduction.", videoUrl: vid9 },
  ],

  // 🔸 10. Deep Learning Fundamentals (AI)
  10: [
    { id: 1, title: "Neural Networks", content: "Understand neurons and layers.", videoUrl: vid10 },
    { id: 2, title: "Backpropagation", content: "Train neural networks effectively.", videoUrl: vid10 },
    { id: 3, title: "CNN Basics", content: "Learn convolutional neural networks.", videoUrl: vid10 },
  ],

  // 🔸 11. Computer Vision
  11: [
    { id: 1, title: "Image Basics", content: "Understand images and pixels.", videoUrl: vid11 },
    { id: 2, title: "Feature Detection", content: "Detect edges, corners, and objects.", videoUrl: vid11 },
    { id: 3, title: "Image Classification", content: "Train a simple classifier.", videoUrl: vid11 },
  ],

  // 🔸 12. Natural Language Processing
  12: [
    { id: 1, title: "Text Preprocessing", content: "Clean and tokenize text.", videoUrl: vid12 },
    { id: 2, title: "Vectorization", content: "Convert text to numbers.", videoUrl: vid12 },
    { id: 3, title: "Text Classification", content: "Train simple NLP models.", videoUrl: vid12 },
  ],

  // 🔸 13. Engineering Mathematics
  13: [
    { id: 1, title: "Linear Algebra", content: "Vectors, matrices, and operations.", videoUrl: vid13 },
    { id: 2, title: "Calculus Basics", content: "Derivatives and integrals.", videoUrl: vid13 },
    { id: 3, title: "Differential Equations", content: "Solve simple ODEs.", videoUrl: vid13 },
  ],

  // 🔸 14. Signal Processing
  14: [
    { id: 1, title: "Signals & Systems", content: "Introduction to signals.", videoUrl: vid14 },
    { id: 2, title: "Fourier Transform", content: "Frequency domain analysis.", videoUrl: vid14 },
    { id: 3, title: "Filtering", content: "Apply filters to signals.", videoUrl: vid14 },
  ],

  // 🔸 15. Control Systems
  15: [
    { id: 1, title: "Feedback Systems", content: "Understand control loops.", videoUrl: vid15 },
    { id: 2, title: "PID Controllers", content: "Proportional, Integral, Derivative control.", videoUrl: vid15 },
    { id: 3, title: "Stability Analysis", content: "Check system stability.", videoUrl: vid15 },
  ],

  // 🔸 16. Embedded Systems
  16: [
    { id: 1, title: "Microcontrollers", content: "Learn microcontroller basics.", videoUrl: vid16 },
    { id: 2, title: "GPIO & Sensors", content: "Interface hardware components.", videoUrl: vid16 },
    { id: 3, title: "Embedded Programming", content: "Write firmware code.", videoUrl: vid16 },
  ],

  // 🔸 17. Introduction to Programming
  17: [
    { id: 1, title: "Variables & Types", content: "Understand variables and types.", videoUrl: vid17 },
    { id: 2, title: "Conditionals & Loops", content: "Control program flow.", videoUrl: vid17 },
    { id: 3, title: "Functions", content: "Write reusable code blocks.", videoUrl: vid17 },
  ],

  // 🔸 18. Object-Oriented Programming
  18: [
    { id: 1, title: "Classes & Objects", content: "Create and use classes.", videoUrl: vid18 },
    { id: 2, title: "Inheritance & Polymorphism", content: "Reuse and extend code.", videoUrl: vid18 },
    { id: 3, title: "Encapsulation & Abstraction", content: "Protect and organize data.", videoUrl: vid18 },
  ],

  // 🔸 19. Data Structures & Algorithms
  19: [
    { id: 1, title: "Arrays & Lists", content: "Store and access data efficiently.", videoUrl: vid19 },
    { id: 2, title: "Stacks & Queues", content: "Understand linear data structures.", videoUrl: vid19 },
    { id: 3, title: "Sorting & Searching", content: "Common algorithms explained.", videoUrl: vid19 },
  ],

  // 🔸 20. Version Control with Git
  20: [
    { id: 1, title: "Git Basics", content: "Track changes in code.", videoUrl: vid20 },
    { id: 2, title: "Branches & Merges", content: "Work with multiple branches.", videoUrl: vid20 },
    { id: 3, title: "Collaboration", content: "Push, pull, and work with teams.", videoUrl: vid20 },
  ],
};

export default lessons;