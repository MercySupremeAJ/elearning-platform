// 🔹 Central lesson database (mapped by course ID)
// Each course has its own lessons starting from id: 1
// Every lesson includes a videoUrl with a renowned programming video embed link.

const defaultVideo = "https://www.youtube.com/embed/PkZNo7MFNFg"; // JavaScript Course by FreeCodeCamp
const reactVideo = "https://www.youtube.com/embed/bMknfKXIFA8"; // React Crash Course
const htmlVideo = "https://www.youtube.com/embed/pQN-pnXPaVg"; // HTML Full Course
const pythonVideo = "https://www.youtube.com/embed/rfscVS0vtbw"; // Python Full Course
const aiVideo = "https://www.youtube.com/embed/GwIoAwYg3Wc"; // Machine Learning
const mathVideo = "https://www.youtube.com/embed/fNk_zzaMoSs"; // Intro to Math for CS

const lessons = {
  // 🔸 1. HTML & CSS Fundamentals (Web Development)
  1: [
    { id: 1, title: "HTML Basics", content: "Learn the structure of web pages with HTML.", videoUrl: htmlVideo },
    { id: 2, title: "CSS Basics", content: "Style your pages using CSS.", videoUrl: htmlVideo },
    { id: 3, title: "Responsive Design", content: "Make web pages responsive for all devices.", videoUrl: htmlVideo },
  ],

  // 🔸 2. JavaScript Essentials (Web Development)
  2: [
    { id: 1, title: "Variables & Data Types", content: "Understand JS variables and types.", videoUrl: defaultVideo },
    { id: 2, title: "Functions & Loops", content: "Write reusable code with functions and loops.", videoUrl: defaultVideo },
    { id: 3, title: "DOM Manipulation", content: "Interact with web pages dynamically.", videoUrl: defaultVideo },
  ],

  // 🔸 3. React for Beginners (Web Development)
  3: [
    { id: 1, title: "Introduction to React", content: "React is a library for building UIs.", videoUrl: reactVideo },
    { id: 2, title: "JSX & Components", content: "Build reusable components with JSX.", videoUrl: reactVideo },
    { id: 3, title: "State & Props", content: "Manage component data with state and props.", videoUrl: reactVideo },
  ],

  // 🔸 4. Advanced React (Web Development)
  4: [
    { id: 1, title: "Hooks Overview", content: "Learn useState, useEffect, and more.", videoUrl: reactVideo },
    { id: 2, title: "Context API", content: "Manage global state in React.", videoUrl: reactVideo },
    { id: 3, title: "Performance Optimization", content: "Improve app performance.", videoUrl: reactVideo },
  ],

  // 🔸 5. Python for Data Science
  5: [
    { id: 1, title: "Python Basics", content: "Introduction to Python programming.", videoUrl: pythonVideo },
    { id: 2, title: "Data Structures", content: "Lists, tuples, dictionaries in Python.", videoUrl: pythonVideo },
    { id: 3, title: "OOP in Python", content: "Learn classes and objects.", videoUrl: pythonVideo },
  ],

  // 🔸 6. Data Analysis with Pandas
  6: [
    { id: 1, title: "Pandas Basics", content: "DataFrames and Series basics.", videoUrl: pythonVideo },
    { id: 2, title: "Data Cleaning", content: "Handle missing and messy data.", videoUrl: pythonVideo },
    { id: 3, title: "Data Aggregation", content: "Summarize and group data.", videoUrl: pythonVideo },
  ],

  // 🔸 7. Data Visualization
  7: [
    { id: 1, title: "Matplotlib Basics", content: "Create simple charts and plots.", videoUrl: pythonVideo },
    { id: 2, title: "Seaborn for Statistics", content: "Visualize distributions and relationships.", videoUrl: pythonVideo },
    { id: 3, title: "Advanced Charts", content: "Customize charts for storytelling.", videoUrl: pythonVideo },
  ],

  // 🔸 8. Statistics for Data Science
  8: [
    { id: 1, title: "Descriptive Statistics", content: "Mean, median, mode, variance.", videoUrl: mathVideo },
    { id: 2, title: "Probability Basics", content: "Understand probability and events.", videoUrl: mathVideo },
    { id: 3, title: "Inferential Statistics", content: "Hypothesis testing and confidence intervals.", videoUrl: mathVideo },
  ],

  // 🔸 9. Machine Learning Basics (AI)
  9: [
    { id: 1, title: "Introduction to ML", content: "What is machine learning?", videoUrl: aiVideo },
    { id: 2, title: "Supervised Learning", content: "Learn regression and classification.", videoUrl: aiVideo },
    { id: 3, title: "Unsupervised Learning", content: "Clustering and dimensionality reduction.", videoUrl: aiVideo },
  ],

  // 🔸 10. Deep Learning Fundamentals (AI)
  10: [
    { id: 1, title: "Neural Networks", content: "Understand neurons and layers.", videoUrl: aiVideo },
    { id: 2, title: "Backpropagation", content: "Train neural networks effectively.", videoUrl: aiVideo },
    { id: 3, title: "CNN Basics", content: "Learn convolutional neural networks.", videoUrl: aiVideo },
  ],

  // 🔸 11. Computer Vision
  11: [
    { id: 1, title: "Image Basics", content: "Understand images and pixels.", videoUrl: aiVideo },
    { id: 2, title: "Feature Detection", content: "Detect edges, corners, and objects.", videoUrl: aiVideo },
    { id: 3, title: "Image Classification", content: "Train a simple classifier.", videoUrl: aiVideo },
  ],

  // 🔸 12. Natural Language Processing
  12: [
    { id: 1, title: "Text Preprocessing", content: "Clean and tokenize text.", videoUrl: aiVideo },
    { id: 2, title: "Vectorization", content: "Convert text to numbers.", videoUrl: aiVideo },
    { id: 3, title: "Text Classification", content: "Train simple NLP models.", videoUrl: aiVideo },
  ],

  // 🔸 13. Engineering Mathematics
  13: [
    { id: 1, title: "Linear Algebra", content: "Vectors, matrices, and operations.", videoUrl: mathVideo },
    { id: 2, title: "Calculus Basics", content: "Derivatives and integrals.", videoUrl: mathVideo },
    { id: 3, title: "Differential Equations", content: "Solve simple ODEs.", videoUrl: mathVideo },
  ],

  // 🔸 14. Signal Processing
  14: [
    { id: 1, title: "Signals & Systems", content: "Introduction to signals.", videoUrl: mathVideo },
    { id: 2, title: "Fourier Transform", content: "Frequency domain analysis.", videoUrl: mathVideo },
    { id: 3, title: "Filtering", content: "Apply filters to signals.", videoUrl: mathVideo },
  ],

  // 🔸 15. Control Systems
  15: [
    { id: 1, title: "Feedback Systems", content: "Understand control loops.", videoUrl: mathVideo },
    { id: 2, title: "PID Controllers", content: "Proportional, Integral, Derivative control.", videoUrl: mathVideo },
    { id: 3, title: "Stability Analysis", content: "Check system stability.", videoUrl: mathVideo },
  ],

  // 🔸 16. Embedded Systems
  16: [
    { id: 1, title: "Microcontrollers", content: "Learn microcontroller basics.", videoUrl: defaultVideo },
    { id: 2, title: "GPIO & Sensors", content: "Interface hardware components.", videoUrl: defaultVideo },
    { id: 3, title: "Embedded Programming", content: "Write firmware code.", videoUrl: defaultVideo },
  ],

  // 🔸 17. Introduction to Programming
  17: [
    { id: 1, title: "Variables & Types", content: "Understand variables and types.", videoUrl: defaultVideo },
    { id: 2, title: "Conditionals & Loops", content: "Control program flow.", videoUrl: defaultVideo },
    { id: 3, title: "Functions", content: "Write reusable code blocks.", videoUrl: defaultVideo },
  ],

  // 🔸 18. Object-Oriented Programming
  18: [
    { id: 1, title: "Classes & Objects", content: "Create and use classes.", videoUrl: pythonVideo },
    { id: 2, title: "Inheritance & Polymorphism", content: "Reuse and extend code.", videoUrl: pythonVideo },
    { id: 3, title: "Encapsulation & Abstraction", content: "Protect and organize data.", videoUrl: pythonVideo },
  ],

  // 🔸 19. Data Structures & Algorithms
  19: [
    { id: 1, title: "Arrays & Lists", content: "Store and access data efficiently.", videoUrl: defaultVideo },
    { id: 2, title: "Stacks & Queues", content: "Understand linear data structures.", videoUrl: defaultVideo },
    { id: 3, title: "Sorting & Searching", content: "Common algorithms explained.", videoUrl: defaultVideo },
  ],

  // 🔸 20. Version Control with Git
  20: [
    { id: 1, title: "Git Basics", content: "Track changes in code.", videoUrl: defaultVideo },
    { id: 2, title: "Branches & Merges", content: "Work with multiple branches.", videoUrl: defaultVideo },
    { id: 3, title: "Collaboration", content: "Push, pull, and work with teams.", videoUrl: defaultVideo },
  ],
};

export default lessons;