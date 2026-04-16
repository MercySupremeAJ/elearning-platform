// ===== VERIFIED EMBEDDABLE YOUTUBE VIDEO IDS =====
// Each video has been web-searched and confirmed from renowned publishers (FreeCodeCamp, 3Blue1Brown, etc.)

const vid1 = "https://www.youtube.com/embed/fF8yD_3GgM8";  // Math: Linear Algebra for ML (FreeCodeCamp)
const vid2 = "https://www.youtube.com/embed/xxpc-HPKN28";  // Stats: Statistics Full Course (FreeCodeCamp)
const vid3 = "https://www.youtube.com/embed/rfscVS0vtbw";  // Python Intro (FreeCodeCamp - confirmed working)
const vid4 = "https://www.youtube.com/embed/LHBE6Q9XlzI";  // Python for DS (FreeCodeCamp - confirmed working)
const vid5 = "https://www.youtube.com/embed/vmEHCJofslg";  // Pandas Full Course (FreeCodeCamp - confirmed working)
const vid6 = "https://www.youtube.com/embed/a9UrKTVEeZA";  // Data Viz: Matplotlib (FreeCodeCamp)
const vid7 = "https://www.youtube.com/embed/HXV3zeQKqGY";  // SQL Full Course (FreeCodeCamp - confirmed working)
const vid8 = "https://www.youtube.com/embed/_C8kWso4ne4";  // Big Data: Spark (FreeCodeCamp - confirmed working)
const vid9 = "https://www.youtube.com/embed/JcI9x2Bw1W0";  // Feature Engineering: ML Full Course incl. preprocessing (FreeCodeCamp 2024)
const vid10 = "https://www.youtube.com/embed/7eh4d_w0ODg"; // ML Basics: Machine Learning in 2024 (FreeCodeCamp)
const vid11 = "https://www.youtube.com/embed/0B5eIE_1vpU"; // Supervised: Scikit-Learn Full Course (FreeCodeCamp)
const vid12 = "https://www.youtube.com/embed/EItlUEPCIzM"; // Unsupervised: K-Means Clustering
const vid13 = "https://www.youtube.com/embed/QDX-1M5Nj7s"; // Deep Learning: was Ethics video user said fits DL better
const vid14 = "https://www.youtube.com/embed/XVv6mJpFOb0"; // NLP (FreeCodeCamp)
const vid15 = "https://www.youtube.com/embed/IA3WxTTPXqQ"; // Computer Vision (FreeCodeCamp - confirmed working)
const vid16 = "https://www.youtube.com/embed/e8Yw4alG16Q"; // Time Series (FreeCodeCamp)
const vid17 = "https://www.youtube.com/embed/8JJ101D3knE"; // Tools & Git (FreeCodeCamp - confirmed working)
const vid18 = "https://www.youtube.com/embed/pTFZFxd4hOI"; // MLOps: Docker/Deploy (FreeCodeCamp)
const vid19 = "https://www.youtube.com/embed/FqS2W1-Vj6M"; // Ethics: AI Ethics Full Course (verified 2024)
const vid20 = "https://www.youtube.com/embed/ua-CiDNNj30"; // Capstone (FreeCodeCamp - confirmed working)

const lessons = {
  1: [{ id: 1, title: "Full Course Lecture", content: "Master calculus and linear algebra fundamentals required for Data Science and Machine Learning.", videoUrl: vid1 }],
  2: [{ id: 1, title: "Full Course Lecture", content: "Comprehensive deep-dive into statistics, distributions, hypothesis testing, and probability.", videoUrl: vid2 }],
  3: [{ id: 1, title: "Full Course Lecture", content: "Learn Python programming from scratch — the foundation of every data science workflow.", videoUrl: vid3 }],
  4: [{ id: 1, title: "Full Course Lecture", content: "Scientific Python with NumPy, SciPy, and core data manipulation techniques.", videoUrl: vid4 }],
  5: [{ id: 1, title: "Full Course Lecture", content: "Master Pandas for data ingestion, cleaning, transformation, and advanced table analytics.", videoUrl: vid5 }],
  6: [{ id: 1, title: "Full Course Lecture", content: "Create stunning data visualizations using Matplotlib and Seaborn libraries.", videoUrl: vid6 }],
  7: [{ id: 1, title: "Full Course Lecture", content: "Full SQL course covering queries, joins, aggregations, and database management.", videoUrl: vid7 }],
  8: [{ id: 1, title: "Full Course Lecture", content: "Handle massive datasets using Apache Spark and distributed computing fundamentals.", videoUrl: vid8 }],
  9: [{ id: 1, title: "Full Course Lecture", content: "Preprocess raw data, handle missing values, and engineer features to improve model accuracy.", videoUrl: vid9 }],
  10: [{ id: 1, title: "Full Course Lecture", content: "Comprehensive machine learning fundamentals — regression, classification, and model evaluation.", videoUrl: vid10 }],
  11: [{ id: 1, title: "Full Course Lecture", content: "Master supervised algorithms with Scikit-Learn: Decision Trees, SVM, Random Forests, and more.", videoUrl: vid11 }],
  12: [{ id: 1, title: "Full Course Lecture", content: "Discover hidden patterns using K-Means clustering, PCA, and hierarchical methods.", videoUrl: vid12 }],
  13: [{ id: 1, title: "Full Course Lecture", content: "Build neural networks from scratch and understand deep learning architectures.", videoUrl: vid13 }],
  14: [{ id: 1, title: "Full Course Lecture", content: "Process and model human language using tokenization, embeddings, and Transformers.", videoUrl: vid14 }],
  15: [{ id: 1, title: "Full Course Lecture", content: "Process images and detect objects using Convolutional Neural Networks and OpenCV.", videoUrl: vid15 }],
  16: [{ id: 1, title: "Full Course Lecture", content: "Predict future trends using ARIMA, Prophet, and time series decomposition techniques.", videoUrl: vid16 }],
  17: [{ id: 1, title: "Full Course Lecture", content: "Master Jupyter Notebooks, Google Colab, and Git version control for data science.", videoUrl: vid17 }],
  18: [{ id: 1, title: "Full Course Lecture", content: "Deploy trained models to production using Docker, Flask, and cloud APIs.", videoUrl: vid18 }],
  19: [{ id: 1, title: "Full Course Lecture", content: "Navigate algorithmic bias, data privacy regulations, and responsible AI practices.", videoUrl: vid19 }],
  20: [{ id: 1, title: "Full Course Lecture", content: "Build an end-to-end industry-scale project from data ingestion to model deployment.", videoUrl: vid20 }]
};

export default lessons;