import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEnrollment } from "../store/EnrollmentContext.jsx";
import { useAuth } from "../hooks/useAuth";
import lessons from "../data/lessons.js";
import courses from "../data/courses.js";

const LessonPlayer = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { enrolledCourses, progress, toggleLessonComplete } = useEnrollment();
  const { user } = useAuth();
  
  const courseLessons = lessons[courseId] || [];
  const courseDetails = courses.find((c) => c.id === Number(courseId));
  const isEnrolled = enrolledCourses.find((c) => c.id === Number(courseId));
  
  const completedLessons = progress[user?.username]?.[courseId] || [];
  
  // State for the currently playing lesson
  const [currentLesson, setCurrentLesson] = useState(courseLessons[0] || null);

  // Redirect if not enrolled
  useEffect(() => {
    if (!isEnrolled) {
      navigate("/courses");
    }
  }, [isEnrolled, navigate]);

  if (!isEnrolled || !courseDetails) {
    return null;
  }

  const toggleComplete = (lessonId) =>
    toggleLessonComplete(Number(courseId), lessonId);

  const progressPercentage = courseLessons.length
    ? Math.round((completedLessons.length / courseLessons.length) * 100)
    : 0;
    
  const isCurrentLessonCompleted = currentLesson ? completedLessons.includes(currentLesson.id) : false;

  return (
    <div className="lesson-player-layout">
      {/* 🔹 Left Panel: Video Player */}
      <div className="video-section">
        <button className="back-btn" onClick={() => navigate("/dashboard")}>
          &larr; Back to Dashboard
        </button>
        
        <div className="video-container">
          {currentLesson ? (
            <iframe
              src={currentLesson.videoUrl}
              title={currentLesson.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="youtube-iframe"
            ></iframe>
          ) : (
            <div className="no-video">No Video Available</div>
          )}
        </div>
        
        {currentLesson && (
          <div className="current-lesson-details">
            <h2>{currentLesson.title}</h2>
            <p className="lesson-desc">{currentLesson.content}</p>
            
            <button 
              className={`complete-btn ${isCurrentLessonCompleted ? 'completed' : ''}`}
              onClick={() => toggleComplete(currentLesson.id)}
            >
              {isCurrentLessonCompleted ? "✓ Completed" : "Mark as Complete"}
            </button>
          </div>
        )}
      </div>

      {/* 🔹 Right Panel: Playlist */}
      <div className="playlist-section">
        <div className="playlist-header">
          <h3>{courseDetails.title}</h3>
          
          <div className="progress-container">
            <div className="progress-info">
              <span>Course Progress</span>
              <span className="progress-perc">{progressPercentage}%</span>
            </div>
            <div className="progress-bar-bg">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        <ul className="lesson-list">
          {courseLessons.map((lesson, index) => {
            const isCompleted = completedLessons.includes(lesson.id);
            const isActive = currentLesson && currentLesson.id === lesson.id;
            
            return (
              <li 
                key={lesson.id} 
                className={`lesson-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed-item' : ''}`}
                onClick={() => setCurrentLesson(lesson)}
              >
                <div className="lesson-status">
                  {isCompleted ? <span className="check-icon">✓</span> : <span className="num-icon">{index + 1}</span>}
                </div>
                <div className="lesson-info">
                  <h4>{lesson.title}</h4>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LessonPlayer;